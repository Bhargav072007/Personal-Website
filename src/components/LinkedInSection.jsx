import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const POSTS = [
  {
    title: "Startup Week at Penn State was kind of a blur in the best way.",
    date: "Apr 2026",
    excerpt: "From Innovators at Penn State to HackPSU, this week was packed with ideas, great people, and the kind of conversations that actually make you build.",
    image: "https://media.base44.com/images/public/69dc0b8cd998dce3e5acde59/d24168841_image.png",
    link: "https://www.linkedin.com/posts/bhargav-malluvajhula_startup-week-at-penn-state-was-kind-of-a-activity-7448176785294462976-as1e?utm_source=share&utm_medium=member_desktop&rcm=ACoAADmAxlwBfQJEIGoNO_DoLBccBXHwrFmMsE0",
  },
  {
    title: "Meeting the Honorable President of India, Smt. Droupadi Murmu.",
    date: "Jan 2024",
    excerpt: "It was an honor to have the privilege of meeting the Honorable President of India. Our conversation was truly enlightening, and her words of encouragement hold immense significance for us.",
    image: "https://media.base44.com/images/public/69dc0b8cd998dce3e5acde59/db78ec032_image.png",
    link: "https://www.linkedin.com/posts/bhargav-malluvajhula_gratitute-ngo-activity-7151534363350810624-WTD1?utm_source=share&utm_medium=member_desktop&rcm=ACoAADmAxlwBfQJEIGoNO_DoLBccBXHwrFmMsE0",
  },
  {
    title: "Arogí MUN'25 is officially over. And I still can't believe we pulled this off.",
    date: "June 2025",
    excerpt: "From calling 100+ people to find a venue to watching delegates fiercely debate on secularism — this journey has been nothing short of magic.",
    image: "https://media.base44.com/images/public/69dc0b8cd998dce3e5acde59/839ca5cb0_image.png",
    link: "https://www.linkedin.com/posts/bhargav-malluvajhula_arogaedmun25-wemadeit-gratitude-activity-7346055938178498560-bK-W?utm_source=share&utm_medium=member_desktop&rcm=ACoAADmAxlwBfQJEIGoNO_DoLBccBXHwrFmMsE0",
  },
];

export default function LinkedInSection() {
  return (
    <section id="linkedin" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14"
        >
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-3">
              Insights
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
              Latest from <span className="font-serif italic font-medium">LinkedIn</span>
            </h2>
          </div>
          <a
            href="https://www.linkedin.com/in/bhargav-malluvajhula/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="gap-2">
              View all on LinkedIn <ArrowUpRight className="w-3.5 h-3.5" />
            </Button>
          </a>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {POSTS.map((post, i) => (
            <motion.a
              key={post.title}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:border-foreground/10 transition-all duration-300"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <p className="text-xs text-muted-foreground mb-2">{post.date}</p>
                <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-foreground/80 transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}