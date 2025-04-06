import { motion } from 'framer-motion';

const Testimonials = () => {
  return (
    <section className="section bg-navy relative overflow-hidden">
      {/* Dot pattern background */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '20px 20px',
        }} />
      </div>

      <div className="container max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-h2-mobile md:text-h2-desktop text-white mb-12">
            What Members Say
          </h2>

          <blockquote className="text-xl md:text-2xl text-white font-light italic mb-6">
            "The selection process was tough, but my board is worth it."
          </blockquote>

          <cite className="text-gold font-semibold not-italic">
            — Alex, XYZ
          </cite>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 