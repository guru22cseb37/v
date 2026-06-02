"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Star, Users, Heart, Camera, Zap, Clock, DollarSign, ChevronRight, Gem } from "lucide-react";
import { touristPlaces, type TouristPlace } from "@/lib/data";

const CATEGORIES = [
  { label: "All", value: "all" },
  { label: "Beaches", value: "beach" },
  { label: "Temples", value: "temple" },
  { label: "Lakes", value: "lake" },
  { label: "Adventure", value: "adventure" },
  { label: "Viewpoints", value: "viewpoint" },
  { label: "Hidden Gems", value: "hidden" },
];

const SCORE_ICONS: Record<string, { icon: string; color: string }> = {
  friends: { icon: "👫", color: "#4a9eff" },
  family: { icon: "👨‍👩‍👧", color: "#14a085" },
  couples: { icon: "❤️", color: "#ff6b35" },
  solo: { icon: "🎒", color: "#d4a843" },
  photography: { icon: "📸", color: "#7c5cbf" },
  adventure: { icon: "⚡", color: "#f7931e" },
  nightlife: { icon: "🌙", color: "#4a9eff" },
  budget: { icon: "💰", color: "#14a085" },
};

function ScoreRow({ label, score }: { label: string; score: number }) {
  const info = SCORE_ICONS[label];
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
      <span style={{ fontSize: 13, minWidth: 20 }}>{info?.icon}</span>
      <span style={{ fontSize: 11, color: "rgba(255,255,255,0.55)", minWidth: 72, textTransform: "capitalize" }}>{label}</span>
      <div style={{ flex: 1, display: "flex", gap: 3 }}>
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: 4,
              borderRadius: 2,
              background: i <= score ? (info?.color || "#4a9eff") : "rgba(255,255,255,0.1)",
              transition: "background 0.3s",
            }}
          />
        ))}
      </div>
      <span style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", minWidth: 10 }}>{score}/5</span>
    </div>
  );
}

function PlaceCard({ place, index }: { place: TouristPlace; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="glass-card"
      style={{ overflow: "hidden", cursor: "pointer" }}
      onClick={() => setExpanded(!expanded)}
    >
      {/* Image */}
      <div style={{ position: "relative", height: 220, overflow: "hidden" }}>
        <Image
          src={place.image}
          alt={place.name}
          fill
          style={{ objectFit: "cover", transition: "transform 0.6s cubic-bezier(0.4,0,0.2,1)" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
        <div className="card-img-overlay" />

        {/* Badges */}
        <div style={{ position: "absolute", top: 12, left: 12, display: "flex", gap: 6, flexWrap: "wrap" }}>
          {place.isHiddenGem && (
            <span className="badge badge-hidden">
              <Gem size={9} style={{ marginRight: 3 }} /> Hidden Gem
            </span>
          )}
          <span className="badge" style={{ background: "rgba(10,22,40,0.7)", color: "rgba(255,255,255,0.85)", border: "1px solid rgba(255,255,255,0.15)" }}>
            {place.type.charAt(0).toUpperCase() + place.type.slice(1)}
          </span>
        </div>

        {/* Entry fee */}
        <div style={{ position: "absolute", top: 12, right: 12 }}>
          <span className="badge" style={{ background: "rgba(10,22,40,0.75)", color: "rgba(255,255,255,0.85)", border: "1px solid rgba(255,255,255,0.15)", fontSize: 10 }}>
            {place.entryFee}
          </span>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "20px" }}>
        <h3 style={{
          fontFamily: "var(--font-display)",
          fontSize: 18,
          fontWeight: 600,
          marginBottom: 8,
          lineHeight: 1.3,
        }}>
          {place.name}
        </h3>

        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.6, marginBottom: 14 }}>
          {place.description}
        </p>

        {/* Meta row */}
        <div style={{ display: "flex", gap: 16, marginBottom: 16, flexWrap: "wrap" }}>
          <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12, color: "rgba(255,255,255,0.5)" }}>
            <MapPin size={12} style={{ color: "#4a9eff" }} /> {place.address.split(",")[1]?.trim() || "Varkala"}
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12, color: "rgba(255,255,255,0.5)" }}>
            <Clock size={12} style={{ color: "#f7931e" }} /> Best: {place.bestTime}
          </span>
        </div>

        {/* Tags */}
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 16 }}>
          {place.tags.slice(0, 3).map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>

        {/* Scores (collapsed by default, expand on click) */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35 }}
              style={{ overflow: "hidden" }}
            >
              <div className="divider" style={{ marginBottom: 14 }} />
              <div style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.4)", letterSpacing: 1, textTransform: "uppercase", marginBottom: 10 }}>
                Traveler Scores
              </div>
              {Object.entries(place.scores).map(([k, v]) => (
                <ScoreRow key={k} label={k} score={v} />
              ))}
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.65, marginTop: 14 }}>
                {place.longDescription}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            marginTop: 12,
            background: "none",
            border: "none",
            color: "#4a9eff",
            fontSize: 13,
            fontWeight: 600,
            cursor: "pointer",
            padding: 0,
          }}
        >
          {expanded ? "Show less" : "See scores & details"} <ChevronRight size={14} style={{ transform: expanded ? "rotate(90deg)" : "none", transition: "transform 0.2s" }} />
        </button>
      </div>
    </motion.div>
  );
}

export function AttractionsSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = activeCategory === "all"
    ? touristPlaces
    : activeCategory === "hidden"
    ? touristPlaces.filter((p) => p.isHiddenGem)
    : touristPlaces.filter((p) => p.type === activeCategory);

  return (
    <section id="explore" style={{ padding: "80px 24px", maxWidth: 1200, margin: "0 auto" }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: "center", marginBottom: 50 }}
      >
        <div className="section-label" style={{ display: "inline-flex", marginBottom: 16 }}>
          <MapPin size={12} /> Tourist Attractions
        </div>
        <h2 className="section-title" style={{ marginBottom: 16 }}>
          Discover <span className="gradient-text-ocean">Varkala</span>
        </h2>
        <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", maxWidth: 560, margin: "0 auto" }}>
          From iconic beaches to ancient temples and secret hidden gems — every corner of Varkala tells a story.
        </p>
      </motion.div>

      {/* Category Filter */}
      <div className="scroll-row" style={{ marginBottom: 40, justifyContent: "center" }}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat.value}
            className={`category-chip ${activeCategory === cat.value ? "active" : ""}`}
            onClick={() => setActiveCategory(cat.value)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div
        layout
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: 24,
        }}
      >
        <AnimatePresence>
          {filtered.map((place, i) => (
            <PlaceCard key={place.id} place={place} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

// ===================== HIDDEN GEMS =====================
export function HiddenGemsSection() {
  const gems = touristPlaces.filter((p) => p.isHiddenGem);

  return (
    <section id="hidden-gems" style={{ padding: "80px 24px", background: "rgba(13,36,69,0.3)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: 50 }}
        >
          <div className="section-label" style={{ display: "inline-flex", marginBottom: 16 }}>
            <Gem size={12} /> Exclusive Discovery
          </div>
          <h2 className="section-title" style={{ marginBottom: 16 }}>
            <span className="gradient-text-sunset">Hidden Gems</span> of Varkala
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", maxWidth: 560, margin: "0 auto" }}>
            Places that most tourists never discover. We&apos;ve found them for you — secret beaches, panoramic viewpoints, and local treasures.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 24 }}>
          {gems.map((place, i) => (
            <motion.div
              key={place.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              style={{
                position: "relative",
                borderRadius: 20,
                overflow: "hidden",
                height: 380,
                cursor: "pointer",
              }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src={place.image}
                alt={place.name}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to top, rgba(10,22,40,0.97) 0%, rgba(10,22,40,0.4) 50%, transparent 100%)",
              }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "28px 24px" }}>
                <span className="badge badge-hidden" style={{ marginBottom: 10 }}>
                  <Gem size={9} /> Hidden Gem
                </span>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 600, marginBottom: 8 }}>
                  {place.name}
                </h3>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", lineHeight: 1.55, marginBottom: 14 }}>
                  {place.description}
                </p>
                <div style={{ display: "flex", gap: 16 }}>
                  <span style={{ fontSize: 12, color: "#4a9eff", display: "flex", alignItems: "center", gap: 4 }}>
                    <Clock size={11} /> {place.bestTime}
                  </span>
                  <span style={{ fontSize: 12, color: "#14a085", display: "flex", alignItems: "center", gap: 4 }}>
                    <DollarSign size={11} /> {place.entryFee}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
