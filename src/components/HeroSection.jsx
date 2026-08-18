import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PORTRAIT_URL = "/assets/base44/51fc701c8_1775783839100.png";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section id="home" className="heritage-surface relative flex min-h-0 items-center overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-5 pb-10 pt-28 sm:px-6 sm:pb-12 lg:px-8 lg:pb-20 lg:pt-24">
        {/* DOM order is the mobile order. On lg, explicit grid placement builds
            a balanced two-column composition (text left, portrait right). */}
        <div className="grid grid-cols-1 gap-y-7 sm:gap-y-8 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6">
          {/* 1 — Availability */}
          {/* 2 — Name + introduction */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="order-2 min-w-0 lg:col-start-1 lg:row-start-1"
          >
            <h1 className="mb-5 min-w-0 text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:mb-6 sm:text-6xl lg:text-7xl">
              <span className="block">Bhargav</span>
              <span className="text-gradient-theme block max-w-full break-words pb-[0.08em] font-serif text-[0.94em] font-normal italic sm:text-[1em]">
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
            className="order-3 mx-auto w-full max-w-xs sm:max-w-sm lg:col-start-2 lg:row-span-3 lg:row-start-1 lg:max-w-sm lg:self-center lg:justify-self-center"
          >
            <div className="liquid-tilt relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
              <img
                src={PORTRAIT_URL}
                alt="Bhargav Malluvajhula"
                className="h-full w-full object-cover object-top"
              />
              {/* Static (no infinite float): an animated backdrop-filter element
                  forces the glass blur to recompute every frame — a major
                  source of jank — for purely decorative motion. */}
              <div className="glass glass-strong hero-badge absolute bottom-3 left-3 max-w-[60%] rounded-xl px-3 py-2 sm:px-4 sm:py-2.5">
                <p className="mb-0.5 truncate text-[10px] font-medium text-foreground/80 sm:text-xs">Penn State University</p>
                <p className="truncate text-xs font-bold text-foreground sm:text-sm">Research &amp; AI</p>
              </div>
              <div className="glass glass-strong hero-badge absolute right-3 top-3 max-w-[55%] rounded-xl px-3 py-2 sm:px-4 sm:py-2.5">
                <p className="mb-0.5 truncate text-[10px] font-medium text-foreground/80 sm:text-xs">Impact</p>
                <p className="truncate text-xs font-bold text-foreground sm:text-sm">4+ Initiatives</p>
              </div>
            </div>
          </motion.div>

          {/* 4 — Primary + secondary CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="order-4 flex flex-wrap items-center gap-3 lg:col-start-1 lg:row-start-2"
          >
            <Button
              size="lg"
              className="w-full gap-2 px-5 font-medium sm:w-auto sm:px-8"
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
            <Button
              size="sm"
              variant="ghost"
              className="gap-1.5 px-2 text-muted-foreground"
              onClick={() => navigate("/about")}
            >
              About me <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </motion.div>

          {/* 5 — About / story CTA */}
          {/* 6 — Recognition line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="order-5 inline-flex items-start gap-2 text-xs leading-relaxed text-muted-foreground lg:col-start-1 lg:row-start-3 lg:self-start"
          >
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
            <span>Recognized by the Hon&apos;ble President of India</span>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
