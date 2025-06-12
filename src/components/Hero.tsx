import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [currentTagline, setCurrentTagline] = useState(0);
  const taglines = ['Select.', 'Challenge.', 'Succeed.'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [taglines.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-darker/80 via-bg-dark/90 to-bg-darker/80 z-10" />
      
      {/* Atmospheric effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(43,26,31,0.8)_0%,rgba(26,37,37,0.95)_100%)] z-20" />
      
      {/* Content */}
      <div className="relative z-30 container mx-auto px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6 text-gold text-shadow"
        >
          The Founder's Circle
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-text-gray mb-8 max-w-3xl mx-auto"
        >
          Elite Peer Board for Visionary Founders
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#apply" className="btn-primary">
            Apply Now
          </a>
          <a href="#why-it-works" className="btn-primary bg-transparent">
            Learn More
          </a>
        </motion.div>
        
        <motion.p
          key={currentTagline}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl text-accent mt-8 font-bold"
        >
          {taglines[currentTagline]}
        </motion.p>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-darker to-transparent z-20" />
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-bg-darker to-transparent z-20" />
    </section>
  );
};

export default Hero; 