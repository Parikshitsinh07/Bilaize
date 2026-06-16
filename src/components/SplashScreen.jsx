import { motion } from "framer-motion";
import "../style/SplashScreen.css";

const SplashScreen = () => {
  return (
    <>
      {/* ── Background — slides UP into the red navbar line ── */}
      <motion.div
        className="splash-bg"
        initial={{ y: "0%" }}
        animate={{ y: "-100%" }}
        transition={{
          delay: 2.9,
          duration: 0.9,
          ease: [0.87, 0, 0.13, 1],
        }}
      />

      {/* ── Logo — OLD zoom-out animation (unchanged) ── */}
      <motion.div
        className="splash-logo-wrap"
        initial={{ opacity: 1, scale: 1 }}
        animate={{ opacity: 0, scale: 6 }}
        transition={{
          delay: 2.9,
          duration: 1.3,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        <motion.div
          className="logo-box"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="noise" />
          <svg viewBox="0 0 1200 500" className="logo-svg">
            <defs>
              <mask id="text-mask">
                <rect width="100%" height="100%" fill="black" />
                <text
                  x="50%"
                  y="50%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  className="logo-text-mask"
                >
                  BRIELITE
                </text>
              </mask>
            </defs>

            {/* Ghost base text */}
            <text x="50%" y="55%" textAnchor="middle" className="logo-text-bg">
              BRIELITE
            </text>

            {/* White water rising through text */}
            <g mask="url(#text-mask)">
              <motion.rect
                x="-200"
                y="500"
                width="1600"
                height="1000"
                fill="#ffffff"
                initial={{ y: 500 }}
                animate={{ y: -250 }}
                transition={{ duration: 2.3, ease: "easeInOut" }}
              />
              <motion.path
                className="wave"
                d="
                  M0 180
                  C150 140 300 220 450 180
                  C600 140 750 220 900 180
                  C1050 140 1200 220 1350 180
                  L1350 500
                  L0 500
                  Z
                "
                initial={{ y: 500 }}
                animate={{ y: -220, x: [0, 40, 0] }}
                transition={{ duration: 2.3, ease: "easeInOut" }}
              />
            </g>
          </svg>
        </motion.div>
      </motion.div>
    </>
  );
};

export default SplashScreen;
