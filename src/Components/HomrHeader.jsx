import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import Logo from '../images/blacked.png';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/About' },
  { name: 'Technologies', href: '/Technologies' },
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
    ],
  },
  { name: 'Contact', href: '/contact' },
];

export const HomeHeader = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
  style={{ zIndex: 9999, pointerEvents: 'auto' }}
  className={`absolute top-0 left-0 w-full ${
    isScrolled ? 'bg-black bg-opacity-70 backdrop-blur-sm' : 'bg-transparent'
  } transition-colors duration-300`}
>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0"
            >
              <NavLink to="/" className="flex items-center h-full">
                <img
                  src={Logo}
                  className="h-14 w-auto text-white"
                  alt="Techista Logo"
                />
              </NavLink>
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center cursor-pointer h-full relative z-30">
            <ul className="flex space-x-4 h-full">
              {navItems.map((item) => (
                <li
                  key={item.name}
                  className="relative h-full flex items-center"
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <NavLink
                    to={item.href || '#'}
                    className={`relative z-30 px-3 lg:px-4 py-2 flex items-center text-sm font-medium transition-colors duration-300 ${
                      hoveredItem === item.name
                        ? 'text-gray-100 hover:text-gray-200'
                        : 'text-white'
                    }`}
                  >
                    {item.name}
                    {item.submenu && (
                      <FaChevronDown className="ml-1 text-xs opacity-70" />
                    )}
                  </NavLink>

                  {/* Underline animation */}
                  {hoveredItem === item.name && !item.submenu && (
                    <motion.div
                      layoutId="underline"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-300"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                    />
                  )}

                  {/* Dropdown menu */}
                  {hoveredItem === item.name && item.submenu && (
                    <motion.ul
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 w-56 mt-2 bg-white border border-gray-200 shadow-lg rounded-md z-50  pointer-events-auto"
                    >
                      {item.submenu.map((sub, idx) => (
                        <li key={idx}>
                          <NavLink
                            to={sub.href}
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                          >
                            {sub.name}
                          </NavLink>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile menu toggle */}
          <div className="md:hidden z-40">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-500 hover:text-gray-600 focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 inset-x-0 bg-white shadow-lg z-50 pointer-events-auto">
            <div className="pt-2 pb-4 space-y-1">
              {navItems.map((item) =>
                item.submenu ? (
                  item.submenu.map((sub, idx) => (
                    <NavLink
                      key={idx}
                      to={sub.href}
                      className={({ isActive }) =>
                        `block px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors ${
                          isActive ? 'bg-gray-100 text-blue-600' : ''
                        }`
                      }
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {sub.name}
                    </NavLink>
                  ))
                ) : (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive }) =>
                      `block px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors ${
                        isActive ? 'bg-gray-100 text-blue-600' : ''
                      }`
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                )
              )}

              <button className="w-full mx-4 mt-2 px-6 py-2 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-medium rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Book Now
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
