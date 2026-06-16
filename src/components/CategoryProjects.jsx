import { useEffect, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { categories, works } from "../data/works";
import MobileNav from "./MobileNav";
import "../style/CategoryProjects.css";

const CategoryProjects = () => {
  const { categorySlug } = useParams();
  const navigate = useNavigate();
  const gridRef = useRef(null);

  const category = categories.find((c) => c.slug === categorySlug);
  const projects = works.filter((w) => w.categorySlug === categorySlug);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [categorySlug]);

  // Grid stagger entrance
  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll(".cp-card");
    gsap.fromTo(
      cards,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out", delay: 0.2 }
    );
  }, [categorySlug]);

  if (!category) {
    return (
      <div className="cp-not-found">Category not found</div>
    );
  }

  return (
    <motion.section
      className="cp-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.55, ease: "easeInOut" }}
    >
      {/* ── Top Nav ── */}
      <header className="cp-top-nav hidden md:flex">
        <button
          className="cp-back-btn"
          onClick={() => navigate("/work")}
          aria-label="Back to categories"
        >
          ← Work
        </button>

        <div className="cp-nav-center">
          <span className="cp-nav-label">{category.label}</span>
          <span className="cp-nav-sep" />
          <span className="cp-nav-title">{category.title}</span>
        </div>

        <span className="cp-nav-count">
          {projects.length} Project{projects.length !== 1 ? "s" : ""}
        </span>
      </header>

      <MobileNav showBack />

      {/* ── Hero ── */}
      <div className="cp-hero">
        <div className="cp-hero-media">
          <img src={category.cover} alt={category.title} />
          <div className="cp-hero-overlay" />
        </div>
        <div className="cp-hero-content">
          <p className="cp-hero-eyebrow">{category.label} — {category.title}</p>
          <h1 className="cp-hero-heading">{category.title}</h1>
          <p className="cp-hero-desc">{category.description}</p>
        </div>
      </div>

      {/* ── Projects Grid ── */}
      <div className="cp-body">
        <p className="cp-section-label">All Projects</p>

        {projects.length === 0 ? (
          <div className="cp-empty">
            <p>No projects in this category yet.</p>
            <Link to="/work" className="cp-empty-link">← Back to Work</Link>
          </div>
        ) : (
          <div className="cp-grid" ref={gridRef}>
            {projects.map((project, i) => (
              <Link
                key={project.slug}
                to={`/work/${categorySlug}/${project.slug}`}
                className="cp-card"
                aria-label={`Open ${project.title}`}
              >
                {/* Image */}
                <div className="cp-card-img-wrap">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading={i < 2 ? "eager" : "lazy"}
                  />
                  <div className="cp-card-img-overlay" />
                </div>

                {/* Info */}
                <div className="cp-card-info">
                  <div className="cp-card-info-left">
                    <span className="cp-card-num">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="cp-card-text">
                      <h2 className="cp-card-title">{project.title}</h2>
                      <span className="cp-card-year">{project.year}</span>
                    </div>
                  </div>
                  <span className="cp-card-arrow" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* ── Footer ── */}
      <footer className="cp-footer">
        <span className="cp-footer-copy">© 2025 Brielite</span>
        <Link to="/contact" className="cp-footer-link">Contact</Link>
      </footer>
    </motion.section>
  );
};

export default CategoryProjects;
