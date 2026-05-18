"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/FadeIn";

type FormState = "idle" | "sending" | "success" | "error";

const projectTypes = [
  "Brand Content / Corporate",
  "Clip Musical",
  "Documentaire",
  "Publicité / Spot TV",
  "Social Media / Réseaux sociaux",
  "Short Film / Fiction",
  "Autre",
];

const budgets = [
  "Moins de 500€",
  "500€ – 1 200€",
  "1 200€ – 3 000€",
  "3 000€ – 6 000€",
  "6 000€+",
  "À définir ensemble",
];

export default function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "",
    scope: "",
    deadline: "",
    budget: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setFormState("success");
        setForm({ name: "", email: "", projectType: "", scope: "", deadline: "", budget: "", message: "" });
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  const inputClass = `
    w-full px-4 py-3 rounded-xl text-sm text-[#E8E8F0] placeholder-[#8888AA]
    bg-[#13131A] border border-[#1E1E2E]
    focus:outline-none focus:border-violet-500/60 focus:bg-[#13131A]
    transition-colors duration-200
  `;

  return (
    <div className="pt-24">
      <section className="max-w-6xl mx-auto px-6 py-16">
        <FadeIn>
          <p className="font-mono text-xs text-violet-400 tracking-widest mb-3">// CONTACT</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Parlons de<br />
            <span
              style={{
                backgroundImage: "linear-gradient(135deg, #7F77DD 0%, #378ADD 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              votre projet
            </span>
          </h1>
          <p className="text-lg text-[#8888AA] max-w-xl">
            Remplissez ce formulaire et je vous réponds sous 24h. Le premier échange est toujours gratuit.
          </p>
        </FadeIn>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24 grid lg:grid-cols-[1fr_360px] gap-12">
        {/* Form */}
        <FadeIn>
          <AnimatePresence mode="wait">
            {formState === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-2xl p-12 text-center flex flex-col items-center gap-6"
                style={{ background: "#13131A", border: "1px solid rgba(127,119,221,0.3)" }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(127,119,221,0.15)" }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7F77DD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#E8E8F0] mb-2">Message envoyé !</h3>
                  <p className="text-[#8888AA]">Je vous réponds dans les 24 heures. À très vite !</p>
                </div>
                <button
                  onClick={() => setFormState("idle")}
                  className="text-sm text-violet-400 hover:text-violet-300 transition-colors"
                >
                  Envoyer un autre message
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="rounded-2xl p-6 md:p-8 space-y-5"
                style={{ background: "#13131A", border: "1px solid #1E1E2E" }}
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono text-[#8888AA] tracking-wider mb-2">NOM *</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Jean Dupont"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-[#8888AA] tracking-wider mb-2">EMAIL *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="jean@exemple.fr"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#8888AA] tracking-wider mb-2">TYPE DE PROJET *</label>
                  <select
                    name="projectType"
                    value={form.projectType}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  >
                    <option value="" disabled>Sélectionner…</option>
                    {projectTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#8888AA] tracking-wider mb-2">PÉRIMÈTRE DU PROJET *</label>
                  <textarea
                    name="scope"
                    value={form.scope}
                    onChange={handleChange}
                    required
                    rows={3}
                    placeholder="Décrivez votre projet : durée souhaitée, nombre de rushs, objectifs…"
                    className={inputClass}
                    style={{ resize: "vertical" }}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono text-[#8888AA] tracking-wider mb-2">DEADLINE</label>
                    <input
                      type="date"
                      name="deadline"
                      value={form.deadline}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-[#8888AA] tracking-wider mb-2">BUDGET APPROXIMATIF</label>
                    <select
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Non défini</option>
                      {budgets.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#8888AA] tracking-wider mb-2">MESSAGE COMPLÉMENTAIRE</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Partagez tout ce qui pourrait m'aider à mieux comprendre votre vision…"
                    className={inputClass}
                    style={{ resize: "vertical" }}
                  />
                </div>

                {formState === "error" && (
                  <p className="text-sm text-red-400 font-mono">Une erreur est survenue. Veuillez réessayer ou m&apos;écrire directement par email.</p>
                )}

                <button
                  type="submit"
                  disabled={formState === "sending"}
                  className="w-full py-3.5 rounded-xl font-medium text-white transition-all duration-200 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ background: "linear-gradient(135deg, #7F77DD, #378ADD)" }}
                >
                  {formState === "sending" ? (
                    <span className="flex items-center justify-center gap-2">
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="block w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                      />
                      Envoi en cours…
                    </span>
                  ) : (
                    "Envoyer ma demande de devis"
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </FadeIn>

        {/* Sidebar */}
        <FadeIn direction="right" delay={0.15}>
          <div className="space-y-6">
            <div
              className="rounded-2xl p-6"
              style={{ background: "#13131A", border: "1px solid #1E1E2E" }}
            >
              <h3 className="font-mono text-xs text-violet-400 tracking-widest mb-5">// CONTACT DIRECT</h3>
              <div className="space-y-4">
                <a
                  href="mailto:benjaminbottalico.pro@gmail.com"
                  className="flex items-center gap-3 text-sm text-[#8888AA] hover:text-violet-300 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(127,119,221,0.15)" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7F77DD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  benjaminbottalico.pro@gmail.com
                </a>
              </div>
            </div>

<div
              className="rounded-2xl p-6"
              style={{ background: "linear-gradient(135deg, rgba(127,119,221,0.1), rgba(55,138,221,0.06))", border: "1px solid rgba(127,119,221,0.2)" }}
            >
              <h3 className="font-semibold text-[#E8E8F0] mb-2">Premier échange offert</h3>
              <p className="text-sm text-[#8888AA]">
                30 minutes pour discuter de votre projet, sans engagement. On voit si on est faits pour travailler ensemble.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
