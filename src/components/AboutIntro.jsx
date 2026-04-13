import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const PORTRAIT_URL = "/assets/base44/51fc701c8_1775783839100.png";
const GREETINGS = ["Hi", "Hola", "Namaste", "Bonjour", "Ciao", "Olá", "Hallo", "Konnichiwa"];

export default function AboutIntro() {
  const [greetingIndex, setGreetingIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setGreetingIndex((index) => (index + 1) % GREETINGS.length);
    }, 1800);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="pt-16 pb-10 lg:pt-20 lg:pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-4">
              About
            </p>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
              <span className="inline-block min-w-[7.5ch]">
                <motion.span
                  key={GREETINGS[greetingIndex]}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="inline-block"
                >
                  {GREETINGS[greetingIndex]},
                </motion.span>
              </span>{" "}
              I am <span className="font-serif italic font-medium bg-gradient-to-r from-chart-1 to-chart-2 bg-clip-text text-transparent">Bhargav</span>.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-5">
              I am a Penn State freshman majoring in Computer Science, building at the intersection of AI, research, startups, and community impact.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
              My work moves between practical products, student-focused tools, nonprofit initiatives, and research-driven systems. I care about turning ambitious ideas into useful experiences that can reach real people and keep improving over time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-chart-1/20 to-chart-2/20 rotate-2" />
            <img
              src={PORTRAIT_URL}
              alt="Bhargav Malluvajhula"
              className="relative aspect-[4/5] w-full max-w-sm mx-auto rounded-xl object-cover shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
