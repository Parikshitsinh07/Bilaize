import { useState } from "react";
import GalleryPage from "./component/GalleryPage";
import WorkPage from "./component/WorkPage";
import WorkDetailPage from "./component/Workdetailpage";
import BackgroundVideoPage from "./component/BackgroundVideoPage";

interface CardItem {
  id: number;
  title: string;
  imageUrl: string;
}

interface ProjectItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

function App() {
  const [page, setPage] = useState<string>("home");
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const CARDS: CardItem[] = [
    {
      id: 1,
      title: "Moment One",
      imageUrl:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    },
    {
      id: 2,
      title: "Light Study",
      imageUrl:
        "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80",
    },
    {
      id: 3,
      title: "Urban Frame",
      imageUrl:
        "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80",
    },
    {
      id: 4,
      title: "Silence",
      imageUrl:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    },
    {
      id: 5,
      title: "Texture 01",
      imageUrl:
        "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&q=80",
    },
    {
      id: 6,
      title: "Golden Edge",
      imageUrl:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80",
    },
  ];

  const handleProjectClick = (item: ProjectItem) => {
    setActiveProject(item);
    setPage("detail");
  };

  return (
    <>
      {/* HOME PAGE */}
      {page === "home" && (
        <div className="relative w-full h-screen overflow-hidden bg-black">
          {/* Background Video */}
          <BackgroundVideoPage />

          {/* Navbar */}
          <header className="absolute top-0 left-0 w-full z-50">
            <div className="flex items-center justify-between px-10 py-6">
              {/* Logo */}
              <div
                onClick={() => setPage("home")}
                className="text-white text-2xl font-semibold tracking-[0.25em] cursor-pointer"
              >
                Bilaght
              </div>

              {/* Nav Links */}
              <nav className="flex items-center gap-10">
                {[
                  { label: "Gallery", page: "gallery" },
                  { label: "Work", page: "work" },
                  // { label: "Log", page: "log" },
                  { label: "About Us", page: "about" },
                  { label: "Contact Us", page: "contact" },
                ].map((item) => (
                  <button
                    key={item.label}
                    onClick={() => setPage(item.page)}
                    className="relative text-white uppercase tracking-[0.18em] text-[12px] font-bold transition-all duration-300 hover:opacity-70"
                  >
                    {item.label}

                    {/* underline animation */}
                    <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-white transition-all duration-300 hover:w-full" />
                  </button>
                ))}
              </nav>
            </div>
          </header>

          {/* Hero Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
            <h1 className="text-white text-[clamp(60px,10vw,160px)] leading-none font-light tracking-tight">
            Bilaght Studio
            </h1>

            <p className="mt-6 text-white/70 tracking-[0.25em] uppercase text-xs">
              Film · Photography · Design
            </p>
          </div>
        </div>
      )}

      {/* GALLERY PAGE */}
      {page === "gallery" && (
        <GalleryPage
          cards={CARDS}
          onBack={() => setPage("home")}
        />
      )}

      {/* WORK PAGE */}
      {page === "work" && (
        <WorkPage
          onBack={() => setPage("home")}
          onProjectClick={handleProjectClick}
        />
      )}

      {/* DETAIL PAGE */}
      {page === "detail" && activeProject && (
        <WorkDetailPage
          item={activeProject}
          onBack={() => setPage("work")}
          onProjectClick={handleProjectClick}
        />
      )}

      {/* ABOUT PAGE */}
      {page === "about" && (
        <div className="w-full min-h-screen bg-black text-white flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl mb-6">About Us</h1>

            <button
              onClick={() => setPage("home")}
              className="border border-white px-6 py-3 uppercase tracking-[0.2em] text-sm hover:bg-white hover:text-black transition-all duration-300"
            >
              Back Home
            </button>
          </div>
        </div>
      )}

      {/* CONTACT PAGE */}
      {page === "contact" && (
        <div className="w-full min-h-screen bg-black text-white flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl mb-6">Contact Us</h1>

            <p className="text-white/60 mb-8">
              hello@jonystudio.com
            </p>

            <button
              onClick={() => setPage("home")}
              className="border border-white px-6 py-3 uppercase tracking-[0.2em] text-sm hover:bg-white hover:text-black transition-all duration-300"
            >
              Back Home
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;