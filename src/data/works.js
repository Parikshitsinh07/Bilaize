// ── CATEGORIES ─────────────────────────────────────────────────────────────
export const categories = [
  {
    slug: "architecture",
    title: "Architecture",
    label: "01",
    description: "Structural forms, facades & spatial composition.",
    cover: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1400",
    color: "#6B5B50",
  },
  {
    slug: "interior",
    title: "Interior",
    label: "02",
    description: "Luxury spaces, material stories & light design.",
    cover: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=1400",
    color: "#8BA8A8",
  },
  {
    slug: "branding",
    title: "Branding",
    label: "03",
    description: "Visual identity, systems & brand language.",
    cover: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400",
    color: "#B8B5A4",
  },
  {
    slug: "art-direction",
    title: "Art Direction",
    label: "04",
    description: "Editorial narratives, campaigns & concept work.",
    cover: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=1400",
    color: "#B5A882",
  },
];

// ── PROJECTS (each belongs to a category) ───────────────────────────────────
export const works = [
  {
    slug: "aer",
    categorySlug: "architecture",
    title: "Aer",
    year: "2024",
    color: "#6B5B50",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200",
  },
  {
    slug: "flux",
    categorySlug: "branding",
    title: "Flux",
    year: "2024",
    color: "#B8B5A4",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200",
  },
  {
    slug: "riptide",
    categorySlug: "interior",
    title: "Riptide",
    year: "2025",
    color: "#8BA8A8",
    image: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=1200",
  },
  {
    slug: "pulse",
    categorySlug: "interior",
    title: "Pulse",
    year: "2025",
    color: "#B5A882",
    image: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=1200",
  },
  {
    slug: "nova",
    categorySlug: "art-direction",
    title: "Nova",
    year: "2025",
    color: "#B5A882",
    image: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=1200",
  },
  {
    slug: "drift",
    categorySlug: "architecture",
    title: "Drift",
    year: "2024",
    color: "#6B5B50",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200",
  },
];

// ── PROJECT DETAILS ──────────────────────────────────────────────────────────
export const worksDetails = [
  {
    slug: "aer",
    categorySlug: "architecture",
    title: "Aer",
    cover: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1400",
    description: "Built for those who think differently about the sky. A residential concept that dissolves the boundary between structure and atmosphere.",
    images: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200",
    ],
  },
  {
    slug: "flux",
    categorySlug: "branding",
    title: "Flux",
    cover: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400",
    description: "A modern visual identity built on tension and flow — where structure meets fluidity in every mark and motion.",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200",
      "https://images.unsplash.com/photo-1600607687644-c7f34c3f31c3?w=1200",
    ],
  },
  {
    slug: "riptide",
    categorySlug: "interior",
    title: "Riptide",
    cover: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=1400",
    description: "A luxury interior concept exploring the interplay of water, light and material. Calm on the surface — complex beneath.",
    images: [
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=1200",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200",
    ],
  },
  {
    slug: "pulse",
    categorySlug: "interior",
    title: "Pulse",
    cover: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=1400",
    description: "Minimal residential interior — every surface breathes. A study in restraint and warmth.",
    images: [
      "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=1200",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=1200",
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=1200",
    ],
  },
  {
    slug: "nova",
    categorySlug: "art-direction",
    title: "Nova",
    cover: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=1400",
    description: "An editorial art direction campaign built around themes of emergence and transformation.",
    images: [
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=1200",
      "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=1200",
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=1200",
    ],
  },
  {
    slug: "drift",
    categorySlug: "architecture",
    title: "Drift",
    cover: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1400",
    description: "A facade study in movement — panels that shift with light and season, turning the building into a living canvas.",
    images: [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200",
    ],
  },
];
