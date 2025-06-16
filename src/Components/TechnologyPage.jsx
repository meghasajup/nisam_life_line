// HireSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import {
  FaReact, FaVuejs, FaWordpress, FaPython, FaApple, FaJava, FaAndroid,FaHtml5 ,FaCss3Alt ,
  FaAngular ,FaNode
} from 'react-icons/fa';
import {
  SiNextdotjs, SiAngular, SiSvelte, SiGatsby, SiIonic, SiLaravel, SiHexo,SiExpress ,SiMongodb,SiFlask ,SiGraphql ,SiMysql 
} from 'react-icons/si';
import { IoLogoJavascript } from "react-icons/io";
const frameworks = [
  FaHtml5,FaCss3Alt ,IoLogoJavascript ,FaAngular ,SiNextdotjs, FaReact,FaNode, SiExpress ,SiMongodb,FaPython, FaVuejs, FaWordpress,
  SiAngular,SiFlask ,SiGraphql ,SiMysql , FaAndroid,SiLaravel, 
];

export const TechnologyPage = () => {
  return (
   <div className="max-w-7xl mx-auto bg-[#3d543f] rounded-[30px] p-10 text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-10 md:gap-20 mt-10">

      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
        className="max-w-xl"
      >
        <h1 className="text-5xl font-bold mb-6 leading-tight">Our Technology Stack</h1>
        <p className="text-lg text-gray-200 mb-8 leading-relaxed">
  We leverage cutting-edge technologies to build robust and scalable solutions that drive innovation and deliver exceptional user experiences. 
  Our expertise spans across modern frameworks, cloud-native development, API integrations, and responsive design. 
  At Techista, we focus on performance, security, and seamless scalability—ensuring your digital products are future-ready, user-centric, and business-driven.
</p>


       
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}
        className="flex flex-col items-center"
      >
        <h3 className="uppercase text-sm mb-4 tracking-wide">Select from  Frameworks</h3>
        <div className="grid grid-cols-5 gap-5 text-3xl text-gray-100">
          {frameworks.map((Icon, index) => (
            <Icon key={index} className="hover:text-white transition duration-300" />
          ))}
        </div>
      </motion.div>
    </div>
  );
};


