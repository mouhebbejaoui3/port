"use client";

import { motion } from "framer-motion";
import { languages, interests } from "@/data/portfolio";
import { useInView } from "@/lib/hooks";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Lightbulb } from "lucide-react";

function LanguageRing({
  name,
  level,
  percentage,
  delay,
}: {
  name: string;
  level: string;
  percentage: number;
  delay: number;
}) {
  const { ref, isInView } = useInView(0.3);
  const radius = 44;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center gap-3"
    >
      <div className="relative w-28 h-28">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r={radius}
            className="skill-ring-bg"
            strokeWidth="6"
          />
          <circle
            cx="50"
            cy="50"
            r={radius}
            className="skill-ring-fill"
            strokeWidth="6"
            stroke="url(#ring-gradient)"
            strokeDasharray={circumference}
            strokeDashoffset={isInView ? offset : circumference}
          />
          <defs>
            <linearGradient id="ring-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--accent-cyan)" />
              <stop offset="100%" stopColor="var(--accent-violet)" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-bold font-mono gradient-text">{percentage}%</span>
        </div>
      </div>
      <div className="text-center">
        <div className="font-bold text-sm">{name}</div>
        <div className="text-xs text-[var(--text-muted)]">{level}</div>
      </div>
    </motion.div>
  );
}

export default function Languages() {
  const { ref, isInView } = useInView(0.2);

  return (
    <SectionWrapper id="languages" title="Languages & Interests" subtitle="Beyond Code">
      <div className="max-w-4xl mx-auto">
        {/* Languages */}
        <div className="mb-16">
          <h3 className="text-xl font-bold font-[family-name:var(--font-space-grotesk)] text-center mb-10">
            Languages
          </h3>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {languages.map((lang, i) => (
              <LanguageRing
                key={lang.name}
                name={lang.name}
                level={lang.level}
                percentage={lang.percentage}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>

        {/* Interests */}
        <div ref={ref}>
          <h3 className="text-xl font-bold font-[family-name:var(--font-space-grotesk)] text-center mb-10">
            Interests
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {interests.map((interest, i) => (
              <motion.div
                key={interest}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-4 flex items-center gap-3"
              >
                <Lightbulb size={18} className="text-[var(--accent-violet)] flex-shrink-0" />
                <span className="text-sm font-medium">{interest}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
