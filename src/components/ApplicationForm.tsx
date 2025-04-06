import { useState } from 'react';
import { motion } from 'framer-motion';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    excellence: '',
    interests: '',
    businessArea: '',
    expertise: '',
    whyJoin: '',
    background: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically integrate with Formspree or your backend
    try {
      const response = await fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Application submitted successfully!');
        setFormData({
          fullName: '',
          email: '',
          excellence: '',
          interests: '',
          businessArea: '',
          expertise: '',
          whyJoin: '',
          background: '',
        });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      alert('There was an error submitting your application. Please try again.');
    }
  };

  return (
    <section id="apply" className="section bg-white">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-h2-mobile md:text-h2-desktop text-navy mb-4">
            Apply to Join
          </h2>
          <p className="text-lg text-gray-600">
            Tell us why you're a fit. We'll follow up with top applicants.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-navy">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal focus:ring-teal"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-navy">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal focus:ring-teal"
                />
              </div>
            </div>

            <div>
              <label htmlFor="excellence" className="block text-sm font-medium text-navy">
                Something You've Excelled In
              </label>
              <textarea
                name="excellence"
                id="excellence"
                required
                value={formData.excellence}
                onChange={handleChange}
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal focus:ring-teal"
              />
            </div>

            <div>
              <label htmlFor="interests" className="block text-sm font-medium text-navy">
                Interests
              </label>
              <textarea
                name="interests"
                id="interests"
                required
                value={formData.interests}
                onChange={handleChange}
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal focus:ring-teal"
              />
            </div>

            <div>
              <label htmlFor="businessArea" className="block text-sm font-medium text-navy">
                Business Area
              </label>
              <select
                name="businessArea"
                id="businessArea"
                required
                value={formData.businessArea}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal focus:ring-teal"
              >
                <option value="">Select an area</option>
                <option value="Tech">Tech</option>
                <option value="E-commerce">E-commerce</option>
                <option value="Services">Services</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="expertise" className="block text-sm font-medium text-navy">
                Points of Expertise
              </label>
              <textarea
                name="expertise"
                id="expertise"
                required
                value={formData.expertise}
                onChange={handleChange}
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal focus:ring-teal"
              />
            </div>

            <div>
              <label htmlFor="whyJoin" className="block text-sm font-medium text-navy">
                Why You Want to Join
              </label>
              <textarea
                name="whyJoin"
                id="whyJoin"
                required
                value={formData.whyJoin}
                onChange={handleChange}
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal focus:ring-teal"
              />
            </div>

            <div>
              <label htmlFor="background" className="block text-sm font-medium text-navy">
                Background
              </label>
              <textarea
                name="background"
                id="background"
                required
                value={formData.background}
                onChange={handleChange}
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal focus:ring-teal"
              />
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="btn-primary w-full sm:w-auto"
            >
              Submit Application
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ApplicationForm; 