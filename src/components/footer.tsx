"use client";
import { motion } from "framer-motion";
import { MapPin, Mail, Share2, Rss, Heart, Globe, Phone } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      background: "rgba(5,13,25,0.95)",
      borderTop: "1px solid rgba(255,255,255,0.06)",
      padding: "64px 24px 32px",
      marginTop: 0,
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 48,
          marginBottom: 56,
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{
                width: 38, height: 38, borderRadius: 10,
                background: "linear-gradient(135deg, #2d7dd2, #14a085)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 18,
              }}>🌊</div>
              <span style={{
                fontFamily: "var(--font-display)",
                fontSize: 22,
                fontWeight: 700,
                background: "linear-gradient(135deg, #fff 0%, #4a9eff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>VarkalaVerse</span>
            </div>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, marginBottom: 20 }}>
              The definitive AI-powered guide to Varkala, Kerala. Plan, discover, and experience everything this magical coastal town has to offer.
            </p>
            <div style={{ display: "flex", gap: 12 }}>
              {[
                { icon: <Share2 size={16} />, href: "#", label: "Share" },
                { icon: <Mail size={16} />, href: "#", label: "Contact" },
                { icon: <Rss size={16} />, href: "#", label: "RSS" },
              ].map((s, i) => (
                <a key={i} href={s.href} style={{
                  width: 36, height: 36, borderRadius: 8,
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "rgba(255,255,255,0.5)",
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(74,158,255,0.15)";
                    e.currentTarget.style.color = "#4a9eff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                    e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.7)", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 18 }}>
              Explore
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                "Varkala Beach", "Hidden Gems", "Janardanaswamy Temple", "Kappil Lake",
                "Paragliding", "Surfing", "Photography Spots",
              ].map((link) => (
                <a key={link} href="#explore" style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "#4a9eff"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.45)"}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Plan Links */}
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.7)", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 18 }}>
              Plan Your Trip
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { label: "AI Travel Concierge", href: "#ai-guide" },
                { label: "Smart Itinerary", href: "#itinerary" },
                { label: "Budget Planner", href: "#budget" },
                { label: "Hotel Finder", href: "#hotels" },
                { label: "Food Guide", href: "#food" },
                { label: "Transport Guide", href: "#transport" },
                { label: "Shopping Guide", href: "#shopping" },
              ].map((link) => (
                <a key={link.label} href={link.href} style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "#14a085"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.45)"}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.7)", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 18 }}>
              About Varkala
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <MapPin size={14} style={{ color: "#4a9eff", marginTop: 2, flexShrink: 0 }} />
                <span style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>
                  Varkala, Thiruvananthapuram District, Kerala – 695141
                </span>
              </div>
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <Globe size={14} style={{ color: "#14a085", flexShrink: 0 }} />
                <span style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>8.7379°N, 76.7163°E</span>
              </div>
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <Phone size={14} style={{ color: "#f7931e", flexShrink: 0 }} />
                <span style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>Kerala Tourism: 1800-425-4747</span>
              </div>

              <div style={{
                marginTop: 8,
                padding: "14px 16px",
                background: "rgba(74,158,255,0.06)",
                border: "1px solid rgba(74,158,255,0.12)",
                borderRadius: 12,
              }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: "#4a9eff", marginBottom: 8 }}>🌤️ Best Season</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>
                  November to February — perfect weather, calm seas, 27–30°C
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider" style={{ marginBottom: 28 }} />

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div style={{ fontSize: 13, color: "rgba(255,255,255,0.3)" }}>
            © {currentYear} VarkalaVerse. Built with{" "}
            <Heart size={12} style={{ display: "inline", color: "#ff6b35", verticalAlign: "middle" }} />{" "}
            for travelers from Aruppukottai and beyond.
          </div>
          <div style={{ display: "flex", gap: 20 }}>
            {["Privacy Policy", "Terms", "About"].map((link) => (
              <a key={link} href="#" style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.6)"}
                onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.3)"}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
