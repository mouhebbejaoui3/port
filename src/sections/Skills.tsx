"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/portfolio";
import { useInView } from "@/lib/hooks";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Code2, Brain, BarChart3, Wrench, Database } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2,
  Brain,
  BarChart3,
  Wrench,
  Database,
};

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const { ref, isInView } = useInView(0.3);

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1.5">
        <span className="text-sm font-medium text-[var(--text-primary)]">{name}</span>
        <span className="text-xs font-mono text-[var(--accent-cyan)]">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-[var(--border)] overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: [0.76, 0, 0.24, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-cyan to-violet"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const { ref, isInView } = useInView(0.1);

  return (
    <SectionWrapper id="skills" title="Skills" subtitle="What I Know">
      <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, catIdx) => {
          const Icon = iconMap[category.icon] || Code2;
          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: catIdx * 0.1,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="glass-card p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-[var(--accent-cyan)]/10">
                  <Icon className="w-5 h-5 text-[var(--accent-cyan)]" />
                </div>
                <h3 className="font-bold font-[family-name:var(--font-space-grotesk)]">
                  {category.title}
                </h3>
              </div>

              {category.skills.map((skill, skillIdx) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={catIdx * 0.1 + skillIdx * 0.08}
                />
              ))}
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
