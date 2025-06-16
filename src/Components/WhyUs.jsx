import React from "react";
import { motion } from "framer-motion";
import { FaClipboardList, FaAsterisk, FaLightbulb } from "react-icons/fa";

const WhyTechista = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-start px-6 md:px-20 py-16 bg-white">
      <motion.div
        className="md:w-1/2 space-y-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-gradient-to-r from-[#00C3A5] to-[#00a389] bg-clip-text text-transparent font-semibold uppercase flex items-center gap-2">
          <FaClipboardList className="text-blue-500" />
          Why Techista
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 leading-tight">
          We Deal With The Aspects Of Professional IT Services
        </h2>
        <p className="text-gray-600">
          We offer a complete range of uncompromising quality services all over the world. Techista provides the expertise to help our clients realize their objectives.
        </p>

        {/* Features */}
        <div className="space-y-6">
          {/* One Stop Destination */}
          <div className="flex items-start gap-4">
            <div className="text-blue-500 text-xl">
              <FaClipboardList />
            </div>
            <div>
              <h4 className="font-bold text-lg">One Stop Destination</h4>
              <p className="text-gray-600">
                In this busy world, we all are running behind the time. As a customer, everyone needs to get all the things under one roof. By having a large number of products in our bag, we can confidently say.
              </p>
            </div>
          </div>

          {/* Expertise */}
          <div className="flex items-start gap-4">
            <div className="text-blue-500 text-xl">
              <FaAsterisk />
            </div>
            <div>
              <h4 className="font-bold text-lg">Expertise</h4>
              <p className="text-gray-600">
                We specialize in Web App Development, Mobile App Development, E-commerce, Branding, SEO, Digital Marketing, and Software Sales.
              </p>
            </div>
          </div>

          {/* Innovation & Ideas */}
          <div className="flex items-start gap-4">
            <div className="text-blue-500 text-xl">
              <FaLightbulb />
            </div>
            <div>
              <h4 className="font-bold text-lg">Innovation & Ideas</h4>
              <p className="text-gray-600">
                The success of every company depends on the exploitation of new ideas into the business for creating new and improved products in the market. We strongly believe our clients are happy with the solutions we delivered, helping them progress in their business.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Images */}
      <motion.div
        className="md:w-1/2 grid grid-cols-2 gap-4 mt-10 md:mt-0 relative"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg"
          alt="Team 1"
          className="rounded-xl object-cover w-full h-56 shadow-lg"
        />
        <img
          src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg"
          alt="Team 2"
          className="rounded-xl object-cover w-full h-56 shadow-lg"
        />
        <img
          src="https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg"
          alt="Team 3"
          className="rounded-xl object-cover w-full h-56 shadow-lg col-span-2"
        />
      </motion.div>
    </section>
  );
};

export default WhyTechista;
