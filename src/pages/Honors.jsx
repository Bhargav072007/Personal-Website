import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Award, BadgeCheck, ExternalLink } from "lucide-react";

const CERTIFICATIONS = [
  {
    title: "AI Scholars Program",
    issuer: "Inspirit AI",
    description: "Completed the AI Scholars Program and earned recognition as an AI Scholar.",
    image: "/assets/honors/award-pdf-image-5.jpg",
  },
  {
    title: "Trinity College London Grade 5",
    issuer: "Trinity College London",
    description: "Earned Grade 5 Communication Skills, Level 2 Certificate, with Distinction.",
    image: "/assets/honors/trinity-grade-5-preview-small.bmp",
    pdf: "/assets/honors/trinity-grade-5.pdf",
  },
  {
    title: "Web Development",
    issuer: "YouVah",
    description: "Completed Web Development coursework and earned a Certificate of Completion.",
    image: "/assets/honors/web-development-image-1.jpg",
    pdf: "/assets/honors/web-development.pdf",
  },
  {
    title: "Football for the Goals Membership",
    issuer: "United Nations",
    description: "The Arogi Foundation was accepted as an official member of Football for the Goals, a United Nations initiative advancing the Sustainable Development Goals through sport.",
    image: "/assets/honors/award-pdf-image-4.jpg",
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
    image: "/assets/honors/delegate-angola-unesco-image-1.jpg",
    pdf: "/assets/honors/delegate-angola-unesco.pdf",
    imageClass: "rotate-90 scale-75",
  },
  {
    title: "Best Presenter Award",
    issuer: "Inspirit AI",
    description: "Earned Best Presentation recognition through the Inspirit AI Scholars Program.",
    image: "/assets/honors/inspirit-ai-scholars-image-1.jpg",
    pdf: "/assets/honors/inspirit-ai-scholars.pdf",
  },
  {
    title: "Dean's List",
    issuer: "Penn State University",
    description: "Named to the Dean's List for academic achievement at Penn State.",
    image: "/assets/base44/b0e3ee36b_Penn-State-University-Logo-2015-present.png",
  },
];

const HonorCard = ({ item, icon: Icon }) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.45 }}
    className="group rounded-xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
  >
    <div className="aspect-[4/3] bg-muted overflow-hidden">
      <img
        src={item.image}
        alt={item.title}
        className={`h-full w-full object-contain p-3 transition-transform duration-300 ${item.imageClass || "group-hover:scale-[1.02]"}`}
      />
    </div>
    <div className="p-6">
      <div className="flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-muted-foreground mb-3">
        <Icon className="h-4 w-4" />
        {item.issuer}
      </div>
      <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
      {item.pdf && (
        <a
          href={item.pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
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
        <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-4">
          {title}
        </h2>
        <p className="text-base text-muted-foreground leading-relaxed">{subtitle}</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
                Honors, certifications, and <span className="font-serif italic font-medium bg-gradient-to-r from-chart-1 to-chart-2 bg-clip-text text-transparent">awards</span>
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
