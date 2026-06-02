"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, MapPin, Wifi, Car, Waves, Heart, Users, Backpack, Crown, ChevronDown, Dumbbell } from "lucide-react";
import { hotels, type Hotel } from "@/lib/data";

const CATEGORIES = [
  { label: "All", value: "all" },
  { label: "Budget", value: "budget" },
  { label: "Hostels", value: "hostel" },
  { label: "Homestays", value: "homestay" },
  { label: "Mid-Range", value: "midrange" },
  { label: "Premium", value: "premium" },
  { label: "Luxury", value: "luxury" },
  { label: "Resorts", value: "resort" },
];

const AMENITY_ICONS: Record<string, string> = {
  "WiFi": "📶", "AC": "❄️", "Pool": "🏊", "Infinity Pool": "🌊",
  "Restaurant": "🍽️", "Spa": "💆", "Gym": "💪", "Bar": "🍹",
  "Parking": "🚗", "Sea View": "🌊", "Garden": "🌿", "Yoga": "🧘",
  "Ayurveda": "🌿", "Rooftop": "🏠", "Home Cooking": "🍳",
  "Local Experience": "🎭", "Common Kitchen": "🍳", "Events": "🎉",
  "Lockers": "🔒", "Private Balcony": "🌅", "Organic Food": "🥗",
};

function HotelCard({ hotel, index }: { hotel: Hotel; index: number }) {
  const [expanded, setExpanded] = useState(false);

  const categoryColors: Record<string, string> = {
    luxury: "#d4a843",
    premium: "#4a9eff",
    midrange: "#14a085",
    budget: "#14a085",
    hostel: "#ff6b35",
    homestay: "#7c5cbf",
    resort: "#f7931e",
  };

  const color = categoryColors[hotel.category] || "#4a9eff";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="glass-card"
      style={{ overflow: "hidden" }}
    >
      {/* Image */}
      <div style={{ position: "relative", height: 200, overflow: "hidden" }}>
        <Image
          src={hotel.image}
          alt={hotel.name}
          fill
          style={{ objectFit: "cover", transition: "transform 0.6s ease" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
        <div className="card-img-overlay" />

        {/* Category Badge */}
        <div style={{ position: "absolute", top: 12, left: 12 }}>
          <span className="badge" style={{
            background: `${color}22`,
            border: `1px solid ${color}44`,
            color: color,
            textTransform: "capitalize",
          }}>
            {hotel.category === "midrange" ? "Mid-Range" : hotel.category}
          </span>
        </div>

        {/* Price */}
        <div style={{
          position: "absolute",
          bottom: 12,
          right: 12,
          background: "rgba(10,22,40,0.9)",
          border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: 10,
          padding: "6px 12px",
        }}>
          <span style={{ fontSize: 18, fontWeight: 700, color: color }}>
            ₹{hotel.pricePerNight.toLocaleString("en-IN")}
          </span>
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.5)" }}>/night</span>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 600, flex: 1, paddingRight: 8 }}>
            {hotel.name}
          </h3>
          <div style={{ display: "flex", alignItems: "center", gap: 4, flexShrink: 0 }}>
            <Star size={13} style={{ color: "#d4a843", fill: "#d4a843" }} />
            <span style={{ fontSize: 13, fontWeight: 600 }}>{hotel.rating}</span>
            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}>({hotel.reviews})</span>
          </div>
        </div>

        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.6, marginBottom: 14 }}>
          {hotel.description}
        </p>

        <div style={{ display: "flex", gap: 16, marginBottom: 14, flexWrap: "wrap" }}>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", display: "flex", alignItems: "center", gap: 4 }}>
            <MapPin size={11} style={{ color: "#4a9eff" }} /> {hotel.distanceFromBeach} from beach
          </span>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>
            📍 {hotel.address.split(",")[0]}
          </span>
        </div>

        {/* Amenity icons */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
          {hotel.amenities.slice(0, 6).map((a) => (
            <span
              key={a}
              title={a}
              style={{
                fontSize: 16,
                cursor: "default",
                filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.3))",
              }}
            >
              {AMENITY_ICONS[a] || "✓"}
            </span>
          ))}
        </div>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{ overflow: "hidden" }}
            >
              <div className="divider" style={{ marginBottom: 14 }} />
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
                {hotel.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginBottom: 14 }}>
                <strong style={{ color: "rgba(255,255,255,0.7)" }}>All Amenities:</strong>{" "}
                {hotel.amenities.join(" • ")}
              </p>
              <a
                href={`https://www.google.com/maps/search/${encodeURIComponent(hotel.name + " " + hotel.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ fontSize: 13, padding: "10px 20px", width: "100%", justifyContent: "center" }}
              >
                <MapPin size={13} /> View on Google Maps
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setExpanded(!expanded)}
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
          {expanded ? "Show less" : "View details & map"}{" "}
          <ChevronDown size={14} style={{ transform: expanded ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
        </button>
      </div>
    </motion.div>
  );
}

export function HotelsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [maxPrice, setMaxPrice] = useState(10000);

  const filtered = hotels.filter((h) => {
    const catMatch = activeCategory === "all" || h.category === activeCategory;
    const priceMatch = h.pricePerNight <= maxPrice;
    return catMatch && priceMatch;
  });

  return (
    <section id="hotels" style={{ padding: "80px 24px", maxWidth: 1200, margin: "0 auto" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ textAlign: "center", marginBottom: 50 }}
      >
        <div className="section-label" style={{ display: "inline-flex", marginBottom: 16 }}>
          <span>🏨</span> Hotel Discovery
        </div>
        <h2 className="section-title" style={{ marginBottom: 16 }}>
          Find Your Perfect <span className="gradient-text-luxury">Stay</span>
        </h2>
        <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", maxWidth: 560, margin: "0 auto" }}>
          From beachside hostels to luxury cliff resorts — every budget, every style, every traveler.
        </p>
      </motion.div>

      {/* Filters */}
      <div style={{ marginBottom: 32 }}>
        <div className="scroll-row" style={{ marginBottom: 20, justifyContent: "center" }}>
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

        <div style={{ maxWidth: 400, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, fontSize: 13, color: "rgba(255,255,255,0.6)" }}>
            <span>Max Price per Night</span>
            <span style={{ color: "#d4a843", fontWeight: 600 }}>₹{maxPrice.toLocaleString("en-IN")}</span>
          </div>
          <input
            type="range"
            min={350}
            max={10000}
            step={50}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            style={{ width: "100%" }}
          />
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "rgba(255,255,255,0.35)", marginTop: 4 }}>
            <span>₹350</span>
            <span>₹10,000</span>
          </div>
        </div>
      </div>

      {/* Results count */}
      <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", marginBottom: 24, textAlign: "center" }}>
        Showing {filtered.length} {filtered.length === 1 ? "property" : "properties"}
      </p>

      {/* Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: 24,
      }}>
        {filtered.map((hotel, i) => (
          <HotelCard key={hotel.id} hotel={hotel} index={i} />
        ))}
      </div>
    </section>
  );
}
