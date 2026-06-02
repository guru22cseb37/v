"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, MapPin, Star, Compass, ChevronDown, Menu, X,
  Waves, Mountain, Utensils, Hotel, Camera, Zap, Sun,
  Heart, Users, UserCheck, Backpack, Crown, Map, Wind,
  ArrowRight, Sparkles, Globe, Clock, TrendingUp
} from "lucide-react";

const NAV_LINKS = [
  { label: "Explore", href: "#explore" },
  { label: "Hotels", href: "#hotels" },
  { label: "Food", href: "#food" },
  { label: "Itinerary", href: "#itinerary" },
  { label: "AI Guide", href: "#ai-guide" },
  { label: "Budget", href: "#budget" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "0 24px",
        height: 72,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? "rgba(10,22,40,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
        transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
      }}
    >
      {/* Logo */}
      <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
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
      </Link>

      {/* Desktop Nav */}
      <div style={{ display: "flex", alignItems: "center", gap: 32 }} className="hidden-mobile">
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            style={{
              color: "rgba(255,255,255,0.75)",
              textDecoration: "none",
              fontSize: 14,
              fontWeight: 500,
              letterSpacing: "0.3px",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#4a9eff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* CTA */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <a href="#ai-guide" className="btn-primary hidden-mobile" style={{ padding: "10px 20px", fontSize: 13 }}>
          <Sparkles size={14} /> AI Concierge
        </a>
        <a href="#ai-guide" className="btn-primary show-mobile" style={{ padding: "8px 14px", fontSize: 12 }}>
          <Sparkles size={14} /> AI
        </a>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ background: "none", border: "none", color: "white", cursor: "pointer", padding: 6 }}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: "absolute",
              top: 72,
              left: 0,
              right: 0,
              background: "rgba(10,22,40,0.97)",
              backdropFilter: "blur(24px)",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  color: "rgba(255,255,255,0.85)",
                  textDecoration: "none",
                  fontSize: 16,
                  fontWeight: 500,
                  padding: "8px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

// ===================== HERO SECTION =====================
const SEARCH_SUGGESTIONS = [
  { label: "Beaches", icon: "🏖️" },
  { label: "Cafes", icon: "☕" },
  { label: "Hidden Spots", icon: "💎" },
  { label: "Adventure", icon: "🪂" },
  { label: "Hotels", icon: "🏨" },
  { label: "Photography", icon: "📸" },
  { label: "Seafood", icon: "🦐" },
  { label: "Temples", icon: "🛕" },
];

export function HeroSection() {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);

  const handleSuggestion = (label: string) => {
    setQuery(label);
    const el = document.getElementById(label.toLowerCase().replace(" ", "-"));
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else {
      const map: Record<string, string> = {
        beaches: "explore", cafes: "food", "hidden spots": "hidden-gems",
        adventure: "explore", hotels: "hotels", photography: "photo-mode",
        seafood: "food", temples: "explore",
      };
      const target = document.getElementById(map[label.toLowerCase()] || "explore");
      if (target) target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Background image */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image
          src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1600&q=90"
          alt="Varkala Beach cliff aerial view"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
          sizes="100vw"
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, rgba(10,22,40,0.3) 0%, rgba(10,22,40,0.55) 40%, rgba(10,22,40,0.92) 100%)",
        }} />
      </div>

      {/* Wave overlay */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 120, zIndex: 1, overflow: "hidden" }}>
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ width: "100%", height: "100%" }}>
          <path d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z" fill="rgba(10,22,40,0.95)" />
        </svg>
      </div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "0 20px", maxWidth: 900, width: "100%" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="section-label" style={{ marginBottom: 24, display: "inline-flex" }}>
            <Globe size={12} /> Kerala&apos;s Most Iconic Coastal Destination
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.8rem, 7vw, 6rem)",
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: "-1px",
            marginBottom: 24,
          }}
        >
          Discover the{" "}
          <span className="gradient-text-ocean">Magic of</span>
          <br />
          <span className="gradient-text-sunset">Varkala</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
            color: "rgba(255,255,255,0.80)",
            marginBottom: 44,
            lineHeight: 1.65,
            maxWidth: 600,
            margin: "0 auto 44px",
          }}
        >
          Your AI-powered luxury travel companion — beaches, hidden gems, hotels, food,
          itineraries, and more. Plan your perfect Varkala trip in seconds.
        </motion.p>

        {/* Search Box */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          style={{
            position: "relative",
            maxWidth: 680,
            margin: "0 auto 32px",
          }}
        >
          <div style={{
            display: "flex",
            alignItems: "center",
            background: focused ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.08)",
            backdropFilter: "blur(24px)",
            border: focused ? "1.5px solid rgba(74,158,255,0.6)" : "1.5px solid rgba(255,255,255,0.15)",
            borderRadius: 60,
            padding: "8px 8px 8px 24px",
            transition: "all 0.3s ease",
            boxShadow: focused ? "0 8px 40px rgba(74,158,255,0.2)" : "0 8px 40px rgba(0,0,0,0.2)",
          }}>
            <Search size={20} style={{ color: "rgba(255,255,255,0.5)", marginRight: 12, flexShrink: 0 }} />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              placeholder='Where do you want to go in Varkala?'
              style={{
                flex: 1,
                background: "none",
                border: "none",
                outline: "none",
                color: "white",
                fontSize: 16,
                fontFamily: "var(--font-body)",
              }}
              id="hero-search"
            />
            <button className="btn-gold" style={{ borderRadius: 50, padding: "12px 24px", fontSize: 14, flexShrink: 0 }}>
              Explore <ArrowRight size={14} />
            </button>
          </div>
        </motion.div>

        {/* Suggestions */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}
        >
          {SEARCH_SUGGESTIONS.map((s) => (
            <button
              key={s.label}
              onClick={() => handleSuggestion(s.label)}
              className="category-chip"
            >
              {s.icon} {s.label}
            </button>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          style={{
            display: "flex",
            gap: 24,
            justifyContent: "center",
            marginTop: 56,
            flexWrap: "wrap",
          }}
        >
          {[
            { value: "50+", label: "Attractions", icon: <MapPin size={16} /> },
            { value: "4.8★", label: "Avg Rating", icon: <Star size={16} /> },
            { value: "12K+", label: "Travelers Helped", icon: <Users size={16} /> },
            { value: "100%", label: "Local Expertise", icon: <Globe size={16} /> },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <div style={{
                fontSize: "1.75rem",
                fontWeight: 700,
                fontFamily: "var(--font-display)",
                background: "linear-gradient(135deg, #fff, #4a9eff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                display: "flex",
                alignItems: "center",
                gap: 6,
                justifyContent: "center",
              }}>
                {stat.value}
              </div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", marginTop: 4, display: "flex", alignItems: "center", gap: 4, justifyContent: "center" }}>
                {stat.icon} {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        style={{
          position: "absolute",
          bottom: 140,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          color: "rgba(255,255,255,0.4)",
          fontSize: 11,
          letterSpacing: 1.5,
          textTransform: "uppercase",
        }}
      >
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
}

// ===================== QUICK CATEGORIES =====================
const QUICK_CATS = [
  { icon: "🏖️", label: "Beaches", href: "#explore", color: "#2d7dd2" },
  { icon: "🍽️", label: "Food & Cafes", href: "#food", color: "#14a085" },
  { icon: "🏨", label: "Hotels", href: "#hotels", color: "#d4a843" },
  { icon: "💎", label: "Hidden Gems", href: "#hidden-gems", color: "#ff6b35" },
  { icon: "🗺️", label: "Itinerary", href: "#itinerary", color: "#2d7dd2" },
  { icon: "🤖", label: "AI Guide", href: "#ai-guide", color: "#14a085" },
  { icon: "📸", label: "Photography", href: "#photo-mode", color: "#f7931e" },
  { icon: "💰", label: "Budget Plan", href: "#budget", color: "#d4a843" },
];

export function QuickCategories() {
  return (
    <section style={{ padding: "60px 24px 40px", maxWidth: 1200, margin: "0 auto" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: 16 }}
      >
        {QUICK_CATS.map((cat, i) => (
          <motion.a
            key={cat.label}
            href={cat.href}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="glass-card"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 10,
              padding: "24px 16px",
              textDecoration: "none",
              cursor: "pointer",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <div style={{
              width: 52, height: 52, borderRadius: 14,
              background: `${cat.color}18`,
              border: `1px solid ${cat.color}30`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 24,
            }}>
              {cat.icon}
            </div>
            <span style={{ fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.85)", textAlign: "center" }}>
              {cat.label}
            </span>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
