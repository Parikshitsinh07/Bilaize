import { useState } from "react";
import { motion } from "framer-motion";
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

  const titleText = "BILAIZE STUDIOS";

  // Animation variants for staggered character reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 3.4, // Wait for splash screen wave expansion
      },
    },
  };

  const charVariants = {
    hidden: { y: "100%" },
    visible: {
      y: "0%",
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Smooth cubic-bezier ease
      },
    },
  };

  return (
    <section className="hero" onClick={createRipple}>
      {/* Vimeo background video */}
      <iframe
        src="https://player.vimeo.com/video/1199142896?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
        className="hero-video"
        allow="autoplay; fullscreen"
        frameBorder="0"
        title="Hero Background"
      />
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
        <motion.h1 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hero-title-reveal"
        >
          {titleText.split(" ").map((word, wordIdx) => (
            <span key={wordIdx} className="word-wrapper">
              {word.split("").map((char, charIdx) => (
                <span key={charIdx} className="char-wrapper">
                  <motion.span variants={charVariants} className="char-inner">
                    {char}
                  </motion.span>
                </span>
              ))}
              {/* Add space between words */}
              <span className="char-wrapper">&nbsp;</span>
            </span>
          ))}
        </motion.h1>
      </div>
    </section>
  );
};

export default Hero;
