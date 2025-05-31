import React, { useState, useEffect } from 'react';
import { FaPhoneAlt, FaChevronDown, FaChevronRight, FaTimes, FaBars } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../images/logoo.jpg';

export const Header = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [expandedService, setExpandedService] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
        { name: 'Works', href: '#portfolio' },
    { name: 'Technologies', href: 'Technologies' },
   
    {
      name: 'Services',
      submenu: [
        { name: 'CMS Development', href: '/CMSDevelopment' },
        { name: 'Ecommerce Development', href: '/EcommerceDevelopment' },
        { name: 'Maintenance Support', href: '/MaintenanceSupport' },
        { name: 'Mobile Development', href: '/MobileDevelopment' },
        { name: 'Testing Quality Analysis', href: '/TestingQualityAnalysis' },
        { name: 'UI Design Service', href: '/UIDesignService' },
        { name: 'Web Development Service', href: '/WebDevelopmentService' },
      ]
    },
 { name: 'About Us', href: '/About' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header className={`bg-white backdrop-blur-md sticky top-0 z-50 border-b transition-all duration-300 ${isScrolled ? 'border-gray-200 shadow-sm' : 'border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <a href="/" className="flex items-center h-full">
              <img
                src={Logo}
                className="h-14 w-auto"

              
                alt="Techista Logo"
              />
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center h-full">
            <ul className="flex space-x-1 h-full">
              {navItems.map((item) => (
                <li
                  key={item.name}
                  className="relative h-full flex items-center"
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <a
                    href={item.href || '#'}
                    className={`px-3 lg:px-4 py-2 flex items-center text-sm font-medium transition-colors duration-300 ${
                      hoveredItem === item.name
                        ? 'text-blue-600'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {item.name}
                    {item.submenu && (
                      <FaChevronDown className="ml-1 text-xs opacity-70" />
                    )}
                  </a>

                  {/* Underline animation */}
                  {hoveredItem === item.name && (
                    <motion.div
                      layoutId="underline"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                    />
                  )}

                  {/* Desktop dropdown menu */}
                  {hoveredItem === item.name && item.submenu && (
                    <motion.ul
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 w-56 mt-2 bg-white border border-gray-200 shadow-lg rounded-md z-50"
                    >
                      {item.submenu.map((sub, idx) => (
                        <li key={idx}>
                          <a
                            href={sub.href}
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                          >
                            {sub.name}
                          </a>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="hidden md:block"
          >
            <a
              href="#contact"
              className="relative group bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-2 lg:px-5 lg:py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center text-sm"
            >
              <span className="relative z-10 flex items-center">
                <FaPhoneAlt className="mr-2" />
                Get a Quote
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <div key={item.name} className="border-b border-gray-100 last:border-0">
                  {item.submenu ? (
                    <>
                      <button
                        onClick={() => setExpandedService(!expandedService)}
                        className="w-full flex justify-between items-center px-3 py-4 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors"
                      >
                        <span>{item.name}</span>
                        {expandedService ? (
                          <FaChevronDown className="text-gray-500 text-sm" />
                        ) : (
                          <FaChevronRight className="text-gray-500 text-sm" />
                        )}
                      </button>
                      
                      {/* Mobile submenu - animated */}
                      <AnimatePresence>
                        {expandedService && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 pb-2 space-y-2">
                              {item.submenu.map((sub) => (
                                <a
                                  key={sub.name}
                                  href={sub.href}
                                  className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {sub.name}
                                </a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <a
                      href={item.href}
                      className="block px-3 py-4 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-4">
                <a
                  href="#contact"
                  className="w-full flex justify-center items-center px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full shadow hover:shadow-md transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <FaPhoneAlt className="mr-2" />
                  Get a Quote
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};