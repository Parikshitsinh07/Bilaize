import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { worksDetails, categories } from "../data/works";
import MobileNav from "./MobileNav";
import "../style/WorkDetails.css";

const WorkDetails = () => {
  const { categorySlug, slug } = useParams();
  const navigate = useNavigate();

  const project = worksDetails.find(
    (item) => item.slug === slug && item.categorySlug === categorySlug
  );

  const category = categories.find((c) => c.slug === categorySlug);

  // Scroll to top on slug change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  if (!project) {
    return (
      <div
        style={{
          minHeight: "100dvh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f7f5f5",
          color: "#aaa",
          fontFamily: "Inter, sans-serif",
          fontSize: "11px",
          letterSpacing: "3px",
          textTransform: "uppercase",
        }}
      >
        Project Not Found
      </div>
    );
  }

  // Group gallery images: double → single → repeat
  const galleryRows = [];
  let tempRow = [];
  project.images?.forEach((img, idx) => {
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

  // Other projects in the same category (excluding current)
  const otherProjects = worksDetails.filter(
    (w) => w.categorySlug === categorySlug && w.slug !== slug
  );

  return (
    <section className="project-page">

      {/* Fixed Top Nav */}
      <header className="project-top-nav hidden md:flex">
        <button
          className="back-link-centered"
          onClick={() => navigate(`/work/${categorySlug}`)}
          aria-label={`Back to ${category?.title ?? "projects"}`}
        >
          ← {category?.title ?? "Work"}
        </button>
      </header>

      <MobileNav showBack />

      {/* Hero */}
      <div className="project-hero">
        <div className="project-hero-media">
          <img src={project.cover} alt={project.title} />
          <div className="project-hero-overlay" />
        </div>
        <div className="project-hero-content">
          <div className="project-hero-meta">
            <span className="project-hero-tag">{category?.title ?? categorySlug}</span>
            <span className="project-hero-dot" />
            <span className="project-hero-tag">Brielite Studio</span>
          </div>
          <h1 className="project-title-heading">{project.title}</h1>
        </div>
      </div>

      {/* Info Grid */}
      <div className="project-info-grid">
        <div className="project-about-col">
          <span className="section-label">About</span>
          <p className="about-text-uppercase">{project.description}</p>
        </div>
        <div className="project-credits-col">
          <span className="section-label">Credits</span>
          <div className="credits-list">
            <div className="credit-row">
              <span className="credit-title">Photography</span>
              <span className="credit-name">Parikshitsinh</span>
            </div>
            <div className="credit-row">
              <span className="credit-title">Direction</span>
              <span className="credit-name">Brielite Studio</span>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery */}
      {galleryRows.length > 0 && (
        <div className="project-gallery-container">
          <div className="gallery-grid">
            {galleryRows.map((row, rowIdx) => (
              <div key={rowIdx} className={`gallery-row ${row.type}`}>
                {row.images.map((img, imgIdx) => (
                  <div key={imgIdx} className="gallery-img-wrapper">
                    <img
                      src={img}
                      alt={`${project.title} — ${rowIdx}-${imgIdx}`}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Other works in this category */}
      {otherProjects.length > 0 && (
        <section className="other-works-section">
          <p className="other-works-title">More in {category?.title}</p>
          <div className="other-works-links">
            {otherProjects.map((w) => (
              <Link
                key={w.slug}
                to={`/work/${categorySlug}/${w.slug}`}
                className="other-work-link"
                aria-label={`View ${w.title}`}
              >
                {w.title}
                <span className="other-work-link-arrow" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
          {/* Link back to all in category */}
          <Link
            to={`/work/${categorySlug}`}
            className="other-works-all-link"
            aria-label={`All ${category?.title} projects`}
          >
            ← All {category?.title} projects
          </Link>
        </section>
      )}

      {/* Footer */}
      <footer className="project-footer">
        <span className="footer-copy">© 2025 Brielite</span>
        <Link to="/contact" className="footer-contact-link">Contact</Link>
      </footer>
    </section>
  );
};

export default WorkDetails;
