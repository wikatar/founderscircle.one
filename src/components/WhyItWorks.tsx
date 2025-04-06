import { motion } from 'framer-motion';
import { MagnifyingGlassIcon, ClipboardDocumentIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const WhyItWorks = () => {
  const cards = [
    {
      icon: MagnifyingGlassIcon,
      title: 'Elite Feedback',
      description: 'Top-tier peers who push your limits.',
    },
    {
      icon: ClipboardDocumentIcon,
      title: 'Structured Audits',
      description: 'Weekly reviews to keep you sharp.',
    },
    {
      icon: UserGroupIcon,
      title: 'Mutual Impact',
      description: 'Give and get strategic insight.',
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
    <section id="why-it-works" className="section bg-white relative overflow-hidden">
      {/* Wave transition */}
      <div className="absolute top-0 left-0 w-full">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 43.3C1200 47 1320 53 1380 56.7L1440 60V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V0Z"
            fill="#F5F6F5"
          />
        </svg>
      </div>

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-h2-mobile md:text-h2-desktop text-navy mb-4">
            Why a Selective Board Matters
          </h2>
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
              className="bg-white rounded-xl p-6 shadow-lg border-2 border-light-gray hover:border-teal transition-colors duration-300"
            >
              <div className="mb-4">
                <card.icon className="h-12 w-12 text-teal" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyItWorks; 