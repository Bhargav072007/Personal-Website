import Navbar from "../components/Navbar";
import WhatIBuild from "../components/WhatIBuild";
import FocusAreas from "../components/FocusAreas";
import CurrentFocus from "../components/CurrentFocus";
import MetricsSection from "../components/MetricsSection";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <WhatIBuild />
        <MetricsSection />
        <FocusAreas />
        <CurrentFocus />
      </div>
      <Footer />
    </div>
  );
}