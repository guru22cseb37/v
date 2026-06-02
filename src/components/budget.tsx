"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { calculateBudget } from "@/lib/data";
import { DollarSign, Users, Calendar, MapPin, Hotel, TrendingDown, Info } from "lucide-react";

const FROM_OPTIONS = [
  { value: "aruppukottai", label: "Aruppukottai" },
  { value: "chennai", label: "Chennai" },
  { value: "bangalore", label: "Bangalore" },
  { value: "mumbai", label: "Mumbai" },
  { value: "delhi", label: "Delhi" },
  { value: "trivandrum", label: "Trivandrum" },
  { value: "other", label: "Other City" },
];

const HOTEL_OPTIONS = [
  { value: "hostel", label: "Hostel / Dormitory" },
  { value: "budget", label: "Budget Guesthouse" },
  { value: "midrange", label: "Mid-Range Hotel" },
  { value: "premium", label: "Premium Resort" },
  { value: "luxury", label: "Luxury 5-Star" },
];

export function BudgetPlannerSection() {
  const [travelers, setTravelers] = useState(2);
  const [days, setDays] = useState(2);
  const [fromCity, setFromCity] = useState("aruppukottai");
  const [hotelCategory, setHotelCategory] = useState("midrange");
  const [result, setResult] = useState<ReturnType<typeof calculateBudget> | null>(null);

  const handleCalculate = () => {
    const budget = calculateBudget(travelers, days, hotelCategory, fromCity);
    setResult(budget);
  };

  const formatINR = (amount: number) =>
    "₹" + amount.toLocaleString("en-IN");

  const budgetItems = result
    ? [
        { label: "Hotel / Accommodation", value: result.hotel, icon: "🏨", color: "#4a9eff" },
        { label: "Transport (Round Trip)", value: result.transport, icon: "🚗", color: "#14a085" },
        { label: "Food & Drinks", value: result.food, icon: "🍽️", color: "#f7931e" },
        { label: "Activities & Entry Fees", value: result.activities, icon: "🎢", color: "#d4a843" },
        { label: "Shopping & Souvenirs", value: result.shopping, icon: "🛍️", color: "#7c5cbf" },
        { label: "Emergency Buffer (10%)", value: result.emergency, icon: "🔒", color: "#ff6b35" },
      ]
    : [];

  return (
    <section id="budget" style={{ padding: "80px 24px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: 50 }}
        >
          <div className="section-label" style={{ display: "inline-flex", marginBottom: 16 }}>
            <DollarSign size={12} /> Smart Budget Planner
          </div>
          <h2 className="section-title" style={{ marginBottom: 16 }}>
            Plan Your <span className="gradient-text-luxury">Budget</span>
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", maxWidth: 560, margin: "0 auto" }}>
            Get a detailed cost breakdown for your Varkala trip — from transport to shopping.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 24 }}>
          {/* Calculator Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card"
            style={{ padding: "32px" }}
          >
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 24,
              marginBottom: 28,
            }}>
              {/* Travelers */}
              <div>
                <label style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.7)", display: "block", marginBottom: 10 }}>
                  <Users size={13} style={{ display: "inline", marginRight: 6 }} />
                  Number of Travelers
                </label>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <button
                    onClick={() => setTravelers(Math.max(1, travelers - 1))}
                    style={{
                      width: 36, height: 36, borderRadius: 8,
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "white", fontSize: 18, cursor: "pointer",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}
                  >–</button>
                  <span style={{ fontSize: 20, fontWeight: 700, minWidth: 32, textAlign: "center" }}>{travelers}</span>
                  <button
                    onClick={() => setTravelers(Math.min(20, travelers + 1))}
                    style={{
                      width: 36, height: 36, borderRadius: 8,
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "white", fontSize: 18, cursor: "pointer",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}
                  >+</button>
                </div>
              </div>

              {/* Days */}
              <div>
                <label style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.7)", display: "block", marginBottom: 10 }}>
                  <Calendar size={13} style={{ display: "inline", marginRight: 6 }} />
                  Number of Days
                </label>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <button
                    onClick={() => setDays(Math.max(1, days - 1))}
                    style={{
                      width: 36, height: 36, borderRadius: 8,
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "white", fontSize: 18, cursor: "pointer",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}
                  >–</button>
                  <span style={{ fontSize: 20, fontWeight: 700, minWidth: 32, textAlign: "center" }}>{days}</span>
                  <button
                    onClick={() => setDays(Math.min(30, days + 1))}
                    style={{
                      width: 36, height: 36, borderRadius: 8,
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "white", fontSize: 18, cursor: "pointer",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}
                  >+</button>
                </div>
              </div>

              {/* From City */}
              <div>
                <label style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.7)", display: "block", marginBottom: 10 }}>
                  <MapPin size={13} style={{ display: "inline", marginRight: 6 }} />
                  Traveling From
                </label>
                <select
                  value={fromCity}
                  onChange={(e) => setFromCity(e.target.value)}
                  className="luxury-select"
                >
                  {FROM_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </div>

              {/* Hotel */}
              <div>
                <label style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.7)", display: "block", marginBottom: 10 }}>
                  <Hotel size={13} style={{ display: "inline", marginRight: 6 }} />
                  Stay Preference
                </label>
                <select
                  value={hotelCategory}
                  onChange={(e) => setHotelCategory(e.target.value)}
                  className="luxury-select"
                >
                  {HOTEL_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleCalculate}
              className="btn-gold"
              style={{ width: "100%", justifyContent: "center", padding: "16px", fontSize: 16 }}
            >
              💰 Calculate My Budget
            </motion.button>
          </motion.div>

          {/* Result */}
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Total */}
              <div className="glass-card" style={{ padding: "24px 28px", marginBottom: 20, textAlign: "center" }}>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", marginBottom: 8, textTransform: "uppercase", letterSpacing: 1 }}>
                  Estimated Total for {travelers} {travelers === 1 ? "person" : "people"} · {days} {days === 1 ? "day" : "days"}
                </div>
                <div style={{
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  fontWeight: 800,
                  fontFamily: "var(--font-display)",
                  background: "linear-gradient(135deg, #d4a843, #f7931e)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  {formatINR(result.total)}
                </div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginTop: 6 }}>
                  ≈ {formatINR(Math.round(result.total / travelers))} per person · {formatINR(Math.round(result.total / days))} per day
                </div>
              </div>

              {/* Breakdown */}
              <div className="glass-card" style={{ padding: "24px 28px" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 18, marginBottom: 20 }}>
                  Cost Breakdown
                </h3>

                {budgetItems.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "12px 0",
                      borderBottom: i < budgetItems.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{ fontSize: 20 }}>{item.icon}</span>
                      <span style={{ fontSize: 14, color: "rgba(255,255,255,0.75)" }}>{item.label}</span>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontSize: 16, fontWeight: 700, color: item.color }}>{formatINR(item.value)}</div>
                      <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>
                        {Math.round((item.value / result.total) * 100)}%
                      </div>
                    </div>
                  </div>
                ))}

                {/* Savings Tips */}
                <div style={{
                  marginTop: 24,
                  padding: "16px",
                  background: "rgba(20,160,133,0.08)",
                  border: "1px solid rgba(20,160,133,0.2)",
                  borderRadius: 12,
                }}>
                  <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 10 }}>
                    <TrendingDown size={16} style={{ color: "#14a085" }} />
                    <span style={{ fontSize: 13, fontWeight: 600, color: "#14a085" }}>💡 Savings Tips</span>
                  </div>
                  <ul style={{ paddingLeft: 16, color: "rgba(255,255,255,0.65)", fontSize: 13, lineHeight: 1.7 }}>
                    <li>Book train/bus tickets 2–3 weeks in advance for 30% savings</li>
                    <li>Eat lunch at local restaurants (₹100–₹150) instead of cliff cafes</li>
                    <li>Visit in October–November for 40% lower hotel rates</li>
                    <li>Walk the cliff promenade — it&apos;s free and beautiful!</li>
                    <li>Most beaches have zero entry fee</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
