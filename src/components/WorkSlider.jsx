import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
import { categories } from "../data/works";
import "../style/WorkSlider.css";

/* ─── Throttle ──────────────────────────────────────────────────────────── */
const throttle = (fn, limit) => {
  let waiting = false;
  return (...args) => {
    if (!waiting) { fn(...args); waiting = true; setTimeout(() => { waiting = false; }, limit); }
  };
};

/* ─── 5-position table (CodePen-style) ─────────────────────────────────────
   x/y are multipliers of containerHeight
   step: -2=exit-top  -1=ghost-top  0=active  +1=ghost-bottom  +2=enter-bottom
   ─────────────────────────────────────────────────────────────────────────── */
const POSITIONS = [
  { x: 0.10, y: -1.05, rot: -14, s: 0.65, blur: 20, o: 0    }, // -2
  { x: 0.08, y: -0.46, rot: -10, s: 0.62, blur: 13, o: 0.25 }, // -1 top ghost
  { x: 0,    y:  0,    rot:   0, s:  1.0, blur:  0, o: 1.0  }, // 0  active
  { x: 0.05, y:  0.46, rot:  10, s: 0.62, blur: 13, o: 0.25 }, // +1 bottom ghost
  { x: 0.08, y:  1.05, rot:  14, s: 0.65, blur: 20, o: 0    }, // +2
];

function getProps(step, h) {
  const idx = Math.max(0, Math.min(4, step + 2));
  const p   = POSITIONS[idx];
  const abs = Math.abs(step);
  return {
    x:        p.x * h,
    y:        p.y * h,
    rotation: p.rot,
    scale:    p.s,
    opacity:  p.o,
    filter:  `blur(${p.blur}px)`,
    zIndex:   abs === 0 ? 5 : abs === 1 ? 3 : 1,
  };
}

/* ═══════════════════════════════════════════════════════════════════════════ */
const WorkSlider = () => {
  const navigate = useNavigate();
  const total    = categories.length;

  const [current, setCurrent] = useState(0);

  /* ── refs ── */
  const imagesRef   = useRef(null);   // .slider-right container
  const titleRef    = useRef(null);   // <h2> for title chars
  const currentLine = useRef(null);
  const slideEls    = useRef([]);
  const animating   = useRef(false);
  const currentIdx  = useRef(0);
  const reducedMotion = useRef(
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  /* touch refs */
  const touchStartX = useRef(0);
  const touchEndX   = useRef(0);

  const mod  = (n) => ((n % total) + total) % total;
  const getH = ()  => imagesRef.current?.offsetHeight || 500;

  /* ── Make slide DOM element ── */
  function makeSlide(idx) {
    const div = document.createElement("div");
    div.className = "slide-card";
    div.dataset.idx = idx;
    const img = document.createElement("img");
    img.src = categories[idx].cover;
    img.alt = categories[idx].title;
    img.draggable = false;
    img.setAttribute("loading", "lazy");
    div.appendChild(img);
    return div;
  }

  /* ── Position a slide (GSAP.set = instant) ── */
  function positionSlide(el, step) {
    const p = getProps(step, getH());
    gsap.set(el, { xPercent: -50, yPercent: -50, ...p });
    if (step === 0) el.style.cursor = "pointer";
  }

  /* ── Build initial carousel (-1, 0, +1) ── */
  function buildCarousel() {
    if (!imagesRef.current || imagesRef.current.offsetHeight === 0) return;
    imagesRef.current.innerHTML = "";
    slideEls.current = [];
    for (let step = -1; step <= 1; step++) {
      const idx   = mod(currentIdx.current + step);
      const slide = makeSlide(idx);
      imagesRef.current.appendChild(slide);
      positionSlide(slide, step);
      slideEls.current.push({ el: slide, step });
    }
  }

  /* ── Set title text (no animation, initial) ── */
  function setTitle(text) {
    if (!titleRef.current) return;
    titleRef.current.innerHTML = "";
    const line = document.createElement("div");
    [...text].forEach((ch) => {
      const span = document.createElement("span");
      span.textContent = ch === " " ? "\u00A0" : ch;
      line.appendChild(span);
    });
    titleRef.current.appendChild(line);
    currentLine.current = line;
  }

  /* ── Animate title characters (CodePen expo.inOut) ── */
  function animateTitle(newText, direction) {
    const h       = titleRef.current?.offsetHeight || 80;
    const dir     = direction === "next" ? 1 : -1;
    const oldLine = currentLine.current;
    const oldChars = [...oldLine.querySelectorAll("span")];

    titleRef.current.style.height = h + "px";
    oldLine.style.cssText = "position:absolute;top:0;left:0;width:100%";

    const newLine = document.createElement("div");
    newLine.style.cssText = "position:absolute;top:0;left:0;width:100%";
    [...newText].forEach((ch) => {
      const span = document.createElement("span");
      span.textContent = ch === " " ? "\u00A0" : ch;
      newLine.appendChild(span);
    });
    titleRef.current.appendChild(newLine);

    const newChars = [...newLine.querySelectorAll("span")];
    gsap.set(newChars, { y: h * dir });

    const dur = reducedMotion.current ? 0.01 : 0.9;
    const stg = reducedMotion.current ? 0     : 0.035;

    const tl = gsap.timeline({
      onComplete: () => {
        oldLine.remove();
        newLine.style.cssText = "";
        gsap.set(newChars, { clearProps: "all" });
        titleRef.current.style.height = "";
        currentLine.current = newLine;
      },
    });
    tl.to(oldChars, { y: -h * dir, stagger: stg, duration: dur, ease: "expo.inOut" }, 0);
    tl.to(newChars, { y: 0,        stagger: stg, duration: dur, ease: "expo.inOut" }, 0);
    return tl;
  }

  /* ── Animate carousel (CodePen-style shift) ── */
  function animateCarousel(direction) {
    if (!imagesRef.current) return gsap.timeline();

    const shift     = direction === "next" ? -1 : 1;
    const enterStep = direction === "next" ?  2 : -2;
    const newIdx    = direction === "next"
      ? mod(currentIdx.current + 2)
      : mod(currentIdx.current - 2);

    const newSlide = makeSlide(newIdx);
    imagesRef.current.appendChild(newSlide);
    positionSlide(newSlide, enterStep);
    slideEls.current.push({ el: newSlide, step: enterStep });

    // Shift all steps
    slideEls.current.forEach((s) => { s.step += shift; });

    const dur = reducedMotion.current ? 0.01 : 1.1;

    const tl = gsap.timeline({
      onComplete: () => {
        slideEls.current = slideEls.current.filter((s) => {
          if (Math.abs(s.step) >= 2) { s.el.remove(); return false; }
          return true;
        });
      },
    });

    slideEls.current.forEach((s) => {
      const p = getProps(s.step, getH());
      s.el.style.zIndex = p.zIndex;
      // Only active card is clickable
      s.el.style.cursor = s.step === 0 ? "pointer" : "default";
      tl.to(s.el, {
        x: p.x, y: p.y, rotation: p.rotation,
        scale: p.scale, opacity: p.opacity, filter: p.filter,
        duration: dur, ease: "power3.inOut",
      }, 0);
    });

    return tl;
  }

  /* ── Master go() ── */
  function go(direction) {
    if (animating.current) return;
    animating.current = true;

    const nextIdx = direction === "next"
      ? mod(currentIdx.current + 1)
      : mod(currentIdx.current - 1);

    const master = gsap.timeline({
      onComplete: () => {
        currentIdx.current = nextIdx;
        setCurrent(nextIdx);
        animating.current = false;
      },
    });

    master.add(animateTitle(categories[nextIdx].title, direction), 0);
    master.add(animateCarousel(direction), 0);
  }

  /* ── Click on active card → navigate ── */
  function handleImagesClick(e) {
    // Find the active card (step === 0) and check if click is on it
    const active = slideEls.current.find((s) => s.step === 0);
    if (active && active.el.contains(e.target)) {
      navigate(`/work/${categories[currentIdx.current].slug}`);
    }
  }

  /* ── Init ── */
  useEffect(() => {
    categories.forEach((c) => { new Image().src = c.cover; }); // preload

    requestAnimationFrame(() => {
      buildCarousel();
      setTitle(categories[0].title);
    });

    /* Wheel */
    const onWheel = throttle((e) => go(e.deltaY > 0 ? "next" : "prev"), 1600);
    window.addEventListener("wheel", onWheel, { passive: true });

    /* Keyboard */
    const onKey = (e) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") go("next");
      if (e.key === "ArrowUp"   || e.key === "ArrowLeft")  go("prev");
    };
    window.addEventListener("keydown", onKey);

    /* Resize */
    const onResize = () => {
      if (!animating.current) {
        slideEls.current.forEach((s) => positionSlide(s.el, s.step));
      }
    };
    window.addEventListener("resize", onResize, { passive: true });

    /* Autoplay */
    const autoId = setInterval(() => go("next"), 5000);

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
      clearInterval(autoId);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Touch */
  const onTouchStart = (e) => { touchStartX.current = e.targetTouches[0].clientX; };
  const onTouchMove  = (e) => { touchEndX.current   = e.targetTouches[0].clientX; };
  const onTouchEnd   = () => {
    const dist = touchStartX.current - touchEndX.current;
    if (Math.abs(dist) > 50) go(dist > 0 ? "next" : "prev");
  };

  const cat = categories[current];

  return (
    <section
      className="slider"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* ── Left ── */}
      <div className="slider-left">
        <h2 className="slider-title" ref={titleRef} aria-live="polite" />
        <div className="slider-info">{cat.description}</div>
      </div>

      {/* ── Right — GSAP image stack ── */}
      <div
        className="slider-right"
        ref={imagesRef}
        onClick={handleImagesClick}
      />

      {/* ── Nav ── */}
      <div className="slider-nav">
        <button onClick={() => go("prev")}>← Previous</button>
        <button onClick={() => go("next")}>Next →</button>
      </div>
    </section>
  );
};

export default WorkSlider;
