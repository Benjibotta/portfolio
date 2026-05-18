"use client";

import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Le Brief",
    description:
      "Tout commence par une conversation approfondie. Je prends le temps de comprendre votre vision, vos objectifs, votre cible et votre univers de marque. Rien n'est signé tant que je n'ai pas une image claire de ce que vous voulez.",
    details: ["Appel découverte 30 min gratuit", "Questionnaire de brief détaillé", "Analyse des références visuelles", "Définition du périmètre et du budget"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "La Proposition",
    description:
      "Sur la base du brief, je prépare une proposition détaillée : approche créative, structure narrative, outils utilisés, planning et devis. Vous savez exactement ce que vous obtenez avant de vous engager.",
    details: ["Document de vision créative", "Storyboard ou découpage", "Planning avec jalons clairs", "Devis détaillé et transparent"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Le Montage",
    description:
      "Une fois le brief validé et les rushs réceptionnés, je commence le montage. Je travaille avec méthodologie : structure d'abord, rythme ensuite, finitions en dernier. Chaque décision est documentée.",
    details: ["Import et organisation des rushs", "Première assembly cut", "Montage rythmique et narratif", "Étalonnage couleur et son"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Les Révisions",
    description:
      "Je partage une version via Frame.io pour un feedback précis image par image. Vous commentez directement sur la vidéo, je corrige et reviens avec une version améliorée. Le processus est fluide et traçable.",
    details: ["Partage via Frame.io ou WeTransfer", "Commentaires horodatés", "Délai de révision sous 48h", "Révisions définies selon le devis"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="1 4 1 10 7 10" />
        <path d="M3.51 15a9 9 0 1 0 .49-4" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "La Livraison",
    description:
      "Une fois la version finale validée, je livre les masters haute résolution ainsi que toutes les versions dérivées (social media, web, broadcast). Les fichiers sources sont archivés pendant 12 mois.",
    details: ["Masters en ProRes ou H.264/H.265", "Versions optimisées par plateforme", "Fichiers sources archivés 12 mois", "Suivi post-livraison inclus"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
        <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
      </svg>
    ),
  },
];

export default function Methode() {
  return (
    <div className="pt-24">
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <FadeIn>
          <p className="font-mono text-xs text-violet-400 tracking-widest mb-3">// MÉTHODE</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Du brief à la<br />
            <span
              style={{
                backgroundImage: "linear-gradient(135deg, #7F77DD 0%, #378ADD 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              livraison
            </span>
          </h1>
          <p className="text-lg text-[#8888AA] max-w-xl mx-auto">
            Un processus en 5 étapes conçu pour la clarté, la qualité et la sérénité. Vous savez toujours où on en est.
          </p>
        </FadeIn>
      </section>

      {/* Steps */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <div className="space-y-6">
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.08}>
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className="rounded-2xl p-6 md:p-8 grid md:grid-cols-[auto_1fr] gap-6 md:gap-8"
                style={{ background: "#13131A", border: "1px solid #1E1E2E" }}
              >
                <div className="flex md:flex-col items-center md:items-start gap-4">
                  <span className="font-mono text-4xl font-bold text-[#1E1E2E] leading-none">{step.number}</span>
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "rgba(127,119,221,0.15)", color: "#7F77DD" }}
                  >
                    {step.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#E8E8F0] mb-3">{step.title}</h3>
                  <p className="text-[#8888AA] leading-relaxed mb-4">{step.description}</p>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2 text-sm text-[#8888AA]">
                        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#7F77DD" }} />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* CTA */}
        <FadeIn delay={0.4}>
          <div className="mt-16 text-center">
            <p className="text-[#8888AA] mb-6">Prêt à démarrer votre projet ?</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-medium text-white hover:scale-105 transition-transform duration-200"
              style={{ background: "linear-gradient(135deg, #7F77DD, #378ADD)" }}
            >
              Démarrer maintenant
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
