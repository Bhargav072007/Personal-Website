import { motion } from "framer-motion";
import { Mail, Linkedin, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-primary text-primary-foreground">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-medium tracking-widest uppercase text-primary-foreground/60 mb-4">
            Get in touch
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
            Let's <span className="font-serif italic font-medium">connect</span>
          </h2>
          <p className="text-base text-primary-foreground/70 leading-relaxed mb-10 max-w-lg mx-auto">
            I'm always open to conversations around research, technology, social impact, startups,
            and building things that matter.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:m.sribhargav2007@gmail.com">
              <Button
                size="lg"
                variant="secondary"
                className="gap-2 font-medium"
              >
                <Mail className="w-4 h-4" /> Email me
              </Button>
            </a>
            <a
              href="https://www.linkedin.com/in/bhargav-malluvajhula/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="gap-2 font-medium border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </Button>
            </a>
            <a
              href="/assets/resume/updated-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="gap-2 font-medium border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <FileText className="w-4 h-4" /> Resume
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
