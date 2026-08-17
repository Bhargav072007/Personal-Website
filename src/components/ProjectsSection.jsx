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
    image: "/assets/base44/meghyanai-1.png",
    gallery: [
      "/assets/base44/meghyanai-1.png",
      "/assets/base44/meghyanai-3.png",
      "/assets/base44/meghyanai-2.png",
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
    link: "https://discover.psu.edu/organization/aviationai",
    linkLabel: "View on Discover PSU",
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
    image: "/assets/projects/arogi-mun-linkedin-1.jpg",
    gallery: [
      "/assets/projects/arogi-mun-linkedin-1.jpg",
      "/assets/projects/arogi-mun-linkedin-4.jpg",
      "/assets/projects/arogi-mun-linkedin-8.jpg",
      "/assets/projects/arogi-mun-linkedin-7.jpg",
    ],
    link: "https://www.linkedin.com/posts/bhargav-malluvajhula_arogaedmun25-wemadeit-gratitude-activity-7346055938178498560-bK-W",
    linkLabel: "Read LinkedIn Post",
    accent: "from-rose-500/20 to-amber-500/20",
    accentBorder: "group-hover:border-rose-400/40",
  },
  {
    title: "SETMIND",
    tag: "Product | Hackathon",
    isWinner: true,
    description: "Hackathon-winning AI-powered set preparation assistant for DJs — real-time crowd analysis, AI-generated set architecture, and live transition planning.",
    bullets: [
      "Real-time crowd analysis through Crowd AI and AI-generated set architecture through Set Plan",
      "Live dual-deck interface with an AI Mixer that plans transitions using BPM, key, energy, and phrase timing",
      "AI Prompter that responds to natural requests like \"make it darker\" or \"build to peak\"",
      "Built full-stack with a Node.js backend and React frontend, powered by Crusoe Cloud's Nemotron model",
      "Hackathon winner across DevNetwork AI + ML Hackathon 2026 and DeveloperWeek New York 2026",
    ],
    image: "https://img.youtube.com/vi/v4fAETmxMKs/hqdefault.jpg",
    gallery: [
      "https://img.youtube.com/vi/v4fAETmxMKs/hqdefault.jpg",
      "/assets/base44/setmind-1.jpg",
      "/assets/base44/setmind-2.jpg",
      "/assets/base44/setmind-3.jpg",
      "/assets/base44/setmind-4.jpg",
      "/assets/base44/setmind-5.jpg",
      "/assets/base44/setmind-6.jpg",
    ],
    link: "https://setmind-l2sq.onrender.com",
    linkLabel: "Visit SETMIND",
    youtubeLink: "https://youtu.be/v4fAETmxMKs",
    youtubeLinkLabel: "Watch Demo",
    accent: "from-red-500/20 to-orange-500/20",
    accentBorder: "group-hover:border-red-400/40",
  },
  {
    title: "CriShirt",
    tag: "Product | Hackathon",
    isWinner: true,
    description: "Hackathon-winning AI-curated custom apparel studio — turns a prompt into personalized clothing designs previewed across garments.",
    bullets: [
      "AI design generation from a text prompt, with automatic background removal and cleanup for apparel-ready graphics",
      "Multi-garment preview across T-shirts, hoodies, sweatshirts, crop tops, and long-sleeve tees",
      "AI-powered style suggestions for garment color, print contrast, and design fit",
      "Full cart-ready commerce flow",
      "Hackathon winner, recognized in the Summer Hackathon 2026 Winner Internship Opportunities track",
    ],
    image: "https://img.youtube.com/vi/aKtH_DBFaYA/hqdefault.jpg",
    gallery: [
      "https://img.youtube.com/vi/aKtH_DBFaYA/hqdefault.jpg",
      "/assets/base44/crishirt-1.jpg",
    ],
    link: "https://crishirtpc.vercel.app",
    linkLabel: "Visit CriShirt",
    youtubeLink: "https://youtu.be/aKtH_DBFaYA",
    youtubeLinkLabel: "Watch Demo",
    accent: "from-violet-500/20 to-purple-500/20",
    accentBorder: "group-hover:border-violet-400/40",
  },
];

const DISPLAY_PROJECTS = [PROJECTS[0], PROJECTS[4], PROJECTS[5], PROJECTS[1], PROJECTS[2], PROJECTS[3]];

export default function ProjectsSection() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-3">Portfolio</p>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
            Featured ventures & <span className="font-serif italic font-medium">projects</span>
          </h2>
          <p className="text-sm text-muted-foreground mt-3">Click any project to explore further</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {DISPLAY_PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              onClick={() => setSelected(project)}
              className={`glass glass-panel glass-interactive group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${project.accentBorder}`}
            >
              <div className="relative h-44 overflow-hidden">
                {project.isWinner && (
                  <span className="absolute top-[18px] -left-[38px] w-[150px] text-center py-[5px] -rotate-[40deg] bg-gradient-to-br from-[#f7d774] to-[#c9971f] text-[#3a2a05] text-[10.5px] font-extrabold tracking-[0.09em] uppercase shadow-[0_4px_10px_rgba(0,0,0,0.35)] border border-white/50 z-10">
                    Winner
                  </span>
                )}
                {project.cardLogo ? (
                  <div className="glass glass-media w-full h-full flex items-center justify-center p-6">
                    <img src={project.cardLogo} alt={project.title} className="max-h-36 w-auto object-contain" />
                  </div>
                ) : project.cardLogoText ? (
                  <div className="glass glass-media w-full h-full flex items-center justify-center">
                    <span className="text-6xl font-bold text-blue-400 tracking-tight">{project.cardLogoText}</span>
                  </div>
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                <span className="glass absolute top-3 right-3 text-xs font-medium tracking-wide text-foreground px-2.5 py-1 rounded-full">
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
