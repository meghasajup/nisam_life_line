import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-800  text-white py-20 px-4 md:px-8">
      {/* bg-gradient-to-r from-blue-500 via-purple-500 to-blue-800 */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
        {/* Services Column */}
        <div className="transform hover:-translate-y-1 transition duration-300">
          <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-blue-500 inline-block">
            Services
          </h3>

          <div className="space-y-3">
            <div>
              <a href="/WebDevelopmentService" className="hover:text-blue-400 transition-colors duration-200 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Website Development
              </a>
            </div>
            <div>
              <a href="/EcommerceDevelopment" className="hover:text-blue-400 transition-colors duration-200 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                E-Commerce Development
              </a>
            </div>
            <div>
              <a href="/MobileDevelopment" className="hover:text-blue-400 transition-colors duration-200 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Mobile App Development
              </a>
            </div>
            <div>
              <a href="#" className="hover:text-blue-400 transition-colors duration-200 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Digital Marketing
              </a>
            </div>
            <div>
              <a href="/UIDesignService" className="hover:text-blue-400 transition-colors duration-200 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                UI/UX Design
              </a>
            </div>
            <div>
              <a href="#" className="hover:text-blue-400 transition-colors duration-200 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Software Development
              </a>
            </div>
            <div>
              <a href="" className="hover:text-blue-400 transition-colors duration-200 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Web App Development
              </a>
            </div>
            <div>
              <a href="/TestingQualityAnalysis" className="hover:text-blue-400 transition-colors duration-200 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Testing & Quality Analysis
              </a>
            </div>
            <div>
              <a href="/MaintenanceSupport" className="hover:text-blue-400 transition-colors duration-200 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Maintenance & Support
              </a>
            </div>
          </div>
        </div>


        {/* Technologies Column */}
        <a href="/Technologies" className="block">
          <div className="transform hover:-translate-y-1 transition duration-300">
            <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-purple-500 inline-block">Technologies</h3>
            <ul className="space-y-3">
              {['Flutter Development', 'PHP Development', 'HTML5 Design',
                'WordPress Development', 'UI Design', 'CRM Development',
                'Angular JS Development', 'React JS Development', 'Node JS Development',
                'Laravel Development', 'Bootstrap Development',].map((tech) => (
                  <li key={tech} className="hover:text-purple-400 transition-colors duration-200 flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    {tech}
                  </li>
                ))}
            </ul>
          </div>
        </a>

        {/* Contact Column */}
        <div>
          <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-green-500 inline-block">Contact Us</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-blue-100">Email</h4>
              <p className="hover:text-blue-400 transition-colors duration-200">techistasolutions@gmail.com</p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-100">Phone</h4>
              <p className="hover:text-blue-400 transition-colors duration-200">+91 9400440686</p>
              <p className="hover:text-blue-400 transition-colors duration-200">+91 8921703086</p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-100">Address</h4>
              <p className="hover:text-blue-400 transition-colors duration-200"> swaschi cross raod ,<br/>shantinagar banglore-560027</p>
            </div>
          </div>
        </div>

        {/* Company Column */}
        <div>
          <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-yellow-500 inline-block">Company</h3>
          <ul className="space-y-3 mb-8">
            <li className="hover:text-yellow-400 transition-colors duration-200">
              <a href="/About" className="flex items-center">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                About Us
              </a>
            </li>
            <li className="hover:text-yellow-400 transition-colors duration-200">
              <a href="#services" className="flex items-center">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                All Services
              </a>
            </li>
            <li className="hover:text-yellow-400 transition-colors duration-200">
              <a href="/" className="flex items-center">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                Portfolio
              </a>
            </li>
            <li className="hover:text-yellow-400 transition-colors duration-200">
              <a href="/Technologies" className="flex items-center">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                Technologies
              </a>
            </li>
            <li className="hover:text-yellow-400 transition-colors duration-200">
              <a href="/contact" className="flex items-center">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                Contact Us
              </a>
            </li>
          </ul>

          <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-pink-500 inline-block">Follow Us</h3>
          <div className="flex space-x-4 mb-8">
            <a href="https://www.instagram.com/techista_solutions?utm_source=qr&igsh=MXB4Z2NucG9zZHE5MQ==" className="text-white hover:text-blue-400 transition-colors duration-300 text-2xl">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/techista_solutions?utm_source=qr&igsh=MXB4Z2NucG9zZHE5MQ==" className="text-white hover:text-sky-400 transition-colors duration-300 text-2xl">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/techista_solutions?utm_source=qr&igsh=MXB4Z2NucG9zZHE5MQ==" className="text-white hover:text-blue-600 transition-colors duration-300 text-2xl">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/techista_solutions?utm_source=qr&igsh=MXB4Z2NucG9zZHE5MQ%3D%3D" className="text-white hover:text-pink-500 transition-colors duration-300 text-2xl">
              <FaInstagram />
            </a>
            <a href="https://github.com/techistasolutions" className="text-white hover:text-gray-400 transition-colors duration-300 text-2xl">
              <FaGithub />
            </a>
          </div>

          <div className="mt-8 border-t border-gray-700 pt-6">
            <p className="text-sm text-gray-600">Copyright © Techista 2025. All rights reserved.</p>
            <p className="mt-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500">
              Think Unique, Think Smart®
            </p>
            {/* <div className="flex space-x-2 mt-4">
              <span className="text-xs bg-gray-800 px-2 py-1 rounded">Privacy Policy</span>
              <span className="text-xs bg-gray-800 px-2 py-1 rounded">Terms of Service</span>
              <span className="text-xs bg-gray-800 px-2 py-1 rounded">Cookies</span>
            </div> */}
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <div className="text-center mt-12">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          Back to Top
        </button>
      </div>
    </footer>
  );
};