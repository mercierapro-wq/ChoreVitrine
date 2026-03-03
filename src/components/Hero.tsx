import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl md:text-6xl mb-8 leading-tight font-serif italic"
        >
          Une danse au plus près des sens<br />
          Un regard ouvert à l'autre et à soi<br />
          Des rythmes<br />
          Des chants et de la joie
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="w-px h-24 bg-accent-blue/30 mx-auto mt-12"
        />
      </div>
    </section>
  );
};

export default Hero;
