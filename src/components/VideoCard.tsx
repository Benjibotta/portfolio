"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface Project {
  id: number;
  title: string;
  category: string;
  duration: string;
  videoSrc: string;
  poster: string;
  tags: string[];
}

export default function VideoCard({ project }: { project: Project }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="group rounded-2xl overflow-hidden cursor-pointer"
      style={{ background: "#13131A", border: "1px solid #1E1E2E" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Video thumbnail */}
      <div className="relative aspect-video overflow-hidden bg-[#0A0A0F]">
        {/* Placeholder gradient when no video */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, rgba(127,119,221,0.2) 0%, rgba(55,138,221,0.15) 50%, rgba(10,10,15,0.8) 100%)`,
          }}
        />

        <video
          ref={videoRef}
          src={project.videoSrc}
          poster={project.poster}
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
          style={{ opacity: hovered ? 1 : 0 }}
        />

        {/* Play icon (shown when not hovered) */}
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

        {/* Duration badge */}
        <span
          className="absolute bottom-3 right-3 font-mono text-xs px-2 py-1 rounded"
          style={{ background: "rgba(10,10,15,0.8)", color: "#8888AA" }}
        >
          {project.duration}
        </span>

        {/* Category badge */}
        <span
          className="absolute top-3 left-3 font-mono text-xs px-2 py-1 rounded-full"
          style={{ background: "rgba(127,119,221,0.2)", color: "#7F77DD", border: "1px solid rgba(127,119,221,0.3)" }}
        >
          {project.category}
        </span>
      </div>

      {/* Card info */}
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
  );
}
