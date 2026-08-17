import { motion } from "framer-motion";

const AROGI_IMG = "/assets/base44/b57349fbd_F004_AYIMUN-XIV_IMGL02751.jpg";

const LOGOS = {
  omega: { src: "/assets/base44/f15f981d2_OmegaChiSigma.png" },
  aviation: { src: "/assets/base44/5d8e8a4ad_AviationAI.png" },
  cloudangles: { src: "/assets/base44/cloudangles-logo-experience.png" },
  arogiNew: { src: "/assets/base44/arogi-new-logo.png" },
  pennState: { src: "/assets/base44/pennstate-logo-experience.png" },
};

const TIMELINE = [
  {
    date: "Present",
    role: "EECS Learning Assistant",
    org: "CMPSC 360 — Penn State University",
    description:
      "Supporting students in CMPSC 360 (Discrete Mathematics) through office hours, guided problem-solving, and grading, helping reinforce core computer science and discrete math concepts.",
    color: "bg-blue-500",
    dot: "bg-blue-500",
    logo: LOGOS.pennState,
  },
  {
    date: "Feb 2026 - Present",
    role: "Vice President",
    org: "Omega Chi Sigma (STEM Business Frat)",
    description:
      "Advanced Omega Chi Sigma's engagement with the Smeal Business Council and secured Happy Valley LaunchBox as a collaborator, while coordinating speakers from AWS and BNY. Conceptualized a fundraising dinner for THON by developing partnerships with local businesses.",
    color: "bg-rose-500",
    dot: "bg-rose-500",
    logo: LOGOS.omega,
  },
  {
    date: "Jan 2026 - Present",
    role: "Research Lead",
    org: "Supervised by Prof. Mahfuza Farooque",
    description:
      "Developed the Quantum Target Distillation architecture, combining a 4–8–1 neural teacher, a 3-qubit RY/CZ quantum refinement circuit, and a logistic-regression student to rank rare aviation failures across 256 simulated encounter states; submitted the work to IEEE ICTAI 2026.",
    color: "bg-violet-500",
    dot: "bg-violet-500",
    logo: LOGOS.pennState,
  },
  {
    date: "Dec 2025 - Present",
    role: "President",
    org: "AviationAI (Penn State Student Organization)",
    description:
      "Leading a student-run AI initiative affiliated with State College Regional Airport, developing AI- and IoT-driven solutions for airport operations and security systems.",
    color: "bg-sky-500",
    dot: "bg-sky-500",
    logo: LOGOS.aviation,
  },
  {
    date: "May 2026 - July 2027",
    role: "Quantum Intern",
    org: "CloudAngles",
    description:
      "Worked on the quantum team by developing a flood prediction system using Quandela's MerLin QML framework and designing an optimized photonic circuit with phase shifters and beam splitters.",
    color: "bg-cyan-500",
    dot: "bg-cyan-500",
    logo: LOGOS.cloudangles,
  },
  {
    date: "Apr 2023 - Present",
    role: "Founder & Director",
    org: "The Arogí Foundation",
    description:
      "Established and expanded an NGO dedicated to improving the lives of orphans through birthday celebrations, capacity building, and career guidance. Led 60+ volunteers and executed 150+ projects, raising over $5,000. Recognized by the Hon'ble President of India and affiliated with the United Nations SDGs and Football for the Goals initiatives. Led a large-scale MUN (Arogí MUN'25) at BGS, Bengaluru, managing 100+ delegates, 8+ schools, and 50+ volunteers — raising $2,000+, securing partnerships, and assembling a distinguished Executive Board.",
    color: "bg-emerald-500",
    dot: "bg-emerald-500",
    logo: LOGOS.arogiNew,
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
    <section id="experience" className="py-16 lg:py-20 relative overflow-hidden border-y border-border">
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
          <div className="absolute left-4 lg:left-8 top-0 bottom-0 w-[1.3px] bg-gradient-to-b from-slate-400 via-slate-500/60 to-transparent" />
          <div className="space-y-12">
            {TIMELINE.map((entry, i) => (
              <motion.div
                key={`${entry.role}-${entry.org}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass glass-panel relative ml-10 rounded-lg p-5 pl-6 lg:ml-16 lg:p-6 group"
              >
                <span className="absolute -left-[34px] lg:-left-[43px] top-7 flex h-3 w-3 items-center justify-center">
                  <span
                    className={`absolute inline-flex h-full w-full rounded-full ${entry.dot} opacity-60 group-hover:animate-ping`}
                  />
                  <span
                    className={`relative inline-flex h-3 w-3 rounded-full ${entry.dot} shadow-lg ring-2 ring-background group-hover:scale-125 transition-transform`}
                  />
                </span>

                <span
                  className={`absolute top-[34px] h-px -left-[28px] w-7 lg:-left-[37px] lg:w-9 ${entry.dot} opacity-50`}
                />

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
                <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mt-3">{entry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
