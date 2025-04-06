import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

const YourRole = () => {
  const expectations = [
    'Challenge strategies.',
    'Offer expertise.',
    'Show up ready.',
  ];

  return (
    <section className="section bg-white relative">
      {/* Teal accent bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-teal" />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-h2-mobile md:text-h2-desktop text-navy mb-6 text-center">
            What's Expected of You
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 mb-8 text-center"
          >
            As a member, you'll audit your peers and present your business like a CEO—weekly KPIs, projects, and vision. Bring your A-game.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            {expectations.map((expectation, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-light-gray rounded-lg p-4"
              >
                <CheckCircleIcon className="h-6 w-6 text-teal flex-shrink-0" />
                <span className="text-navy font-semibold">{expectation}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default YourRole; 