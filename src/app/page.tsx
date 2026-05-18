"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import VideoCard from "@/components/VideoCard";

const featuredProjects = [
  {
    id: 1,
    title: "Brand Film — Agence Nova",
    category: "Brand Content",
    duration: "2:34",
    videoSrc: "/videos/project1.mp4",
    poster: "/posters/project1.jpg",
    tags: ["Color grading", "Motion design", "After Effects"],
  },
  {
    id: 2,
    title: "Clip musical — Selin K.",
    category: "Clip Vidéo",
    duration: "3:12",
    videoSrc: "/videos/project2.mp4",
    poster: "/posters/project2.jpg",
    tags: ["Transitions créatives", "VFX", "Étalonnage"],
  },
  {
    id: 3,
    title: "Documentaire court — Studio Lumière",
    category: "Documentaire",
    duration: "8:47",
    videoSrc: "/videos/project3.mp4",
    poster: "/posters/project3.jpg",
    tags: ["Narration", "Son", "Multi-caméra"],
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(127,119,221,0.15) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(55,138,221,0.08) 0%, transparent 60%)",
          }}
        />

        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
            <span className="font-mono text-xs text-violet-400 tracking-wider">Disponible pour de nouveaux projets</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-6"
          >
            Je filme, je monte,
            <br />
            <span
              style={{
                backgroundImage: "linear-gradient(135deg, #7F77DD 0%, #378ADD 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              j&apos;augmente par l&apos;IA
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-[#8888AA] max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Vidéaste freelance spécialisé en tournage professionnel avec matériel mobile haut de gamme, montage vidéo et contenu IA.
            Du brief à la livraison en 5 étapes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/travaux"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-white transition-all duration-200 hover:scale-105"
              style={{ background: "linear-gradient(135deg, #7F77DD, #378ADD)" }}
            >
              Voir mes travaux
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-[#E8E8F0] border border-[#1E1E2E] hover:border-violet-500/40 transition-all duration-200"
            >
              Demander un devis
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20 flex flex-wrap justify-center gap-3"
          >
            {["Tournage professionnel avec matériel mobile haut de gamme", "Montage pro", "Contenu IA", "Marseille · Remote"].map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs px-3 py-1.5 rounded-full"
                style={{ background: "rgba(127,119,221,0.1)", color: "#8888AA", border: "1px solid rgba(127,119,221,0.2)" }}
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs font-mono text-[#8888AA] tracking-widest">SCROLL</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-8 bg-gradient-to-b from-[#8888AA] to-transparent"
          />
        </motion.div>
      </section>


      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <FadeIn>
          <div
            className="rounded-2xl px-8 py-16 md:py-20 text-center"
            style={{
              background: "linear-gradient(135deg, rgba(127,119,221,0.12) 0%, rgba(55,138,221,0.08) 100%)",
              border: "1px solid rgba(127,119,221,0.2)",
            }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Un projet en tête ?</h2>
            <p className="text-[#8888AA] text-lg mb-8 max-w-xl mx-auto">
              Parlez-moi de votre vision, je m&apos;occupe du reste. Premier échange gratuit.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-medium text-white hover:scale-105 transition-transform duration-200"
              style={{ background: "linear-gradient(135deg, #7F77DD, #378ADD)" }}
            >
              Démarrer un projet
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
