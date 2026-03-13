import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const videos = [
  {
    category: "Danse dans les galeries",
    title: "Danse contemporaine — Galerie Jamault, Paris, 25 avril 2024",
    description: "",
    src: "https://www.youtube.com/embed/Vl1vrMB3wxU?rel=0",
    type: "iframe" as const,
  },
  {
    category: "Danse à l'Hôtel de ville, Paris 2024",
    title: "Intervention dansée dans les salles d'exposition d'art moderne",
    description: "",
    src: "/danse_hotel_paris.mp4",
    type: "video" as const,
  },
  {
    category: "Compagnie professionnelle",
    title: "Œuvre chorégraphique « Obscur » — Paris, 2014",
    description: "",
    src: "https://www.youtube.com/embed/mZaU8mECX1g?rel=0",
    type: "iframe" as const,
  },
  {
    category: "Compagnie professionnelle",
    title: "Œuvre chorégraphique « Muheres » — Paris, 2011",
    description: "",
    src: "https://www.dailymotion.com/embed/video/xtyjt8",
    type: "iframe" as const,
  },
  {
    category: "Cours de technique Lester Horton",
    title: "Cours au Centre des Arts Vivants, Paris — extrait 1",
    description: "",
    src: "https://www.youtube.com/embed/bjrwM3v9TIE?rel=0",
    type: "iframe" as const,
  },
  
  {
    category: "Projet interculturel France /Brésil Vidançar",
    title: "De jeunes danseuses brésiliennes issues des favelas sont venues en septembre 2025 découvrir la danse à Paris (visite de l’Opéra Garnier, cours de danse aux Carreaux du Temple…) ",
    description: "",
    src: "https://www.instagram.com/reel/DBrEJqYOuyV/?igsh=eGZibWwzNXU0dHRw",
    type: "link" as const,
  }
];

const VideoCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (next: number) => {
    setDirection(next > current ? 1 : -1);
    setCurrent(next);
  };

  const prev = () => go((current - 1 + videos.length) % videos.length);
  const next = () => go((current + 1) % videos.length);

  const video = videos[current];

  return (
    <section id="videos" className="py-24 px-6 bg-charcoal text-background">
      <div className="max-w-5xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl mb-16 text-center font-serif"
        >
          Œuvres 
        </motion.h2>

        {/* Catégorie + Titre + Description */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`meta-${current}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="mb-6 text-center space-y-2"
          >
            <p className="text-accent-yellow uppercase tracking-widest text-xs font-sans">
              {video.category}
            </p>
            <p className="text-background/70 font-serif italic text-lg">
              {video.title}
            </p>
            {video.description && (
              <p className="mt-4 max-w-3xl mx-auto text-background/80 leading-relaxed text-base md:text-lg font-serif whitespace-pre-line">
                {video.description}
              </p>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Vidéo active */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            initial={{ opacity: 0, x: direction * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -40 }}
            transition={{ duration: 0.35 }}
            className="aspect-video w-full bg-black"
          >
            {video.type === "video" ? (
              <video
                key={video.src}
                src={video.src}
                controls
                className="w-full h-full"
              />
            ) : video.type === "link" ? (
              <a
                href={video.src}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-full flex flex-col items-center justify-center gap-4 bg-charcoal/60 hover:bg-charcoal/40 transition-colors"
              >
                <ExternalLink className="w-12 h-12 text-accent-yellow" />
                <span className="text-background/80 font-serif italic text-center px-8">
                  Voir le reel sur Instagram
                </span>
              </a>
            ) : (
              <iframe
                src={video.src}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={prev}
            aria-label="Vidéo précédente"
            className="p-2 text-background/40 hover:text-accent-yellow transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="flex gap-2 items-center">
            {videos.map((v, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={v.title}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? 'bg-accent-yellow w-6 h-2'
                    : 'bg-background/25 w-2 h-2 hover:bg-background/50'
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Vidéo suivante"
            className="p-2 text-background/40 hover:text-accent-yellow transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoCarousel;
