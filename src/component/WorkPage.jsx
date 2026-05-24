import { useState, useEffect } from "react";
import Header from "./Header";

const WORK_ITEMS = [
  { id: 1, title: "AER", category: "VIDEO", imageUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=90" },
  { id: 2, title: "IDENTITY 01", category: "CREATIVE DIRECTION", imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=90" },
  { id: 3, title: "STUDIO WEB", category: "WEB", imageUrl: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1600&q=90" },
  { id: 4, title: "GOLDEN HOUR", category: "PHOTO", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=90" },
  { id: 5, title: "BRAND FILM", category: "VIDEO", imageUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1600&q=90" },
  { id: 6, title: "LOOKBOOK", category: "CREATIVE DIRECTION", imageUrl: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1600&q=90" },
  { id: 7, title: "PORTFOLIO", category: "WEB", imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1600&q=90" },
  { id: 8, title: "STREETS", category: "PHOTO", imageUrl: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1600&q=90" },
  { id: 9, title: "MOTION REEL", category: "VIDEO", imageUrl: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1600&q=90" },
];

const FILTERS = ["ALL", "CREATIVE DIRECTION", "WEB", "VIDEO", "PHOTO"];

function WorkCard({ item, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "50vh",
        overflow: "hidden",
        cursor: "pointer",
        background: "#111",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      <img
        src={item.imageUrl}
        alt={item.title}
        crossOrigin="anonymous"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          transition: "filter 0.5s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
          filter: hovered ? "blur(8px) brightness(0.45)" : "grayscale(10%) brightness(1)",
          transform: hovered ? "scale(1.04)" : "scale(1)",
        }}
      />

      {/* Title label — normal state */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        padding: "40px 28px 20px",
        background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
        opacity: hovered ? 0 : 1,
        transition: "opacity 0.3s ease",
      }}>
        <span style={{
          fontFamily: "'Courier New', Courier, monospace",
          fontSize: "13px",
          fontWeight: "bold",
          color: "#ffffff",
          letterSpacing: "0.1em",
        }}>
          {item.title}
        </span>
        <span style={{
          fontFamily: "'Courier New', Courier, monospace",
          fontSize: "10px",
          color: "rgba(255,255,255,0.5)",
          letterSpacing: "0.08em",
        }}>
          {item.category}
        </span>
      </div>

      {/* Airplane — slides from right to center on hover */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: hovered
          ? "translate(-50%, -50%) scale(1)"
          : "translate(60vw, -50%) scale(0.7)",
        transition: "transform 0.55s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease",
        opacity: hovered ? 1 : 0,
        pointerEvents: "none",
        zIndex: 10,
      }}>
        <svg viewBox="0 0 24 24" style={{ width: "48px", height: "48px", fill: "#ffffff" }}>
          <path d="M21 16v-2l-8-5V3.5A1.5 1.5 0 0 0 11.5 2 1.5 1.5 0 0 0 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z"/>
        </svg>
      </div>

      {/* VIEW PROJECT text */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        marginTop: "38px",
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.4s ease 0.15s",
        pointerEvents: "none",
        textAlign: "center",
      }}>
        <span style={{
          fontFamily: "'Courier New', Courier, monospace",
          fontSize: "11px",
          fontWeight: "bold",
          color: "rgba(255,255,255,0.6)",
          letterSpacing: "0.15em",
        }}>
          VIEW PROJECT
        </span>
      </div>
    </div>
  );
}

// onProjectClick — parent (App.jsx) ko item pass karta hai detail page ke liye
export default function WorkPage({ onBack, onProjectClick }) {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 30);
  }, []);

  const filtered = activeFilter === "ALL"
    ? WORK_ITEMS
    : WORK_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <div style={{
      width: "100%",
      minHeight: "100vh",
      background: "#f4f3f1",
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      opacity: visible ? 1 : 0,
      transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
    }}>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .filter-item {
          font-family: 'Courier New', Courier, monospace;
          font-size: 13px;
          font-weight: bold;
          letter-spacing: 0.06em;
          cursor: pointer;
          color: #999999;
          transition: color 0.2s ease;
          line-height: 1.9;
          user-select: none;
          text-align: center;
        }
        .filter-item:hover { color: #000000; }
        .filter-item.active { color: #000000; }
      `}</style>

      <Header onBack={onBack} />

      {/* Title + Filters */}
      <div style={{
        padding: "80px 48px 52px",
        textAlign: "center",
        animation: "fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both",
      }}>
        <h1 style={{
          fontSize: "clamp(56px, 9vw, 110px)",
          fontFamily: "Georgia, serif",
          color: "#000000",
          fontWeight: "400",
          margin: "0 0 48px 0",
          letterSpacing: "-0.015em",
          lineHeight: "1.0",
        }}>
          The Work
        </h1>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          {FILTERS.map((f) => (
            <span
              key={f}
              className={`filter-item ${activeFilter === f ? "active" : ""}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </span>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "3px",
        width: "100%",
        animation: "fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both",
      }}>
        {filtered.map((item) => (
          <WorkCard
            key={item.id}
            item={item}
            onClick={() => onProjectClick(item)}
          />
        ))}
      </div>

      {/* Footer */}
      <footer style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "60px 48px 40px",
        fontFamily: "Courier New, Courier, monospace",
        fontSize: "13px",
        fontWeight: "bold",
        color: "#111111",
        letterSpacing: "0.05em",
        borderTop: "1px solid rgba(0,0,0,0.05)",
        marginTop: "60px",
        textTransform: "uppercase",
      }}>
        <div>© 2026 JONY</div>
        <div
          style={{ cursor: "pointer", transition: "opacity 0.2s" }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = "0.5"}
          onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
          onClick={() => alert("Contact Triggered")}
        >
          CONTACT
        </div>
      </footer>
    </div>
  );
} 