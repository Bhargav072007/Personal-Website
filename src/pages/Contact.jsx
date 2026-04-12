import Navbar from "../components/Navbar";
import LinkedInSection from "../components/LinkedInSection";
import RecommendationsSection from "../components/RecommendationsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <ContactSection />
        <LinkedInSection />
        <RecommendationsSection />
      </div>
      <Footer />
    </div>
  );
}