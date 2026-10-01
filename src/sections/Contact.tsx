"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { siteConfig } from "@/data/portfolio";
import { useInView } from "@/lib/hooks";
import SectionWrapper from "@/components/ui/SectionWrapper";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Download,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";

import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

export default function Contact() {
  const { ref, isInView } = useInView(0.2);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("https://formsubmit.co/ajax/mouheb.bejaoui.3@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
          _subject: `Message de ${formState.name} (${formState.email})`,
          _replyto: formState.email,
          _captcha: "false",
        }),
      });

      const data = await res.json();

      // FormSubmit returns 200 with success status
      if (res.ok || data.success === "true" || data.success === true) {
        setStatus("success");
        setFormState({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 6000);
      } else {
        throw new Error(data.message || "Une erreur est survenue lors de l'envoi.");
      }
    } catch (err: unknown) {
      console.error(err);
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Erreur de connexion. Vous pouvez envoyer directement un email ci-dessous."
      );
    }
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { icon: Phone, label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
    { icon: MapPin, label: "Location", value: siteConfig.location, href: "#" },
  ];

  const socialLinks = [
    { icon: GithubIcon, label: "GitHub", href: siteConfig.social.github },
    { icon: LinkedinIcon, label: "LinkedIn", href: siteConfig.social.linkedin },
  ];

  return (
    <SectionWrapper id="contact" title="Get In Touch" subtitle="Contact Me">
      <div ref={ref} className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Left: Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >

          <div className="space-y-4 mb-8">
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-4 p-3 rounded-xl hover:bg-[var(--bg-card)] transition-colors group"
              >
                <div className="p-2 rounded-lg bg-[var(--accent-cyan)]/10 group-hover:bg-[var(--accent-cyan)]/20 transition-colors">
                  <item.icon size={18} className="text-[var(--accent-cyan)]" />
                </div>
                <div>
                  <div className="text-xs text-[var(--text-muted)]">{item.label}</div>
                  <div className="text-sm font-medium">{item.value}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Social + CV */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] hover:border-[var(--accent-cyan)] transition-all hover:shadow-[var(--shadow-glow)]"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </a>
            ))}
            <a
              href={siteConfig.cvUrl}
              download
              className="btn-primary ml-auto"
            >
              <span className="flex items-center gap-2">
                <Download size={16} />
                Download CV
              </span>
            </a>
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
        >
          <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm flex items-start gap-3"
              >
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-emerald-400" />
                <div>
                  <p className="font-semibold">Message envoyé avec succès !</p>
                  <p className="text-xs text-emerald-400/80 mt-0.5">
                    Merci ! Mouheb a bien reçu votre message et vous répondra très rapidement.
                  </p>
                </div>
              </motion.div>
            )}

            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-sm flex items-start gap-3"
              >
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-rose-400" />
                <div>
                  <p className="font-semibold">Erreur d&apos;envoi</p>
                  <p className="text-xs text-rose-400/80 mt-0.5">{errorMessage}</p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="inline-block mt-2 text-xs underline font-medium text-rose-300 hover:text-rose-200"
                  >
                    Envoyer directement à {siteConfig.email}
                  </a>
                </div>
              </motion.div>
            )}

            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                disabled={status === "sending"}
                value={formState.name}
                onChange={(e) =>
                  setFormState((s) => ({ ...s, name: e.target.value }))
                }
                className="w-full px-4 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] focus:border-[var(--accent-cyan)] focus:ring-1 focus:ring-[var(--accent-cyan)] outline-none transition-all text-sm disabled:opacity-50"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                disabled={status === "sending"}
                value={formState.email}
                onChange={(e) =>
                  setFormState((s) => ({ ...s, email: e.target.value }))
                }
                className="w-full px-4 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] focus:border-[var(--accent-cyan)] focus:ring-1 focus:ring-[var(--accent-cyan)] outline-none transition-all text-sm disabled:opacity-50"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                disabled={status === "sending"}
                value={formState.message}
                onChange={(e) =>
                  setFormState((s) => ({ ...s, message: e.target.value }))
                }
                className="w-full px-4 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] focus:border-[var(--accent-cyan)] focus:ring-1 focus:ring-[var(--accent-cyan)] outline-none transition-all text-sm resize-none disabled:opacity-50"
                placeholder="Tell me about the opportunity..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-primary w-full justify-center disabled:opacity-50 cursor-pointer"
            >
              <span className="flex items-center gap-2">
                {status === "sending" ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Envoi en cours...
                  </>
                ) : status === "success" ? (
                  <>
                    <CheckCircle size={18} />
                    Message Envoyé !
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </span>
            </button>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
