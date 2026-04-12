import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProjectCard({ project, index }) {
  const isReversed = index % 2 !== 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group"
    >
      <div className={`grid lg:grid-cols-2 gap-8 lg:gap-14 items-center ${isReversed ? "lg:direction-rtl" : ""}`}>
        {/* Image */}
        <div className={`${isReversed ? "lg:order-2" : ""}`}>
          {project.image && (
            <div className="relative overflow-hidden rounded-xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full aspect-[16/10] object-cover rounded-xl group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          )}
        </div>

        {/* Content */}
        <div className={`${isReversed ? "lg:order-1" : ""}`}>
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground tracking-tight mb-3">
            {project.title}
          </h3>
          <p className="text-base text-muted-foreground leading-relaxed mb-5">
            {project.description}
          </p>

          <ul className="space-y-2 mb-6">
            {project.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <span className="w-1 h-1 rounded-full bg-foreground/40 mt-2 shrink-0" />
                {bullet}
              </li>
            ))}
          </ul>

          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-2 text-sm">
                {project.linkLabel || "Learn more"} <ArrowUpRight className="w-3.5 h-3.5" />
              </Button>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}