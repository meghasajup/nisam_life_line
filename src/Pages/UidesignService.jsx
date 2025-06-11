import React, { useState } from 'react';
import { motion } from 'framer-motion';
import UiServicesSection from '../Components/UiServiceSection';
import UiWhyChooseSection from '../Components/UiWhyChooseUs';
import UiFAQSection from '../Components/UiFaq';

const UIDesignService = () => {
  // State for FAQ section
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Design expertise
  const expertise = [
    {
      title: "Mobile App Design",
      description: "Designing intuitive mobile experiences for iOS and Android platforms.",
      icon: "📱"
    },
    {
      title: "Web Interface Design",
      description: "Creating responsive web interfaces with optimal user experiences.",
      icon: "💻"
    },
    {
      title: "Interaction Design",
      description: "Designing meaningful interactions that delight users and enhance usability.",
      icon: "🔄"
    },
    {
      title: "User Testing",
      description: "Conducting usability tests to validate designs and identify improvement areas.",
      icon: "🧪"
    },
    {
      title: "Accessibility Design",
      description: "Creating inclusive designs that work for users of all abilities.",
      icon: "♿"
    },
    {
      title: "Design Strategy",
      description: "Developing comprehensive design strategies aligned with business goals.",
      icon: "🧭"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  const slideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7
      }
    }
  };

  const floatingAnimation = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-800">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full opacity-40 animate-ping"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-emerald-300 rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute bottom-40 left-16 w-1 h-1 bg-gray-300 rounded-full opacity-50 animate-ping"></div>
          <div className="absolute bottom-20 right-20 w-2 h-2 bg-emerald-300 rounded-full opacity-40 animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-center lg:text-left"
            >
              <motion.div
                className="inline-block bg-gradient-to-r from-gray-500 to-emerald-500 text-white px-6 py-2 rounded-full text-sm font-medium mb-6"
                variants={slideUp}
              >
                ✨ Leading UI/UX Design Studio
              </motion.div>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                variants={slideUp}
              >
                Transform Your
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent"> Digital Experience </span>
                with Design
              </motion.h1>

              <motion.p
                className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed"
                variants={slideUp}
              >
                We create intuitive, beautiful, and user-centered interfaces that drive engagement, conversions, and deliver exceptional user experiences.
              </motion.p>

              <motion.div
                className="flex items-center justify-center lg:justify-start space-x-6 text-gray-300"
                variants={slideUp}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <span className="text-sm">User-Centered</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <span className="text-sm">Data-Driven</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center relative"
            >
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-gray-500 to-emerald-500 rounded-3xl blur opacity-75 animate-pulse"></div>

                {/* Main card */}
                <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl w-full max-w-md border border-white/20">
                  <div className="bg-gradient-to-r from-gray-500 to-emerald-500 p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-16 -translate-y-16"></div>
                    <div className="relative z-10">
                      <h3 className="text-white text-xl font-bold mb-2">TechIsta Design Studio</h3>
                      <p className="text-emerald-200 text-sm">Premium Digital Experiences</p>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="relative rounded-2xl overflow-hidden mb-6 group">
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <img
                        src="https://img.freepik.com/free-photo/top-view-nutritional-counter-app-concept_23-2149880602.jpg"
                        alt="UI Design Showcase"
                        className="w-full h-48 object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <p className="text-sm font-medium">UI Design Mockup</p>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-6 text-center">Transforming ideas into powerful digital experiences</p>

                    <div className="grid grid-cols-3 gap-3">
                      <div className="group cursor-pointer">
                        <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-50 p-3 hover:from-emerald-100 hover:to-teal-100 transition-all duration-300">
                          <img
                            src="https://cdn.dribbble.com/userupload/16734509/file/original-5a0621b7a943fc636554615a823aa49d.png"
                            alt="Mobile UI"
                            className="w-full h-12 object-cover rounded-lg transform group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <p className="text-xs text-gray-600 mt-2 text-center">Mobile UI</p>
                      </div>

                      <div className="group cursor-pointer">
                        <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-teal-50 to-cyan-50 p-3 hover:from-teal-100 hover:to-cyan-100 transition-all duration-300">
                          <img
                            src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/84abf4184403667.6551a930b3b2b.jpg"
                            alt="Dashboard"
                            className="w-full h-12 object-cover rounded-lg transform group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-teal-600/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <p className="text-xs text-gray-600 mt-2 text-center">Dashboard</p>
                      </div>

                      <div className="group cursor-pointer">
                        <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-emerald-50 to-green-50 p-3 hover:from-emerald-100 hover:to-green-100 transition-all duration-300">
                          <img
                            src="https://versacreative.com/wp-content/uploads/VC_March_3_Blog_Banner-1200x900.png"
                            alt="Components"
                            className="w-full h-12 object-cover rounded-lg transform group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <p className="text-xs text-gray-600 mt-2 text-center">Components</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>




      {/* Introduction */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-gray-50 to-emerald-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-gray-100 to-emerald-100 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-emerald-100 to-gray-100 rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Content Section */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true }}
              className="space-y-8"
            >

              {/* Main Heading */}
              <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                variants={slideUp}
              >
                <span className="text-gray-900">Leading </span>
                <span className="bg-gradient-to-r from-gray-600 via-emerald-600 to-gray-600 bg-clip-text text-transparent">
                  UI/UX Design
                </span>
                <br />
                <span className="text-gray-900">Agency </span>
                <span className="relative">
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
                </span>
              </motion.h2>

              {/* Description */}
              <motion.div
                className="space-y-6"
                variants={slideUp}
              >
                <p className="text-xl text-gray-600 leading-relaxed">
                  At our core, we strive to create digital experiences that are not only
                  <span className="font-semibold text-gray-600"> visually stunning </span>
                  but also
                  <span className="font-semibold text-emerald-600"> intuitive and user-friendly</span>. We combine creativity with strategic thinking to design interfaces that users love and businesses benefit from.
                </p>

                <p className="text-lg text-gray-600 leading-relaxed">
                  Our human-centered approach ensures that every design decision is backed by research and focused on solving real user problems while achieving business objectives.
                </p>
              </motion.div>
            </motion.div>

            {/* Images Section */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Main container with improved layout */}
              <div className="relative grid grid-cols-12 grid-rows-12 gap-4 h-[600px]">
                {/* Large featured image */}
                <motion.div
                  variants={imageVariants}
                  className="col-span-7 row-span-7 relative group overflow-hidden rounded-3xl shadow-2xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-500/20 to-emerald-500/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img
                    src="https://img.freepik.com/free-photo/top-view-nutritional-counter-app-concept_23-2149880602.jpg"
                    alt="Mobile UI Design"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-4 left-4 z-20">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2">
                      <p className="text-sm font-semibold text-gray-800">Mobile UI Design</p>
                    </div>
                  </div>
                </motion.div>

                {/* Top right image */}
                <motion.div
                  variants={imageVariants}
                  className="col-span-5 row-span-4 relative group overflow-hidden rounded-2xl shadow-lg ml-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-500/20 to-emerald-500/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img
                    src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/84abf4184403667.6551a930b3b2b.jpg"
                    alt="Dashboard Design"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 z-20">
                    <div className="bg-emerald-500 text-white rounded-full px-3 py-1 text-xs font-semibold">
                      Dashboard
                    </div>
                  </div>
                </motion.div>

                {/* Bottom left image */}
                <motion.div
                  variants={imageVariants}
                  className="col-span-4 row-span-4 relative group overflow-hidden rounded-2xl shadow-lg mt-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-gray-500/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img
                    src="https://versacreative.com/wp-content/uploads/VC_March_3_Blog_Banner-1200x900.png"
                    alt="Web Components"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-3 left-3 z-20">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                      <p className="text-xs font-semibold text-gray-800">Components</p>
                    </div>
                  </div>
                </motion.div>

                {/* Bottom right image */}
                <motion.div
                  variants={imageVariants}
                  className="col-span-8 row-span-4 relative group overflow-hidden rounded-2xl shadow-lg ml-2 mt-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-500/20 to-emerald-500/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img
                    src="https://www.datameer.com/wp-content/uploads/2019/12/Data-Vizualisation.png"
                    alt="Data Visualization"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 z-20">
                    <div className="bg-gradient-to-r from-gray-500 to-emerald-500 text-white rounded-full px-3 py-1 text-xs font-semibold">
                      Data Visualization
                    </div>
                  </div>
                </motion.div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-gray-400 to-emerald-400 rounded-full opacity-60 animate-bounce"></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-emerald-400 to-gray-400 rounded-full opacity-40 animate-pulse"></div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-8 -left-8 w-24 h-24 border-2 border-dashed border-gray-300 rounded-full opacity-30"></div>
              <div className="absolute -bottom-12 -right-12 w-32 h-32 border-2 border-dashed border-emerald-300 rounded-full opacity-20"></div>
            </motion.div>
          </div>
        </div>
      </div>


      {/* Services */}
      <UiServicesSection />


      {/* Why Choose Us */}
      <UiWhyChooseSection />

      {/* Expertise */}
      {/* Expertise */}
      <div className="py-20 bg-gradient-to-br from-gray-50 via-white to-emerald-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-emerald-100 to-gray-100 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-br from-gray-100 to-emerald-100 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-emerald-200 to-gray-200 rounded-full blur-3xl opacity-10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-block bg-gradient-to-r from-gray-500 to-emerald-500 text-white px-6 py-2 rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              ✨ Design Excellence
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our Design
              <span className="bg-gradient-to-r from-gray-600 via-emerald-600 to-gray-600 bg-clip-text text-transparent"> Expertise</span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We combine cutting-edge design principles with user-centered thinking to create
              digital experiences that drive results and delight users.
            </p>
          </motion.div>

          {/* Expertise Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
          >
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-500/5 to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon container */}
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gray-100 to-emerald-100 rounded-2xl mb-6 group-hover:from-gray-200 group-hover:to-emerald-200 transition-all duration-300">
                    <div className="text-3xl transform group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {item.description}
                  </p>

                  {/* Decorative bottom border */}
                  <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-gray-200 via-emerald-200 to-gray-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-emerald-400 to-gray-400 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-300 animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-br from-gray-400 to-emerald-400 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-300 animate-ping"></div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom decorative element */}
          <motion.div
            className="flex justify-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 text-gray-400">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* FAQ */}
      <UiFAQSection />
    </div >
  );
};

export default UIDesignService;