import { useEffect, useState } from "react";

// All work items — WorkPage se same list, yahan bhi chahiye other works ke liye
const ALL_WORK_ITEMS = [
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

export default function WorkDetailPage({ item, onBack, onProjectClick }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
    setTimeout(() => setVisible(true), 30);
    window.scrollTo(0, 0);
  }, [item?.id]);

  if (!item) return null;

  // Other works — current item ko hata ke 4 dikhao
  const otherWorks = ALL_WORK_ITEMS.filter((w) => w.id !== item.id).slice(0, 4);

  return (
    <div style={{
      width: "100%",
      minHeight: "100vh",
      background: "#0a0a0a",
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      opacity: visible ? 1 : 0,
      transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
    }}>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .other-work-link {
          font-family: 'Courier New', Courier, monospace;
          font-size: 14px;
          font-weight: bold;
          color: #cccccc;
          letter-spacing: 0.06em;
          cursor: pointer;
          line-height: 2;
          transition: color 0.2s ease, transform 0.2s ease;
          display: inline-block;
        }
        .other-work-link:hover {
          color: #ffffff;
          transform: translateX(6px);
        }
      `}</style>

      {/* Back arrow */}
      <div style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 300,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "56px",
        background: "rgba(10,10,10,0.7)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}>
        <button
          onClick={onBack}
          style={{
            background: "none", border: "none", cursor: "pointer",
            color: "#888888", display: "flex", alignItems: "center", padding: "8px",
            transition: "color 0.2s ease",
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = "#ffffff"}
          onMouseLeave={(e) => e.currentTarget.style.color = "#888888"}
        >
          <svg viewBox="0 0 24 24" style={{ width: "22px", height: "22px", fill: "currentColor" }}>
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
          </svg>
        </button>
      </div>

      {/* Hero image */}
      <div style={{
        position: "relative",
        width: "100%",
        height: "70vh",
        overflow: "hidden",
        marginTop: "56px",
      }}>
        <img
          src={item.imageUrl}
          alt={item.title}
          crossOrigin="anonymous"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.0) 30%, rgba(0,0,0,0.88) 100%)",
        }} />
        <div style={{
          position: "absolute", bottom: "32px", left: 0, right: 0,
          textAlign: "center",
          animation: "fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both",
        }}>
          <h1 style={{
            fontSize: "clamp(64px, 12vw, 130px)",
            fontFamily: "Georgia, serif",
            fontWeight: "400",
            color: "#d4b89a",
            margin: 0,
            letterSpacing: "-0.01em",
            lineHeight: "1",
          }}>
            {item.title.charAt(0).toUpperCase() + item.title.slice(1).toLowerCase()}
          </h1>
        </div>
      </div>

      {/* ABOUT + CREDITS */}
      <div style={{
        background: "#0a0a0a",
        padding: "64px 32px 80px",
        animation: "fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.25s both",
      }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "40px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}>
          {/* ABOUT */}
          <div style={{ flex: "0 0 55%", maxWidth: "620px" }}>
            <p style={{
              fontFamily: "'Courier New', Courier, monospace",
              fontSize: "11px", fontWeight: "bold", color: "#555555",
              letterSpacing: "0.12em", marginBottom: "28px", textTransform: "uppercase",
            }}>ABOUT</p>
            <p style={{
              fontFamily: "'Courier New', Courier, monospace",
              fontSize: "13px", color: "#cccccc", lineHeight: "1.9",
              letterSpacing: "0.04em", textTransform: "uppercase", margin: "0 0 28px 0",
            }}>
              {item.about1 || `${item.title} WAS BUILT FOR THOSE WHO THINK DIFFERENTLY. NOT AS A CEILING, BUT AS A STARTING POINT. WE DESIGN WORK THAT DOESN'T JUST CARRY PEOPLE — IT CARRIES CONVICTION. CLEAN LINES, QUIET POWER, AND AN OBSESSION WITH THE SPACE BETWEEN TAKEOFF AND EVERYTHING THAT COMES AFTER.`}
            </p>
            <p style={{
              fontFamily: "'Courier New', Courier, monospace",
              fontSize: "13px", color: "#cccccc", lineHeight: "1.9",
              letterSpacing: "0.04em", textTransform: "uppercase", margin: 0,
            }}>
              {item.about2 || `THE WORLD MOVES FAST. WE MOVE FASTER, BUT WITH INTENTION. EVERY PIECE IS THE RESULT OF RELENTLESS CRAFT AND A BELIEF THAT THE FUTURE SHOULD FEEL AS EFFORTLESS AS IT LOOKS — BECAUSE GETTING THERE IS ONLY THE BEGINNING.`}
            </p>
          </div>

          {/* CREDITS */}
          <div style={{ flex: "0 0 auto", textAlign: "right" }}>
            <p style={{
              fontFamily: "'Courier New', Courier, monospace",
              fontSize: "11px", fontWeight: "bold", color: "#555555",
              letterSpacing: "0.12em", marginBottom: "28px", textTransform: "uppercase",
            }}>CREDITS</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "flex-end" }}>
              {(item.credits || [
                { role: "PHOTOGRAPHY", name: "JONY" },
                { role: "DIRECTION", name: "JONY" },
              ]).map((c, i) => (
                <div key={i} style={{ display: "flex", gap: "24px", alignItems: "center" }}>
                  <span style={{
                    fontFamily: "'Courier New', Courier, monospace",
                    fontSize: "12px", color: "#666666", letterSpacing: "0.08em",
                  }}>{c.role}</span>
                  <span style={{
                    fontFamily: "'Courier New', Courier, monospace",
                    fontSize: "12px", fontWeight: "bold", color: "#ffffff", letterSpacing: "0.08em",
                  }}>{c.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* OTHER WORKS section — dark, right-aligned list + thumbnail grid */}
      <div style={{
        background: "#0a0a0a",
        padding: "0 32px 0",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          gap: "80px",
          padding: "60px 0 0",
          alignItems: "flex-start",
        }}>
          {/* Left — label + clickable names */}
          <div style={{ flex: "0 0 auto", minWidth: "160px" }}>
            <p style={{
              fontFamily: "'Courier New', Courier, monospace",
              fontSize: "11px", fontWeight: "bold", color: "#555555",
              letterSpacing: "0.12em", marginBottom: "20px", textTransform: "uppercase",
            }}>OTHER WORKS</p>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {otherWorks.map((w) => (
                <span
                  key={w.id}
                  className="other-work-link"
                  onClick={() => onProjectClick(w)}
                >
                  {w.title}
                </span>
              ))}
            </div>
          </div>

          {/* Right — 4 thumbnail images */}
          <div style={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "6px",
          }}>
            {otherWorks.map((w) => (
              <div
                key={w.id}
                onClick={() => onProjectClick(w)}
                style={{
                  position: "relative",
                  aspectRatio: "3/4",
                  overflow: "hidden",
                  cursor: "pointer",
                  borderRadius: "2px",
                  background: "#1a1a1a",
                }}
              >
                <img
                  src={w.imageUrl}
                  alt={w.title}
                  crossOrigin="anonymous"
                  style={{
                    width: "100%", height: "100%", objectFit: "cover", display: "block",
                    transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), filter 0.4s ease",
                    filter: "grayscale(30%) brightness(0.8)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.filter = "grayscale(0%) brightness(1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.filter = "grayscale(30%) brightness(0.8)";
                  }}
                />
                {/* Title overlay */}
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0,
                  padding: "20px 10px 10px",
                  background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                }}>
                  <span style={{
                    fontFamily: "'Courier New', Courier, monospace",
                    fontSize: "10px", fontWeight: "bold", color: "#ffffff",
                    letterSpacing: "0.08em",
                  }}>{w.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "60px 32px 40px",
        fontFamily: "Courier New, Courier, monospace",
        fontSize: "13px",
        fontWeight: "bold",
        color: "#444444",
        letterSpacing: "0.05em",
        marginTop: "60px",
        textTransform: "uppercase",
        maxWidth: "100%",
      }}>
        <div>© 2026 JONY</div>
        <div
          style={{ cursor: "pointer", transition: "color 0.2s", color: "#444444" }}
          onMouseEnter={(e) => e.currentTarget.style.color = "#ffffff"}
          onMouseLeave={(e) => e.currentTarget.style.color = "#444444"}
          onClick={() => alert("Contact Triggered")}
        >
          CONTACT
        </div>
      </footer>
    </div>
  );
}