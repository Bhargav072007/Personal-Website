import { motion } from "framer-motion";

const GALLERY_IMAGES = [
  { src: "/assets/base44/ab81c3d30_image.png" },
  { src: "/assets/base44/a670e2ad6_image.png", className: "object-contain bg-card p-2" },
  { src: "/assets/base44/0e48e723b_image.png" },
  { src: "/assets/base44/389aba964_image.png" },
];
// Solo photo used as translucent background
const SOLO_IMG = "/assets/base44/39ea9ac54_085cc689-7653-4aeb-9c09-e518a1157eba_edited.jpg";

export default function WhatIBuild() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Translucent solo portrait in background */}
      <div
        className="absolute right-0 top-0 bottom-0 w-1/2 bg-cover bg-center opacity-[0.06] pointer-events-none"
        style={{ backgroundImage: `url(${SOLO_IMG})` }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-4">Philosophy</p>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-6">
              What I <span className="font-serif italic font-medium bg-gradient-to-r from-chart-1 to-chart-2 bg-clip-text text-transparent">build</span>
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
              I build systems that solve practical problems. Some are technical — like AI-assisted career
              systems, aviation intelligence workflows, and research in quantum-assisted assurance. Others
              are community-driven, like educational initiatives and nonprofit programs that create long-term
              access to opportunity. Across all of them, the goal stays the same: build something useful,
              thoughtful, and scalable.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {GALLERY_IMAGES.map((image, i) => (
                <img
                  key={i}
                  src={image.src}
                  alt={`Bhargav's work and impact ${i + 1}`}
                  className={`w-full rounded-xl shadow-lg object-cover aspect-square hover:shadow-xl transition-shadow ${image.className || ""}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
