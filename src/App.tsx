import { HashRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyItWorks from './components/WhyItWorks';
import SelectionProcess from './components/SelectionProcess';
import YourRole from './components/YourRole';
import WhyUs from './components/WhyUs';
import ApplicationForm from './components/ApplicationForm';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ThankYou from './components/ThankYou';

const AppContent = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-bg-darker text-white">
      <Navbar isScrolled={isScrolled} />
      <Routes>
        <Route path="*" element={
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Hero />
              <WhyItWorks />
              <SelectionProcess />
              <YourRole />
              <WhyUs />
              <ApplicationForm />
              <Testimonials />
            </motion.div>
            <Footer />
          </>
        } />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
};

export default App; 