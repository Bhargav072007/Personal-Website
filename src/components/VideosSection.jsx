import { motion } from "framer-motion";
import { Play } from "lucide-react";

const VIDEOS = [
  {
    title: "SmartEvent Demo",
    youtubeId: "ZlHUjXczBPc",
    description: "Live demo showcasing SmartEvent's venue intelligence and crowd management features.",
  },
  {
    title: "The Arogí Foundation",
    youtubeId: "pCtQrJdey8w",
    description: "Overview of The Arogí Foundation and its impact on community and opportunity access.",
  },
  {
    title: "Dare to Disrupt Challenge",
    youtubeId: "J3lEXCghZIk",
    description: "Presentation at the Dare to Disrupt Challenge showcasing innovation and entrepreneurial thinking.",
  },
];

export default function VideosSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-3">Media</p>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
            Featured <span className="font-serif italic font-medium">videos</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VIDEOS.map((video, i) => (
            <motion.a
              key={video.youtubeId}
              href={`https://youtu.be/${video.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden bg-card border border-border shadow-md hover:shadow-xl transition-all duration-300">
                {/* Thumbnail */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-700 to-slate-900">
                  <img
                    src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="p-3 rounded-full bg-white/90 group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                      <Play className="w-5 h-5 text-slate-900 fill-slate-900" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-base font-bold text-foreground mb-2 line-clamp-2 group-hover:text-foreground/90">
                    {video.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                    {video.description}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}