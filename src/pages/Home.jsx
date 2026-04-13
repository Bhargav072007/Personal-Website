import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import MetricsSection from "../components/MetricsSection";
import AffiliationsStrip from "../components/AffiliationsStrip";
import WhatIBuild from "../components/WhatIBuild";
import LinkedInSection from "../components/LinkedInSection";
import RecommendationsSection from "../components/RecommendationsSection";
import CurrentFocus from "../components/CurrentFocus";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <MetricsSection />
      <AffiliationsStrip />
      <WhatIBuild />
      <LinkedInSection />
      <RecommendationsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
