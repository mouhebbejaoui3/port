"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowDown, Download, Mail } from "lucide-react";
import { siteConfig } from "@/data/portfolio";
import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("@/components/3d/HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-gradient-to-br from-[#f8fafc] via-[#f0fdfa] to-[#f8fafc]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,139,139,0.12),transparent_70%)]" />
    </div>
  ),
});

function TypingEffect({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentWord.slice(0, text.length + 1));
          if (text === currentWord) {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          setText(currentWord.slice(0, text.length - 1));
          if (text === "") {
            setIsDeleting(false);
            setIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, words]);

  return (
    <span className="gradient-text">
      {text}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-[3px] h-[1em] bg-[var(--accent-cyan)] ml-1 align-text-bottom"
      />
    </span>
  );
}

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const },
    },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HeroScene />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold font-[family-name:var(--font-space-grotesk)] leading-[1.1] mb-6"
        >
          <span className="block text-[var(--text-primary)]">{siteConfig.name.split(" ")[0]}</span>
          <span className="block gradient-text">{siteConfig.name.split(" ").slice(1).join(" ")}</span>
        </motion.h1>

        {/* Typing Effect */}
        <motion.div
          variants={itemVariants}
          className="text-xl md:text-2xl font-mono mb-6 h-[2em] flex items-center justify-center"
        >
          <TypingEffect words={siteConfig.roles} />
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto"
        >
          {siteConfig.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4">
          <a href="#contact" className="btn-primary magnetic">
            <span className="flex items-center gap-2">
              <Mail size={18} />
              Get in Touch
            </span>
          </a>
          <a href={siteConfig.cvUrl} className="btn-outline magnetic" download>
            <Download size={18} />
            Download CV
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-[var(--text-muted)]"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
