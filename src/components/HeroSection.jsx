import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CURRENTLY_BUILDING = ["SmartEvent", "Quantum-Assisted Assurance", "AI + Career Systems", "AviationAI"];
const PORTRAIT_URL = "/assets/base44/51fc701c8_1775783839100.png";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section id="home" className="heritage-surface relative flex min-h-0 items-center overflow-hidden lg:min-h-screen">
      <div className="mx-auto w-full max-w-7xl px-5 pb-12 pt-28 sm:px-6 sm:pb-16 lg:px-8 lg:py-24">
        {/* DOM order is the mobile order. On lg, explicit grid placement builds
            a balanced two-column composition (text left, portrait right). */}
        <div className="grid grid-cols-1 gap-y-7 sm:gap-y-8 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6">
          {/* 1 — Availability */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-1 lg:col-start-1 lg:row-start-1 lg:self-end"
          >
            <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-chart-1 animate-pulse" />
              <span className="text-xs font-medium text-chart-1">Available for collaborations</span>
            </span>
          </motion.div>

          {/* 2 — Name + introduction */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="order-2 min-w-0 lg:col-start-1 lg:row-start-2"
          >
            <h1 className="mb-5 min-w-0 text-4xl font-bold leading-[1.02] tracking-tight text-foreground sm:mb-6 sm:text-6xl lg:text-7xl">
              <span className="block">Bhargav</span>
              <span className="text-gradient-theme block max-w-full break-words font-serif text-[0.94em] font-normal italic sm:text-[1em]">
                Malluvajhula
              </span>
            </h1>

            <p className="max-w-lg text-base font-light leading-relaxed text-muted-foreground sm:text-lg">
              Founder · Researcher · Builder — working at the intersection of{" "}
              <strong className="font-medium text-foreground">AI</strong>,{" "}
              <strong className="font-medium text-foreground">community impact</strong>, and{" "}
              <strong className="font-medium text-foreground">emerging tech</strong>.
            </p>
          </motion.div>

          {/* 3 — Portrait (frameless: clean crop, restrained radius) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-3 mx-auto w-full max-w-sm lg:col-start-2 lg:row-span-5 lg:row-start-1 lg:mx-0 lg:max-w-none lg:self-center"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
              <img
                src={PORTRAIT_URL}
                alt="Bhargav Malluvajhula"
                className="h-full w-full object-cover object-top"
              />
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="glass glass-strong hero-badge absolute bottom-3 left-3 max-w-[60%] rounded-xl px-3 py-2 sm:px-4 sm:py-2.5"
              >
                <p className="mb-0.5 truncate text-[10px] font-medium text-foreground/80 sm:text-xs">Penn State University</p>
                <p className="truncate text-xs font-bold text-foreground sm:text-sm">Research &amp; AI</p>
              </motion.div>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="glass glass-strong hero-badge absolute right-3 top-3 max-w-[55%] rounded-xl px-3 py-2 sm:px-4 sm:py-2.5"
              >
                <p className="mb-0.5 truncate text-[10px] font-medium text-foreground/80 sm:text-xs">Impact</p>
                <p className="truncate text-xs font-bold text-foreground sm:text-sm">4+ Initiatives</p>
              </motion.div>
            </div>
          </motion.div>

          {/* 4 — Primary + secondary CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="order-4 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap lg:col-start-1 lg:row-start-3"
          >
            <Button
              size="lg"
              className="col-span-2 w-full gap-2 px-5 font-medium sm:col-auto sm:w-auto sm:px-8"
              onClick={() => navigate("/creations")}
            >
              Explore my work <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full gap-2 px-4 font-medium sm:w-auto sm:px-8"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Let&apos;s connect
            </Button>
            <a
              className="min-w-0"
              href="https://www.linkedin.com/in/bhargav-malluvajhula/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="ghost" className="w-full gap-2 px-4 font-medium text-muted-foreground sm:w-auto sm:px-8">
                LinkedIn <ExternalLink className="h-3.5 w-3.5" />
              </Button>
            </a>
          </motion.div>

          {/* 5 — About / story CTA */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            onClick={() => navigate("/about")}
            className="glass glass-interactive group order-5 flex w-full max-w-lg items-center justify-between gap-3 rounded-lg px-3 py-3 text-left sm:gap-4 sm:px-4 lg:col-start-1 lg:row-start-4"
          >
            <span className="flex min-w-0 items-center gap-3">
              <span className="h-10 w-1 shrink-0 rounded-full bg-gradient-to-b from-chart-1 to-chart-2" />
              <span className="min-w-0">
                <span className="block text-sm font-semibold text-foreground">
                  Meet the person behind the work
                </span>
                <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
                  A quieter look at the path, the purpose, and the why.
                </span>
              </span>
            </span>
            <span className="glass flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-foreground transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight className="h-4 w-4" />
            </span>
          </motion.button>

          {/* 6 — Recognition line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="order-6 inline-flex items-start gap-2 text-xs leading-relaxed text-muted-foreground lg:col-start-1 lg:row-start-5 lg:self-start"
          >
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
            <span>Recognized by the Hon&apos;ble President of India</span>
          </motion.div>
        </div>

        {/* 7 — Currently building (full-width, structured — not a floating card) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-9 border-t border-border pt-5 sm:mt-12 sm:pt-6"
        >
          <div className="flex min-w-0 flex-wrap items-center gap-2.5 sm:gap-3">
            <span className="mr-1 w-full text-xs font-medium uppercase tracking-widest text-muted-foreground sm:mr-2 sm:w-auto">
              Currently building
            </span>
            {CURRENTLY_BUILDING.map((item, i) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + i * 0.1 }}
                className="glass max-w-full rounded-full px-3 py-1.5 text-xs font-medium text-foreground transition-colors cursor-default"
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
