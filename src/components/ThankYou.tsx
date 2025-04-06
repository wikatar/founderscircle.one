import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

const ThankYou = () => {
  return (
    <section className="section bg-bg-darker relative overflow-hidden min-h-screen flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-darker to-dark"></div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="mb-8">
            <CheckCircleIcon className="h-24 w-24 text-accent mx-auto" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-accent mb-6">
            Thank You for Your Application
          </h1>
          
          <p className="text-text-light text-lg mb-8">
            We've received your application and will review it carefully. Our team will be in touch with you soon to discuss the next steps.
          </p>
          
          <div className="space-y-4">
            <p className="text-text-light">
              What happens next?
            </p>
            <ul className="text-text-light space-y-2">
              <li>• Our team will review your application within 48 hours</li>
              <li>• If your profile matches our criteria, we'll schedule an interview</li>
              <li>• You'll receive detailed information about our selection process</li>
            </ul>
          </div>
          
          <div className="mt-12">
            <a href="/" className="btn-primary">
              Return to Home
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ThankYou;

 