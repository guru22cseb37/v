"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Clock, Users, ChevronDown, ChevronUp } from "lucide-react";
import { restaurants, type Restaurant } from "@/lib/data";

const FOOD_CATEGORIES = [
  { label: "All", value: "all" },
  { label: "🍛 Kerala Food", value: "kerala" },
  { label: "🦐 Seafood", value: "seafood" },
  { label: "🥗 Vegetarian", value: "vegetarian" },
  { label: "☕ Cafes", value: "cafe" },
  { label: "🍷 Fine Dining", value: "finedining" },
  { label: "🌮 Street Food", value: "streetfood" },
  { label: "💰 Budget", value: "budget" },
];

const PRICE_FILTERS = [
  { label: "All Budgets", value: "all" },
  { label: "₹100–300", value: "100-300" },
  { label: "₹300–700", value: "300-700" },
  { label: "₹700–1500", value: "700-1500" },
  { label: "₹1500+", value: "1500+" },
];

const CROWD_COLORS: Record<string, string> = {
  low: "#14a085",
  medium: "#f7931e",
  high: "#ff6b35",
};

const CROWD_LABELS: Record<string, string> = {
  low: "Quiet",
  medium: "Moderate",
  high: "Popular",
};

function RestaurantCard({ restaurant, index }: { restaurant: Restaurant; index: number }) {
  const [expanded, setExpanded] = useState(false);

  const priceLabels: Record<string, string> = {
    "100-300": "₹ Budget",
    "300-700": "₹₹ Mid",
    "700-1500": "₹₹₹ Good",
    "1500+": "₹₹₹₹ Fine",
  };

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
      <div style={{ position: "relative", height: 180, overflow: "hidden" }}>
        <Image
          src={restaurant.image}
          alt={restaurant.name}
          fill
          style={{ objectFit: "cover", transition: "transform 0.6s ease" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
        <div className="card-img-overlay" />

        {/* Price range */}
        <div style={{ position: "absolute", top: 12, right: 12 }}>
          <span className="badge" style={{ background: "rgba(10,22,40,0.85)", color: "#d4a843", border: "1px solid rgba(212,168,67,0.3)" }}>
            {priceLabels[restaurant.priceRange]}
          </span>
        </div>

        {/* Crowd level */}
        <div style={{ position: "absolute", bottom: 10, left: 12, display: "flex", alignItems: "center", gap: 5 }}>
          <div style={{
            width: 8, height: 8, borderRadius: "50%",
            background: CROWD_COLORS[restaurant.crowdLevel],
            boxShadow: `0 0 8px ${CROWD_COLORS[restaurant.crowdLevel]}`,
          }} />
          <span style={{ fontSize: 11, color: CROWD_COLORS[restaurant.crowdLevel], fontWeight: 500 }}>
            {CROWD_LABELS[restaurant.crowdLevel]}
          </span>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "18px 20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 600, flex: 1, paddingRight: 8 }}>
            {restaurant.name}
          </h3>
          <div style={{ display: "flex", alignItems: "center", gap: 4, flexShrink: 0 }}>
            <Star size={12} style={{ color: "#d4a843", fill: "#d4a843" }} />
            <span style={{ fontSize: 13, fontWeight: 600 }}>{restaurant.rating}</span>
            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}>({restaurant.reviews})</span>
          </div>
        </div>

        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.6, marginBottom: 12 }}>
          {restaurant.description}
        </p>

        <div style={{ display: "flex", gap: 12, marginBottom: 12, flexWrap: "wrap" }}>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", display: "flex", alignItems: "center", gap: 4 }}>
            <Clock size={11} style={{ color: "#4a9eff" }} /> {restaurant.openHours}
          </span>
        </div>

        {/* Popular dishes */}
        <div style={{ marginBottom: 12 }}>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", letterSpacing: 1, textTransform: "uppercase", marginBottom: 8, fontWeight: 600 }}>
            Must Try
          </div>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {restaurant.popularDishes.slice(0, 3).map((dish) => (
              <span key={dish} className="tag tag-green" style={{ fontSize: 11 }}>🍴 {dish}</span>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {restaurant.tags.slice(0, 3).map((t) => (
            <span key={t} className="tag" style={{ fontSize: 11 }}>{t}</span>
          ))}
        </div>

        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ overflow: "hidden" }}
          >
            <div className="divider" style={{ margin: "14px 0" }} />
            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>
              📍 {restaurant.address}
            </p>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 10 }}>
              {restaurant.popularDishes.map((dish) => (
                <span key={dish} className="tag tag-green" style={{ fontSize: 11 }}>🍴 {dish}</span>
              ))}
            </div>
          </motion.div>
        )}

        <button
          onClick={() => setExpanded(!expanded)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            marginTop: 12,
            background: "none",
            border: "none",
            color: "#14a085",
            fontSize: 12,
            fontWeight: 600,
            cursor: "pointer",
            padding: 0,
          }}
        >
          {expanded ? <><ChevronUp size={13} /> Show less</> : <><ChevronDown size={13} /> All dishes & location</>}
        </button>
      </div>
    </motion.div>
  );
}

export function FoodSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activePrice, setActivePrice] = useState("all");

  const filtered = restaurants.filter((r) => {
    const catMatch = activeCategory === "all" || r.category === activeCategory;
    const priceMatch = activePrice === "all" || r.priceRange === activePrice;
    return catMatch && priceMatch;
  });

  return (
    <section id="food" style={{ padding: "80px 24px", background: "rgba(6,78,78,0.12)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: 50 }}
        >
          <div className="section-label" style={{ display: "inline-flex", marginBottom: 16 }}>
            <span>🍽️</span> Food Discovery
          </div>
          <h2 className="section-title" style={{ marginBottom: 16 }}>
            Taste the <span className="gradient-text-ocean">Flavors</span> of Varkala
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", maxWidth: 560, margin: "0 auto" }}>
            From fresh cliff-edge seafood to authentic Kerala banana-leaf feasts and budget street bites.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="scroll-row" style={{ marginBottom: 20, justifyContent: "center" }}>
          {FOOD_CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              className={`category-chip ${activeCategory === cat.value ? "active" : ""}`}
              onClick={() => setActiveCategory(cat.value)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Price Filter */}
        <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", marginBottom: 40 }}>
          {PRICE_FILTERS.map((p) => (
            <button
              key={p.value}
              className={`category-chip ${activePrice === p.value ? "active" : ""}`}
              onClick={() => setActivePrice(p.value)}
              style={{ fontSize: 12 }}
            >
              {p.label}
            </button>
          ))}
        </div>

        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", marginBottom: 24, textAlign: "center" }}>
          {filtered.length} places found
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
          gap: 24,
        }}>
          {filtered.map((r, i) => (
            <RestaurantCard key={r.id} restaurant={r} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
