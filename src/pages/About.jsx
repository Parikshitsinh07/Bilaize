import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../style/About.css";
import aboutImg from "../assets/Interior-optimized/Artefino/BRIELITE_ARTEFINO_FinalPhotographs (1 of 60).webp"; // Placeholder image
import officeImg from "../assets/Interior-optimized/Aranya farms/BRIELITE-1-3.webp"; // Placeholder image for office

const About = () => {
  const [hoveredService, setHoveredService] = useState(1); // Default to second item like the screenshot

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="about-wrapper"
    >
      <Header />
      
      {/* 1. Hero Section */}
      <section className="about-hero">
        <div className="about-hero-top">
          <span className="red-line"></span>
          <span className="about-hero-badge">INDEPENDENT CREATIVE STUDIO</span>
        </div>
        
        <div className="about-hero-main">
          <div className="about-hero-title">
            <h1 className="title-solid">ABOUT</h1>
            <h1 className="title-outline">BRIELITE</h1>
          </div>
          
          <div className="about-hero-image-wrapper">
            <div className="about-hero-image-arch">
              {/* Using a placeholder from available assets */}
              <img src={aboutImg} alt="Brielite Creative Studio" />
            </div>
            <div className="red-circle"></div>
          </div>
        </div>

        <div className="about-hero-footer">
          <p className="hero-desc-left">
            We shape bold identities and digital worlds for brands ready to be seen, felt, and remembered.
          </p>
          <p className="hero-desc-center">
            STRATEGY • DESIGN • MOTION<br />
            WORKING EVERYWHERE
          </p>
          <p className="hero-desc-right">
            BRIGHT IDEAS,<br />
            BEAUTIFULLY MADE
          </p>
        </div>
      </section>

      {/* 2. POV Section */}
      <section className="about-pov">
        <div className="pov-label">
          <span>OUR POINT OF VIEW</span>
        </div>
        
        <div className="pov-content">
          <h2 className="pov-statement">
            We believe bright ideas deserve more than decoration. They deserve a world of their own.
          </h2>
          
          <div className="pov-divider"></div>
          
          <div className="pov-columns">
            <p className="pov-col">
              Brielite is an independent creative studio for people building what comes next. We work where strategy, identity, and digital experience overlap—turning ambitious thinking into brands with real presence.
            </p>
            <p className="pov-col">
              Small by design and curious by nature, we bring senior minds to every brief. No assembly lines. No mystery. Just close collaboration, sharp thinking, and work made to last.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Services Section */}
      <section className="about-services">
        <div className="services-container">
          <div className="services-header">
            <span className="services-badge">WHAT WE BRING</span>
            <div className="services-title-area">
              <h2 className="services-title">
                One studio.<br />
                Many ways to<br />
                make it <span className="text-red">brighter.</span>
              </h2>
              <p className="services-desc">
                We build the whole world around an idea—from the first strategic question to the final moving frame.
              </p>
            </div>
          </div>
          
          <div className="services-list" onMouseLeave={() => setHoveredService(1)}>
            {[
              {
                num: "01",
                name: "Brand identities",
                info: "Strategy, naming, and visual systems built to stay clear as your business grows.",
              },
              {
                num: "02",
                name: "Digital experiences",
                info: "Editorial websites and product moments that turn attention into meaningful action.",
              },
              {
                num: "03",
                name: "Creative direction",
                info: "Campaign worlds, image-making, and launch systems with one unmistakable point of view.",
              },
              {
                num: "04",
                name: "Motion & content",
                info: "Flexible stories that move with culture, from first frame to full campaign.",
              },
            ].map((service, index) => {
              const isActive = hoveredService === index;
              return (
                <div 
                  key={index} 
                  className={`service-item ${isActive ? "active" : ""}`}
                  onMouseEnter={() => setHoveredService(index)}
                >
                  <span className="service-num">{service.num}</span>
                  <h3 className="service-name">{service.name}</h3>
                  <p className="service-info">{service.info}</p>
                  <div className={`service-arrow ${isActive ? "arrow-filled" : ""}`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      {isActive ? (
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      ) : (
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                      )}
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Stats Section */}
      <section className="about-stats">
        <div className="stats-image-col">
          <img src={officeImg} alt="Studio interior" className="stats-bg-img" />
          <div className="stats-image-overlay"></div>
          <button className="inside-studio-btn">INSIDE THE STUDIO</button>
        </div>
        <div className="stats-content-col">
          <span className="stats-badge">OUR DIFFERENCE</span>
          <h2 className="stats-title">
            Small team.<br />
            <span>Big energy.</span>
          </h2>
          <div className="stats-divider"></div>
          <div className="stats-numbers">
            <div className="stat-box">
              <span className="stat-num">7</span>
              <span className="stat-label">CORE COLLABORATORS</span>
            </div>
            <div className="stat-box">
              <span className="stat-num">11</span>
              <span className="stat-label">TIME ZONES EXPLORED</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. How We Work Section */}
      <section className="about-workflow">
        <div className="workflow-left">
          <span className="workflow-badge">HOW WE WORK</span>
          <h2 className="workflow-title">
            Serious<br />
            about the<br />
            work.<br />
            <span className="workflow-title-italic">Never<br />precious.</span>
          </h2>
        </div>
        <div className="workflow-right">
          <div className="workflow-item">
            <span className="workflow-num">01</span>
            <h3 className="workflow-name">Clarity first</h3>
            <p className="workflow-desc">We make the complex feel obvious without sanding away its character.</p>
          </div>
          <div className="workflow-item">
            <span className="workflow-num">02</span>
            <h3 className="workflow-name">Built together</h3>
            <p className="workflow-desc">The best work comes from open rooms, candid feedback, and shared ownership.</p>
          </div>
          <div className="workflow-item">
            <span className="workflow-num">03</span>
            <h3 className="workflow-name">Make it matter</h3>
            <p className="workflow-desc">Every element needs a reason to exist and a feeling worth remembering.</p>
          </div>
        </div>
      </section>

      {/* 6. CTA Section */}
      <section className="about-cta-section">
        <motion.div 
          className="cta-container"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="cta-circle-tl"></div>
          <div className="cta-circle-br"></div>
          
          <motion.span 
            className="cta-badge"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 0.8, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            HAVE A BRIGHT IDEA?
          </motion.span>
          
          <motion.h2 
            className="cta-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            LET'S MAKE IT<br />
            IMPOSSIBLE<br />
            TO IGNORE.
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Link to="/contact" className="cta-button">
              HELLO@BRIELITE.STUDIO <span className="cta-button-arrow">↗</span>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default About;
