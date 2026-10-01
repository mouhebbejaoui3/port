"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "@/lib/hooks";

interface Props {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  id: string;
  className?: string;
}

export default function SectionWrapper({ title, subtitle, children, id, className = "" }: Props) {
  const { ref, isInView } = useInView(0.1);

  return (
    <section
      id={id}
      ref={ref}
      className={`relative py-[var(--section-padding)] px-6 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="text-center mb-16"
        >
          {subtitle && (
            <span className="text-sm font-mono text-[var(--accent-cyan)] tracking-widest uppercase mb-4 block">
              {subtitle}
            </span>
          )}
          <h2 className="section-heading text-4xl md:text-5xl gradient-text">
            {title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan to-violet rounded-full mx-auto mt-6" />
        </motion.div>
        {children}
      </div>
    </section>
  );
}
