import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedinIn, FaYoutube, FaBehance } from "react-icons/fa";
import { motion } from "framer-motion";
import aranya1 from "../assets/Interior-optimized/Aranya farms/20250428-DSC03430-HDR.webp";
import "../style/Footer.css";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.06,
      },
    },
  };

  const charVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <footer className="brielite-footer">
      <div className="footer-main-container">
        {/* Left Section: CTA */}
        <div className="footer-cta-section">
          <h2 className="footer-cta-title">
            Have a Project <br />
            in Mind? <br />
            Let's <span className="text-red-accent">Connect.</span>
          </h2>
          <Link to="/contact" className="footer-connect-btn" onClick={handleScrollToTop}>
            <span>Connect With Us</span>
            <span className="arrow-box">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
              </svg>
            </span>
          </Link>
        </div>

        {/* Right Section: Info Grid */}
        <div className="footer-info-grid">
          {/* Location Column */}
          <div className="footer-grid-column">
            <h3 className="footer-column-title">Location</h3>
            <p className="footer-column-text">
              1330 Huffman Rd, Anchorage,
              <br />
              Alaska, United States
            </p>
          </div>

          {/* Connect Column */}
          <div className="footer-grid-column">
            <h3 className="footer-column-title">Connect</h3>
            <ul className="footer-social-links">
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="social-icon" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn className="social-icon" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  <FaYoutube className="social-icon" />
                  <span>YouTube</span>
                </a>
              </li>
              <li>
                <a href="https://behance.net" target="_blank" rel="noopener noreferrer">
                  <FaBehance className="social-icon" />
                  <span>Behance</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer-grid-column">
            <h3 className="footer-column-title">Contact</h3>
            <p className="footer-column-text contact-info">
              <a href="tel:+612058698720">+61 2 058 6987 20</a>
              <br />
              <a href="mailto:hello@brielite.com">hello@brielite.com</a>
            </p>
          </div>

          {/* Helpful Links Column */}
          <div className="footer-grid-column">
            <h3 className="footer-column-title">Helpful Links</h3>
            <ul className="footer-nav-links">
              <li>
                <Link to="/about" onClick={handleScrollToTop}>About Us</Link>
              </li>
              {/* <li>
                <Link to="/contact" onClick={handleScrollToTop}>Services</Link>
              </li> */}
              <li>
                <Link to="/work" onClick={handleScrollToTop}>Our Work</Link>
              </li>
              {/* <li>
                <Link to="/contact" onClick={handleScrollToTop}>Blog</Link>
              </li>
              <li>
                <Link to="/contact" onClick={handleScrollToTop}>Careers</Link>
              </li>
              <li>
                <Link to="/contact" onClick={handleScrollToTop}>Privacy Policy</Link>
              </li> */}
            </ul>
          </div>
        </div>
      </div>

      {/* Separator Divider Line */}
      <hr className="footer-divider" />

      {/* Bottom Sub-footer */}
      <div className="footer-bottom-row">
        <span className="footer-copyright">© Brielite 2025</span>
        <span className="footer-heart-credit">
          <span className="heart-icon">❤️</span> Made with Love by BRIELITE
        </span>
      </div>

      {/* Massive Brand Banner at Bottom */}
      <div className="footer-brand-banner">
        <div className="banner-bg-texture" style={{ backgroundImage: `url(${aranya1})` }} />
        <div className="banner-bg-overlay" />
        <motion.h1 
          className="banner-brand-text"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {"BRIELITE".split("").map((char, charIdx) => (
            <span key={charIdx} className="footer-char-wrapper">
              <motion.span variants={charVariants} className="footer-char-inner">
                {char}
              </motion.span>
            </span>
          ))}
        </motion.h1>
      </div>
    </footer>
  );
};

export default Footer;

