import { useEffect, useState } from "react";
import SplashScreen from "./components/SplashScreen";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Lenis from "lenis";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import WorkDetailsPage from "./pages/WorkDetailsPage";

function App() {
  const [splashMounted, setSplashMounted] = useState(true);
  const location = useLocation();

  // 1. Lenis Smooth Scroll Initialization (Full Stack UX Standard)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // 2. Splash screen is dismissed when the Vimeo hero video loads (see Hero.jsx)

  return (
    <>
      {/* Splash screen overlays content, then unmounts */}
      {splashMounted && <SplashScreen />}

      {/* Main content starts fading in during splash scale expansion */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 1.2 }}
        className="w-full min-h-screen"
      >
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home onVideoLoad={() => setSplashMounted(false)} />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/:slug" element={<WorkDetailsPage />} />
          </Routes>
        </AnimatePresence>
      </motion.div>
    </>
  );
}

export default App;
