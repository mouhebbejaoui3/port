"use client";

import { siteConfig } from "@/data/portfolio";
import { Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
          <span>© {year}</span>
          <span className="gradient-text font-bold">{siteConfig.name}</span>
          <span>•</span>
          <span className="flex items-center gap-1">
            Made with <Heart size={14} className="text-[var(--accent-pink)] fill-[var(--accent-pink)]" />
          </span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] hover:bg-[var(--bg-card)] transition-colors"
            aria-label="GitHub Profile"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] hover:bg-[var(--bg-card)] transition-colors"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
