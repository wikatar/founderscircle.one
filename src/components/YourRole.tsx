import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

const YourRole = () => {
  const expectations = [
    {
      title: 'Challenge Strategies',
      description: 'Provide critical feedback and insights to help peers refine their business strategies.'
    },
    {
      title: 'Offer Expertise',
      description: 'Share your knowledge and experience to help others overcome challenges.'
    },
    {
      title: 'Show Up Ready',
      description: 'Come prepared with your business updates, KPIs, and challenges.'
    },
    {
      title: 'Regular Reviews',
      description: 'Monthly, quarterly and yearly reviews with KPI, strategy, operations including a yearly meetup with the group.'
    }
  ];

  return (
    <section className="section bg-bg-darker relative overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-h2-desktop md:text-h2-desktop text-accent mb-4">
            What's Expected of You
          </h2>
          <p className="text-text-light text-lg max-w-2xl mx-auto">
            As a member, you'll audit your peers and present your business like a CEO—weekly KPIs, projects, and vision. Bring your A-game.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {expectations.map((expectation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card group"
            >
              <div className="flex items-start">
                <CheckCircleIcon className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div className="ml-4">
                  <h3 className="text-text-light font-semibold mb-2">{expectation.title}</h3>
                  <p className="text-text-muted">{expectation.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YourRole; 