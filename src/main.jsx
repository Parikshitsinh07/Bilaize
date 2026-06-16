import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "@fontsource/inter";
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

// ── Remove the HTML pre-splash the INSTANT React mounts ──────────────
// No animation here — React's <SplashScreen /> is already rendered on
// top covering it, so the user never sees the swap. Silent removal.
function dismissPreSplash() {
  const el = document.getElementById('pre-splash');
  if (el) el.remove(); // instant — no fade, no slide
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/Bilaize/">
      <App onReady={dismissPreSplash} />
    </BrowserRouter>
  </StrictMode>,
)
