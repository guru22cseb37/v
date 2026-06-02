"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { getItinerary, type ItineraryDay } from "@/lib/data";
import { Clock, MapPin, DollarSign, Lightbulb, ChevronDown, ChevronUp, Calendar, Users, Backpack, Crown, Heart, Compass } from "lucide-react";

const TRIP_TYPES = [
  { value: "friends", label: "Friends", icon: "👫" },
  { value: "family", label: "Family", icon: "👨‍👩‍👧" },
  { value: "couples", label: "Couples", icon: "❤️" },
  { value: "solo", label: "Solo", icon: "🎒" },
  { value: "luxury", label: "Luxury", icon: "👑" },
  { value: "backpacker", label: "Backpacker", icon: "🎽" },
  { value: "adventure", label: "Adventure", icon: "⚡" },
];

const DAY_OPTIONS = [1, 2, 3, 5, 7];

const BUDGET_OPTIONS = [
  { value: "budget", label: "Budget (₹1,500–₹4,000/day)" },
  { value: "midrange", label: "Mid-Range (₹4,000–₹10,000/day)" },
  { value: "luxury", label: "Luxury (₹10,000+/day)" },
];

function DayCard({ day, index }: { day: ItineraryDay; index: number }) {
  const [expanded, setExpanded] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card"
      style={{ marginBottom: 16 }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "18px 20px",
          cursor: "pointer",
        }}
        onClick={() => setExpanded(!expanded)}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{
            width: 44,
            height: 44,
            borderRadius: 12,
            background: "linear-gradient(135deg, rgba(45,125,210,0.3), rgba(20,160,133,0.3))",
            border: "1px solid rgba(74,158,255,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: 18,
          }}>
            {day.day}
          </div>
          <div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: 1, fontWeight: 600 }}>
              Day {day.day}
            </div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 600 }}>
              {day.title}
            </div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>
            {day.activities.length} activities
          </span>
          {expanded ? <ChevronUp size={16} style={{ color: "#4a9eff" }} /> : <ChevronDown size={16} style={{ color: "#4a9eff" }} />}
        </div>
      </div>

      {expanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          style={{ padding: "0 20px 20px" }}
        >
          <div className="divider" style={{ marginBottom: 20 }} />
          <div style={{ position: "relative", paddingLeft: 28 }}>
            {/* Timeline line */}
            <div style={{
              position: "absolute",
              left: 8,
              top: 12,
              bottom: 0,
              width: 1,
              background: "linear-gradient(to bottom, rgba(74,158,255,0.4), transparent)",
            }} />

            {day.activities.map((activity, i) => (
              <div key={i} style={{ position: "relative", marginBottom: i < day.activities.length - 1 ? 24 : 0 }}>
                {/* Timeline dot */}
                <div style={{
                  position: "absolute",
                  left: -24,
                  top: 4,
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #2d7dd2, #14a085)",
                  boxShadow: "0 0 8px rgba(74,158,255,0.5)",
                }} />

                <div style={{ display: "flex", gap: 6, alignItems: "center", marginBottom: 4 }}>
                  <span style={{ fontSize: 12, fontWeight: 600, color: "#4a9eff", minWidth: 60 }}>
                    <Clock size={10} style={{ marginRight: 3, display: "inline" }} />{activity.time}
                  </span>
                </div>

                <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 4 }}>{activity.activity}</div>

                <div style={{ display: "flex", gap: 12, marginBottom: 8, flexWrap: "wrap" }}>
                  <span style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", display: "flex", alignItems: "center", gap: 4 }}>
                    <MapPin size={10} style={{ color: "#14a085" }} /> {activity.place}
                  </span>
                  <span style={{ fontSize: 12, color: "#d4a843", display: "flex", alignItems: "center", gap: 4 }}>
                    <DollarSign size={10} /> {activity.cost}
                  </span>
                </div>

                <div style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 6,
                  background: "rgba(247,147,30,0.08)",
                  border: "1px solid rgba(247,147,30,0.15)",
                  borderRadius: 8,
                  padding: "8px 12px",
                }}>
                  <Lightbulb size={12} style={{ color: "#f7931e", marginTop: 1, flexShrink: 0 }} />
                  <span style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>{activity.tip}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

export function ItinerarySection() {
  const [days, setDays] = useState(2);
  const [tripType, setTripType] = useState("friends");
  const [budget, setBudget] = useState("midrange");
  const [generated, setGenerated] = useState(false);
  const [plan, setPlan] = useState<ReturnType<typeof getItinerary> | null>(null);

  const handleGenerate = () => {
    const itinerary = getItinerary(days, tripType, budget);
    setPlan(itinerary);
    setGenerated(true);
  };

  return (
    <section id="itinerary" style={{ padding: "80px 24px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: 50 }}
        >
          <div className="section-label" style={{ display: "inline-flex", marginBottom: 16 }}>
            <Calendar size={12} /> Smart Itinerary Generator
          </div>
          <h2 className="section-title" style={{ marginBottom: 16 }}>
            Your Perfect <span className="gradient-text-ocean">Trip Plan</span>
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", maxWidth: 560, margin: "0 auto" }}>
            Tell us your travel style and we&apos;ll craft a day-by-day Varkala itinerary just for you.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card"
          style={{ padding: "32px" }}
        >
          {/* Number of Days */}
          <div style={{ marginBottom: 28 }}>
            <label style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.7)", display: "block", marginBottom: 12, letterSpacing: 0.5 }}>
              📅 Number of Days
            </label>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {DAY_OPTIONS.map((d) => (
                <button
                  key={d}
                  onClick={() => setDays(d)}
                  style={{
                    padding: "10px 22px",
                    borderRadius: 50,
                    border: days === d ? "1.5px solid #4a9eff" : "1px solid rgba(255,255,255,0.12)",
                    background: days === d ? "rgba(74,158,255,0.15)" : "rgba(255,255,255,0.04)",
                    color: days === d ? "#4a9eff" : "rgba(255,255,255,0.6)",
                    fontSize: 14,
                    fontWeight: days === d ? 600 : 400,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  {d} {d === 1 ? "Day" : "Days"}
                </button>
              ))}
            </div>
          </div>

          {/* Trip Type */}
          <div style={{ marginBottom: 28 }}>
            <label style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.7)", display: "block", marginBottom: 12, letterSpacing: 0.5 }}>
              🧳 Trip Type
            </label>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {TRIP_TYPES.map((t) => (
                <button
                  key={t.value}
                  onClick={() => setTripType(t.value)}
                  style={{
                    padding: "10px 20px",
                    borderRadius: 50,
                    border: tripType === t.value ? "1.5px solid #14a085" : "1px solid rgba(255,255,255,0.12)",
                    background: tripType === t.value ? "rgba(20,160,133,0.15)" : "rgba(255,255,255,0.04)",
                    color: tripType === t.value ? "#14a085" : "rgba(255,255,255,0.6)",
                    fontSize: 14,
                    fontWeight: tripType === t.value ? 600 : 400,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  {t.icon} {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Budget */}
          <div style={{ marginBottom: 32 }}>
            <label style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.7)", display: "block", marginBottom: 12, letterSpacing: 0.5 }}>
              💰 Budget Level
            </label>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {BUDGET_OPTIONS.map((b) => (
                <button
                  key={b.value}
                  onClick={() => setBudget(b.value)}
                  style={{
                    padding: "10px 18px",
                    borderRadius: 50,
                    border: budget === b.value ? "1.5px solid #d4a843" : "1px solid rgba(255,255,255,0.12)",
                    background: budget === b.value ? "rgba(212,168,67,0.12)" : "rgba(255,255,255,0.04)",
                    color: budget === b.value ? "#d4a843" : "rgba(255,255,255,0.6)",
                    fontSize: 13,
                    fontWeight: budget === b.value ? 600 : 400,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  {b.label}
                </button>
              ))}
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleGenerate}
            className="btn-gold"
            style={{ width: "100%", justifyContent: "center", padding: "16px", fontSize: 16 }}
          >
            ✨ Generate My Itinerary
          </motion.button>
        </motion.div>

        {/* Generated Itinerary */}
        {generated && plan && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ marginTop: 40 }}
          >
            {/* Summary Card */}
            <div className="glass-card" style={{ padding: "24px 28px", marginBottom: 24 }}>
              <div style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>
                    Your Trip Summary
                  </div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 700, marginBottom: 4 }}>
                    {days}-Day Varkala {TRIP_TYPES.find((t) => t.value === tripType)?.icon} {tripType.charAt(0).toUpperCase() + tripType.slice(1)} Trip
                  </h3>
                  <div style={{ fontSize: 14, color: "rgba(255,255,255,0.6)" }}>
                    Estimated Budget: <span style={{ color: "#d4a843", fontWeight: 600 }}>{plan.totalBudget}</span>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 16 }}>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 24, fontWeight: 700, color: "#4a9eff" }}>{days}</div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}>Days</div>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 24, fontWeight: 700, color: "#14a085" }}>
                      {plan.itinerary.reduce((acc, d) => acc + d.activities.length, 0)}
                    </div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}>Activities</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Day cards */}
            {plan.itinerary.map((day, i) => (
              <DayCard key={i} day={day} index={i} />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
