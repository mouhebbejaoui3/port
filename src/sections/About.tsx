"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/portfolio";
import { useInView } from "@/lib/hooks";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Image from "next/image";
import { Briefcase, GraduationCap, Code2 } from "lucide-react";

const stats = [
  { icon: Code2, label: "Tech Stack", value: "15+" },
  { icon: Briefcase, label: "Projects", value: "5+" },
  { icon: GraduationCap, label: "Education", value: "Engineering" },
];

export default function About() {
  const { ref, isInView } = useInView(0.2);

  return (
    <SectionWrapper id="about" title="About Me" subtitle="Who I Am">
      <div ref={ref} className="grid md:grid-cols-5 gap-12 items-center">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="md:col-span-2 flex justify-center"
        >
          <div className="relative group">
            <div className="gradient-border p-1 rounded-2xl">
              <div className="w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden bg-[var(--bg-secondary)]">
                <Image
                  src="/mouheb.jpg"
                  alt="Mouheb Bejaoui - Data Science & AI Engineering Student"
                  width={288}
                  height={384}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
            {/* Glow behind */}
            <div className="absolute -inset-4 bg-gradient-to-br from-cyan/20 to-violet/20 rounded-3xl blur-3xl -z-10 group-hover:opacity-100 opacity-50 transition-opacity" />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
          className="md:col-span-3"
        >
          <h3 className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] mb-6">
            {siteConfig.title}
          </h3>
          <p className="text-[var(--text-secondary)] leading-relaxed text-lg mb-8">
            {siteConfig.summary}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="glass-card p-4 text-center"
              >
                <stat.icon className="w-6 h-6 mx-auto mb-2 text-[var(--accent-cyan)]" />
                <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                <div className="text-xs text-[var(--text-muted)] mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
