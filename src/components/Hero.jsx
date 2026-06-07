import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../style/Hero.css";

const Hero = () => {
  const [ripples, setRipples] = useState([]);
  const [videoLoaded, setVideoLoaded] = useState(false);

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 3.4,
      },
    },
  };

  const charVariants = {
    hidden: { y: "100%" },
    visible: {
      y: "0%",
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="hero" onClick={createRipple}>

      {/* Video loading overlay — fades out when iframe loads */}
      <AnimatePresence>
        {!videoLoaded && (
          <motion.div
            className="hero-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="hero-loader-ring" />
          </motion.div>
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
