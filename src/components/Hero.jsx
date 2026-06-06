import { useState } from "react";
import "../style/Hero.css";

const Hero = () => {
  const [ripples, setRipples] = useState([]);

  const createRipple = (e) => {
    for (let i = 0; i < 4; i++) {
      const ripple = document.createElement("span");
      ripple.className = "water-ripple";
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;
      ripple.style.animationDelay = `${i * 0.15}s`;
      document.body.appendChild(ripple);
      setTimeout(() => ripple.remove(), 2000);
    }
  };

  return (
    <section className="hero" onClick={createRipple}>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="hero-video"
      >
        <source
          src="https://cloudinary-marketing-res.cloudinary.com/video/upload/e_preview:duration_15:max_seg_9:min_seg_dur_1/q_auto/f_auto/surfing_travel.mp4"
          type="video/mp4"
        />
      </video>
      <div className="hero-overlay"></div>
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="ripple"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
          }}
        />
      ))}
      <div className="hero-content">
        <h1 className="hero-title">
          BRIELITE STUDIOS
        </h1>
      </div>
    </section>
  );
};

export default Hero;
