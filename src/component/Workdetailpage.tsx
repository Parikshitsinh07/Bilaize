import { useEffect, useState } from "react";

interface Credit {
  role: string;
  name: string;
}

interface WorkItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  about1?: string;
  about2?: string;
  credits?: Credit[];
}

interface WorkDetailPageProps {
  item: WorkItem | null;
  onBack: () => void;
  onProjectClick: (item: WorkItem) => void;
}

// All work items
const ALL_WORK_ITEMS: WorkItem[] = [
  {
    id: 1,
    title: "AER",
    category: "VIDEO",
    imageUrl:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=90",
  },
  {
    id: 2,
    title: "IDENTITY 01",
    category: "CREATIVE DIRECTION",
    imageUrl:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=90",
  },
  {
    id: 3,
    title: "STUDIO WEB",
    category: "WEB",
    imageUrl:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1600&q=90",
  },
  {
    id: 4,
    title: "GOLDEN HOUR",
    category: "PHOTO",
    imageUrl:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=90",
  },
  {
    id: 5,
    title: "BRAND FILM",
    category: "VIDEO",
    imageUrl:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1600&q=90",
  },
  {
    id: 6,
    title: "LOOKBOOK",
    category: "CREATIVE DIRECTION",
    imageUrl:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1600&q=90",
  },
  {
    id: 7,
    title: "PORTFOLIO",
    category: "WEB",
    imageUrl:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1600&q=90",
  },
  {
    id: 8,
    title: "STREETS",
    category: "PHOTO",
    imageUrl:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1600&q=90",
  },
  {
    id: 9,
    title: "MOTION REEL",
    category: "VIDEO",
    imageUrl:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1600&q=90",
  },
];

export default function WorkDetailPage({
  item,
  onBack,
  onProjectClick,
}: WorkDetailPageProps) {
  const [visible, setVisible] = useState(false);

  // Slider state
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setVisible(false);

    const timer = setTimeout(() => {
      setVisible(true);
    }, 30);

    window.scrollTo(0, 0);

    return () => clearTimeout(timer);
  }, [item?.id]);

  // Auto slider animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 4);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  if (!item) return null;

  const otherWorks = ALL_WORK_ITEMS.filter(
    (w) => w.id !== item.id
  ).slice(0, 4);

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "#0a0a0a",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        opacity: visible ? 1 : 0,
        transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
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

        .slider-track {
          display: flex;
          width: 400%;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .slider-slide {
          min-width: 100%;
          position: relative;
          overflow: hidden;
        }

        .slider-slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .slider-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 20px;
        }

        .slider-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255,255,255,0.25);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .slider-dot.active {
          background: #ffffff;
          transform: scale(1.3);
        }
      `}</style>

      {/* Back button */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 300,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "56px",
          background: "rgba(10,10,10,0.7)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
      >
        <button
          onClick={onBack}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#888888",
            display: "flex",
            alignItems: "center",
            padding: "8px",
            transition: "color 0.2s ease",
          }}
        >
          <svg
            viewBox="0 0 24 24"
            style={{
              width: "22px",
              height: "22px",
              fill: "currentColor",
            }}
          >
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
          </svg>
        </button>
      </div>

      {/* HERO SLIDER */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "70vh",
          overflow: "hidden",
          marginTop: "56px",
        }}
      >
        <div
          className="slider-track"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {otherWorks.map((slide) => (
            <div key={slide.id} className="slider-slide">
              <img
                src={slide.imageUrl}
                alt={slide.title}
                crossOrigin="anonymous"
              />

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.0) 30%, rgba(0,0,0,0.88) 100%)",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  bottom: "32px",
                  left: 0,
                  right: 0,
                  textAlign: "center",
                  animation:
                    "fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) both",
                }}
              >
                <h1
                  style={{
                    fontSize: "clamp(64px, 12vw, 130px)",
                    fontFamily: "Georgia, serif",
                    fontWeight: "400",
                    color: "#d4b89a",
                    margin: 0,
                    letterSpacing: "-0.01em",
                    lineHeight: "1",
                  }}
                >
                  {slide.title}
                </h1>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 10,
          }}
        >
          <div className="slider-dots">
            {otherWorks.map((_, index) => (
              <div
                key={index}
                className={`slider-dot ${
                  currentSlide === index ? "active" : ""
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <div
        style={{
          background: "#0a0a0a",
          padding: "64px 32px 80px",
          animation:
            "fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.25s both",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "40px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <div style={{ flex: "0 0 55%", maxWidth: "620px" }}>
            <p
              style={{
                fontFamily: "'Courier New', Courier, monospace",
                fontSize: "11px",
                fontWeight: "bold",
                color: "#555555",
                letterSpacing: "0.12em",
                marginBottom: "28px",
                textTransform: "uppercase",
              }}
            >
              ABOUT
            </p>

            <p
              style={{
                fontFamily: "'Courier New', Courier, monospace",
                fontSize: "13px",
                color: "#cccccc",
                lineHeight: "1.9",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
            >
              {item.about1 ||
                `${item.title} WAS BUILT FOR THOSE WHO THINK DIFFERENTLY.`}
            </p>
          </div>
        </div>
      </div>

      {/* OTHER WORKS */}
      <div
        style={{
          background: "#0a0a0a",
          padding: "0 32px",
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "60px 0",
          }}
        >
          <p
            style={{
              fontFamily: "'Courier New', Courier, monospace",
              fontSize: "11px",
              fontWeight: "bold",
              color: "#555555",
              letterSpacing: "0.12em",
              marginBottom: "20px",
              textTransform: "uppercase",
            }}
          >
            OTHER WORKS
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
              gap: "20px",
            }}
          >
            {otherWorks.map((w) => (
              <div
                key={w.id}
                onClick={() => onProjectClick(w)}
                style={{
                  cursor: "pointer",
                }}
              >
                <img
                  src={w.imageUrl}
                  alt={w.title}
                  style={{
                    width: "100%",
                    aspectRatio: "3/4",
                    objectFit: "cover",
                  }}
                />

                <div
                  style={{
                    marginTop: "12px",
                    color: "#ffffff",
                    fontFamily: "'Courier New', Courier, monospace",
                    fontSize: "12px",
                    letterSpacing: "0.08em",
                  }}
                >
                  {w.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "60px 32px 40px",
          fontFamily: "Courier New, Courier, monospace",
          fontSize: "13px",
          fontWeight: "bold",
          color: "#444444",
          letterSpacing: "0.05em",
          textTransform: "uppercase",
        }}
      >
        <div>© 2026 JONY</div>

        <div
          style={{
            cursor: "pointer",
            transition: "color 0.2s",
          }}
        >
          CONTACT
        </div>
      </footer>
    </div>
  );
}