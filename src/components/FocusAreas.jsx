import { motion } from "framer-motion";
import { Users, FlaskConical, Brain, Heart } from "lucide-react";

const AREAS = [
  {
    icon: Users,
    title: "Leadership",
    text: "Building initiatives, teams, and partnerships around ideas that create long-term value.",
  },
  {
    icon: FlaskConical,
    title: "Research",
    text: "Exploring technical systems with a focus on applied intelligence, decision-making, and emerging technologies.",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    text: "Developing intelligent systems that improve access, guidance, and operational efficiency.",
  },
  {
    icon: Heart,
    title: "Community Impact",
    text: "Creating programs that support youth through education, mentorship, and structured opportunity.",
  },
];

export default function FocusAreas() {
  return (
    <section className="py-20 lg:py-28 bg-primary/[0.02] border-y border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-3">
            Areas of Focus
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
            Core focus <span className="font-serif italic font-medium">areas</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AREAS.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card border border-border rounded-xl p-6 lg:p-8 hover:shadow-lg hover:border-foreground/10 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                <area.icon className="w-5 h-5 text-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{area.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{area.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}