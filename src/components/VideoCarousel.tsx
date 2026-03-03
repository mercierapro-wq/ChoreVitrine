import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const videos = [
  {
    category: "Danse dans les galeries",
    title: "Danse contemporaine — Galerie Jamault, Paris, 25 avril 2024",
    src: "https://www.youtube.com/embed/Vl1vrMB3wxU?rel=0",
  },
  {
    category: "Compagnie professionnelle",
    title: "Œuvre chorégraphique « Obscur » — Paris, 2014",
    src: "https://www.youtube.com/embed/mZaU8mECX1g?rel=0",
  },
  {
    category: "Compagnie professionnelle",
    title: "Œuvre chorégraphique « Muheres » — Paris, 2011",
    src: "https://www.dailymotion.com/embed/video/xtyjt8",
  },
  {
    category: "Cours de technique Lester Horton",
    title: "Cours au Centre des Arts Vivants, Paris — extrait 1",
    src: "https://www.youtube.com/embed/bjrwM3v9TIE?rel=0",
  },
  {
    category: "Cours de technique Lester Horton",
    title: "Cours au Centre des Arts Vivants, Paris — extrait 2",
    src: "https://www.youtube.com/embed/AN8ar1bFJXg?rel=0",
  },
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
            <iframe
              src={video.src}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </motion.div>
        </AnimatePresence>

        {/* Légende */}
        <motion.div
          key={`meta-${current}`}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-6 text-center space-y-1"
        >
          <p className="text-accent-yellow uppercase tracking-widest text-xs font-sans">
            {video.category}
          </p>
          <p className="text-background/70 font-serif italic text-lg">
            {video.title}
          </p>
        </motion.div>

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
