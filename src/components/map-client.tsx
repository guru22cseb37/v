"use client";
import { useState, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { touristPlaces, hotels, restaurants, shoppingSpots } from "@/lib/data";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

// Fix Leaflet's default icon paths issue in Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom Icons
const createCustomIcon = (type: "attraction" | "hotel" | "restaurant" | "shopping") => {
  let color = "#14a085"; // default attraction
  if (type === "hotel") color = "#ff6b35";
  if (type === "restaurant") color = "#e74c3c"; // Red for food
  if (type === "shopping") color = "#9b59b6"; // Purple for shopping

  const iconHtml = `
    <div style="
      background-color: ${color};
      width: 24px;
      height: 24px;
      display: block;
      left: -12px;
      top: -12px;
      position: relative;
      border-radius: 50%;
      border: 3px solid white;
      box-shadow: 0 4px 8px rgba(0,0,0,0.4);
    "></div>
  `;

  return L.divIcon({
    className: 'custom-marker',
    html: iconHtml,
    iconSize: [0, 0],
    iconAnchor: [0, 0],
    popupAnchor: [0, -16]
  });
};

const attractionIcon = createCustomIcon("attraction");
const hotelIcon = createCustomIcon("hotel");
const restaurantIcon = createCustomIcon("restaurant");
const shoppingIcon = createCustomIcon("shopping");

type MapLocation = {
  id: string;
  name: string;
  lat: number;
  lng: number;
  type: "attraction" | "hotel" | "restaurant" | "shopping";
  category: string;
  image: string;
  rating?: number;
  price?: string;
  description: string;
};

export default function MapClient({ filter }: { filter: "all" | "attraction" | "hotel" | "restaurant" | "shopping" }) {
  const [activePopup, setActivePopup] = useState<string | null>(null);

  const locations = useMemo(() => {
    const attractions: MapLocation[] = touristPlaces.map((p) => ({
      id: p.id,
      name: p.name,
      lat: p.location.lat,
      lng: p.location.lng,
      type: "attraction",
      category: p.type,
      image: p.image,
      description: p.description,
    }));

    const hotelLocs: MapLocation[] = hotels.map((h) => ({
      id: h.id,
      name: h.name,
      lat: h.location.lat,
      lng: h.location.lng,
      type: "hotel",
      category: h.category,
      image: h.image,
      rating: h.rating,
      price: `₹${h.pricePerNight}`,
      description: h.description,
    }));

    const foodLocs: MapLocation[] = restaurants.map((r) => ({
      id: r.id,
      name: r.name,
      lat: r.location?.lat || 8.737, // Fallback if missing
      lng: r.location?.lng || 76.716,
      type: "restaurant",
      category: r.category,
      image: r.image,
      rating: r.rating,
      price: `₹${r.priceRange}`,
      description: r.description,
    }));

    const shopLocs: MapLocation[] = shoppingSpots.map((s) => ({
      id: s.id,
      name: s.name,
      lat: s.location?.lat || 8.737, // Fallback if missing
      lng: s.location?.lng || 76.716,
      type: "shopping",
      category: s.category,
      image: s.image,
      price: s.priceRange,
      description: s.description,
    }));

    return [...attractions, ...hotelLocs, ...foodLocs, ...shopLocs];
  }, []);

  const filteredLocations = locations.filter((loc) => filter === "all" || loc.type === filter);

  const getIcon = (type: string) => {
    switch (type) {
      case "hotel": return hotelIcon;
      case "restaurant": return restaurantIcon;
      case "shopping": return shoppingIcon;
      default: return attractionIcon;
    }
  };

  return (
    <div style={{ height: 600, width: "100%", position: "relative", zIndex: 1, borderRadius: 24, overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)" }}>
      <MapContainer 
        center={[8.7375, 76.7150]} 
        zoom={13} 
        zoomControl={false}
        style={{ height: '100%', width: '100%', background: '#0a1628' }}
      >
        {/* Completely free dark mode map tiles from CartoDB */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        <ZoomControl position="topright" />

        {filteredLocations.map((loc) => (
          <Marker 
            key={loc.id} 
            position={[loc.lat, loc.lng]} 
            icon={getIcon(loc.type)}
            eventHandlers={{
              click: () => setActivePopup(loc.id),
            }}
          >
            <Popup 
              className="luxury-leaflet-popup"
              closeButton={true}
              minWidth={280}
              maxWidth={300}
            >
              <div style={{ 
                margin: "-14px -20px -14px -20px", 
                background: "rgba(10,22,40,0.95)",
                color: "white"
              }}>
                <div style={{ 
                  height: 120, 
                  backgroundImage: `url(${loc.image})`, 
                  backgroundSize: "cover", 
                  backgroundPosition: "center" 
                }} />
                <div style={{ padding: 16 }}>
                  <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: 1, color: "#14a085", marginBottom: 4 }}>
                    {loc.category}
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 600, margin: "0 0 8px 0", fontFamily: "var(--font-display)" }}>
                    {loc.name}
                  </h3>
                  <p style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", lineHeight: 1.5, margin: "0 0 12px 0" }}>
                    {loc.description.substring(0, 80)}...
                  </p>
                  
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 12 }}>
                    {loc.rating ? (
                      <div style={{ display: "flex", alignItems: "center", gap: 4, color: "#f1c40f", fontSize: 13, fontWeight: 600 }}>
                        <Star size={12} fill="#f1c40f" /> {loc.rating}
                      </div>
                    ) : (
                      <div />
                    )}
                    {loc.price && (
                      <div style={{ fontSize: 13, fontWeight: 600, color: "#4a9eff" }}>
                        {loc.price}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
