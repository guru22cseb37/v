"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { getTransportRoutes } from "@/lib/data";
import { weatherData } from "@/lib/data";
import { photoSpots } from "@/lib/data";
import { MapPin, Navigation, Clock, DollarSign, Search, Camera, Sun } from "lucide-react";

// ===================== TRANSPORT =====================
export function TransportSection() {
  const [fromCity, setFromCity] = useState("Aruppukottai");
  const [routes, setRoutes] = useState(getTransportRoutes("Aruppukottai"));
  const [searched, setSearched] = useState(true);

  const handleSearch = () => {
    setRoutes(getTransportRoutes(fromCity));
    setSearched(true);
  };

  const modeColors: Record<string, string> = {
    bus: "#14a085",
    train: "#4a9eff",
    car: "#f7931e",
    flight: "#d4a843",
  };

  return (
    <section id="transport" style={{ padding: "80px 24px", background: "rgba(13,36,69,0.3)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: 50 }}
        >
          <div className="section-label" style={{ display: "inline-flex", marginBottom: 16 }}>
            <Navigation size={12} /> Transportation Guide
          </div>
          <h2 className="section-title" style={{ marginBottom: 16 }}>
            How to <span className="gradient-text-ocean">Reach Varkala</span>
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", maxWidth: 560, margin: "0 auto" }}>
            Enter your city and get detailed routes, costs, and tips for reaching Varkala.
          </p>
        </motion.div>

        {/* Search */}
        <div style={{ display: "flex", gap: 12, maxWidth: 560, margin: "0 auto 40px", flexWrap: "wrap" }}>
          <input
            value={fromCity}
            onChange={(e) => setFromCity(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder="Enter your city (e.g. Aruppukottai, Chennai...)"
            className="luxury-input"
            style={{ flex: 1 }}
            id="transport-search"
          />
          <button onClick={handleSearch} className="btn-primary" style={{ padding: "0 24px", height: 52, borderRadius: 12 }}>
            <Search size={16} /> Search
          </button>
        </div>

        {/* Routes */}
        {searched && (
          <div style={{ display: "grid", gap: 16 }}>
            {routes.map((route, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="glass-card"
                style={{ padding: "24px 28px" }}
              >
                <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: 14, flexShrink: 0,
                    background: `${modeColors[route.mode]}18`,
                    border: `1px solid ${modeColors[route.mode]}35`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 24,
                  }}>
                    {route.icon}
                  </div>

                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap", marginBottom: 8 }}>
                      <h3 style={{
                        fontFamily: "var(--font-display)",
                        fontSize: 17,
                        fontWeight: 600,
                        color: modeColors[route.mode],
                        textTransform: "capitalize",
                      }}>
                        By {route.mode}
                      </h3>
                      <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>
                        {route.from} → Varkala
                      </span>
                    </div>

                    <div style={{ display: "flex", gap: 20, marginBottom: 12, flexWrap: "wrap" }}>
                      <span style={{ fontSize: 13, display: "flex", alignItems: "center", gap: 6, color: "rgba(255,255,255,0.7)" }}>
                        <Clock size={13} style={{ color: "#4a9eff" }} /> {route.duration}
                      </span>
                      <span style={{ fontSize: 13, display: "flex", alignItems: "center", gap: 6, color: "rgba(255,255,255,0.7)" }}>
                        <DollarSign size={13} style={{ color: "#d4a843" }} /> {route.cost}
                      </span>
                    </div>

                    <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.65 }}>
                      {route.details}
                    </p>

                    {route.mode === "train" && (
                      <a
                        href="https://www.irctc.co.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-glass"
                        style={{ display: "inline-flex", marginTop: 12, fontSize: 12, padding: "8px 16px" }}
                      >
                        Book on IRCTC →
                      </a>
                    )}
                    {route.mode === "bus" && (
                      <a
                        href="https://www.redbus.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-glass"
                        style={{ display: "inline-flex", marginTop: 12, fontSize: 12, padding: "8px 16px" }}
                      >
                        Book on Redbus →
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Varkala local transport */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card"
          style={{ padding: "24px 28px", marginTop: 24 }}
        >
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: 17, marginBottom: 16 }}>
            🛺 Getting Around Varkala
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16 }}>
            {[
              { icon: "🛺", label: "Auto-Rickshaw", detail: "₹30–₹100 per trip" },
              { icon: "🚲", label: "Bicycle Rental", detail: "₹100–₹150/day" },
              { icon: "🛵", label: "Scooter Rental", detail: "₹300–₹500/day" },
              { icon: "🚖", label: "Taxi/Cab", detail: "₹150–₹300 per trip" },
              { icon: "🚶", label: "Walking", detail: "Cliff promenade: Free!" },
              { icon: "🚌", label: "Local Bus", detail: "₹10–₹30 per ride" },
            ].map((t) => (
              <div key={t.label} style={{
                padding: "14px 16px",
                background: "rgba(255,255,255,0.04)",
                borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.08)",
              }}>
                <div style={{ fontSize: 22, marginBottom: 6 }}>{t.icon}</div>
                <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 4 }}>{t.label}</div>
                <div style={{ fontSize: 12, color: "#14a085" }}>{t.detail}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ===================== WEATHER =====================
export function WeatherSection() {
  const currentMonth = new Date().getMonth();
  const currentData = weatherData[currentMonth];

  return (
    <section id="weather" style={{ padding: "80px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: 50 }}
        >
          <div className="section-label" style={{ display: "inline-flex", marginBottom: 16 }}>
            <Sun size={12} /> Weather Intelligence
          </div>
          <h2 className="section-title" style={{ marginBottom: 16 }}>
            Best Time to <span className="gradient-text-ocean">Visit Varkala</span>
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", maxWidth: 560, margin: "0 auto" }}>
            Plan around the weather — month-by-month temperature, rainfall, and crowd data.
          </p>
        </motion.div>

        {/* Current Month Card */}
        <div className="glass-card" style={{ padding: "28px", marginBottom: 32, maxWidth: 500, margin: "0 auto 32px" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 48, marginBottom: 8 }}>{currentData.icon}</div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, marginBottom: 4 }}>
              {currentData.month} – Right Now
            </div>
            <div style={{ fontSize: 28, fontWeight: 700, color: "#4a9eff", marginBottom: 8 }}>
              {currentData.temp}°C
            </div>
            <div className={`badge ${currentData.status === "Perfect" ? "badge-premium" : currentData.status === "Monsoon" ? "badge-hidden" : "badge-budget"}`}>
              {currentData.status}
            </div>
            <div style={{ marginTop: 16, display: "flex", gap: 24, justifyContent: "center" }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 16, fontWeight: 600, color: "#4a9eff" }}>{currentData.rainfall}mm</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}>Rainfall</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ display: "flex", gap: 2 }}>
                  {[...Array(5)].map((_, i) => (
                    <div key={i} style={{
                      width: 12, height: 12, borderRadius: 2,
                      background: i < currentData.crowd ? "#d4a843" : "rgba(255,255,255,0.1)",
                    }} />
                  ))}
                </div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>Crowds</div>
              </div>
            </div>
          </div>
        </div>

        {/* Monthly Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(80px, 1fr))",
          gap: 12,
        }}>
          {weatherData.map((w, i) => (
            <motion.div
              key={w.month}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              style={{
                padding: "14px 8px",
                borderRadius: 14,
                textAlign: "center",
                background: i === currentMonth
                  ? "rgba(74,158,255,0.15)"
                  : "rgba(255,255,255,0.04)",
                border: i === currentMonth
                  ? "1.5px solid rgba(74,158,255,0.4)"
                  : "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div style={{ fontSize: 20, marginBottom: 4 }}>{w.icon}</div>
              <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 4, color: i === currentMonth ? "#4a9eff" : "rgba(255,255,255,0.8)" }}>
                {w.month}
              </div>
              <div style={{ fontSize: 13, fontWeight: 700 }}>{w.temp}°</div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", marginTop: 4 }}>
                {w.status}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===================== PHOTOGRAPHY =====================
export function PhotographySection() {
  return (
    <section id="photo-mode" style={{ padding: "80px 24px", background: "rgba(13,36,69,0.25)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: 50 }}
        >
          <div className="section-label" style={{ display: "inline-flex", marginBottom: 16 }}>
            <Camera size={12} /> Photography Mode
          </div>
          <h2 className="section-title" style={{ marginBottom: 16 }}>
            Capture <span className="gradient-text-sunset">Varkala</span>'s Magic
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", maxWidth: 560, margin: "0 auto" }}>
            The perfect shots, locations, and timing — everything a photographer needs.
          </p>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 260px), 1fr))",
          gap: 24,
        }}>
          {photoSpots.map((spot, i) => (
            <motion.div
              key={spot.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              style={{ position: "relative", borderRadius: 20, overflow: "hidden", height: 320 }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src={spot.image}
                alt={spot.name}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to top, rgba(10,22,40,0.97) 0%, rgba(10,22,40,0.3) 55%, transparent 100%)",
              }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "24px 20px" }}>
                <div style={{ display: "flex", gap: 8, marginBottom: 10 }}>
                  <span className="tag tag-orange" style={{ fontSize: 11 }}>
                    {spot.icon} {spot.type}
                  </span>
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 600, marginBottom: 8 }}>
                  {spot.name}
                </h3>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.65)", lineHeight: 1.5, marginBottom: 10 }}>
                  {spot.description}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10 }}>
                  <Clock size={11} style={{ color: "#f7931e" }} />
                  <span style={{ fontSize: 12, color: "#f7931e" }}>{spot.bestTime}</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  {spot.tips.map((tip, j) => (
                    <div key={j} style={{ fontSize: 11, color: "rgba(255,255,255,0.55)", display: "flex", gap: 4 }}>
                      <span>📌</span> {tip}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===================== SHOPPING =====================
import { shoppingSpots, type ShoppingSpot } from "@/lib/data";

function ShoppingCard({ spot, index }: { spot: ShoppingSpot; index: number }) {
  const categoryColors: Record<string, string> = {
    souvenirs: "#4a9eff",
    handmade: "#14a085",
    crafts: "#f7931e",
    clothing: "#d4a843",
    beachwear: "#ff6b35",
    jewelry: "#7c5cbf",
    ayurveda: "#14a085",
  };
  const color = categoryColors[spot.category] || "#4a9eff";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="glass-card"
      style={{ overflow: "hidden" }}
    >
      <div style={{ position: "relative", height: 160, overflow: "hidden" }}>
        <Image
          src={spot.image}
          alt={spot.name}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="card-img-overlay" />
        <div style={{ position: "absolute", top: 12, left: 12 }}>
          <span className="badge" style={{
            background: `${color}22`,
            border: `1px solid ${color}44`,
            color,
            textTransform: "capitalize",
          }}>
            {spot.category}
          </span>
        </div>
      </div>
      <div style={{ padding: "18px 20px" }}>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 600, marginBottom: 8 }}>
          {spot.name}
        </h3>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.6, marginBottom: 12 }}>
          {spot.description}
        </p>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 14, fontWeight: 600, color: "#d4a843" }}>{spot.priceRange}</span>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>📍 {spot.address.split(",")[0]}</span>
        </div>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 10 }}>
          {spot.tags.map((t) => <span key={t} className="tag" style={{ fontSize: 11 }}>{t}</span>)}
        </div>
      </div>
    </motion.div>
  );
}

export function ShoppingSection() {
  return (
    <section id="shopping" style={{ padding: "80px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: 50 }}
        >
          <div className="section-label" style={{ display: "inline-flex", marginBottom: 16 }}>
            <span>🛍️</span> Shopping Guide
          </div>
          <h2 className="section-title" style={{ marginBottom: 16 }}>
            Shop <span className="gradient-text-ocean">Varkala</span>
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", maxWidth: 560, margin: "0 auto" }}>
            Handlooms, Ayurveda, beachwear, and local crafts — the best shopping in Varkala.
          </p>

          {/* Budget suggestions */}
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginTop: 24 }}>
            {[
              { budget: "₹500", suggestion: "Magnet, keychain, hand-painted cards, coconut craft" },
              { budget: "₹2,000", suggestion: "Kasavu dupatta, ayurvedic oils, beachwear set" },
              { budget: "₹5,000", suggestion: "Handloom saree, silver jewelry, Ayurveda kit, clothing" },
            ].map((item) => (
              <div key={item.budget} className="glass-card" style={{ padding: "14px 18px", maxWidth: 220 }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#d4a843", marginBottom: 6 }}>{item.budget}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>{item.suggestion}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 260px), 1fr))",
          gap: 24,
        }}>
          {shoppingSpots.map((spot, i) => (
            <ShoppingCard key={spot.id} spot={spot} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
