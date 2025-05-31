import React, { useState } from 'react';
import { FaPhoneAlt, FaChevronDown } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Logo from '../images/logoo.jpg';

export const Header = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const navItems = [
    { name: 'About Us', href: '/About' },
    {
      name: 'Services',
      // href: '#services',
      submenu: [
        { name: 'CMSDevelopment', href: '/CMSDevelopment' },
        { name: 'EcommerceDevelopment', href: '/EcommerceDevelopment' },
        { name: 'MaintenanceSupport', href: '/MaintenanceSupport' },
      { name: 'MobileDevelopment', href: '/MobileDevelopment' },
        { name: 'TestingQualityAnalysis', href: '/TestingQualityAnalysis' },
 { name: 'UIDesignService', href: '/UIDesignService' },
        { name: 'WebDevelopmentService', href: '/WebDevelopmentService' },



        
        

      ]
    },
    { name: 'Works', href: '#portfolio' },
    { name: 'Technologies', href: 'Technologies' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <a href="/" className="flex items-center h-16">
              <img
                src={Logo}
                className="h-20 w-auto"
                alt="Techista Logo"
              />
            </a>
          </motion.div>

          {/* Navigation */}
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
                    href={item.href}
                    className={`px-4 py-2 flex items-center text-sm font-medium transition-all duration-1000 ${
                      hoveredItem === item.name
                        ? 'text-blue-600'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                    aria-label={`Navigate to ${item.name}`}
                  >
                    {item.name}
                    {item.submenu && (
                      <FaChevronDown className="ml-1 text-xs opacity-70" />
                    )}
                  </a>

                  {/* Underline */}
                  {hoveredItem === item.name && (
                    <motion.div
                      layoutId="underline"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                    />
                  )}

                  {/* Dropdown */}
                  {hoveredItem === item.name && item.submenu && (
                    <motion.ul
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 w-48 mt-2 bg-white border border-gray-200 shadow-lg rounded-md z-50"
                    >
                      {item.submenu.map((sub, idx) => (
                        <li key={idx}>
                          <a
                            href={sub.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
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

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <a
              href="#contact"
              className="relative group bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-5 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center"
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
    </header>
  );
};
