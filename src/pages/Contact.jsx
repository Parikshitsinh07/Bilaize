import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import emailjs from "@emailjs/browser";
import { SelectOption } from "../data/data";
import "../style/Contact.css";

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("idle"); // "idle", "sending", "success", "error"
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [category, setCategory] = useState("");

  const fullName = `${firstName} ${lastName}`.trim();

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_ajh6o0a",
        "template_zqcqp2s",
        formRef.current,
        "M73L59tIPoWjsnmw1"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setStatus("success");
          setFirstName("");
          setLastName("");
          formRef.current.reset();
          setTimeout(() => setStatus("idle"), 5000);
        },
        (error) => {
          console.error("Email sending failed:", error.text);
          setStatus("error");
          setTimeout(() => setStatus("idle"), 5000);
        }
      );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{ background: "#ffffff" }}
    >
      <Header />
      <div className="contact-page-v2">
        <div className="contact-wrapper-v2">
          
          {/* Giant Title */}
          <h1 className="contact-main-title">Contact <span className="highlight-red">us</span></h1>

          {/* Split Content Column Grid */}
          <div className="contact-grid-v2">
            
            {/* Left Column: Info details */}
            <div className="contact-info-col-v2">
              <p className="info-detail-text">
                <a href="mailto:hello@brielite.com">hello@brielite.com</a>
              </p>
              <p className="info-detail-text">
                <a href="tel:+612058698720">(555) 555-5555</a>
              </p>
              <p className="info-detail-text address-detail">
                123 Demo Street <br />
                New York, NY 12345
              </p>
            </div>

            {/* Right Column: Underline Form */}
            <div className="contact-form-col-v2">
              <form ref={formRef} className="minimal-contact-form" onSubmit={handleSubmit}>
                {/* Hidden input for combined name matching EmailJS schema */}
                <input type="hidden" name="from_name" value={fullName} />

                {/* Name Group */}
                <div className="form-group-v2">
                  <label className="field-main-label">Name (required)</label>
                  <div className="name-inputs-row">
                    <div className="name-field-sub">
                      <label className="field-sub-label">First Name</label>
                      <input 
                        type="text" 
                        required 
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="minimal-input"
                      />
                    </div>
                    <div className="name-field-sub">
                      <label className="field-sub-label">Last Name</label>
                      <input 
                        type="text" 
                        required 
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="minimal-input"
                      />
                    </div>
                  </div>
                </div>

                {/* Email Group */}
                <div className="form-group-v2">
                  <label className="field-main-label">Email(required)</label>
                  <input 
                    type="email" 
                    name="from_email" 
                    required 
                    className="minimal-input"
                  />
                </div>

                {/* Category Group */}
                <div className="form-group-v2">
                  <label className="field-main-label">Category(required)</label>
                  <select
                    name="category"
                    required
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="minimal-input"
                  >
                    <option value="" disabled>Select a category</option>
                    {SelectOption.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Mobile Number Group */}
                <div className="form-group-v2">
                  <label className="field-main-label">Mobile Number(required)</label>
                  <input 
                    type="tel" 
                    name="from_phone" 
                    required 
                    className="minimal-input"
                  />
                </div>

                {/* Message Group */}
                <div className="form-group-v2">
                  <label className="field-main-label">Message</label>
                  <textarea 
                    name="message" 
                    className="minimal-textarea"
                  ></textarea>
                </div>

                {/* Action Row */}
                <div className="form-action-row">
                  <button type="submit" className="minimal-submit-btn" disabled={status === "sending"}>
                    {status === "sending" ? "SENDING..." : "SUBMIT"}
                  </button>
                </div>

                {/* Status Messages */}
                {status === "success" && (
                  <p className="form-status-msg success">
                    Thank you! Your message has been sent successfully.
                  </p>
                )}
                {status === "error" && (
                  <p className="form-status-msg error">
                    Oops! Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </div>
            
          </div>

        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default Contact;
