import { Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 px-6 bg-charcoal text-background">
      <div className="max-w-5xl mx-auto">

        {/* Titre */}
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-16">Contact</h2>

        <div className="flex flex-col md:flex-row justify-center gap-16 mb-16">

          {/* Edilson Roque */}
          <div className="space-y-3 text-center items-center flex flex-col">
            <h3 className="text-accent-yellow uppercase tracking-widest text-xs font-sans mb-4">
              Directeur artistique
            </h3>
            <p className="text-xl font-serif">Edilson Roque</p>
            <p className="text-background/60 text-sm">Pour toute information sur un éventuel projet</p>
            <div className="flex flex-col gap-2 pt-2 items-center">
              <a
                href="mailto:edislonroque29@gmail.com"
                className="inline-flex items-center gap-2 text-background/80 hover:text-accent-yellow transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                edislonroque29@gmail.com
              </a>
              <a
                href="https://www.instagram.com/roque_edilson?utm_source=qr&igsh=bmQzaHlkcGMzMHc4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-background/80 hover:text-accent-yellow transition-colors text-sm"
              >
                <Instagram className="w-4 h-4" />
                @roque_edilson
              </a>
            </div>
          </div>

          {/* Lucie Mercier */}
          <div className="space-y-3 text-center items-center flex flex-col">
            <h3 className="text-accent-yellow uppercase tracking-widest text-xs font-sans mb-4">
              Cheffe de projet culturel
            </h3>
            <p className="text-xl font-serif">Lucie Mercier</p>
            <div className="flex flex-col gap-2 pt-2 items-center">
              <a
                href="mailto:lucielectric@gmail.com"
                className="inline-flex items-center gap-2 text-background/80 hover:text-accent-yellow transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                lucielectric@gmail.com
              </a>
            </div>
          </div>

        </div>

        {/* Séparateur */}
        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-background/30 text-xs">
          <span className="font-serif tracking-widest uppercase">© {new Date().getFullYear()} Edilson Roque — Chorégraphe & Danseur</span>
          <span>
            Site réalisé par{' '}
            <a
              href="https://home.nodalforge.cloud"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-background/60 transition-colors"
            >
              Alexis Mercier
            </a>
            {' '}·{' '}
            <a
              href="mailto:nodalforge@gmail.com"
              className="hover:text-background/60 transition-colors"
            >
              nodalforge@gmail.com
            </a>
          </span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
