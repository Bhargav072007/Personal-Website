import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ProjectModal from "./ProjectModal";

const PROJECTS = [
  {
    title: "Quantum-Assisted Assurance",
    tag: "Quantum | Thesis",
    description: "A research initiative focused on algorithmic modeling, simulation, and performance analysis of quantum systems for autonomous aviation assurance.",
    bullets: [
      "Quantum computing and systems modeling",
      "Simulation and performance analysis",
      "Assurance-focused thinking for autonomous systems",
      "Thesis-oriented research direction",
    ],
    image: "/assets/base44/ecbdc876f_image.png",
    gallery: [
      "/assets/base44/ecbdc876f_image.png",
      "/assets/base44/1a3486330_image.png",
      "/assets/base44/b534440b2_image.png",
      "/assets/base44/bf86a4d84_image.png",
    ],
    link: "https://meghyanai.com",
    linkLabel: "Visit Website",
    pdfLink: "/assets/base44/c3b410bc5_QAA-research-poster-48x36-print.pdf",
    pdfLabel: "Download Research Poster",
    pdfLink2: "/assets/base44/dfc544faf_QAA-ProjectPitch.pdf",
    pdfLabel2: "Download Research Abstract",
    accent: "from-sky-500/20 to-blue-500/20",
    accentBorder: "group-hover:border-sky-400/40",
  },
  {
    title: "SmartEvent",
    tag: "Product | Startup",
    cardLogo: "/assets/base44/fc281c144_SmartEVent.png",
    description: "A smart venue and event intelligence platform designed to improve crowd movement, event operations, and live attendee experience.",
    bullets: [
      "Built around real-time crowd-aware event operations",
      "Focused on venue navigation, attendee flow, and organizer insights",
      "Explores intelligent routing, queue visibility, and operational efficiency",
      "Designed with product thinking, startup execution, and live-event scalability in mind",
    ],
    image: "/assets/base44/77f725ce5_WhatsAppImage2026-03-30at64926PM.jpeg",
    gallery: [
      "/assets/base44/77f725ce5_WhatsAppImage2026-03-30at64926PM.jpeg",
      "/assets/base44/bcd8db94e_WhatsAppImage2026-03-30at64925PM.jpeg",
      "/assets/base44/a068a4cde_WhatsAppImage2026-03-30at64926PM1.jpeg",
      "/assets/base44/260fc8e58_WhatsAppImage2026-03-30at64926PM2.jpeg",
      "/assets/base44/17af16ba0_WhatsAppImage2026-03-30at64926PM3.jpeg",
      "/assets/base44/978bf1c21_WhatsAppImage2026-03-30at64926PM4.jpeg",
    ],
    link: "https://smartevent.base44.app",
    linkLabel: "View SmartEvent",
    youtubeLink: "https://youtu.be/ZlHUjXczBPc",
    youtubeLinkLabel: "Watch Demo",
    accent: "from-orange-500/20 to-amber-500/20",
    accentBorder: "group-hover:border-amber-400/40",
  },
  {
    title: "The Arogí Foundation",
    tag: "Nonprofit | Impact",
    description: "Founded and scaled a nonprofit focused on structured access to opportunity, recognized by the Hon'ble President of India.",
    bullets: [
      "Executed 150+ initiatives across education, capacity building, and community support",
      "Led and coordinated 60+ volunteers",
      "Raised $5,000+ through partnerships and structured fundraising",
      "Integrated career guidance and digital literacy into outreach programs",
      "Recognized by the Hon'ble President of India",
    ],
    image: "/assets/base44/75321dee1_Header.jpg",
    gallery: [
      "/assets/base44/75321dee1_Header.jpg",
      "/assets/base44/db78ec032_image.png",
      "/assets/base44/839ca5cb0_image.png",
    ],
    link: "https://www.arogifoundation.com",
    linkLabel: "Visit Arogí Foundation",
    accent: "from-emerald-500/20 to-green-500/20",
    accentBorder: "group-hover:border-emerald-400/40",
  },
  {
    title: "AviationAI",
    tag: "AI | Aviation",
    description: "A student-led initiative developing AI and IoT-driven solutions for airport operations, security optimization, and passenger flow intelligence.",
    bullets: [
      "Developing AI and IoT-driven solutions for airport operations",
      "Modeling optimization for security and passenger flow",
      "Applying machine learning to operational bottlenecks",
      "Structuring research-oriented engineering teams",
    ],
    image: "/assets/base44/f18327ab3_1775143393281.jpeg",
    gallery: [
      "/assets/base44/f18327ab3_1775143393281.jpeg",
      "/assets/base44/b0b992cdd_d41dadde-9a32-48a6-97d3-efeeac931b0a3a83aa94-0e53-4b10-a265-1a7eb04a578d1.jpg",
      "/assets/base44/e8828f2f2_1.png",
      "/assets/base44/a9f9c4025_2.png",
      "/assets/base44/83145c13e_3.png",
    ],
    pdfLink: "/assets/base44/66abf0d1c_AviationAIPDF.pdf",
    pdfLabel: "Download AviationAI PDF",
    accent: "from-sky-500/20 to-cyan-500/20",
    accentBorder: "group-hover:border-cyan-400/40",
  },
  {
    title: "Arogí MUN'26",
    tag: "Diplomacy | Youth Leadership",
    description: "A youth diplomacy platform built from the energy of Arogí MUN'25, where intense debate, logistical chaos, and a sleep-deprived team turned a Model UN into a real statement about young people leading with courage.",
    bullets: [
      "Built from 100+ venue calls, 100+ school outreach conversations, and a team operating through last-minute event challenges",
      "Created an accessible Model UN space where young delegates debated real issues with urgency, confidence, and imagination",
      "Led a volunteer team managing awards, placards, chits, rooms, extensions, and live conference operations under pressure",
      "Turned diplomacy into something students could feel, practice, and own beyond a classroom simulation",
      "Carrying the momentum forward into Arogí MUN'26 with the same mission: youth voice, leadership, and impact",
    ],
    image: "/assets/projects/arogi-mun-hero.jpg",
    gallery: [
      "/assets/projects/arogi-mun-hero.jpg",
      "/assets/projects/arogi-mun-founder-note.jpg",
      "/assets/projects/arogi-mun-secretary-general.jpg",
    ],
    link: "https://www.linkedin.com/posts/bhargav-malluvajhula_arogaedmun25-wemadeit-gratitude-activity-7346055938178498560-bK-W",
    linkLabel: "Read LinkedIn Post",
    accent: "from-rose-500/20 to-amber-500/20",
    accentBorder: "group-hover:border-rose-400/40",
  },
  {
    title: "AI + Career Systems",
    tag: "AI | Research",
    description: "Designing a decision-support system for career guidance, not a generic chatbot. Built around intent modeling and structured feedback loops.",
    bullets: [
      "Intent modeling based on user input patterns",
      "Multilingual and varied input handling",
      "Iterative refinement using feedback loops",
      "Tested with 150+ students in an ongoing study",
      "Focused on reducing the access gap in structured career decision-making",
    ],
    image: "/assets/base44/f9a33e994_GuideBot.png",
    gallery: [
      "/assets/base44/f9a33e994_GuideBot.png",
    ],
    accent: "from-violet-500/20 to-purple-500/20",
    accentBorder: "group-hover:border-violet-400/40",
  },
];

export default function ProjectsSection() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-3">Portfolio</p>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
            Featured ventures & <span className="font-serif italic font-medium">projects</span>
          </h2>
          <p className="text-sm text-muted-foreground mt-3">Click any project to explore further</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              onClick={() => setSelected(project)}
              className={`group relative bg-card border border-border rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl ${project.accentBorder}`}
            >
              <div className="relative h-44 overflow-hidden">
                {project.cardLogo ? (
                  <div className="w-full h-full bg-white flex items-center justify-center p-6">
                    <img src={project.cardLogo} alt={project.title} className="max-h-36 w-auto object-contain" />
                  </div>
                ) : project.cardLogoText ? (
                  <div className="w-full h-full bg-gray-950 flex items-center justify-center">
                    <span className="text-6xl font-bold text-blue-400 tracking-tight">{project.cardLogoText}</span>
                  </div>
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                {!project.cardLogo && !project.cardLogoText && (
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-60`} />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                <span className="absolute top-3 right-3 text-xs font-medium tracking-wide bg-background/80 backdrop-blur text-foreground px-2.5 py-1 rounded-full border border-border/60">
                  {project.tag}
                </span>
              </div>

              <div className="p-5">
                <h3 className="text-base font-bold text-foreground mb-2 leading-snug group-hover:text-foreground/90">
                  {project.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-4">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-chart-1">View details</span>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
