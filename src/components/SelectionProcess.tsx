import { motion } from 'framer-motion';

const steps = [
  {
    title: "Initial Application",
    description: "Submit your application through our streamlined process. We'll review your background and vision.",
    icon: "📝"
  },
  {
    title: "Background Check",
    description: "We verify your entrepreneurial experience and achievements to ensure alignment with our standards.",
    icon: "🔍"
  },
  {
    title: "Interview Process",
    description: "Engage in meaningful conversations with our team to discuss your goals and potential fit.",
    icon: "💬"
  },
  {
    title: "Board Matching",
    description: "We match you with the most relevant peer board based on industry, stage, and expertise.",
    icon: "🤝"
  },
  {
    title: "Final Review",
    description: "The board reviews your application and makes a final decision on your membership.",
    icon: "✨"
  },
  {
    title: "Onboarding",
    description: "Begin your journey with a comprehensive onboarding process and meet your new peer board.",
    icon: "🚀"
  }
];

const SelectionProcess = () => {
  return (
    <section id="process" className="section bg-bg-darker relative overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-h2-desktop md:text-h2-desktop text-accent mb-4">
            How We Build Your Board
          </h2>
          <p className="text-text-light text-lg max-w-2xl mx-auto">
            Our rigorous selection process ensures you're surrounded by the most relevant and valuable peers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card group"
            >
              <div className="step-number">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold text-accent mb-3">{step.title}</h3>
              <p className="text-text-light">{step.description}</p>
              <div className="text-3xl mt-4">{step.icon}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectionProcess; 