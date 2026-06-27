import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { categories } from "../data/works";
import "../style/WorkList.css";

const WorkList = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  // Motion values for tracking cursor position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for cursor tracking
  const springConfig = { damping: 25, stiffness: 220, mass: 0.6 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Track rotate transition based on movement
  const rotateValue = useMotionValue(0);
  const smoothRotate = useSpring(rotateValue, springConfig);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseMove = (e) => {
    if (isMobile) return;
    
    // Get mouse position relative to container
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      mouseX.set(x);
      mouseY.set(y);

      // Add dynamic rotation based on cursor's horizontal position
      const relativeX = (e.clientX - rect.left) / rect.width;
      rotateValue.set((relativeX - 0.5) * 12); // Tilted left or right
    }
  };

  const handleMouseEnter = (index) => {
    if (isMobile) return;
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    setHoveredIndex(null);
    rotateValue.set(0);
  };

  return (
    <div 
      ref={containerRef}
      className="work-list-container"
      onMouseMove={handleMouseMove}
    >
      {/* Work Page Header Tagline */}
      <header className="work-list-header">
        <span className="work-header-eyebrow">Selected Work</span>
        <h1 className="work-header-title">
          Designing spaces, interfaces, <br />
          and identities that feel inevitable.
        </h1>
      </header>

      {isMobile ? (
        // Mobile Layout: Stunning Full Screen Category Cards Grid
        <div className="work-mobile-grid">
          {categories.map((category) => (
            <Link 
              key={category.slug}
              to={`/work/${category.slug}`}
              className="work-mobile-card"
            >
              <div 
                className="work-mobile-card-bg"
                style={{ backgroundImage: `url(${category.cover})` }}
              />
              <div className="work-mobile-card-overlay" />
              <div className="work-mobile-card-content">
                <span className="work-mobile-num">{category.label}</span>
                <h2 className="work-mobile-title">{category.title}</h2>
                <p className="work-mobile-desc">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        // Desktop Layout: Interactive Hover List
        <div className="work-desktop-list">
          <div className="work-list-items">
            {categories.map((category, index) => {
              const isHovered = hoveredIndex === index;
              const isAnyHovered = hoveredIndex !== null;
              
              return (
                <Link
                  key={category.slug}
                  to={`/work/${category.slug}`}
                  className={`work-list-item ${isHovered ? "active" : ""} ${isAnyHovered && !isHovered ? "dimmed" : ""}`}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <span className="item-number">{category.label}</span>
                  <span className="item-text">{category.title}</span>
                  <span className="item-arrow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* Floating Image Portal */}
      {!isMobile && (
        <motion.div
          className="floating-image-wrapper"
          style={{
            x: smoothX,
            y: smoothY,
            rotate: smoothRotate,
            translateX: "60px", // Shifted to the right of the cursor to prevent overlapping the text
            translateY: "-50%",
            pointerEvents: "none",
          }}
          animate={{
            scale: hoveredIndex !== null ? 1 : 0,
            opacity: hoveredIndex !== null ? 1 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 350,
            damping: 30,
          }}
        >
          <div className="floating-image-container">
            {categories.map((category, index) => (
              <img
                key={category.slug}
                src={category.cover}
                alt={category.title}
                className={`floating-image-el ${hoveredIndex === index ? "active" : ""}`}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  opacity: hoveredIndex === index ? 1 : 0,
                  transition: "opacity 0.3s ease-in-out",
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default WorkList;
