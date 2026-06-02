"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import { Navigation } from "lucide-react";
import { motion } from "framer-motion";

// Leaflet MUST be loaded dynamically with SSR disabled because it relies on the 'window' object
const MapClient = dynamic(() => import("./map-client"), {
  ssr: false,
  loading: () => (
    <div style={{ height: 600, width: "100%", background: "rgba(10,22,40,0.5)", borderRadius: 24, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ color: "rgba(255,255,255,0.5)", display: "flex", alignItems: "center", gap: 10 }}>
        <Navigation size={20} className="animate-pulse" /> Loading Interactive Map...
      </div>
    </div>
  )
});

export function InteractiveMap() {
  const [filter, setFilter] = useState<"all" | "attraction" | "hotel" | "restaurant" | "shopping">("all");

  return (
    <section id="map" style={{ padding: "80px 0", background: "var(--color-bg)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", marginBottom: 40 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center" }}
        >
          <div className="section-label" style={{ display: "inline-flex", marginBottom: 16 }}>
            <Navigation size={12} /> Interactive Explorer
          </div>
          <h2 className="section-title" style={{ marginBottom: 16 }}>
            The <span className="gradient-text-ocean">Varkala</span> Map
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", maxWidth: 600, margin: "0 auto", marginBottom: 32 }}>
            Explore beaches, temples, cliff spots, and luxury stays interactively. No API keys required!
          </p>
          
          <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
            {(["all", "attraction", "hotel", "restaurant", "shopping"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`category-chip ${filter === f ? "active" : ""}`}
                style={{ textTransform: "capitalize" }}
              >
                {f === "all" ? "Everything" : f + "s"}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <MapClient filter={filter} />
      </div>

      {/* Global overrides for Leaflet popups to look luxury */}
      <style dangerouslySetInnerHTML={{__html: `
        .leaflet-container {
          font-family: var(--font-sans) !important;
        }
        .leaflet-popup-content-wrapper {
          padding: 0 !important;
          border-radius: 16px !important;
          overflow: hidden !important;
          background: transparent !important;
          box-shadow: 0 10px 40px rgba(0,0,0,0.5) !important;
          border: 1px solid rgba(255,255,255,0.1) !important;
        }
        .leaflet-popup-content {
          margin: 0 !important;
          width: 280px !important;
        }
        .leaflet-popup-tip-container {
          display: none !important;
        }
        .leaflet-popup-close-button {
          color: white !important;
          font-size: 20px !important;
          padding: 8px 12px !important;
          z-index: 10 !important;
          text-shadow: 0 1px 4px rgba(0,0,0,0.8) !important;
        }
        .leaflet-popup-close-button:hover {
          background: rgba(0,0,0,0.3) !important;
          color: white !important;
        }
      `}} />
    </section>
  );
}
