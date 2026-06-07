import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Masonry from "react-masonry-css";
import "../style/Gallery.css";
import Footer from "../components/Footer";
import Header from "../components/Header";

const images = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  "https://images.unsplash.com/photo-1518837695005-2083093ee35b",
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  "https://images.unsplash.com/photo-1511300636408-a63a89df3482",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
];

const breakpointColumnsObj = {
  default: 4,
  1200: 3,
  768: 2,
  500: 1,
};

/* Skeleton card — shimmer placeholder while images load */
const SkeletonCard = ({ height }) => (
  <div className="gallery-skeleton" style={{ height }} />
);

const skeletonHeights = [260, 340, 200, 300, 250, 380, 220, 310];

const Gallery = () => {
  const [loadedImages, setLoadedImages] = useState({});

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  };

  const allLoaded = Object.keys(loadedImages).length === images.length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <Header />
      <div className="gallery-page">

        {/* Skeleton grid — shows while images are loading */}
        <AnimatePresence>
          {!allLoaded && (
            <motion.div
              key="skeleton"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              style={{ position: "absolute", inset: 0, paddingTop: "100px", padding: "100px 16px 40px" }}
            >
              <Masonry
                breakpointCols={breakpointColumnsObj}
                className="masonry-grid"
                columnClassName="masonry-column"
              >
                {skeletonHeights.map((h, i) => (
                  <SkeletonCard key={i} height={h} />
                ))}
              </Masonry>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Real images — hidden until loaded */}
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="masonry-grid"
          columnClassName="masonry-column"
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="gallery-card"
              style={{ opacity: loadedImages[index] ? 1 : 0, transition: "opacity 0.4s ease" }}
            >
              <img
                src={img}
                alt=""
                onLoad={() => handleImageLoad(index)}
              />
            </div>
          ))}
        </Masonry>

      </div>
      <Footer />
    </motion.div>
  );
};

export default Gallery;
