import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-charcoal/5"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="font-serif text-xl tracking-widest uppercase">
          Edilson Roque
        </div>
        <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest">
          <a href="#presentation" className="hover:text-accent-ochre transition-colors">Présentation</a>
          <a href="#parcours" className="hover:text-accent-ochre transition-colors">Parcours</a>
          <a href="#bresil2025" className="hover:text-accent-ochre transition-colors">Brésil 2025</a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
