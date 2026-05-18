"use client";

import FadeIn from "@/components/FadeIn";
import Link from "next/link";

const skillGroups = [
  {
    label: "Captation",
    tags: ["iPhone cinématique", "Stabilisation DJI", "DJI Mic Mini", "ProRes Log"],
  },
  {
    label: "Post-production",
    tags: ["Montage narratif", "Étalonnage couleur", "Sous-titres", "Son & mixage", "Multi-formats"],
  },
  {
    label: "Intelligence artificielle",
    tags: ["Génération de visuels IA", "Voix off IA", "Intégration IA / montage", "Contenu de marque IA"],
  },
];

const timeline = [
  { year: "2025", event: "Formation montage vidéo et outils IA" },
  { year: "2026", event: "Lancement de l'activité · Premiers projets clients" },
];

export default function APropos() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <FadeIn>
          <p className="font-mono text-xs text-violet-400 tracking-widest mb-3">// À PROPOS</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            L&apos;artisan derrière<br />
            <span
              style={{
                backgroundImage: "linear-gradient(135deg, #7F77DD 0%, #378ADD 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              la timeline
            </span>
          </h1>
          <p className="text-lg text-[#8888AA] max-w-2xl leading-relaxed">
            Vidéaste freelance basé à Marseille, disponible en remote partout en France.
            Je filme, je monte — et j&apos;augmente tout ça par l&apos;IA.
          </p>
        </FadeIn>
      </section>

      {/* Bio + Skills */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-16">
        <FadeIn direction="left">
          <div className="space-y-6 text-[#8888AA] leading-relaxed">
            <p>
              Vidéaste freelance basé à Marseille, je me suis spécialisé dans la vidéo augmentée
              par l&apos;IA. Mon cœur de métier c&apos;est le montage — j&apos;y ajoute la captation iPhone
              professionnelle et la génération de contenu IA pour livrer des productions complètes.
            </p>
            <p>
              Je couvre l&apos;ensemble de la chaîne : tournage avec iPhone cinématique et stabilisation
              DJI, son professionnel DJI Mic Mini, post-production complète, et intégration d&apos;IA
              pour des contenus de marque qui sortent du lot.
            </p>
            <p>
              Basé à Marseille, disponible en remote partout en France.
            </p>
          </div>

          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-white text-sm"
              style={{ background: "linear-gradient(135deg, #7F77DD, #378ADD)" }}
            >
              Me contacter
            </Link>
          </div>
        </FadeIn>

        {/* Skills */}
        <FadeIn direction="right" delay={0.1}>
          <h3 className="font-mono text-xs text-violet-400 tracking-widest mb-6">// COMPÉTENCES</h3>
          <div className="space-y-6">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <p className="text-xs text-[#8888AA] mb-3">{group.label}</p>
                <div className="flex flex-wrap gap-2">
                  {group.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs px-3 py-1.5 rounded-full"
                      style={{
                        background: "rgba(127,119,221,0.08)",
                        color: "#E8E8F0",
                        border: "1px solid rgba(127,119,221,0.2)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Timeline */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <FadeIn>
          <h2 className="font-mono text-xs text-violet-400 tracking-widest mb-10">// PARCOURS</h2>
        </FadeIn>
        <div className="relative">
          <div className="absolute left-16 top-0 bottom-0 w-px" style={{ background: "#1E1E2E" }} />
          <div className="space-y-8">
            {timeline.map((item, i) => (
              <FadeIn key={item.year} delay={i * 0.1}>
                <div className="flex gap-8 items-start">
                  <span className="font-mono text-sm text-violet-400 w-12 shrink-0 mt-0.5">{item.year}</span>
                  <div className="relative pl-8">
                    <div
                      className="absolute left-0 top-2 w-2 h-2 rounded-full"
                      style={{ background: "#7F77DD", boxShadow: "0 0 8px rgba(127,119,221,0.5)" }}
                    />
                    <p className="text-[#8888AA]">{item.event}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
