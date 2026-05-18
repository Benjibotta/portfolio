"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import VideoCard from "@/components/VideoCard";

const categories = ["Tout", "Brand Content", "Clip Vidéo", "Documentaire", "Publicité", "Social Media"];

const allProjects = [
  { id: 1, title: "Brand Film — Agence Nova", category: "Brand Content", duration: "2:34", videoSrc: "/videos/project1.mp4", poster: "/posters/project1.jpg", tags: ["Color grading", "Motion design", "After Effects"] },
  { id: 2, title: "Clip musical — Selin K.", category: "Clip Vidéo", duration: "3:12", videoSrc: "/videos/project2.mp4", poster: "/posters/project2.jpg", tags: ["Transitions créatives", "VFX", "Étalonnage"] },
  { id: 3, title: "Documentaire — Studio Lumière", category: "Documentaire", duration: "8:47", videoSrc: "/videos/project3.mp4", poster: "/posters/project3.jpg", tags: ["Narration", "Son", "Multi-caméra"] },
  { id: 4, title: "Spot TV — Maison Rivière", category: "Publicité", duration: "0:30", videoSrc: "/videos/project4.mp4", poster: "/posters/project4.jpg", tags: ["Publicité", "Colour", "Rythme"] },
  { id: 5, title: "Reels Instagram — Lifestyle", category: "Social Media", duration: "0:45", videoSrc: "/videos/project5.mp4", poster: "/posters/project5.jpg", tags: ["Format vertical", "Tendances", "Reels"] },
  { id: 6, title: "Clip — Lost Frequencies", category: "Clip Vidéo", duration: "4:02", videoSrc: "/videos/project6.mp4", poster: "/posters/project6.jpg", tags: ["EDM", "VFX", "Live footage"] },
  { id: 7, title: "Mini-doc — Chef Éloi", category: "Documentaire", duration: "6:15", videoSrc: "/videos/project7.mp4", poster: "/posters/project7.jpg", tags: ["Portrait", "Cinéma vérité", "Son ambiant"] },
  { id: 8, title: "Campagne — Sportswear 2024", category: "Brand Content", duration: "1:00", videoSrc: "/videos/project8.mp4", poster: "/posters/project8.jpg", tags: ["Action", "Slow motion", "Energy"] },
  { id: 9, title: "Stories TikTok — FoodBrand", category: "Social Media", duration: "0:15", videoSrc: "/videos/project9.mp4", poster: "/posters/project9.jpg", tags: ["Vertical", "Food", "Viral"] },
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
            Survolez les cartes pour voir un aperçu. Cliquez pour explorer le projet complet.
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
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <FadeIn key={project.id} delay={(i % 6) * 0.07}>
              <VideoCard project={project} />
            </FadeIn>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-[#8888AA]">
            <p>Aucun projet dans cette catégorie pour l&apos;instant.</p>
          </div>
        )}
      </section>
    </div>
  );
}
