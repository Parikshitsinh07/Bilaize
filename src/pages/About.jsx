import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import MobileNav from "../components/MobileNav";
import archImg from "../assets/about-arch.jpg";
import studioWindowImg from "../assets/about-studio-window.jpg";
import "../style/About.css";

const tickerItems = [
  "STORIES THAT MOVE",
  "STRATEGY WITH A PULSE",
  "DESIGN WITH INTENT",
  "STORIES THAT MOVE",
  "STRATEGY WITH A PULSE",
  "DESIGN WITH INTENT",
];

const capabilities = [
  {
    number: "01",
    title: "Brand identities",
    description:
      "Strategy, naming, and visual systems built to stay clear as your business grows.",
    link: "/work",
  },
  {
    number: "02",
    title: "Digital experiences",
    description:
      "Editorial websites and product moments that turn attention into meaningful action.",
    link: "/work",
  },
  {
    number: "03",
    title: "Creative direction",
    description:
      "Campaign worlds, image-making, and launch systems with one unmistakable point of view.",
    link: "/work",
  },
  {
    number: "04",
    title: "Motion & content",
    description:
      "Flexible stories that move with culture, from first frame to full campaign.",
    link: "/work",
  },
];

const principles = [
  {
    num: "01",
    title: "Clarity first",
    desc: "We make the complex feel obvious without sanding away its character.",
  },
  {
    num: "02",
    title: "Built together",
    desc: "The best work comes from open rooms, candid feedback, and shared ownership.",
  },
  {
    num: "03",
    title: "Make it matter",
    desc: "Every element needs a reason to exist and a feeling worth remembering.",
  },
];

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="about-page-white"
    >
      {/* ── Top Navigation Bar (Figma Design) ─────────────────────────── */}
      <header className="about-navbar-white">
        <div className="about-nav-container">
          {/* Logo Badge: [ B | BRIELITE / STUDIO ] */}
          <Link to="/" className="about-boxed-logo">
            <span className="about-logo-badge">B</span>
            <span className="about-logo-text">BRIELITE / STUDIO</span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="about-nav-menu hidden md:flex">
            <Link to="/about" className="about-menu-link active">
              Studio
            </Link>
            <a href="#capabilities" className="about-menu-link">
              Capabilities
            </a>
            <a href="#point-of-view" className="about-menu-link">
              Principles
            </a>
            <a href="#how-we-work" className="about-menu-link">
              Process
            </a>
            <Link to="/work" className="about-menu-link">
              Work
            </Link>
            <Link to="/contact" className="about-menu-link">
              Contact
            </Link>
          </nav>

          {/* Start a Project Button */}
          <div className="flex items-center gap-4">
            <Link to="/contact" className="about-start-project-btn hidden md:inline-flex">
              <span>Start a Project</span>
              <span className="about-btn-arrow">↗</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <MobileNav />

      {/* ── Hero Section (White Background Edition) ───────────────────── */}
      <section className="about-hero-white">
        <div className="about-hero-grid">
          
          {/* Left Column: Heading & Intro */}
          <div className="about-hero-left-content">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="about-tag-independent"
            >
              <span className="about-tag-dash" />
              <span>Independent Creative Studio</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="about-hero-headlines"
            >
              <h1 className="about-title-solid-black">ABOUT</h1>
              <h1 className="about-title-outline-black">BRIELITE</h1>
            </motion.div>
          </div>

          {/* Right Column: Architectural Arch Doorway */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="about-hero-right-arch"
          >
            <div className="about-arch-card">
              <div className="about-arch-frame">
                <span className="about-arch-red-accent" />
                <img
                  src={archImg}
                  alt="Brielite Creative Direction"
                  className="about-arch-img-element"
                  loading="eager"
                />
              </div>
            </div>
          </motion.div>

        </div>

        {/* Hero Bottom Triad Row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="about-hero-triad-row"
        >
          {/* Left: Mission sentence */}
          <div className="about-triad-col-desc">
            We shape bold identities and digital worlds for brands ready to be seen, felt, and remembered.
          </div>

          {/* Center: Services / Location tag */}
          <div className="about-triad-col-middle">
            <span>Strategy · Design · Motion</span>
            <span>Working Everywhere</span>
          </div>

          {/* Right: Tagline */}
          <div className="about-triad-col-right">
            <span className="about-bright-tag">
              Bright ideas,<br />beautifully made
            </span>
          </div>
        </motion.div>
      </section>

      {/* ── Marquee Ticker: Red Bar ───────────────────────────────────── */}
      <div className="about-ticker-bar" aria-hidden="true">
        <div className="about-ticker-track">
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <div key={index} className="about-ticker-content">
              <span className="about-ticker-item">{item}</span>
              <span className="about-ticker-dot" />
            </div>
          ))}
        </div>
      </div>

      {/* ── Section: OUR POINT OF VIEW ───────────────────────────────── */}
      <section id="point-of-view" className="about-pov-section">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75 }}
        >
          <span className="about-pov-tag">Our Point of View</span>
          
          <h2 className="about-pov-heading">
            We believe bright ideas deserve more than decoration. They deserve a world of their own.
          </h2>

          <hr className="about-pov-divider" />

          <div className="about-pov-columns">
            <p className="about-pov-col-text">
              Brielite is an independent creative studio for people building what comes next. We work where strategy, identity, and digital experience overlap—turning ambitious thinking into brands with real presence.
            </p>
            <p className="about-pov-col-text">
              Small by design and curious by nature, we bring senior minds to every brief. No assembly lines. No mystery. Just close collaboration, sharp thinking, and work made to last.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ── Section: WHAT WE BRING (Capabilities List) ────────────────── */}
      <section id="capabilities" className="about-what-we-bring-section">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75 }}
        >
          <span className="about-bring-tag">What We Bring</span>

          <div className="about-bring-header-grid">
            <h2 className="about-bring-main-title">
              One studio.<br />
              Many ways to<br />
              make it <span className="text-red-highlight">brighter.</span>
            </h2>

            <p className="about-bring-header-desc">
              We build the whole world around an idea—from the first strategic question to the final moving frame.
            </p>
          </div>

          {/* Capabilities Row List */}
          <div className="about-capabilities-list">
            {capabilities.map((cap, idx) => (
              <motion.div
                key={cap.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Link to={cap.link} className="about-capability-row">
                  <span className="about-cap-num">{cap.number}</span>
                  <h3 className="about-cap-title">{cap.title}</h3>
                  <p className="about-cap-desc">{cap.description}</p>
                  <span className="about-cap-arrow-btn">↗</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── Section: OUR DIFFERENCE (Split Image + Crimson Block) ────── */}
      <section className="about-difference-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="about-difference-banner"
        >
          {/* Left Photographic Half */}
          <div className="about-diff-left-image">
            <img
              src={studioWindowImg}
              alt="Brielite Studio Workspace"
              className="about-diff-img"
              loading="lazy"
            />
            <div className="about-diff-badge">Inside the Studio</div>
          </div>

          {/* Right Solid Crimson Half */}
          <div className="about-diff-right-block">
            <div>
              <span className="about-diff-tag">Our Difference</span>
              <h2 className="about-diff-headline">
                <span className="about-diff-headline-light">Small team.</span>
                <span className="about-diff-headline-sub">Big energy.</span>
              </h2>
            </div>

            <div>
              <hr className="about-diff-divider" />
              <div className="about-diff-stats-row">
                <div className="about-diff-stat-item">
                  <span className="about-diff-stat-num">7</span>
                  <span className="about-diff-stat-label">Core Collaborators</span>
                </div>
                <div className="about-diff-stat-item">
                  <span className="about-diff-stat-num">11</span>
                  <span className="about-diff-stat-label">Time Zones Explored</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Section: HOW WE WORK ─────────────────────────────────────── */}
      <section id="how-we-work" className="about-how-we-work-section">
        <div className="about-hww-grid">
          {/* Left: Headline */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75 }}
            className="about-hww-left"
          >
            <span className="about-hww-tag">How We Work</span>
            <h2 className="about-hww-title">
              Serious<br />
              about the<br />
              work.<br />
              <span className="about-hww-italic">Never precious.</span>
            </h2>
          </motion.div>

          {/* Right: Principles list */}
          <div className="about-hww-right">
            {principles.map((item, idx) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="about-hww-item"
              >
                <span className="about-hww-num">{item.num}</span>
                <h3 className="about-hww-item-title">{item.title}</h3>
                <p className="about-hww-item-desc">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section: Giant Red CTA Banner Card ───────────────────────── */}
      <section className="about-cta-card-section">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="about-cta-banner-card"
        >
          <div className="about-cta-corner-arc top-left" aria-hidden="true" />
          <div className="about-cta-corner-arc bottom-right" aria-hidden="true" />
          <span className="about-cta-subtitle">Have a bright idea?</span>
          <h2 className="about-cta-giant-headline">
            Let's make it<br />
            impossible to<br />
            ignore.
          </h2>
          <a href="mailto:hello@brielite.studio" className="about-cta-email-btn">
            <span>HELLO@BRIELITE.STUDIO</span>
            <span className="about-btn-arrow">↗</span>
          </a>
        </motion.div>
      </section>

      {/* ── Global Footer ───────────────────────────────────────────── */}
      <Footer />
    </motion.div>
  );
};

export default About;
