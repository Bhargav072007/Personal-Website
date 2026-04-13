import { motion } from "framer-motion";
import { ExternalLink, Newspaper } from "lucide-react";

const PUBLICATIONS = [
  {
    title: "Bhargav Malluvajhula, Founder of The Arogí Foundation",
    source: "Great Companies",
    description: "Founder profile featuring the mission, growth, and impact of The Arogí Foundation.",
    link: "https://www.greatcompanies.in/post/bhargav-malluvajhula-founder-of-the-arog%C3%AD-foundation",
  },
  {
    title: "Celebrating & Empowering Orphans, Aligning with SDGs",
    source: "LinkedIn Pulse",
    description: "Article on using birthday celebrations, mentorship, and SDG-aligned programs to support orphaned children.",
    link: "https://www.linkedin.com/pulse/celebrating-empowering-orphans-aligning-sdgs-bhargav-malluvajhula-p0cnc/?trackingId=sWJP9S1M4RIWmD6%2BYqHBrw%3D%3D",
  },
];

export default function PublicationsSection() {
  return (
    <section className="py-20 lg:py-28 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-3">Press & Writing</p>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
            Featured <span className="font-serif italic font-medium">publications</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {PUBLICATIONS.map((publication, i) => (
            <motion.a
              key={publication.link}
              href={publication.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-between gap-4 mb-5">
                <div className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-muted-foreground">
                  <Newspaper className="h-4 w-4" />
                  {publication.source}
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-3">
                {publication.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {publication.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
