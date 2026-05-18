import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#1E1E2E] mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-mono text-sm text-violet-400 tracking-widest">&lt;Portfolio /&gt;</p>
          <p className="text-xs text-[#8888AA] mt-1">Monteur vidéo freelance</p>
        </div>
        <nav className="flex flex-wrap justify-center gap-6 text-sm text-[#8888AA]">
          {[
            ["À propos", "/a-propos"],
            ["Services", "/services"],
            ["Travaux", "/travaux"],
            ["Méthode", "/methode"],
            ["Contact", "/contact"],
          ].map(([label, href]) => (
            <Link key={href} href={href} className="hover:text-[#E8E8F0] transition-colors">
              {label}
            </Link>
          ))}
        </nav>
        <p className="text-xs text-[#8888AA]">© {new Date().getFullYear()} — Tous droits réservés</p>
      </div>
    </footer>
  );
}
