import { useState, useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

const METRICS = [
  { raw: 150, prefix: "", suffix: "+", label: "Initiatives Executed" },
  { raw: 60, prefix: "", suffix: "+", label: "Volunteers Led" },
  { raw: 5000, prefix: "$", suffix: "+", label: "Raised" },
  { raw: 150, prefix: "", suffix: "+", label: "Students Reached" },
  { raw: 4, prefix: "", suffix: "+", label: "Major Focus Areas" },
];

function CountUp({ raw, prefix, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { duration: 1800, bounce: 0 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) motionVal.set(raw);
  }, [inView, raw, motionVal]);

  useEffect(() => {
    return spring.on("change", (v) => setDisplay(Math.round(v)));
  }, [spring]);

  return (
    <span ref={ref}>
      {prefix}{display.toLocaleString()}{suffix}
    </span>
  );
}

export default function MetricsSection() {
  return (
    <section className="py-16 lg:py-20 border-y border-border bg-primary/[0.02]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {METRICS.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
                <CountUp raw={metric.raw} prefix={metric.prefix} suffix={metric.suffix} />
              </p>
              <p className="text-xs lg:text-sm text-muted-foreground mt-1 leading-snug">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}