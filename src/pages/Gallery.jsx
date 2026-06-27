import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Masonry from "react-masonry-css";
import "../style/Gallery.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { worksDetails } from "../data/works";

// Extract all images with metadata from worksDetails array
const galleryItems = worksDetails.reduce((acc, project) => {
  if (project.images) {
    project.images.forEach((img, imgIdx) => {
      acc.push({
        src: img,
        projectTitle: project.title,
        categorySlug: project.categorySlug,
        projectSlug: project.slug,
        id: `${project.slug}-${imgIdx}`
      });
    });
  }
  return acc;
}, []);

const breakpointColumnsObj = {
  default: 4,
  1200: 3,
  768: 2,
  500: 1,
};

/* Individual Gallery Card with self-contained loading state */
const GalleryCard = ({ item, index }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const heights = [260, 340, 200, 300, 250, 380, 220, 310];
  const placeholderHeight = heights[index % heights.length];

  return (
    <Link 
      to={`/work/${item.categorySlug}/${item.projectSlug}`}
      state={{ from: "gallery" }}
      className="gallery-card"
      style={{ display: "block", textDecoration: "none" }}
    >
      {!isLoaded && (
        <div 
          className="gallery-skeleton" 
          style={{ 
            height: placeholderHeight, 
            width: "100%",
            marginBottom: 0
          }} 
        />
      )}
      <div style={{ position: "relative", overflow: "hidden", borderRadius: "6px" }}>
        <img
          src={item.src}
          alt={item.projectTitle}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: "opacity 0.4s ease, transform 0.65s cubic-bezier(0.25, 1, 0.5, 1)",
            height: isLoaded ? "auto" : 0,
            width: "100%",
            display: "block"
          }}
        />
        {isLoaded && (
          <div className="gallery-card-overlay">
            <h3 className="gallery-card-title">{item.projectTitle}</h3>
            <span className="gallery-card-category">{item.categorySlug}</span>
          </div>
        )}
      </div>
    </Link>
  );
};

const Gallery = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <Header />
      <div className="gallery-page">
        <header className="gallery-header">
          <span className="gallery-subtitle">Curated Gallery</span>
          <h1 className="gallery-title">Capturing Spaces,<br />Facades & composition</h1>
          <div className="gallery-divider" />
        </header>

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="masonry-grid"
          columnClassName="masonry-column"
        >
          {galleryItems.map((item, index) => (
            <GalleryCard key={item.id} item={item} index={index} />
          ))}
        </Masonry>
      </div>
      <Footer />
    </motion.div>
  );
};

export default Gallery;
