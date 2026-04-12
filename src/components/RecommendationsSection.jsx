import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const RECOMMENDATIONS = [
  {
    name: "Dr. Rishi S. Kapal, Ph.D",
    title: "5x Author | Educationist | Former CXO @ Sony, Qualcomm, Ericsson, Castrol",
    quote: "Bhargav is young of years and full of wisdom. At this age he is empathetic, compassionate and seeks purposeful outcome of his actions. As Bhargav develops his functional and behavioural competencies further, I wish him luck to be a very successful person.",
  },
  {
    name: "Sagnik Dutta",
    title: "CTO at Shiksha Gram | VP, Think Tank Scientific Community | Author of STARDUST",
    quote: "Working with Bhargav Malluvajhula has been an inspiring experience. As the Founder of The Arogí Foundation, his leadership is marked by strategic decision-making and a talent for turning innovative ideas into actionable solutions.",
  },
  {
    name: "Manggala Alif Prasetia",
    title: "Project Support Intern @ IATMI KSA | Passionate Learner & Energy Enthusiast",
    quote: "Bhargav is very exceptional at his performance in MUN. He is a person that understands and loves the world of diplomacy and international relations. During the time we debated he showed eagerness and determination to make the best out of each situation.",
  },
];

export default function RecommendationsSection() {
  return (
    <section id="recommendations" className="py-20 lg:py-28 bg-primary/[0.02] border-y border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
            Selected <span className="font-serif italic font-medium">recommendations</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {RECOMMENDATIONS.map((rec, i) => (
            <motion.div
              key={rec.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 lg:p-8 flex flex-col"
            >
              <Quote className="w-8 h-8 text-foreground/10 mb-4" />
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">
                "{rec.quote}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="text-sm font-semibold text-foreground">{rec.name}</p>
                <p className="text-xs text-muted-foreground mt-0.5 leading-snug">{rec.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}