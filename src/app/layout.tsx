import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mouheb Bejaoui | Data Science & AI Engineer",
  description:
    "Engineering student specializing in Data Science and Artificial Intelligence, seeking a 6-month PFE internship in France starting 2027. Portfolio showcasing ML, AI, and full-stack projects.",
  keywords: [
    "Mouheb Bejaoui",
    "Data Science",
    "Artificial Intelligence",
    "Machine Learning",
    "Python",
    "Portfolio",
    "PFE",
    "Internship",
    "France",
  ],
  authors: [{ name: "Mouheb Bejaoui" }],
  creator: "Mouheb Bejaoui",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mouheb-bejaoui.vercel.app",
    title: "Mouheb Bejaoui | Data Science & AI Engineer",
    description:
      "Engineering student specializing in Data Science and AI. Open to PFE internship in France, 2027.",
    siteName: "Mouheb Bejaoui Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mouheb Bejaoui | Data Science & AI Engineer",
    description:
      "Engineering student specializing in Data Science and AI. Open to PFE internship in France, 2027.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mouheb Bejaoui",
    jobTitle: "Engineering Student, Data Science & Artificial Intelligence",
    url: "https://mouheb-bejaoui.vercel.app",
    email: "mouheb.bejaoui.3@gmail.com",
    telephone: "+216 21 170 110",
    address: {
      "@type": "PostalAddress",
      addressCountry: "Tunisia",
    },
    sameAs: [
      "https://www.linkedin.com/in/mouheb-bejaoui-3b5734326/",
      "https://github.com/mouhebbejaoui3",
    ],
  };

  return (
    <html
      lang="en"
      data-theme="light"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
