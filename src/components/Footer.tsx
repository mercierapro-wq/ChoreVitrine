const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-charcoal/5 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="font-serif text-lg tracking-widest uppercase">
          Edilson Roque
        </div>
        <div className="text-sm text-charcoal/50 tracking-widest uppercase">
          © {new Date().getFullYear()} — Chorégraphe & Danseur
        </div>
        <div className="flex space-x-6 text-sm uppercase tracking-widest">
          <a href="#" className="hover:text-accent-ochre transition-colors">Contact</a>
          <a href="#" className="hover:text-accent-ochre transition-colors">Mentions Légales</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
