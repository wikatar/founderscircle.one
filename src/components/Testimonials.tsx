import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "The Founder's Audit has been instrumental in my growth as a founder. The peer support and insights are invaluable.",
    author: "Ricardo",
    role: "Founder, Strong Partner",
    avatar: "👨‍💼"
  },
  {
    quote: "Being part of this board has transformed how I approach challenges. The collective wisdom here is unmatched.",
    author: "Finn",
    role: "Founder, GE Marketing",
    avatar: "👨‍🚀"
  },
  {
    quote: "The structured approach to problem-solving and the diverse perspectives have helped me make better decisions.",
    author: "Wilmer",
    role: "Founder, The Balthazar Project",
    avatar: "👨‍💻"
  }
];

const Testimonials = () => {
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
            What Our Members Say
          </h2>
          <p className="text-text-light text-lg max-w-2xl mx-auto">
            Hear from founders who have experienced the transformative power of peer boards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card group"
            >
              <div className="flex flex-col h-full">
                <div className="flex-grow">
                  <svg className="h-8 w-8 text-accent mb-4" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="text-text-light text-lg mb-6">{testimonial.quote}</p>
                </div>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-accent/10 border-2 border-accent/20 flex items-center justify-center text-2xl animate-pulse">
                    {testimonial.avatar}
                  </div>
                  <div className="ml-4">
                    <p className="text-text-light font-medium">{testimonial.author}</p>
                    <p className="text-text-muted">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 