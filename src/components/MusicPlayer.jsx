import { useState, useRef, useEffect } from "react";
import { FaMusic, FaPause } from "react-icons/fa";
import "../style/Music.css";

const SIZE = 60; // button diameter in px

const clamp = (val, min, max) => Math.min(Math.max(val, min), max);

const safeInitialPosition = () => ({
  x: clamp(window.innerWidth  - SIZE - 16, 0, window.innerWidth  - SIZE),
  y: clamp(window.innerHeight - SIZE - 16, 0, window.innerHeight - SIZE),
});

const MusicPlayer = () => {
  const [playing,  setPlaying]  = useState(false);
  const [position, setPosition] = useState(safeInitialPosition);
  const [rotation, setRotation] = useState(0);

  const dragging      = useRef(false);
  const hasDragged    = useRef(false);
  const offset        = useRef({ x: 0, y: 0 });
  const rafId         = useRef(null);
  const rotRef        = useRef(0);
  const lastTouchEnd  = useRef(0); // ghost-click prevention
  const audioRef      = useRef(
    new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3")
  );

  /* ── Audio setup ── */
  useEffect(() => {
    const audio  = audioRef.current;
    audio.loop   = true;
    audio.volume = 0.4;
    return () => { audio.pause(); };
  }, []);

  /* ── Smooth rotation loop ── */
  useEffect(() => {
    if (playing) {
      const spin = () => {
        rotRef.current = (rotRef.current + 0.4) % 360;
        setRotation(rotRef.current);
        rafId.current = requestAnimationFrame(spin);
      };
      rafId.current = requestAnimationFrame(spin);
    } else {
      cancelAnimationFrame(rafId.current);
    }
    return () => cancelAnimationFrame(rafId.current);
  }, [playing]);

  /* ── Clamp position when window resizes ── */
  useEffect(() => {
    const onResize = () => {
      setPosition(prev => ({
        x: clamp(prev.x, 0, window.innerWidth  - SIZE),
        y: clamp(prev.y, 0, window.innerHeight - SIZE),
      }));
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* ── Toggle play/pause ── */
  const toggleMusic = async () => {
    if (hasDragged.current) return;
    const audio = audioRef.current;
    try {
      if (playing) { audio.pause(); }
      else         { await audio.play(); }
      setPlaying(p => !p);
    } catch (err) { console.log(err); }
  };

  /* ── onClick (desktop mouse only — ignore ghost clicks from touch) ── */
  const handleClick = () => {
    if (Date.now() - lastTouchEnd.current < 350) return; // ghost click from touch
    toggleMusic();
  };

  /* ── Mouse drag ── */
  const onMouseDown = (e) => {
    dragging.current   = true;
    hasDragged.current = false;
    offset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };

  useEffect(() => {
    const onMouseMove = (e) => {
      if (!dragging.current) return;
      hasDragged.current = true;
      setPosition({
        x: clamp(e.clientX - offset.current.x, 0, window.innerWidth  - SIZE),
        y: clamp(e.clientY - offset.current.y, 0, window.innerHeight - SIZE),
      });
    };
    const onMouseUp = () => { dragging.current = false; };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup",   onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup",   onMouseUp);
    };
  }, []);

  /* ── Touch drag (mobile) ── */
  const onTouchStart = (e) => {
    const t = e.touches[0];
    dragging.current   = true;
    hasDragged.current = false;
    offset.current = {
      x: t.clientX - position.x,
      y: t.clientY - position.y,
    };
  };

  const onTouchMove = (e) => {
    e.preventDefault(); // stop page scroll while dragging
    if (!dragging.current) return;
    hasDragged.current = true;
    const t = e.touches[0];
    setPosition({
      x: clamp(t.clientX - offset.current.x, 0, window.innerWidth  - SIZE),
      y: clamp(t.clientY - offset.current.y, 0, window.innerHeight - SIZE),
    });
  };

  const onTouchEnd = () => {
    const wasDragging  = hasDragged.current;
    dragging.current   = false;
    lastTouchEnd.current = Date.now(); // mark touch end time
    if (!wasDragging) toggleMusic();  // tap = toggle
    setTimeout(() => { hasDragged.current = false; }, 100);
  };

  return (
    <div
      className={`music-player ${playing ? "playing" : ""}`}
      style={{ left: position.x, top: position.y }}
      onMouseDown={onMouseDown}
      onClick={handleClick}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Rotating ring */}
      <div
        className="music-ring"
        style={{ transform: `rotate(${rotation}deg)` }}
      />
      {/* Icon */}
      <div className="music-icon">
        {playing ? <FaPause /> : <FaMusic />}
      </div>
    </div>
  );
};

export default MusicPlayer;
