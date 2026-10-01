"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import { useInView } from "@/lib/hooks";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { ExternalLink, Calendar } from "lucide-react";
import { useRef, type MouseEvent } from "react";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const { ref, isInView } = useInView(0.2);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (card) {
      card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)";
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.76, 0, 0.24, 1] }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="gradient-border glass-card p-8 transition-all duration-300 h-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Calendar size={14} className="text-[var(--accent-cyan)]" />
              <span className="text-xs font-mono text-[var(--accent-cyan)]">
                {project.period}
              </span>
            </div>
            <h3 className="text-xl font-bold font-[family-name:var(--font-space-grotesk)]">
              {project.title}
            </h3>
            <p className="text-sm text-[var(--accent-violet)] font-medium mt-1">
              {project.role}
            </p>
          </div>
          <ExternalLink
            size={18}
            className="text-[var(--text-muted)] hover:text-[var(--accent-cyan)] transition-colors flex-shrink-0 mt-1"
          />
        </div>

        {/* Description */}
        <ul className="space-y-2 mb-6">
          {project.description.map((desc, i) => (
            <li
              key={i}
              className="text-sm text-[var(--text-secondary)] leading-relaxed flex gap-2"
            >
              <span className="text-[var(--accent-cyan)] mt-1 flex-shrink-0">▹</span>
              <span>{desc}</span>
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-mono rounded-full bg-[var(--accent-cyan)]/10 text-[var(--accent-cyan)] border border-[var(--accent-cyan)]/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <SectionWrapper id="projects" title="Projects" subtitle="What I Built">
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}
