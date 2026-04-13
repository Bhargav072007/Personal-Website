import { motion } from "framer-motion";

const THEMES = [
  "AI for decision support",
  "Quantum systems & assurance",
  "Operational intelligence",
  "Community-driven technology",
  "Scalable impact",
];

const FOCUS_IMAGE = "/assets/base44/39ea9ac54_085cc689-7653-4aeb-9c09-e518a1157eba_edited.jpg";

export default function CurrentFocus() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-4">
              Featured Insight
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-6">
              Current <span className="font-serif italic font-medium">focus</span>
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-8">
              I am currently focused on building systems that sit at the intersection of intelligence,
              assurance, and access. That includes work in AI-driven career systems, quantum-assisted
              assurance for autonomous aviation, SmartEvent as a product concept for live operations,
              and student-led infrastructure intelligence through AviationAI.
            </p>

            <div className="flex flex-wrap gap-2">
              {THEMES.map((theme) => (
                <span
                  key={theme}
                  className="text-xs font-medium px-3 py-1.5 rounded-full bg-primary/5 text-foreground border border-border"
                >
                  {theme}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src={FOCUS_IMAGE}
              alt="Bhargav speaking at an event"
              className="w-full aspect-[4/3] object-cover rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}