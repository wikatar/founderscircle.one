import { motion } from 'framer-motion';
import { DocumentTextIcon, PhoneIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const SelectionProcess = () => {
  const steps = [
    {
      icon: DocumentTextIcon,
      title: 'Apply',
      description: 'Submit your profile.',
    },
    {
      icon: PhoneIcon,
      title: 'Screening',
      description: 'We review and call top candidates.',
    },
    {
      icon: UserGroupIcon,
      title: 'Join',
      description: 'Get matched with your elite board.',
    },
  ];

  return (
    <section id="process" className="section bg-light-gray">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-h2-mobile md:text-h2-desktop text-navy mb-4">
            How We Build Your Board
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We hand-pick every member to ensure fit and impact. Our process includes:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-teal -translate-y-1/2" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-teal flex items-center justify-center mb-6 relative z-10">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </div>

              {/* Step number */}
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-8 h-8 rounded-full bg-gold text-white flex items-center justify-center font-bold">
                {index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectionProcess; 