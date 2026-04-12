import Navbar from "../components/Navbar";
import ProjectsSection from "../components/ProjectsSection";
import VideosSection from "../components/VideosSection";
import Footer from "../components/Footer";

export default function Projects() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <ProjectsSection />
        <VideosSection />
      </div>
      <Footer />
    </div>
  );
}