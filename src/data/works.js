// ── STATIC ASSETS IMPORTS ───────────────────────────────────────────────────
// Aranya Farms
import aranya1 from "../assets/Interior-optimized/Aranya farms/20250428-DSC03430-HDR.webp";
import aranya2 from "../assets/Interior-optimized/Aranya farms/20250428-DSC03449-HDR-3.webp";
import aranya3 from "../assets/Interior-optimized/Aranya farms/20260428-DJI_20260428184941_0097_D-HDR.webp";
import aranya4 from "../assets/Interior-optimized/Aranya farms/20260428-DJI_20260428185745_0107_D-HDR.webp";
import aranya5 from "../assets/Interior-optimized/Aranya farms/BRIELITE-1-3.webp";
import aranya6 from "../assets/Interior-optimized/Aranya farms/BRIELITE-1-6.webp";
import aranya7 from "../assets/Interior-optimized/Aranya farms/BRIELITE-1.webp";
import aranya8 from "../assets/Interior-optimized/Aranya farms/BRIELITE-2.webp";

// Artefino
import artefino1 from "../assets/Interior-optimized/Artefino/BRIELITE_ARTEFINO_FinalPhotographs (1 of 60).webp";
import artefino2 from "../assets/Interior-optimized/Artefino/BRIELITE_ARTEFINO_FinalPhotographs (2 of 60).webp";
import artefino3 from "../assets/Interior-optimized/Artefino/BRIELITE_ARTEFINO_FinalPhotographs (4 of 60).webp";
import artefino4 from "../assets/Interior-optimized/Artefino/BRIELITE_ARTEFINO_FinalPhotographs (6 of 60).webp";
import artefino5 from "../assets/Interior-optimized/Artefino/BRIELITE_ARTEFINO_FinalPhotographs (7 of 60).webp";
import artefino6 from "../assets/Interior-optimized/Artefino/BRIELITE_ARTEFINO_FinalPhotographs (9 of 60).webp";
import artefino7 from "../assets/Interior-optimized/Artefino/BRIELITE_ARTEFINO_FinalPhotographs (10 of 60).webp";
import artefino8 from "../assets/Interior-optimized/Artefino/BRIELITE_ARTEFINO_FinalPhotographs (15 of 60).webp";

// Fiesta Heaven
import fiesta1 from "../assets/Interior-optimized/Fiesta Heaven/DSC03898-HDR.webp";
import fiesta2 from "../assets/Interior-optimized/Fiesta Heaven/DSC03903-HDR.webp";
import fiesta3 from "../assets/Interior-optimized/Fiesta Heaven/DSC03923-HDR.webp";
import fiesta4 from "../assets/Interior-optimized/Fiesta Heaven/DSC04008.webp";
import fiesta5 from "../assets/Interior-optimized/Fiesta Heaven/DSC04013-HDR.webp";
import fiesta6 from "../assets/Interior-optimized/Fiesta Heaven/DSC04028-HDR.webp";
import fiesta7 from "../assets/Interior-optimized/Fiesta Heaven/DSC04038-HDR.webp";
import fiesta8 from "../assets/Interior-optimized/Fiesta Heaven/DSC04043-HDR.webp";

// Kesar Hill
import kesar1 from "../assets/Interior-optimized/Kesar Hill/DSC04127-HDR.webp";
import kesar2 from "../assets/Interior-optimized/Kesar Hill/DSC04130-HDR.webp";
import kesar3 from "../assets/Interior-optimized/Kesar Hill/DSC04133-HDR.webp";
import kesar4 from "../assets/Interior-optimized/Kesar Hill/DSC04138-HDR.webp";
import kesar5 from "../assets/Interior-optimized/Kesar Hill/DSC04143-HDR.webp";
import kesar6 from "../assets/Interior-optimized/Kesar Hill/DSC04148-HDR.webp";
import kesar7 from "../assets/Interior-optimized/Kesar Hill/DSC04153-HDR.webp";
import kesar8 from "../assets/Interior-optimized/Kesar Hill/DSC04158-HDR.webp";

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
    cover: aranya1,
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
    slug: "aranya-farms",
    categorySlug: "interior",
    title: "Aranya Farms",
    year: "2025",
    color: "#8BA8A8",
    image: aranya1,
  },
  {
    slug: "artefino",
    categorySlug: "interior",
    title: "Artefino",
    year: "2025",
    color: "#B5A882",
    image: artefino1,
  },
  {
    slug: "fiesta-heaven",
    categorySlug: "interior",
    title: "Fiesta Heaven",
    year: "2025",
    color: "#6B5B50",
    image: fiesta1,
  },
  {
    slug: "kesar-hill",
    categorySlug: "interior",
    title: "Kesar Hill",
    year: "2025",
    color: "#B8B5A4",
    image: kesar1,
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
    slug: "aranya-farms",
    categorySlug: "interior",
    title: "Aranya Farms",
    cover: aranya1,
    description: "A luxury farm stay that harmonizes high-end interiors with rustic natural surroundings.",
    images: [aranya1, aranya2, aranya3, aranya4, aranya5, aranya6, aranya7, aranya8],
  },
  {
    slug: "artefino",
    categorySlug: "interior",
    title: "Artefino",
    cover: artefino1,
    description: "An elegant showcase of premium materials, custom furniture, and fine art curation.",
    images: [artefino1, artefino2, artefino3, artefino4, artefino5, artefino6, artefino7, artefino8],
  },
  {
    slug: "fiesta-heaven",
    categorySlug: "interior",
    title: "Fiesta Heaven",
    cover: fiesta1,
    description: "A vibrant residential design celebrating warm colors, rich lighting, and celebratory spaces.",
    images: [fiesta1, fiesta2, fiesta3, fiesta4, fiesta5, fiesta6, fiesta7, fiesta8],
  },
  {
    slug: "kesar-hill",
    categorySlug: "interior",
    title: "Kesar Hill",
    cover: kesar1,
    description: "A scenic villa design utilizing organic textures, dynamic ceiling treatments, and open-plan living.",
    images: [kesar1, kesar2, kesar3, kesar4, kesar5, kesar6, kesar7, kesar8],
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
