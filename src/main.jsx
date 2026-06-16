import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "@fontsource/inter";
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

// ── Remove the pre-React HTML splash once React is ready ──────────────────
// We fade it out instead of instantly removing so the transition is smooth.
function dismissPreSplash() {
  const el = document.getElementById('pre-splash');
  if (!el) return;
  // Add .hide class → CSS transition fades it out (0.5s)
  el.classList.add('hide');
  // Remove from DOM after transition completes
  setTimeout(() => el.remove(), 600);
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/Bilaize/">
      <App onReady={dismissPreSplash} />
    </BrowserRouter>
  </StrictMode>,
)
