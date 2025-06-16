import React from "react";
import { motion } from "framer-motion";
import { FaClipboardList, FaAsterisk, FaLightbulb, FaCheck, FaHandshake, FaChartLine, FaUsers } from "react-icons/fa";

const WhyTechista = () => {
  const features = [
    {
      icon: <FaClipboardList className="text-emerald-600 text-xl" />,
      title: "One Stop Destination",
      description: "In this busy world, we all are running behind time. As a customer, everyone needs everything under one roof. With our comprehensive range of products and services, we provide complete solutions with confidence.",
    },
    {
      icon: <FaAsterisk className="text-emerald-600 text-xl" />,
      title: "Expertise",
      description: "We specialize in Web App Development, Mobile App Development, E-commerce Solutions, Branding, SEO, Digital Marketing, and Software Sales with proven industry expertise.",
    },
    {
      icon: <FaLightbulb className="text-emerald-600 text-xl" />,
      title: "Innovation & Ideas",
      description: "Business success depends on transforming ideas into market-ready products. We deliver innovative solutions that help our clients achieve measurable business growth and competitive advantage.",
    },
  ];


  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-20 bg-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-emerald-50/80 to-transparent" />
        <div className="absolute bottom-20 left-20 w-32 h-32 rounded-full bg-gradient-to-r from-gray-500/20 to-emerald-500/20 blur-xl" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-emerald-100 to-transparent blur-lg" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            className="lg:w-1/2 space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-50 rounded-full border border-emerald-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <FaClipboardList className="text-emerald-600" />
              <span className="text-sm font-medium bg-gradient-to-r from-gray-600 to-emerald-600 bg-clip-text text-transparent uppercase tracking-wider">
                Why Choose Techista
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Transforming Businesses Through <span className="bg-gradient-to-r from-gray-600 to-emerald-600 bg-clip-text text-transparent">Digital Excellence</span>
            </motion.h2>

            <motion.p
              className="text-lg text-gray-600 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              We deliver comprehensive IT solutions that drive growth, efficiency, and innovation for businesses worldwide. Our expertise helps clients achieve their strategic objectives with measurable results.
            </motion.p>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-5 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-emerald-100"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div className="flex-shrink-0 mt-1 p-3 bg-emerald-50 rounded-lg border border-emerald-100">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Images */}
          <motion.div
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                className="relative overflow-hidden rounded-2xl shadow-xl group"
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <img
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg"
                  alt="Team collaborating"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm font-medium">Collaborative</p>
                  <p className="text-xl font-bold">Teamwork</p>
                </div>
                <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                  Strategy
                </div>
              </motion.div>

              <motion.div
                className="relative overflow-hidden rounded-2xl shadow-xl group"
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <img
                  src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg"
                  alt="Team meeting"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm font-medium">Strategic</p>
                  <p className="text-xl font-bold">Planning</p>
                </div>
                <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                  Innovation
                </div>
              </motion.div>

              <motion.div
                className="relative overflow-hidden rounded-2xl shadow-xl group"
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <img
                  src="https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg"
                  alt="Team celebrating success"
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyTechista;