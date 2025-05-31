import React from 'react';
import { motion } from 'framer-motion';

export const Intro = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#f0fdfa] to-[#ccfbf1] py-20 px-6 md:px-16 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#00C3A5] mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-[#00a5c3] mix-blend-multiply filter blur-xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block bg-[#00C3A5] bg-opacity-10 text-[#00C3A5] px-4 py-2 rounded-full text-sm font-medium mb-6">
                Innovate • Transform • Grow
              </span>
              <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Building Tomorrow's <span className="text-[#00C3A5]">Technology</span> Today
              </motion.h2>
              
              <motion.p 
                className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                At <span className="font-semibold text-[#00C3A5]">TechIsta</span>, we're passionate about driving innovation through cutting-edge technology solutions that transform businesses.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <button className="bg-[#00C3A5] hover:bg-[#00a58f] text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#00C3A5]/30">
                  Discover Our Solutions
                </button>
              </motion.div>
            </motion.div>
          </div>
          
          <motion.div 
            className="hidden md:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full border-4 border-[#00C3A5] rounded-2xl"></div>
              <div className="relative bg-white p-4 rounded-2xl shadow-2xl overflow-hidden">
                <div className="bg-gray-100 rounded-lg overflow-hidden">
                  <div className="h-8 bg-gray-200 flex items-center px-3">
                    <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="p-4">
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div key={item} className="h-4 bg-gradient-to-r from-[#00C3A5] to-[#00a5c3] rounded opacity-80"></div>
                      ))}
                    </div>
                    <div className="h-32 bg-gradient-to-br from-[#00C3A5] to-[#00a5c3] rounded-lg flex items-center justify-center">
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};