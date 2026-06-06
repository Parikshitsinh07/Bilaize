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

const Gallery = () => {
  return (
    <>
      <Header />
      <div className="gallery-page">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="masonry-grid"
          columnClassName="masonry-column"
        >
          {images.map((img, index) => (
            <div key={index} className="gallery-card">
              <img src={img} alt="" />
            </div>
          ))}
        </Masonry>
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
