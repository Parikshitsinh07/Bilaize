import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../style/About.css";

const About = () => {
  return (
    <>
      <Header />
      <div className="about-page">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Intro Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="about-intro-badge">
              Creative Studio. Digital Artisans. Brand Builders.
            </div>
            <h1 className="about-title">
              About Brielite
            </h1>
            <p className="about-description">
              Brielite Studios is a multidisciplinary creative collective driven by the pursuit of beauty in restraint. We believe design isn’t about adding more — it’s about revealing what matters. Our work blends minimalism, rhythm, and emotion to create digital interfaces, brand identities, and visual experiences that feel inevitable.
            </p>
          </motion.div>

          <div className="divider"></div>

          {/* Metrics Grid */}
          <motion.section 
            className="mb-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="metrics-grid">
              <div className="metric-item">
                <span className="metric-label">FROM CONCEPT</span>
                <span className="metric-value">To Visual Identity</span>
              </div>
              <div className="metric-item">
                <span className="metric-label">PROUDLY COMPLETED</span>
                <span className="metric-value">50+ Projects</span>
              </div>
              <div className="metric-item">
                <span className="metric-label">BUILT FOR</span>
                <span className="metric-value">Maximum Interaction</span>
              </div>
              <div className="metric-item">
                <span className="metric-label">SYSTEMS EXPERTISE</span>
                <span className="metric-value">Brand, Web & Motion</span>
              </div>
            </div>
          </motion.section>

          <div className="divider"></div>

          {/* Experience Section */}
          <motion.section 
            className="mb-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="about-section-heading">Our Timeline</h3>
            <div className="experience-list">
              <div className="experience-item">
                <div className="experience-years">2024 - Present</div>
                <div className="experience-detail">
                  <h4>Interactive Installations & Web Apps</h4>
                  <p>Shaping premium web experiences, micro-animations, and fluid frontends that captivate users.</p>
                </div>
              </div>
              <div className="experience-item">
                <div className="experience-years">2022 - 2024</div>
                <div className="experience-detail">
                  <h4>Brand Architecture & Digital Systems</h4>
                  <p>Aligning structural strategy with raw visual aesthetics to build cohesive products.</p>
                </div>
              </div>
              <div className="experience-item">
                <div className="experience-years">2020 - 2022</div>
                <div className="experience-detail">
                  <h4>Motion Design & Cinematic Art</h4>
                  <p>Telling rhythmic stories through motion graphics, interactive assets, and video productions.</p>
                </div>
              </div>
            </div>
          </motion.section>

          <div className="divider"></div>

          {/* Mantra Section */}
          <motion.section 
            className="mantra-section"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="mantra-text">
              “Design isn’t about adding more. It’s about uncovering what’s already there.”
            </p>
          </motion.section>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
