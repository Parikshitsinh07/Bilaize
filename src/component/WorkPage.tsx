import { useState, useEffect } from "react";
import Header from "./Header";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel } from "swiper/modules";

import "swiper/css";

interface WorkItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

interface WorkPageProps {
  onBack: () => void;
  onProjectClick: (item: WorkItem) => void;
}

const WORK_ITEMS: WorkItem[] = [
  {
    id: 1,
    title: "AER",
    category: "VIDEO",
    imageUrl:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=90",
  },
  {
    id: 2,
    title: "IDENTITY 01",
    category: "CREATIVE DIRECTION",
    imageUrl:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=90",
  },
  {
    id: 3,
    title: "STUDIO WEB",
    category: "WEB",
    imageUrl:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1600&q=90",
  },
  {
    id: 4,
    title: "GOLDEN HOUR",
    category: "PHOTO",
    imageUrl:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=90",
  },
];

const FILTERS = [
  "ALL",
  "CREATIVE DIRECTION",
  "WEB",
  "VIDEO",
  "PHOTO",
];

interface WorkCardProps {
  item: WorkItem;
  onClick: () => void;
}

function WorkCard({ item, onClick }: WorkCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        background: "#000",
      }}
    >
      {/* Background Image */}
      <img
        src={item.imageUrl}
        alt={item.title}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition:
            "transform 1s cubic-bezier(0.16,1,0.3,1), filter 0.5s ease",
          transform: hovered ? "scale(1.06)" : "scale(1)",
          filter: hovered
            ? "brightness(0.4) blur(6px)"
            : "brightness(0.85)",
        }}
      />

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "#fff",
          zIndex: 10,
        }}
      >
        {/* Animated Airplane */}
        <div
          style={{
            transform: hovered
              ? "translateY(0px)"
              : "translateY(30px)",
            opacity: hovered ? 1 : 0,
            transition: "all 0.5s ease",
            marginBottom: "20px",
          }}
        >
          ✈
        </div>

        {/* Title */}
        <h1
          style={{
            fontSize: "clamp(60px, 10vw, 140px)",
            fontFamily: "Georgia, serif",
            fontWeight: 400,
            margin: 0,
            letterSpacing: "-0.04em",
          }}
        >
          {item.title}
        </h1>

        {/* Category */}
        <p
          style={{
            marginTop: "14px",
            fontSize: "12px",
            letterSpacing: "0.2em",
            fontFamily: "Courier New",
          }}
        >
          {item.category}
        </p>

        {/* Hover Text */}
        <div
          style={{
            marginTop: "28px",
            opacity: hovered ? 1 : 0,
            transform: hovered
              ? "translateY(0px)"
              : "translateY(10px)",
            transition: "all 0.45s ease",
          }}
        >
          <span
            style={{
              fontSize: "11px",
              letterSpacing: "0.2em",
              fontFamily: "Courier New",
            }}
          >
            VIEW PROJECT
          </span>
        </div>
      </div>
    </div>
  );
}

export default function WorkPage({
  onBack,
  onProjectClick,
}: WorkPageProps) {
  const [activeFilter, setActiveFilter] =
    useState("ALL");

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 30);
  }, []);

  const filtered =
    activeFilter === "ALL"
      ? WORK_ITEMS
      : WORK_ITEMS.filter(
          (item) => item.category === activeFilter
        );

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: "#000",
        overflow: "hidden",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.6s ease",
      }}
    >
      <Header onBack={onBack} />

      {/* Filters */}
      <div
        style={{
          position: "fixed",
          top: "100px",
          right: "40px",
          zIndex: 100,
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {FILTERS.map((f) => (
          <span
            key={f}
            onClick={() => setActiveFilter(f)}
            style={{
              color:
                activeFilter === f
                  ? "#ffffff"
                  : "rgba(255,255,255,0.4)",
              cursor: "pointer",
              fontSize: "12px",
              letterSpacing: "0.15em",
              fontFamily: "Courier New",
              transition: "0.3s",
            }}
          >
            {f}
          </span>
        ))}
      </div>

      {/* Vertical Slider */}
      <Swiper
        direction="vertical"
        slidesPerView={1}
        speed={1200}
        mousewheel
        modules={[Autoplay, Mousewheel]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        style={{
          width: "100%",
          height: "100vh",
        }}
      >
        {filtered.map((item) => (
          <SwiperSlide key={item.id}>
            <WorkCard
              item={item}
              onClick={() => onProjectClick(item)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}