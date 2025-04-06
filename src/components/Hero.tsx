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
  }, []);

  return (
    <section
      className="min-h-screen relative flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #030303 0%, #0F0F0F 100%)',
      }}
    >
      {/* Geometric overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23C6A962\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
      />

      {/* Atmospheric fog effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-darker/50 to-darker pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-h1-mobile md:text-h1-desktop font-montserrat font-black text-text-light leading-tight mb-6"
          >
            Join an Elite Board of Founders
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-text-light opacity-90 mb-8"
          >
            Apply to become part of a selective group that audits your business and drives your growth—no equity, just expertise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <a href="#apply" className="btn-primary">
              Apply Now
            </a>
            <span className="text-accent font-semibold">Limited spots available</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16"
          >
            <div className="h-12">
              <motion.span
                key={currentTagline}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-2xl md:text-3xl font-montserrat font-bold text-accent block"
              >
                {taglines[currentTagline]}
              </motion.span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 