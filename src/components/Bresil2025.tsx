import { motion } from 'framer-motion';

const Bresil2025 = () => {
  return (
    <section id="bresil2025" className="py-24 px-6 bg-accent-yellow text-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="absolute top-0 right-0 w-1/2 h-full bg-accent-ochre/15 -skew-x-12 translate-x-1/4 pointer-events-none"
        />
        
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl mb-8"
            >
              Brésil 2025
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-charcoal/70 leading-relaxed mb-8"
            >
              Un retour aux sources, une exploration chorégraphique entre tradition et modernité. 
              Un projet d'envergure reliant les continents par le langage universel du corps.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="aspect-video bg-charcoal/5 border border-charcoal/10 overflow-hidden relative group shadow-2xl"
          >
            <img 
              src="/photo_bresil.jpg" 
              alt="Projet Brésil 2025" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 border border-charcoal/20 m-4 group-hover:m-2 transition-all duration-500 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Bresil2025;
