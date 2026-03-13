import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const workshops = [
  {
    lieu: "Conservatoire de Saint-Mandé",
    detail: "Septembre à décembre 2025 — représentation dans un musée de la ville",
  },
  {
    lieu: "Conservatoire de Yerres",
    detail: "Novembre 2024 et 2025",
  },
  {
    lieu: "Conservatoire de Briançon",
    detail: "Année 2024",
  },
  {
    lieu: "Conservatoire d'Ivry",
    detail: "Octobre 2004 — l'ensemble des professeurs des différentes disciplines ont été sollicités (musique, danse classique, contemporaine et jazz)",
  },
];

const DanseMusee = () => {
  return (
    <section id="danse-musee" className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl mb-16 text-center"
        >
          Danse au musée
        </motion.h2>

        {/* Workshops */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl uppercase tracking-widest font-sans font-light border-b border-charcoal/10 pb-4 mb-8">
            Organisation d'un workshop couplé avec une restitution chorégraphique
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {workshops.map((w, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 bg-white shadow-sm border-l-4 border-accent-ochre"
              >
                <h4 className="text-xl mb-2 font-serif">{w.lieu}</h4>
                <p className="text-charcoal/70 leading-relaxed">{w.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Musée Carnavalet */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl uppercase tracking-widest font-sans font-light border-b border-charcoal/10 pb-4 mb-8">
            Musée Carnavalet, Paris
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Texte */}
            <div className="space-y-6 text-charcoal/80 leading-relaxed">
              <p>
                Deux interventions auprès des lycéens en éducation prioritaire venant d'Île-de-France.
              </p>
              <p>
                À l'issue d'une visite au musée, les élèves ont fait le choix d'un thème (le jardin du Musée / la Salle des enseignes) pour créer une variation dans ces lieux. Ils ont eu la possibilité d'y intégrer leur proposition de pas pour créer une variation sous la direction d'Edilson.
              </p>
              <p>
                Pour ces jeunes qui n'avaient jamais été au musée et qui ne connaissaient pas le quartier, ce fut une aubaine. Ils étaient satisfaits de leur expérience et trouvaient de la beauté dans le résultat de leur travail.
              </p>
              <div className="pt-2">
                <a
                  href="https://www.parismusees.paris.fr/fr/actualite/week-end-anniversaire-festif-et-gratuit-au-musee-carnavalet-les-21-et-22-mai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent-blue hover:underline text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  Déambulation au Paris Music Festival — mai 2022
                </a>
              </div>
            </div>

            {/* Vidéo */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              <div className="aspect-video bg-charcoal/5 overflow-hidden shadow-lg">
                <iframe
                  src="https://www.youtube.com/embed/KAY8OhP6bJE?rel=0"
                  title="Solo de Edilson Roque au musée Carnavalet"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <p className="text-charcoal/50 text-sm font-serif italic text-center">
                Solo de Edilson Roque dans la cour du musée Carnavalet pour la réouverture du musée en 2024
              </p>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default DanseMusee;
