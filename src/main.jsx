import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "@fontsource/inter";
import App from './App.jsx';
import { HashRouter } from 'react-router-dom';

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

// const redirect = sessionStorage.redirect;

// if (redirect) {
//   sessionStorage.removeItem("redirect");
//   window.history.replaceState(null, null, redirect);
// }

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <App onReady={dismissPreSplash} />
    </HashRouter>
  </StrictMode>,
)
