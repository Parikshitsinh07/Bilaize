import { useEffect, useState } from "react";
import SplashScreen from "./components/SplashScreen";
import MusicPlayer from "./components/MusicPlayer";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Lenis from "lenis";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import WorkDetailsPage from "./pages/WorkDetailsPage";
import CategoryProjectsPage from "./pages/CategoryProjectsPage";

function App({ onReady }) {
  const [splashDone, setSplashDone] = useState(false);
  const location = useLocation();

  // ── Lenis smooth scroll ──────────────────────────────────────────────
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: true,
      touchMultiplier: 1.5,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  // ── Dismiss pre-React HTML splash as soon as React has painted ──────
  // We do this on first render — React is alive, so the HTML splash
  // can start fading out. The React SplashScreen takes over visually.
  useEffect(() => {
    if (onReady) onReady();
  }, [onReady]);

  // ── React SplashScreen timing ────────────────────────────────────────
  // Matches the animation: 2.9s delay + 1.3s scale = 4.2s total
  useEffect(() => {
    const timer = setTimeout(() => {
      setSplashDone(true);
    }, 4300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Floating music player — always visible */}
      <MusicPlayer />

      {/* React SplashScreen — overlays content, then unmounts */}
      {!splashDone && <SplashScreen />}

      {/* Main app — fades in while splash is still scaling */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 1.2 }}
        className="w-full min-h-screen"
      >
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/"                          element={<Home />} />
            <Route path="/gallery"                   element={<Gallery />} />
            <Route path="/about"                     element={<About />} />
            <Route path="/contact"                   element={<Contact />} />
            <Route path="/work"                      element={<Work />} />
            <Route path="/work/:categorySlug"        element={<CategoryProjectsPage />} />
            <Route path="/work/:categorySlug/:slug"  element={<WorkDetailsPage />} />
          </Routes>
        </AnimatePresence>
      </motion.div>
    </>
  );
}

export default App;
