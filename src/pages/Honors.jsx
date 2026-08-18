import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Award, BadgeCheck, ExternalLink } from "lucide-react";

const CERTIFICATIONS = [
  {
    title: "AI Scholars Program",
    issuer: "Inspirit AI",
    description: "Completed the AI Scholars Program and earned recognition as an AI Scholar.",
    image: "/assets/honors/ai-scholars-certificate.jpg",
    pdf: "/assets/honors/ai-scholars-certificate.pdf",
  },
  {
    title: "Trinity College London Grade 5",
    issuer: "Trinity College London",
    description: "Earned Grade 5 Communication Skills, Level 2 Certificate, with Distinction.",
    image: "/assets/honors/trinity-college-london-certificate.jpg",
    pdf: "/assets/honors/trinity-college-london-certificate.pdf",
  },
  {
    title: "Web Development",
    issuer: "YouVah",
    description: "Completed Web Development coursework and earned a Certificate of Completion.",
    image: "/assets/honors/web-development-image-1.jpg",
    pdf: "/assets/honors/web-development-certificate.pdf",
  },
  {
    title: "Football for the Goals Membership",
    issuer: "United Nations",
    description: "The Arogi Foundation was accepted as an official member of Football for the Goals, a United Nations initiative advancing the Sustainable Development Goals through sport.",
    image: "/assets/honors/football-for-goals-certificate.png",
  },
  {
    title: "Internship Completion Letter",
    issuer: "Professional Internship",
    description: "Successfully completed a professional internship, recognized with an official letter of completion.",
    image: "/assets/honors/internship-completion-letter.jpg",
    pdf: "/assets/honors/internship-completion-letter.pdf",
  },
];

const AWARDS = [
  {
    title: "Recognition from the Hon'ble President of India",
    issuer: "Rashtrapati Bhavan",
    description: "Received appreciation for The Arogi Foundation, which celebrated 312+ orphan birthdays and ran capacity-building programs with partners including InspireIndia, PawsHope, and GirlUp.",
    image: "/assets/honors/award-pdf-image-1.jpg",
  },
  {
    title: "Most Outstanding Delegate",
    issuer: "Asia Youth International Model United Nations",
    description: "Recognized as Most Outstanding Delegate while representing the Republic of Angola.",
    image: "/assets/honors/award-pdf-image-3.jpg",
    pdf: "/assets/honors/delegate-angola-unesco.pdf",
  },
  {
    title: "Best Presenter Award",
    issuer: "Inspirit AI",
    description: "Earned Best Presentation recognition for the 'Build Your Own ChatGPT Assistant' project through the Inspirit AI Scholars Program.",
    image: "/assets/honors/best-presenter-award.png",
  },
  {
    title: "Dean's List",
    issuer: "Penn State University",
    description: "Named to the Dean's List for academic achievement at Penn State.",
    image: "/assets/base44/b0e3ee36b_Penn-State-University-Logo-2015-present.png",
    imageDark: "/assets/base44/PennState-DarkMode.png",
  },
  {
    title: "SETMIND — Hackathon Winner",
    issuer: "DevNetwork AI + ML Hackathon 2026",
    description: "Won recognition for SETMIND, an AI-powered set preparation assistant for DJs, built with real-time crowd analysis and live transition planning.",
    image: "https://img.youtube.com/vi/v4fAETmxMKs/hqdefault.jpg",
    isWinner: true,
  },
  {
    title: "CriShirt — Hackathon Winner",
    issuer: "Summer Hackathon 2026",
    description: "Won recognition for CriShirt, an AI-curated custom apparel studio that turns a prompt into personalized clothing designs.",
    image: "https://img.youtube.com/vi/aKtH_DBFaYA/hqdefault.jpg",
    isWinner: true,
  },
];

const HonorCard = ({ item, icon: Icon }) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.45 }}
    className="glass glass-panel group rounded-xl overflow-hidden transition-shadow"
  >
    <div className="relative aspect-[4/3] bg-muted overflow-hidden">
      {item.isWinner && (
        <span className="absolute top-[18px] -left-[38px] w-[150px] text-center py-[5px] -rotate-[40deg] bg-gradient-to-br from-[#f7d774] to-[#c9971f] text-[#3a2a05] text-[10.5px] font-extrabold tracking-[0.09em] uppercase shadow-[0_4px_10px_rgba(0,0,0,0.35)] border border-white/50 z-10">
          Winner
        </span>
      )}
      {item.image ? (
        <>
          <img
            src={item.image}
            alt={item.title}
            className={`h-full w-full object-contain p-3 transition-transform duration-300 ${item.imageDark ? "dark:hidden" : ""} ${item.imageClass || "group-hover:scale-[1.02]"}`}
          />
          {item.imageDark && (
            <img
              src={item.imageDark}
              alt={item.title}
              className={`hidden h-full w-full object-contain p-3 transition-transform duration-300 dark:block ${item.imageClass || "group-hover:scale-[1.02]"}`}
            />
          )}
        </>
      ) : (
        <div className="h-full w-full flex items-center justify-center">
          <BadgeCheck className="h-16 w-16 text-muted-foreground/30" />
        </div>
      )}
    </div>
    <div className="p-7">
      <div className="flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-muted-foreground mb-3">
        <Icon className="h-4 w-4" />
        {item.issuer}
      </div>
      <h3 className="text-2xl font-bold text-foreground mb-3">{item.title}</h3>
      <p className="text-[15px] leading-relaxed text-muted-foreground">{item.description}</p>
      {item.pdf && (
        <a
          href={item.pdf}
          target="_blank"
          rel="noopener"
          className="glass glass-interactive mt-5 inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
        >
          Open certificate <ExternalLink className="h-4 w-4" />
        </a>
      )}
    </div>
  </motion.article>
);

const HonorSection = ({ title, subtitle, items, icon }) => (
  <section className="py-16 lg:py-20">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="max-w-2xl mb-10">
        <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-3">
          Honors
        </p>
        <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
          {title}
        </h2>
        <p className="text-base text-muted-foreground leading-relaxed">{subtitle}</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
        {items.map((item) => (
          <HonorCard key={item.title} item={item} icon={icon} />
        ))}
      </div>
    </div>
  </section>
);

export default function Honors() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <section className="py-20 lg:py-28 border-b border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="max-w-3xl"
            >
              <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-4">
                Recognition
              </p>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground mb-6">
                Honors, certifications, and <span className="text-gradient-theme font-serif italic font-medium">awards</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A selection of academic, leadership, and impact-focused recognitions.
              </p>
            </motion.div>
          </div>
        </section>

        <HonorSection
          title="Certifications and Licenses"
          subtitle="Programs and memberships connected to AI learning, global advocacy, and sustainable impact."
          items={CERTIFICATIONS}
          icon={BadgeCheck}
        />

        <HonorSection
          title="Awards"
          subtitle="Recognition for leadership, academic achievement, diplomacy, and community work."
          items={AWARDS}
          icon={Award}
        />

      </main>
      <Footer />
    </div>
  );
}
