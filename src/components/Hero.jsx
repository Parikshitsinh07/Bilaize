import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SplashScreen from "./SplashScreen";
import "../style/Hero.css";

const Hero = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Minimum display time = 4300ms so SplashScreen always
  // completes its animation (even on cached fast loads)
  useEffect(() => {
    const timer = setTimeout(() => setVideoLoaded(true), 4300);
    return () => clearTimeout(timer);
  }, []);

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

  const titleText = "BRIELITE STUDIOS";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 5.3,
      },
    },
  };

  const charVariants = {
    hidden: { opacity: 0, filter: "blur(16px)" },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="hero" onClick={createRipple}>

      {/* Show SplashScreen while Vimeo video is loading */}
      <AnimatePresence>
        {!videoLoaded && (
          <div style={{ position: "absolute", inset: 0, zIndex: 30 }}>
            <SplashScreen />
          </div>
        )}
      </AnimatePresence>

      {/* Vimeo background embed */}
      <div className="hero-vimeo-wrapper">
        <iframe
          src="https://player.vimeo.com/video/1199142896?background=1&autoplay=1&loop=1&muted=1&byline=0&title=0&controls=0"
          allow="autoplay; fullscreen"
          allowFullScreen
          className="hero-vimeo"
          title="Hero Background"
          onLoad={() => setVideoLoaded(true)}
        />
      </div>

      <div className="hero-overlay"></div>

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
              {/* space between words */}
              <span className="char-wrapper">&nbsp;</span>
            </span>
          ))}
        </motion.h1>
      </div>
    </section>
  );
};

export default Hero;
