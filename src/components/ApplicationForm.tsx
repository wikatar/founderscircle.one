import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ApplicationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    stage: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Send the form data to our Netlify function
      const response = await fetch('/.netlify/functions/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      // Store the submission in localStorage (for demo purposes)
      const submissions = JSON.parse(localStorage.getItem('applications') || '[]');
      submissions.push({
        ...formData,
        submittedAt: new Date().toISOString()
      });
      localStorage.setItem('applications', JSON.stringify(submissions));

      // Redirect to thank you page
      navigate('/thank-you');
    } catch (err) {
      setError('There was an error submitting your application. Please try again.');
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="apply" className="section bg-bg-darker relative overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-h2-desktop md:text-h2-desktop text-accent mb-4">
            Apply for Membership
          </h2>
          <p className="text-text-light text-lg max-w-2xl mx-auto">
            Join an elite group of founders who are committed to growth and excellence.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto card"
        >
          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500">
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="text-text-light font-medium mb-2 block">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full"
                placeholder="Enter your full name"
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label htmlFor="email" className="text-text-light font-medium mb-2 block">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full"
                placeholder="Enter your email"
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="company" className="text-text-light font-medium mb-2 block">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full"
                placeholder="Enter your company name"
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label htmlFor="role" className="text-text-light font-medium mb-2 block">
                Your Role
              </label>
              <input
                type="text"
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
                className="w-full"
                placeholder="Enter your role"
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="stage" className="text-text-light font-medium mb-2 block">
              Company Stage
            </label>
            <select
              id="stage"
              name="stage"
              value={formData.stage}
              onChange={handleChange}
              required
              className="w-full"
              disabled={isSubmitting}
            >
              <option value="">Select company stage</option>
              <option value="idea">Idea Stage</option>
              <option value="mvp">MVP</option>
              <option value="early">Early Traction</option>
              <option value="growth">Growth</option>
              <option value="scale">Scale</option>
            </select>
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="text-text-light font-medium mb-2 block">
              Why do you want to join?
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full"
              placeholder="Tell us about your goals and what you hope to achieve"
              disabled={isSubmitting}
            />
          </div>

          <div className="text-center">
            <button 
              type="submit" 
              className="btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ApplicationForm; 