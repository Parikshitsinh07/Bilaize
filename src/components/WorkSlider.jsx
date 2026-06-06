import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
import { works } from "../data/works";
import TitleAnimation from "./TitleAnimation";
import "../style/WorkSlider.css";

const WorkSlider = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const sliderRef = useRef(null);
  const lockRef = useRef(false);

  const prev = current === 0 ? works.length - 1 : current - 1;
  const next = current === works.length - 1 ? 0 : current + 1;

  const changeSlide = (direction) => {
    if (lockRef.current) return;
    lockRef.current = true;

    const cards = sliderRef.current.querySelectorAll(".slide-card");

    gsap.to(cards, {
      opacity: 0,
      scale: 0.9,
      y: 40,
      duration: 0.45,
      stagger: 0.05,
      ease: "power3.inOut",
      onComplete: () => {
        setCurrent((prevIndex) =>
          direction === "next"
            ? (prevIndex + 1) % works.length
            : prevIndex === 0
            ? works.length - 1
            : prevIndex - 1
        );
        setTimeout(() => {
          lockRef.current = false;
        }, 500);
      },
    });
  };

  const nextSlide = () => changeSlide("next");
  const prevSlide = () => changeSlide("prev");

  useEffect(() => {
    const cards = sliderRef.current.querySelectorAll(".slide-card");
    gsap.fromTo(
      cards,
      {
        opacity: 0,
        scale: 0.9,
        y: 50,
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
      }
    );
  }, [current]);

  useEffect(() => {
    let wheelLock = false;
    const handleWheel = (e) => {
      if (wheelLock) return;
      wheelLock = true;
      if (e.deltaY > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
      setTimeout(() => {
        wheelLock = false;
      }, 1200);
    };

    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <section className="slider">
      <div className="slider-left">
        <TitleAnimation text={works[current].title} />
        <div className="slider-info">
          A curated collection of work, ideas and experiments.
        </div>
      </div>
      <div className="slider-right" ref={sliderRef}>
        {/* Previous */}
        <div className="slide-card top-card">
          <img src={works[prev].image} alt="" />
        </div>
        {/* Active */}
        <div
          className="slide-card active-card"
          onClick={() => navigate(`/work/${works[current].slug}`)}
        >
          <img src={works[current].image} alt="" />
        </div>
        {/* Next */}
        <div className="slide-card bottom-card">
          <img src={works[next].image} alt="" />
        </div>
      </div>
      <div className="slider-nav">
        <button onClick={prevSlide}>← Previous</button>
        <button onClick={nextSlide}>Next →</button>
      </div>
    </section>
  );
};

export default WorkSlider;
