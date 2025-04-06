import { motion } from 'framer-motion';
import { ShieldCheckIcon, CogIcon, PuzzlePieceIcon, StarIcon } from '@heroicons/react/24/outline';

const WhyUs = () => {
  const benefits = [
    {
      icon: ShieldCheckIcon,
      title: 'No Equity',
      description: 'Expert feedback, zero ownership cost.',
    },
    {
      icon: CogIcon,
      title: 'Structured',
      description: 'Built-in rigor, not random networking.',
    },
    {
      icon: PuzzlePieceIcon,
      title: 'Tailored',
      description: 'Long-term, niche groups.',
    },
    {
      icon: StarIcon,
      title: 'Selective',
      description: 'Only the best, hand-picked for impact.',
    },
  ];

  return (
    <section className="section bg-batman relative overflow-hidden">
      {/* Arrow pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 0l30 30-30 30L0 45l15-15L0 15z' fill='%23C6A962' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
        }} />
      </div>

      {/* Atmospheric fog effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-darker/30 to-darker pointer-events-none" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-h2-mobile md:text-h2-desktop text-text-light mb-4">
            Better Than the <span className="text-gradient">Alternatives</span>
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            No equity lost, no generic programs—here's why we're different:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card hover:scale-105 transform transition-all duration-300"
            >
              <div className="mb-4">
                <benefit.icon className="h-12 w-12 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-text-light mb-2">{benefit.title}</h3>
              <p className="text-text-muted">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a href="#apply" className="btn-primary animate-glow">
            Apply Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs; 