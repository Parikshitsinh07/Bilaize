import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { worksDetails } from "../data/works";
import "../style/WorkDetails.css";

const WorkDetails = () => {
  const { slug } = useParams();
  const projectIndex = worksDetails.findIndex((item) => item.slug === slug);
  const project = worksDetails[projectIndex];

  // ux fix: scroll to top when changing case study slugs
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        Project Not Found
      </div>
    );
  }

  // helper to group images into double-row and single-row patterns
  const galleryRows = [];
  let tempRow = [];
  project.images?.forEach((img, idx) => {
    // We want to group the first two images side-by-side, then one full-width image, and repeat.
    const patternIndex = idx % 3;
    if (patternIndex === 0 || patternIndex === 1) {
      tempRow.push(img);
      if (tempRow.length === 2 || idx === project.images.length - 1) {
        galleryRows.push({ type: "double", images: tempRow });
        tempRow = [];
      }
    } else {
      galleryRows.push({ type: "single", images: [img] });
    }
  });

  return (
    <section className="project-page">
      {/* Centered Back Arrow Nav Bar */}
      <header className="project-top-nav">
        <Link to="/work" className="back-link-centered">
          ←
        </Link>
      </header>

      {/* Hero Section */}
      <div className="project-hero">
        <div className="project-hero-media">
          <img src={project.cover} alt={project.title} />
          <div className="project-hero-overlay" />
        </div>
        <div className="project-hero-content">
          <h1 className="project-title-heading">{project.title}</h1>
        </div>
      </div>

      {/* Info Columns */}
      <div className="project-info-grid">
        <div className="project-about-col">
          <span className="section-label">ABOUT</span>
          <p className="about-text-uppercase">
            {project.description}
          </p>
        </div>
        <div className="project-credits-col">
          <span className="section-label">CREDITS</span>
          <div className="credits-list">
            <div className="credit-row">
              <span className="credit-title">PHOTOGRAPHY</span>
              <span className="credit-name">Parikshitsinh</span>
            </div>
          </div>
        </div>
      </div>

      {/* Flat Asymmetric Gallery */}
      {galleryRows.length > 0 && (
        <div className="project-gallery-container">
          <div className="gallery-grid">
            {galleryRows.map((row, rowIdx) => (
              <div key={rowIdx} className={`gallery-row ${row.type}`}>
                {row.images.map((img, imgIdx) => (
                  <div key={imgIdx} className="gallery-img-wrapper">
                    <img src={img} alt={`${project.title} gallery ${rowIdx}-${imgIdx}`} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Other Works Links */}
      <section className="other-works-section">
        <h3 className="other-works-title">OTHER WORKS</h3>
        <div className="other-works-links">
          {worksDetails.map((w) => (
            <Link 
              key={w.slug} 
              to={`/work/${w.slug}`} 
              className={`other-work-link ${w.slug === slug ? 'active-slug' : ''}`}
            >
              {w.title}
            </Link>
          ))}
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="project-footer">
        <span className="footer-copy">© 2026 Brielite</span>
        <Link to="/contact" className="footer-contact-link">CONTACT</Link>
      </footer>
    </section>
  );
};

export default WorkDetails;
