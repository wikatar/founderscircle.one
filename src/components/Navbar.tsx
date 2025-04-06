import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar = ({ isScrolled }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '#' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Process', href: '#process' },
    { name: 'Apply', href: '#apply' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-bg-darker/95 backdrop-blur-sm shadow-lg shadow-shadow-black/20' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-montserrat font-bold text-gold">FC</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-text-gray hover:text-gold transition-colors duration-300 font-montserrat"
              >
                {item.name}
              </a>
            ))}
            <a href="#apply" className="btn-primary">
              Apply Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text-gray hover:text-gold transition-colors duration-300"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-4 pt-2 pb-4 space-y-2 bg-bg-darker/95 backdrop-blur-sm border-t border-border-gray/20">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-3 py-2 text-text-gray hover:text-gold transition-colors duration-300 font-montserrat"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a href="#apply" className="w-full btn-primary mt-4 text-center">
            Apply Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 