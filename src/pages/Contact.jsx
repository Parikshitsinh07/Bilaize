import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../style/Contact.css";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <Header />
      <div className="contact-page">
        <div className="contact-container">
          <h1 className="contact-title">Get In Touch</h1>
          <p className="contact-subtitle">
            Let’s talk about what you’re building. I’d love to help.
          </p>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label className="form-label">Name</label>
              <input 
                type="text" 
                placeholder="Full Name" 
                className="form-input" 
                required 
              />
            </div>

            <div className="form-group">
              <label className="form-label">Email</label>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="form-input" 
                required 
              />
            </div>

            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea 
                placeholder="Write your message" 
                className="form-textarea" 
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default Contact;
