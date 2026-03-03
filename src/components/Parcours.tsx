import { motion } from 'framer-motion';
import { MapPin, Users, GraduationCap, Globe, Heart } from 'lucide-react';

const Parcours = () => {
  const categories = [
    {
      title: "Formation Internationale",
      icon: <Globe className="w-5 h-5" />,
      items: [
        { 
          name: "Rio de Janeiro, Brésil", 
          description: "Centre des Arts « Nos da Dança ».",
          highlight: true 
        },
        { name: "New York, USA", description: "Alvin Ailey American Dance Theater." },
        { name: "Chicago, USA", description: "Hubbard Street Dance Company." },
        { name: "Toronto, Canada", description: "Toronto Dance Theatre." },
        { name: "Australie", description: "Sydney Dance School et Centre des Arts de Melbourne." }
      ]
    },
    {
      title: "Enseignement & Transmission",
      icon: <GraduationCap className="w-5 h-5" />,
      items: [
        { 
          name: "Paris Marais Dance School", 
          description: "Depuis 2020, professeur de technique Horton pour la préparation à la scène.",
          highlight: true 
        },
        { name: "Écoles de formation", description: "Choreia et Centre des Arts Vivants (Technique Horton)." },
        { name: "Training du Danseur", description: "Micadanses (training quotidien) et Studio Harmonic (formation pro et open)." },
        { name: "Institutions & Festivals", description: "CEFEDEM de Rouen et Vienna International Dance Festival (ImPulsTanz)." }
      ]
    },
    {
      title: "Danse dans les galeries",
      icon: <MapPin className="w-5 h-5" />,
      items: [
        { 
          name: "Musée Carnavalet", 
          description: "Performance immersive au cœur de l'histoire de Paris. Une exploration du mouvement en dialogue avec les collections permanentes.",
          highlight: true 
        },
        { name: "Galeries d'art contemporain", description: "Interventions chorégraphiques lors de vernissages et expositions temporaires." }
      ]
    },
    {
      title: "Compagnie & Création",
      icon: <Users className="w-5 h-5" />,
      items: [
        { name: "Direction Artistique", description: "Créations originales mettant en avant la liberté et la disponibilité du corps." },
        { name: "Rayonnement", description: "Diffusion des œuvres et projets de médiation culturelle sur divers territoires." }
      ]
    }
  ];

  return (
    <section id="parcours" className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl mb-16 text-center"
        >
          Le Parcours
        </motion.h2>
        
        <div className="space-y-16">
          {categories.map((cat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-8 border-b border-charcoal/10 pb-4">
                <span className="text-accent-blue">{cat.icon}</span>
                <h3 className="text-2xl uppercase tracking-widest font-sans font-light">{cat.title}</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {cat.items.map((item, i) => (
                  <div 
                    key={i} 
                    className={`p-6 transition-all duration-300 ${item.highlight ? 'bg-white shadow-sm border-l-4 border-accent-ochre' : 'hover:bg-white/50'}`}
                  >
                    <h4 className="text-xl mb-2 font-serif">{item.name}</h4>
                    <p className="text-charcoal/70 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section Pédagogie */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 p-8 md:p-12 bg-accent-blue text-background relative overflow-hidden"
        >
          <Heart className="absolute -right-8 -bottom-8 w-48 h-48 text-background/5 rotate-12" />
          <div className="relative z-10 max-w-3xl">
            <h3 className="text-2xl md:text-3xl mb-6 font-serif italic">Une pédagogie de la liberté</h3>
            <p className="text-lg md:text-xl leading-relaxed opacity-90">
              Edilson applique une pédagogie à la fois rigoureuse et généreuse, aussi bien dans ses enseignements que dans ses créations. 
              Il met en confiance les danseurs avec des propositions chorégraphiques permettant à tous — élèves ou danseurs professionnels — d’acquérir liberté et disponibilité.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Parcours;
