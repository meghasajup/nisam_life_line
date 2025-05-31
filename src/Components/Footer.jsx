import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black text-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
        {/* Services Column */}
        <div className="transform hover:-translate-y-1 transition duration-300">
          <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-blue-500 inline-block">Services</h3>
          <ul className="space-y-3">
            {['Website Development', 'E-Commerce Development', 'Mobile App Development', 
              'Digital Marketing', 'UI/UX Design', 'Software Development', 
              'Web App Development', 'Testing & Quality Analysis', 'Maintenance & Support'].map((service) => (
              <li key={service} className="hover:text-blue-400 transition-colors duration-200 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies Column */}
        <div className="transform hover:-translate-y-1 transition duration-300">
          <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-purple-500 inline-block">Technologies</h3>
          <ul className="space-y-3">
            {['Python Development', 'PHP Development', 'HTML5 Design', 
              'WordPress Development', 'UI Design', 'CRM Development', 
              'Angular JS Development', 'React JS Development', 'Node JS Development',
              'Laravel Development', 'Bootstrap Development', 'jQuery Development'].map((tech) => (
              <li key={tech} className="hover:text-purple-400 transition-colors duration-200 flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                {tech}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-green-500 inline-block">Contact Us</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-blue-300">Email</h4>
              <p className="hover:text-blue-400 transition-colors duration-200">contact@techista.com</p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-300">Phone</h4>
              <p className="hover:text-blue-400 transition-colors duration-200">+1 (123) 456-7890</p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-300">Address</h4>
              <p className="hover:text-blue-400 transition-colors duration-200">123 Tech Street, Kochi, India</p>
            </div>
          </div>
        </div>

        {/* Company Column */}
        <div>
          <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-yellow-500 inline-block">Company</h3>
          <ul className="space-y-3 mb-8">
            {['About Us', 'All Services', 'Portfolio', 'Careers', 'Technologies', 'Contact Us'].map((item) => (
              <li key={item} className="hover:text-yellow-400 transition-colors duration-200">
                <a href="#" className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-pink-500 inline-block">Follow Us</h3>
          <div className="flex space-x-4 mb-8">
            <a href="#" className="text-white hover:text-blue-400 transition-colors duration-300 text-2xl">
              <FaFacebook />
            </a>
            <a href="#" className="text-white hover:text-sky-400 transition-colors duration-300 text-2xl">
              <FaTwitter />
            </a>
            <a href="#" className="text-white hover:text-blue-600 transition-colors duration-300 text-2xl">
              <FaLinkedin />
            </a>
            <a href="#" className="text-white hover:text-pink-500 transition-colors duration-300 text-2xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-white hover:text-gray-400 transition-colors duration-300 text-2xl">
              <FaGithub />
            </a>
          </div>

          <div className="mt-8 border-t border-gray-700 pt-6">
            <p className="text-sm text-gray-400">Copyright © Techista 2025. All rights reserved.</p>
            <p className="mt-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Think Unique, Think Smart®
            </p>
            <div className="flex space-x-2 mt-4">
              <span className="text-xs bg-gray-800 px-2 py-1 rounded">Privacy Policy</span>
              <span className="text-xs bg-gray-800 px-2 py-1 rounded">Terms of Service</span>
              <span className="text-xs bg-gray-800 px-2 py-1 rounded">Cookies</span>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <div className="text-center mt-12">
        <button 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          Back to Top
        </button>
      </div>
    </footer>
  );
};