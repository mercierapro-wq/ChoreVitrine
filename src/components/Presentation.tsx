import { motion } from 'framer-motion';

const Presentation = () => {
  return (
    <section id="presentation" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7"
          >
            <h2 className="text-4xl md:text-5xl mb-8">Danser au musée</h2>
            <div className="space-y-6 text-lg md:text-xl leading-relaxed text-charcoal/80 mb-8">
              <p>
                Un chemin, une disponibilité des corps par une recherche constante de s'améliorer en danse.
              </p>
              <p>
                Une association met à disposition pour les musées, un groupe de danseurs amateurs déambulant au cœur des expositions pour amener de la danse à la peinture, à la photographie ou statues.
              </p>
              <p>
                Le chorégraphe propose sa danse dans un espace qui n'est ni le studio, ni la scène. Chaque représentation sera unique et sera le fruit d'un travail particulier entre l'œuvre et la danse.
              </p>
              <p>
                S'y retrouvera le public faisant partie de la chorégraphie à travers les regards et les gestes.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="md:col-span-5 relative aspect-[3/4] bg-charcoal/5 overflow-hidden shadow-xl"
          >
            <img 
              src="/danse_musee.jpg" 
              alt="Edilson Roque - Danse au musée" 
              className="w-full h-full object-cover"
            />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-r-2 border-b-2 border-accent-ochre/30" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
