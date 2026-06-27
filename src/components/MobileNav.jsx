import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const MobileNav = ({ showBack = false, backPath = "/work" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const menuLinks = [
    { name: "Home", path: "/", num: "01" },
    { name: "Gallery", path: "/gallery", num: "02" },
    { name: "Work", path: "/work", num: "03" },
    { name: "About", path: "/about", num: "04" },
    { name: "Contact", path: "/contact", num: "05" },
  ];

  const drawerVariants = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: {
        type: "tween",
        duration: 0.38,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.06,
        delayChildren: 0.08,
      },
    },
    exit: {
      x: "100%",
      transition: {
        type: "tween",
        duration: 0.28,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.32, ease: [0.16, 1, 0.3, 1] },
    },
    exit: { opacity: 0 },
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <div className="md:hidden">
      {/* ── Mobile Top Bar ── */}
      <header
        className="fixed top-0 left-0 w-full z-40"
        style={{
          height: "64px",
          background: "rgba(0,0,0,0.90)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
        }}
      >
        {/* Left: logo or back */}
        {showBack ? (
          <Link
            to={backPath}
            style={{
              color: "rgba(255,255,255,0.80)",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "2px",
              textTransform: "uppercase",
              textDecoration: "none",
              padding: "14px 0",
              fontFamily: "Inter, sans-serif",
            }}
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            <span>Back</span>
          </Link>
        ) : (
          <Link
            to="/"
            style={{
              color: "#ffffff",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "3.5px",
              textTransform: "uppercase",
              textDecoration: "none",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Brielite
          </Link>
        )}

        {/* Right: hamburger */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          style={{
            background: "none",
            border: "none",
            color: "#ffffff",
            cursor: "pointer",
            padding: "12px",
            margin: "-12px -6px -12px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </header>

      {/* ── Drawer + Backdrop ── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={closeMenu}
              transition={{ duration: 0.25 }}
              style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,0.70)",
                backdropFilter: "blur(4px)",
                WebkitBackdropFilter: "blur(4px)",
                zIndex: 45,
              }}
            />

            {/* Drawer Panel */}
            <motion.div
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                width: "300px",
                maxWidth: "85vw",
                height: "100dvh",
                background: "#070707",
                borderLeft: "1px solid rgba(255,255,255,0.07)",
                zIndex: 50,
                display: "flex",
                flexDirection: "column",
                boxShadow: "-24px 0 80px rgba(0,0,0,0.65)",
              }}
            >
              {/* Drawer Header Row */}
              <div
                style={{
                  height: "64px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0 24px",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    color: "rgba(255,255,255,0.30)",
                    fontSize: "10px",
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    fontWeight: 600,
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  Menu
                </span>
                <button
                  onClick={closeMenu}
                  aria-label="Close Menu"
                  style={{
                    background: "none",
                    border: "none",
                    color: "rgba(255,255,255,0.55)",
                    cursor: "pointer",
                    padding: "10px",
                    margin: "-10px -10px -10px 0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Nav Links */}
              <nav
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  paddingTop: "16px",
                  paddingBottom: "16px",
                  overflowY: "auto",
                }}
              >
                {menuLinks.map((link) => (
                  <motion.div key={link.name} variants={linkVariants}>
                    <NavLink
                      to={link.path}
                      onClick={closeMenu}
                      style={({ isActive }) => ({
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "18px 28px",
                        textDecoration: "none",
                        borderBottom: "1px solid rgba(255,255,255,0.04)",
                        transition: "background 0.2s ease",
                        background: isActive ? "rgba(255,255,255,0.04)" : "transparent",
                        /* Apple HIG: min touch target 44px — this row is 56px total so fine */
                      })}
                    >
                      {({ isActive }) => (
                        <>
                          <span
                            style={{
                              fontSize: "21px",
                              fontWeight: isActive ? 600 : 300,
                              letterSpacing: isActive ? "-0.3px" : "0px",
                              color: isActive ? "#ffffff" : "rgba(255,255,255,0.50)",
                              fontFamily: "Inter, sans-serif",
                              transition: "color 0.2s ease, font-weight 0.2s ease",
                              lineHeight: 1,
                            }}
                          >
                            {link.name}
                          </span>
                          <span
                            style={{
                              fontSize: "10px",
                              color: isActive ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.15)",
                              fontFamily: "Inter, sans-serif",
                              letterSpacing: "1.5px",
                              fontWeight: 500,
                            }}
                          >
                            {link.num}
                          </span>
                        </>
                      )}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              {/* Drawer Footer */}
              <motion.div
                variants={linkVariants}
                style={{
                  padding: "18px 28px",
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    color: "rgba(255,255,255,0.18)",
                    fontSize: "9px",
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  Bilaize Studios
                </span>
                {/* Brand accent dot */}
                <div
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#b22222",
                  }}
                />
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;
