import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CURRENTLY_BUILDING = ["SmartEvent", "Quantum-Assisted Assurance", "AI + Career Systems", "AviationAI"];
const PORTRAIT_URL = "/assets/base44/51fc701c8_1775783839100.png";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-chart-1/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-chart-2/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-28 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-chart-1/10 border border-chart-1/20 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-chart-1 animate-pulse" />
              <span className="text-xs font-medium text-chart-1">Available for collaborations</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.05] mb-6">
              Bhargav{" "}
              <span className="font-serif italic font-normal bg-gradient-to-r from-chart-1 to-chart-2 bg-clip-text text-transparent">
                Malluvajhula
              </span>
            </h1>

            <p className="text-lg text-muted-foreground font-light leading-relaxed mb-8 max-w-lg">
              Founder · Researcher · Builder — working at the intersection of <strong className="text-foreground font-medium">AI</strong>, <strong className="text-foreground font-medium">community impact</strong>, and <strong className="text-foreground font-medium">emerging tech</strong>.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <Button
                size="lg"
                className="gap-2 font-medium bg-gradient-to-r from-chart-1 to-chart-2 border-0 hover:opacity-90 text-white"
                onClick={() => navigate("/creations")}
              >
                Explore my work <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2 font-medium" onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}>
                Let's connect
              </Button>
              <a href="https://www.linkedin.com/in/bhargav-malluvajhula/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="ghost" className="gap-2 font-medium text-muted-foreground">
                  LinkedIn <ExternalLink className="w-3.5 h-3.5" />
                </Button>
              </a>
            </div>

            <div className="inline-flex items-center gap-2 text-xs text-muted-foreground">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              Recognized by the Hon'ble President of India
            </div>
          </motion.div>

          {/* Right — portrait with glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-chart-1/30 via-transparent to-chart-2/20 -rotate-3 scale-[1.04] blur-sm" />
              <img
                src={PORTRAIT_URL}
                alt="Bhargav Malluvajhula"
                className="relative w-full h-full object-cover rounded-2xl shadow-2xl"
              />
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl px-4 py-3 shadow-xl backdrop-blur"
              >
                <p className="text-xs font-medium text-muted-foreground mb-0.5">Penn State University</p>
                <p className="text-sm font-bold text-foreground">Research & AI</p>
              </motion.div>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-4 -right-4 bg-card border border-border rounded-xl px-4 py-3 shadow-xl"
              >
                <p className="text-xs font-medium text-muted-foreground mb-0.5">Impact</p>
                <p className="text-sm font-bold text-foreground">150+ Initiatives</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Currently building strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-20 border-t border-border pt-6"
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground mr-2">Currently building</span>
            {CURRENTLY_BUILDING.map((item, i) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + i * 0.1 }}
                className="text-xs font-medium px-3 py-1.5 rounded-full bg-gradient-to-r from-primary/5 to-chart-1/10 text-foreground border border-border hover:border-chart-1/30 transition-colors cursor-default"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
