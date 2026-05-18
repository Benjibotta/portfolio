"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  id: number;
  title: string;
  category: string;
  duration: string;
  videoSrc: string;
  poster: string;
  tags: string[];
  vertical?: boolean;
}

export default function VideoCard({ project }: { project: Project }) {
  const previewRef = useRef<HTMLVideoElement>(null);
  const lightboxRef = useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = useState(false);
  const [open, setOpen] = useState(false);

  // Charge la première frame comme miniature
  const handleLoadedMetadata = () => {
    if (previewRef.current) {
      previewRef.current.currentTime = 0.01;
    }
  };

  const handleMouseEnter = () => {
    setHovered(true);
    if (previewRef.current) {
      previewRef.current.currentTime = 0;
      previewRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setHovered(false);
    if (previewRef.current) {
      previewRef.current.pause();
      previewRef.current.currentTime = 0.01;
    }
  };

  const openLightbox = () => setOpen(true);

  const closeLightbox = () => {
    if (lightboxRef.current) lightboxRef.current.pause();
    setOpen(false);
  };

  useEffect(() => {
    if (open && lightboxRef.current) {
      lightboxRef.current.currentTime = 0;
      lightboxRef.current.muted = false;
      lightboxRef.current.play().catch(() => {});
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") closeLightbox(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const aspectClass = project.vertical ? "aspect-[9/16]" : "aspect-video";

  return (
    <>
      <motion.article
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
        className="group rounded-2xl overflow-hidden cursor-pointer"
        style={{ background: "#13131A", border: "1px solid #1E1E2E" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={openLightbox}
      >
        <div className={`relative ${aspectClass} overflow-hidden bg-[#0A0A0F]`}>
          {/* Vidéo — sert de miniature au repos, lecture au survol */}
          <video
            ref={previewRef}
            src={project.videoSrc}
            muted
            loop
            playsInline
            preload="metadata"
            onLoadedMetadata={handleLoadedMetadata}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Voile sombre discret pour lisibilité des badges, s'efface au survol */}
          <div
            className="absolute inset-0 transition-opacity duration-300"
            style={{
              background: "linear-gradient(to top, rgba(10,10,15,0.6) 0%, transparent 50%)",
              opacity: hovered ? 0 : 1,
            }}
          />

          {/* Icône play, disparaît au survol */}
          <motion.div
            animate={{ opacity: hovered ? 0 : 1, scale: hovered ? 0.8 : 1 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{ background: "rgba(127,119,221,0.3)", backdropFilter: "blur(4px)", border: "1px solid rgba(127,119,221,0.4)" }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M6 4l9 5-9 5V4z" fill="#E8E8F0" />
              </svg>
            </div>
          </motion.div>

          {project.duration && (
            <span
              className="absolute bottom-3 right-3 font-mono text-xs px-2 py-1 rounded"
              style={{ background: "rgba(10,10,15,0.8)", color: "#8888AA" }}
            >
              {project.duration}
            </span>
          )}

          <span
            className="absolute top-3 left-3 font-mono text-xs px-2 py-1 rounded-full"
            style={{ background: "rgba(127,119,221,0.2)", color: "#7F77DD", border: "1px solid rgba(127,119,221,0.3)" }}
          >
            {project.category}
          </span>
        </div>

        <div className="p-4">
          <h3 className="font-semibold text-[#E8E8F0] text-sm mb-3 group-hover:text-violet-300 transition-colors">
            {project.title}
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs px-2 py-0.5 rounded"
                style={{ background: "#0A0A0F", color: "#8888AA", border: "1px solid #1E1E2E" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.article>

      {/* Lightbox */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            style={{ background: "rgba(0,0,0,0.92)", backdropFilter: "blur(8px)" }}
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                ref={lightboxRef}
                src={project.videoSrc}
                controls
                playsInline
                className="rounded-xl"
                style={{
                  maxHeight: "85vh",
                  maxWidth: "90vw",
                  ...(project.vertical
                    ? { height: "85vh", width: "auto" }
                    : { width: "min(90vw, 1000px)", height: "auto" }),
                }}
              />

              <button
                onClick={closeLightbox}
                className="absolute -top-4 -right-4 w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                style={{ background: "#1E1E2E", border: "1px solid #2E2E3E", color: "#8888AA" }}
                aria-label="Fermer"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </button>

              <p className="mt-3 text-sm text-[#8888AA] text-center font-mono">{project.title}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
