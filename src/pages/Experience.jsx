import Navbar from "../components/Navbar";
import TimelineSection from "../components/TimelineSection";
import Footer from "../components/Footer";

export default function Experience() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <TimelineSection />
      </div>
      <Footer />
    </div>
  );
}