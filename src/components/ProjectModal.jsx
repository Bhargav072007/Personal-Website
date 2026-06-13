import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, ChevronLeft, ChevronRight, Download, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProjectModal({ project, onClose }) {
  const [galleryIndex, setGalleryIndex] = useState(0);
  if (!project) return null;

  const gallery = project.gallery || [project.image].filter(Boolean);
  const hasManyImages = gallery.length > 1;

  const prev = (e) => { e.stopPropagation(); setGalleryIndex((i) => (i - 1 + gallery.length) % gallery.length); };
  const next = (e) => { e.stopPropagation(); setGalleryIndex((i) => (i + 1) % gallery.length); };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 60, scale: 0.97 }}
          transition={{ type: "spring", damping: 30, stiffness: 300 }}
          className="glass glass-panel relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-t-2xl sm:rounded-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Gallery */}
          {gallery.length > 0 && (
            <div className="relative h-52 sm:h-64 overflow-hidden rounded-t-2xl sm:rounded-t-2xl bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900">
              <AnimatePresence mode="wait">
                <motion.img
                  key={galleryIndex}
                  src={gallery[galleryIndex]}
                  alt={project.title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full object-contain"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              {hasManyImages && (
                <>
                  <button onClick={prev} className="glass glass-interactive absolute left-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full text-white transition-colors">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button onClick={next} className="glass glass-interactive absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full text-white transition-colors">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {gallery.map((_, i) => (
                      <button key={i} onClick={(e) => { e.stopPropagation(); setGalleryIndex(i); }}
                        className={`w-1.5 h-1.5 rounded-full transition-all ${i === galleryIndex ? 'bg-white scale-125' : 'bg-white/50'}`}
                      />
                    ))}
                  </div>
                </>
              )}
              <div className="absolute bottom-4 left-6">
                {project.tag && (
                  <span className="glass text-xs font-medium tracking-widest uppercase text-foreground/80 px-3 py-1 rounded-full">
                    {project.tag}
                  </span>
                )}
              </div>
            </div>
          )}

          <button
            onClick={onClose}
            className="glass glass-interactive absolute top-4 right-4 p-2 rounded-full text-foreground transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="p-6 sm:p-8">
            <h3 className="text-2xl font-bold text-foreground tracking-tight mb-3">
              {project.title}
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              {project.description}
            </p>

            <h4 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">
              Key Highlights
            </h4>
            <ul className="space-y-2.5 mb-8">
              {project.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-foreground/40 shrink-0" />
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Button className="gap-2">
                    {project.linkLabel || "Learn more"} <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </a>
              )}
              {project.youtubeLink && (
                <a href={project.youtubeLink} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="gap-2">
                    <Play className="w-4 h-4" /> {project.youtubeLinkLabel || "Watch Video"}
                  </Button>
                </a>
              )}
              {project.pdfLink && (
                <a href={project.pdfLink} target="_blank" rel="noopener noreferrer" download>
                  <Button variant="outline" className="gap-2">
                    <Download className="w-4 h-4" /> {project.pdfLabel || "Download PDF"}
                  </Button>
                </a>
              )}
              {project.pdfLink2 && (
                <a href={project.pdfLink2} target="_blank" rel="noopener noreferrer" download>
                  <Button variant="outline" className="gap-2">
                    <Download className="w-4 h-4" /> {project.pdfLabel2 || "Download PDF"}
                  </Button>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
