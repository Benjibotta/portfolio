"use client";

import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";
import { useState } from "react";

const packs = [
  {
    name: "Tournage",
    description: "Tournage professionnel avec du matériel mobile haut de gamme.",
    features: [
      "Tournage iPhone 16 Pro cinématique",
      "Stabilisation DJI",
      "Son professionnel DJI Mic Mini",
      "Cadrage & direction de prise de vue",
      "Déplacement partout en France",
    ],
    accent: "#7F77DD",
    popular: false,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
      </svg>
    ),
  },
  {
    name: "Montage",
    description: "Post-production complète pour une vidéo prête à publier.",
    features: [
      "Montage narratif & rythmique",
      "Étalonnage couleur professionnel",
      "Sous-titres inclus",
      "Habillage sonore & mixage",
      "Export multi-formats (Reels, YouTube, Stories)",
      "Révisions incluses",
    ],
    accent: "#7F77DD",
    popular: true,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    name: "Production IA",
    description: "Spots publicitaires et contenus de marque augmentés par l'IA.",
    features: [
      "Génération de visuels & séquences IA",
      "Intégration IA dans le montage final",
      "Spots publicitaires augmentés",
      "Contenus de marque différenciants",
      "Voix off & sound design IA",
      "Direction artistique complète",
    ],
    accent: "#378ADD",
    popular: false,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
];

const faqs = [
  {
    q: "Comment se déroule le processus de révision ?",
    a: "Je partage une version préliminaire via un lien de revue. Vous laissez vos commentaires directement sur la vidéo avec des timestamps. Je les intègre et envoie la version révisée sous 48h.",
  },
  {
    q: "Quels formats de fichiers source acceptez-vous ?",
    a: "J'accepte tous les formats courants : MP4, MOV, MXF, ProRes, et bien d'autres. Pour le tournage avec iPhone 16 Pro, je tourne en ProRes Log pour un maximum de flexibilité en post.",
  },
  {
    q: "Puis-je combiner plusieurs services ?",
    a: "Absolument. Tournage + Montage ou Tournage + Production IA sont des combinaisons courantes. On définit ensemble le périmètre exact lors du brief.",
  },
  {
    q: "Comment livrez-vous les fichiers finaux ?",
    a: "Via un lien de téléchargement sécurisé (WeTransfer ou Frame.io). Je fournis toujours les masters haute résolution et les versions compressées pour chaque plateforme cible.",
  },
];

export default function Services() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="pt-24">
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <FadeIn>
          <p className="font-mono text-xs text-violet-400 tracking-widest mb-3">// SERVICES</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Trois expertises,<br />
            <span
              style={{
                backgroundImage: "linear-gradient(135deg, #7F77DD 0%, #378ADD 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              un seul interlocuteur
            </span>
          </h1>
          <p className="text-lg text-[#8888AA] max-w-xl mx-auto">
            Du tournage à la livraison finale, en passant par le montage et l&apos;IA — je couvre l&apos;ensemble de la chaîne de production vidéo.
          </p>
        </FadeIn>
      </section>

      {/* Service cards */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6 items-start">
        {packs.map((pack, i) => (
          <FadeIn key={pack.name} delay={i * 0.1}>
            <div
              className="relative rounded-2xl p-6 h-full flex flex-col"
              style={{
                background: pack.popular ? "linear-gradient(135deg, rgba(127,119,221,0.12), rgba(55,138,221,0.08))" : "#13131A",
                border: pack.popular ? "1px solid rgba(127,119,221,0.4)" : "1px solid #1E1E2E",
              }}
            >

              <div className="mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "rgba(127,119,221,0.15)", color: "#7F77DD" }}
                >
                  {pack.icon}
                </div>
                <h3 className="font-mono text-sm tracking-widest text-[#8888AA] mb-1">{pack.name.toUpperCase()}</h3>
                <p className="text-sm text-[#8888AA]">{pack.description}</p>
              </div>

              <ul className="space-y-3 flex-1 mb-6">
                {pack.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-[#E8E8F0]">
                    <svg className="shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <circle cx="7" cy="7" r="6" fill="rgba(127,119,221,0.15)" />
                      <path d="M4.5 7l2 2 3-3" stroke="#7F77DD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="space-y-2">
                <p className="text-center text-xs font-mono text-[#8888AA]">Devis sur mesure</p>
                <Link
                  href="/contact"
                  className="block text-center py-3 rounded-xl font-medium text-sm transition-all duration-200 hover:scale-105"
                  style={
                    pack.popular
                      ? { background: "linear-gradient(135deg, #7F77DD, #378ADD)", color: "#fff" }
                      : { background: "#1E1E2E", color: "#E8E8F0" }
                  }
                >
                  Demander un devis
                </Link>
              </div>
            </div>
          </FadeIn>
        ))}
      </section>

      {/* Callout sous les packs */}
      <section className="max-w-6xl mx-auto px-6 mt-10 mb-16">
        <FadeIn>
          <div
            className="rounded-2xl px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left"
            style={{
              background: "linear-gradient(135deg, rgba(127,119,221,0.08), rgba(55,138,221,0.05))",
              border: "1px solid rgba(127,119,221,0.18)",
            }}
          >
            <p className="text-[#8888AA] max-w-lg">
              Chaque projet est unique — ces formules sont une base.{" "}
              <span className="text-[#E8E8F0]">Parlons de votre besoin spécifique.</span>
            </p>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-white hover:scale-105 transition-transform duration-200"
              style={{ background: "linear-gradient(135deg, #7F77DD, #378ADD)" }}
            >
              Devis sur mesure
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 pb-24">
        <FadeIn>
          <h2 className="font-mono text-xs text-violet-400 tracking-widest mb-8">// FAQ</h2>
        </FadeIn>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div
                className="rounded-xl overflow-hidden"
                style={{ border: "1px solid #1E1E2E", background: "#13131A" }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left text-sm font-medium text-[#E8E8F0] hover:text-violet-300 transition-colors"
                >
                  {faq.q}
                  <motion.span
                    animate={{ rotate: openFaq === i ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-[#8888AA] text-xl leading-none shrink-0 ml-4"
                  >
                    +
                  </motion.span>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === i ? "auto" : 0 }}
                  transition={{ duration: 0.25 }}
                  style={{ overflow: "hidden" }}
                >
                  <p className="px-5 pb-4 text-sm text-[#8888AA] leading-relaxed">{faq.a}</p>
                </motion.div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
