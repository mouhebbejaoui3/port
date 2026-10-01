"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/portfolio";
import { useInView } from "@/lib/hooks";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Building2, Calendar } from "lucide-react";

function TimelineItem({
  exp,
  index,
}: {
  exp: (typeof experiences)[0];
  index: number;
}) {
  const { ref, isInView } = useInView(0.3);
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className="relative flex items-center w-full group">
      {/* Mobile: left-aligned with padding for line */}
      {/* Desktop: alternating left/right with equal width */}
      <div
        className={`w-full md:w-[calc(50%-2.5rem)] ${
          isLeft ? "md:mr-auto" : "md:ml-auto"
        } pl-12 md:pl-0`}
      >
        <motion.div
          initial={{
            opacity: 0,
            x: isLeft ? -50 : 50,
          }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="glass-card p-6"
        >
          <div className="flex items-center gap-2 mb-3">
            <Calendar size={14} className="text-[var(--accent-cyan)]" />
            <span className="text-xs font-mono text-[var(--accent-cyan)]">{exp.period}</span>
          </div>

          <div className="flex items-center gap-2 mb-2">
            <Building2 size={16} className="text-[var(--accent-violet)]" />
            <h3 className="font-bold font-[family-name:var(--font-space-grotesk)] text-lg">
              {exp.company}
            </h3>
          </div>

          <p className="text-sm text-[var(--accent-cyan)] font-medium mb-3">{exp.role}</p>

          <ul className="space-y-2">
            {exp.description.map((desc, i) => (
              <li key={i} className="text-sm text-[var(--text-secondary)] leading-relaxed flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-cyan)] mt-2 flex-shrink-0" />
                <span>{desc}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Timeline dot */}
      <div className="absolute left-[1.5rem] md:left-1/2 -translate-x-1/2 top-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="timeline-dot"
        />
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <SectionWrapper id="experience" title="Experience" subtitle="My Journey">
      <div className="relative">
        {/* Timeline line */}
        <div className="timeline-line" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <TimelineItem key={exp.company} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
