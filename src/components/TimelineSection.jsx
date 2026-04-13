import { motion } from "framer-motion";

const AROGI_IMG = "/assets/base44/b57349fbd_F004_AYIMUN-XIV_IMGL02751.jpg";

const TIMELINE = [
  {
    date: "Feb 2026 – Present",
    role: "Philanthropy Chair",
    org: "Omega Chi Sigma PSU",
    description: "Leading the chapter's philanthropic efforts by building initiatives beyond THON, strengthening local partnerships, and creating measurable community impact.",
    color: "bg-rose-500",
  },
  {
    date: "Jan 2026 – Present",
    role: "President",
    org: "AviationAI @ Penn State",
    description: "Leading a student-run AI initiative affiliated with State College Regional Airport, developing AI- and IoT-driven solutions for airport operations and security systems.",
    color: "bg-sky-500",
  },
  {
    date: "Jan 2026 – Present",
    role: "Research Lead",
    org: "Quantum-Assisted Assurance for Autonomous Aviation Systems",
    description: "Contributing to an active quantum computing project, working on algorithmic modeling, simulation, and performance analysis of quantum systems. Working on a thesis.",
    color: "bg-violet-500",
  },
  {
    date: "Apr 2023 – Present",
    role: "Founder",
    org: "The Arogí Foundation",
    description: "Established and expanded an NGO dedicated to improving the lives of orphans through birthday celebrations, capacity building, and career guidance. Led 60+ volunteers and executed 150+ projects, raising over $5,000. Recognized by the Hon'ble President of India and affiliated with the United Nations SDGs and Football for the Goals initiatives.",
    color: "bg-emerald-500",
  },
  {
    date: "Apr 2025 – Aug 2025",
    role: "Founder",
    org: "Arogí MUN '25",
    description: "Conceptualized and organized a large-scale MUN hosted at BGS IRS, Bengaluru. Oversaw 100+ delegates, 8+ schools, and 50+ volunteers. Raised over $2,000, established partnerships, and curated one of the most distinguished executive boards in Bengaluru's MUN circuit.",
    color: "bg-amber-500",
  },
  {
    date: "2025 – Present",
    role: "Founder / Product Builder",
    org: "SmartEvent",
    description: "Built a smart venue concept focused on event intelligence, attendee experience, crowd flow, and operational decision support for live events and venues.",
    color: "bg-orange-500",
  },
];

export default function TimelineSection() {
  return (
    <section id="experience" className="py-20 lg:py-28 relative overflow-hidden border-y border-border">
      {/* Translucent Arogi background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.12] pointer-events-none"
        style={{ backgroundImage: `url(${AROGI_IMG})` }}
      />
      <div className="absolute inset-0 bg-primary/[0.03]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-3">Journey</p>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
            Experience <span className="font-serif italic font-medium">timeline</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 lg:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-slate-400 via-slate-500/60 to-transparent" />
          <div className="space-y-12">
            {TIMELINE.map((entry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-12 lg:pl-20 group"
              >
                <div className="absolute left-2.5 lg:left-[26px] top-1.5 w-3 h-3 rounded-full bg-red-500 shadow-lg ring-2 ring-background group-hover:scale-125 transition-transform" />
                <p className="text-xs font-medium text-muted-foreground tracking-wide mb-1">{entry.date}</p>
                <h3 className="text-lg font-bold text-foreground">{entry.role}</h3>
                <p className="text-sm font-medium text-muted-foreground mb-2">{entry.org}</p>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">{entry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}