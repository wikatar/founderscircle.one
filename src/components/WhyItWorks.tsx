import { motion } from 'framer-motion';
import { MagnifyingGlassIcon, ClipboardDocumentIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const WhyItWorks = () => {
  const cards = [
    {
      icon: MagnifyingGlassIcon,
      title: 'Elite Feedback',
      description: 'Top-tier peers who push your limits and challenge your assumptions.',
    },
    {
      icon: ClipboardDocumentIcon,
      title: 'Structured Audits',
      description: 'Weekly reviews with actionable insights to keep you sharp and focused.',
    },
    {
      icon: UserGroupIcon,
      title: 'Mutual Impact',
      description: 'Give and get strategic insight from founders at your level.',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="why-it-works" className="section bg-bg-darker relative overflow-hidden">
      {/* Simple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-darker via-bg-dark to-bg-darker"></div>

      <div className="container relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-h2-mobile md:text-h2-desktop text-accent mb-4 font-bold">
            Why a Selective Board Matters
          </h2>
          <p className="text-text-light max-w-2xl mx-auto text-lg">
            Our rigorous selection process ensures you're surrounded by founders who will truly elevate your business.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-bg-dark/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-border-gray/30 hover:border-accent transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="mb-6 bg-bg-darker/50 p-3 rounded-lg inline-block">
                <card.icon className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-accent mb-3">{card.title}</h3>
              <p className="text-text-light leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyItWorks; 