"use client";

import { motion } from "framer-motion";
import { education } from "@/data/portfolio";
import { useInView } from "@/lib/hooks";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

export default function Education() {
  const { ref, isInView } = useInView(0.2);

  return (
    <SectionWrapper id="education" title="Education" subtitle="Academic Path">
      <div ref={ref} className="max-w-3xl mx-auto space-y-6">
        {education.map((edu, index) => (
          <motion.div
            key={edu.institution}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="glass-card p-6 flex gap-6 items-start"
          >
            <div className="p-3 rounded-xl bg-[var(--accent-violet)]/10 flex-shrink-0">
              <GraduationCap className="w-6 h-6 text-[var(--accent-violet)]" />
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <Calendar size={14} className="text-[var(--accent-cyan)]" />
                <span className="text-xs font-mono text-[var(--accent-cyan)]">
                  {edu.period}
                </span>
              </div>
              <h3 className="text-lg font-bold font-[family-name:var(--font-space-grotesk)] mb-1">
                {edu.degree}
              </h3>
              <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                <span className="font-medium">{edu.institution}</span>
                <span className="text-[var(--text-muted)]">•</span>
                <span className="flex items-center gap-1">
                  <MapPin size={12} />
                  {edu.location}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
