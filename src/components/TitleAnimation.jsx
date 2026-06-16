import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../style/TitleAnimation.css";

const TitleAnimation = ({ text }) => {
  const titleRef = useRef(null);

  useEffect(() => {
    if (!titleRef.current) return;
    const chars = titleRef.current.querySelectorAll("span");
    const isMobile = window.innerWidth < 768;

    gsap.fromTo(
      chars,
      {
        y: isMobile ? 60 : 180,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.04,
        duration: 1,
        ease: "power4.out",
      }
    );
  }, [text]);

  return (
    <h1 ref={titleRef} className="slider-title">
      {text.split("").map((char, index) => (
        <span
          key={index}
          style={{
            display: "inline-block",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
  );
};

export default TitleAnimation;
