import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <section className="section bg-bg-darker min-h-screen flex items-center">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center card p-8"
        >
          <h1 className="text-h2-desktop md:text-h2-desktop text-accent mb-6">
            Thank You for Your Application
          </h1>
          <p className="text-text-light text-lg mb-8">
            We've received your application and will review it shortly. We'll be in touch with you soon.
          </p>
          <Link to="/" className="btn-primary">
            Return to Home
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ThankYou;

 