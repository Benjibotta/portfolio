"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import VideoCard from "@/components/VideoCard";

const categories = ["Tout", "Tournage", "Montage", "Production IA"];

const allProjects = [
  {
    id: 4,
    title: "BeByJen — Head Spa #1",
    category: "Tournage",
    duration: "",
    videoSrc: "/videos/BeByJen-V1.mp4",
    poster: "",
    tags: ["BeByJen", "Head Spa", "Tournage"],
    vertical: true,
  },
  {
    id: 5,
    title: "BeByJen — Head Spa #2",
    category: "Tournage",
    duration: "",
    videoSrc: "/videos/BeByJen-V2.mp4",
    poster: "",
    tags: ["BeByJen", "Head Spa", "Tournage"],
    vertical: true,
  },
  {
    id: 6,
    title: "BeByJen — Head Spa #3",
    category: "Tournage",
    duration: "",
    videoSrc: "/videos/BeByJen-V3.mp4",
    poster: "",
    tags: ["BeByJen", "Head Spa", "Tournage"],
    vertical: true,
  },
  {
    id: 7,
    title: "Formation Vibe Editor — VK Studio",
    category: "Montage",
    duration: "",
    videoSrc: "/videos/VK-Formation.mp4.mp4",
    poster: "",
    tags: ["VK Studio", "Formation", "Montage"],
    vertical: false,
  },
  {
    id: 1,
    title: "MMUSA — Spot IA #1",
    category: "Production IA",
    duration: "",
    videoSrc: "/videos/mmusa-1.mp4.mp4",
    poster: "",
    tags: ["MMUSA", "Créatine liquide", "Production IA"],
    vertical: true,
  },
  {
    id: 2,
    title: "MMUSA — Spot IA #2",
    category: "Production IA",
    duration: "",
    videoSrc: "/videos/mmusa-2.mp4.mp4",
    poster: "",
    tags: ["MMUSA", "Créatine liquide", "Production IA"],
    vertical: true,
  },
  {
    id: 3,
    title: "MMUSA — Spot IA #3",
    category: "Production IA",
    duration: "",
    videoSrc: "/videos/mmusa-3.mp4.mp4",
    poster: "",
    tags: ["MMUSA", "Créatine liquide", "Production IA"],
    vertical: true,
  },
  {
    id: 8,
    title: "L'aube des dirigeants",
    category: "Tournage",
    duration: "",
    videoSrc: "/videos/aube-des-dirigeants.mp4",
    poster: "",
    tags: ["L'aube des dirigeants", "Tournage"],
    vertical: false,
  },
];

export default function Travaux() {
  const [activeFilter, setActiveFilter] = useState("Tout");

  const filtered = activeFilter === "Tout"
    ? allProjects
    : allProjects.filter((p) => p.category === activeFilter);

  return (
    <div className="pt-24">
      <section className="max-w-6xl mx-auto px-6 py-16">
        <FadeIn>
          <p className="font-mono text-xs text-violet-400 tracking-widest mb-3">// TRAVAUX</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Galerie de{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(135deg, #7F77DD 0%, #378ADD 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              projets
            </span>
          </h1>
          <p className="text-[#8888AA] text-lg max-w-xl">
            Survolez les cartes pour voir un aperçu.
          </p>
        </FadeIn>

        {/* Filters */}
        <div className="mt-10 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
              style={
                activeFilter === cat
                  ? { background: "linear-gradient(135deg, #7F77DD, #378ADD)", color: "#fff" }
                  : { background: "#13131A", color: "#8888AA", border: "1px solid #1E1E2E" }
              }
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <FadeIn key={project.id} delay={i * 0.1}>
              <VideoCard project={project} />
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Coming soon */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <FadeIn>
          <div
            className="rounded-2xl px-8 py-10 text-center"
            style={{ border: "1px dashed #1E1E2E" }}
          >
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
              <span className="font-mono text-xs text-violet-400 tracking-widest">EN COURS</span>
            </div>
            <p className="text-[#8888AA]">D&apos;autres projets arrivent bientôt.</p>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
