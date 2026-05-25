import { useState } from 'react';
import StellarCardGallerySingle from './component/ui/StellarCardGallerySingle'
import GalleryPage from './component/GalleryPage';
import WorkPage from './component/WorkPage';
import WorkDetailPage from './component/Workdetailpage';

function App() {
  const [page, setPage] = useState("home");
  const [activeProject, setActiveProject] = useState(null);

  const CARDS = [
    { id: 1, title: "Moment One",   imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80" },
    { id: 2, title: "Light Study",  imageUrl: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80" },
    { id: 3, title: "Urban Frame",  imageUrl: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80" },
    { id: 4, title: "Silence",      imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" },
    { id: 5, title: "Texture 01",   imageUrl: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&q=80" },
    { id: 6, title: "Golden Edge",  imageUrl: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80" },
  ];

  const handleProjectClick = (item: any) => {
    setActiveProject(item);
    setPage("detail");
  };
  return (
    <>
      {page === "home" && (
       <StellarCardGallerySingle 
       onGalleryClick={() => setPage("gallery")}
       onWorkClick={() => setPage("work")}
       />
      )}

      {page === "gallery" && (
        <GalleryPage
          cards={CARDS}
          onBack={() => setPage("home")}
        />
      )}

      {page === "work" && (
        <WorkPage
          onBack={() => setPage("home")}
          onProjectClick={handleProjectClick}
        />
      )}

      {page === "detail" && (
        <WorkDetailPage
          item={activeProject}
          onBack={() => setPage("work")}
          onProjectClick={handleProjectClick}
        />
      )}
    </>
  );
}

export default App
