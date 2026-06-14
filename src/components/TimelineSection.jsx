import { motion } from "framer-motion";

const AROGI_IMG = "/assets/base44/b57349fbd_F004_AYIMUN-XIV_IMGL02751.jpg";

// Logos reused from the affiliations strip (light versions only — kept
// identical in light and dark mode for the experience timeline).
const LOGOS = {
  omega: { src: "/assets/base44/f15f981d2_OmegaChiSigma.png" },
  aviation: { src: "/assets/base44/5d8e8a4ad_AviationAI.png" },
  pennState: { src: "/assets/base44/b0e3ee36b_Penn-State-University-Logo-2015-present.png" },
  arogi: { src: "/assets/base44/7a114f6b7_Arogi.png" },
  smartEvent: { src: "/assets/base44/fc281c144_SmartEVent.png" },
};

const TIMELINE = [
  {
    date: "Apr 2026 - Present",
    role: "Vice President",
    org: "Omega Chi Sigma PSU",
    description:
      "Serving as Vice President of Omega Chi Sigma at Penn State, helping lead chapter direction, strengthen member initiatives, and support philanthropic and community impact efforts.",
    color: "bg-rose-500",
    dot: "bg-rose-500",
    logo: LOGOS.omega,
  },
  {
    date: "Feb 2026 - Apr 2026",
    role: "Philanthropy Chair",
    org: "Omega Chi Sigma PSU",
    description:
      "Led the chapter's philanthropic efforts by building initiatives beyond THON, strengthening local partnerships, and creating measurable community impact.",
    color: "bg-rose-400",
    dot: "bg-rose-400",
    logo: LOGOS.omega,
  },
  {
    date: "Jan 2026 - Present",
    role: "President",
    org: "AviationAI @ Penn State",
    description:
      "Leading a student-run AI initiative affiliated with State College Regional Airport, developing AI- and IoT-driven solutions for airport operations and security systems.",
    color: "bg-sky-500",
    dot: "bg-sky-500",
    logo: LOGOS.aviation,
  },
  {
    date: "Jan 2026 - Present",
    role: "Research Lead",
    org: "Quantum-Assisted Assurance for Autonomous Aviation Systems",
    description:
      "Contributing to an active quantum computing project, working on algorithmic modeling, simulation, and performance analysis of quantum systems. Working on a thesis.",
    color: "bg-violet-500",
    dot: "bg-violet-500",
    logo: LOGOS.pennState,
  },
  {
    date: "Apr 2023 - Present",
    role: "Founder",
    org: "The Arogi Foundation",
    description:
      "Established and expanded an NGO dedicated to improving the lives of orphans through birthday celebrations, capacity building, and career guidance. Led 60+ volunteers and executed 150+ projects, raising over $5,000. Recognized by the Hon'ble President of India and affiliated with the United Nations SDGs and Football for the Goals initiatives.",
    color: "bg-emerald-500",
    dot: "bg-emerald-500",
    logo: LOGOS.arogi,
  },
  {
    date: "Apr 2025 - Aug 2025",
    role: "Founder",
    org: "Arogi MUN '25",
    description:
      "Conceptualized and organized a large-scale MUN hosted at BGS IRS, Bengaluru. Oversaw 100+ delegates, 8+ schools, and 50+ volunteers. Raised over $2,000, established partnerships, and curated one of the most distinguished executive boards in Bengaluru's MUN circuit.",
    color: "bg-amber-500",
    dot: "bg-amber-500",
    logo: LOGOS.arogi,
  },
  {
    date: "2025 - Present",
    role: "Founder / Product Builder",
    org: "SmartEvent",
    description:
      "Built a smart venue concept focused on event intelligence, attendee experience, crowd flow, and operational decision support for live events and venues.",
    color: "bg-orange-500",
    dot: "bg-orange-500",
    logo: LOGOS.smartEvent,
  },
];

function CompanyLogo({ logo, alt }) {
  if (!logo) return null;
  return (
    <img
      src={logo.src}
      alt={alt}
      className="shrink-0 h-12 w-12 lg:h-14 lg:w-14 object-contain"
    />
  );
}

export default function TimelineSection() {
  return (
    <section id="experience" className="py-20 lg:py-28 relative overflow-hidden border-y border-border">
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
                className="glass glass-panel relative ml-10 rounded-lg p-5 pl-6 lg:ml-16 lg:p-6 group"
              >
                {/* Timeline node on the rail */}
                <span className="absolute -left-[34px] lg:-left-[43px] top-7 flex h-3 w-3 items-center justify-center">
                  <span
                    className={`absolute inline-flex h-full w-full rounded-full ${entry.dot} opacity-60 group-hover:animate-ping`}
                  />
                  <span
                    className={`relative inline-flex h-3 w-3 rounded-full ${entry.dot} shadow-lg ring-2 ring-background group-hover:scale-125 transition-transform`}
                  />
                </span>

                {/* Connector line from the rail to the card */}
                <span
                  className={`absolute top-[34px] h-px -left-[28px] w-7 lg:-left-[37px] lg:w-9 ${entry.dot} opacity-50`}
                />

                {/* Caret pointing back toward the timeline */}
                <span
                  className="absolute -left-[7px] top-[28px] h-3.5 w-3.5 rotate-45 rounded-[3px] glass glass-panel border-l border-b border-border"
                  aria-hidden="true"
                />

                <div className="flex items-start gap-4">
                  <CompanyLogo logo={entry.logo} alt={entry.org} />
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-muted-foreground tracking-wide mb-1">{entry.date}</p>
                    <h3 className="text-lg font-bold text-foreground">{entry.role}</h3>
                    <p className="text-sm font-medium text-muted-foreground">{entry.org}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mt-3">{entry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
