import { useEffect, useState, useRef } from "react";
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
  // ── Two gates — BOTH must be true before splash hides ───────────────
  const [animationDone, setAnimationDone] = useState(false); // timer
  const [pageReady,     setPageReady]     = useState(false); // window load
  const [splashDone,    setSplashDone]    = useState(false); // final gate

  const location = useLocation();

  // ── Lenis smooth scroll ──────────────────────────────────────────────
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  // ── Step 1: dismiss HTML pre-splash the instant React paints ────────
  // React <SplashScreen /> is already rendered on top so user never
  // sees the HTML version — no visual double-loading.
  useEffect(() => {
    if (onReady) onReady();
  }, [onReady]);

  // ── Step 2: animation minimum time gate ─────────────────────────────
  // water fill (2.3s) + hold + exit (0.9s) = ~3.8s minimum
  useEffect(() => {
    const timer = setTimeout(() => setAnimationDone(true), 3900);
    return () => clearTimeout(timer);
  }, []);

  // ── Step 3: page fully loaded gate ──────────────────────────────────
  // If all assets are already loaded (cached), resolve immediately.
  // Otherwise wait for window.load event.
  useEffect(() => {
    if (document.readyState === "complete") {
      setPageReady(true);
    } else {
      const onLoad = () => setPageReady(true);
      window.addEventListener("load", onLoad, { once: true });
      return () => window.removeEventListener("load", onLoad);
    }
  }, []);

  // ── Final gate: only hide splash when BOTH conditions are met ────────
  useEffect(() => {
    if (animationDone && pageReady) {
      setSplashDone(true);
    }
  }, [animationDone, pageReady]);

  return (
    <>
      {/* Floating music player — always visible */}
      <MusicPlayer />

      {/* Splash — stays until animation done AND page loaded */}
      {!splashDone && <SplashScreen />}

      {/* Main app fades in while splash is still in its hold phase */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1.0 }}
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
