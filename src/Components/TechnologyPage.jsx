import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiExpress } from 'react-icons/si';

const technologies = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-600 text-5xl mb-2" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-600 text-5xl mb-2" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400 text-5xl mb-2" /> },
  { name: 'React', icon: <FaReact className="text-cyan-400 text-5xl mb-2" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-600 text-5xl mb-2" /> },
  { name: 'Express.js', icon: <SiExpress className="text-gray-800 text-5xl mb-2" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-700 text-5xl mb-2" /> },
  { name: 'MySQL', icon: <SiMysql className="text-blue-700 text-5xl mb-2" /> },
];

export const TechnologyPage = () => {
  return (
    <div className="py-16 px-4 bg-white text-center overflow-hidden">
      <h2 className="text-5xl mb-10 text-[#00C3A5] font-serif">The Tech Behind Our Solutions</h2>

      {/* Scrolling cards container */}
      <div className="overflow-hidden w-full relative p-2">
        <div className="flex animate-scroll-cards whitespace-nowrap">
          {[...technologies, ...technologies].map((tech, index) => (
            <div
              key={index}
              className="w-60 h-40 bg-gray-50 shadow-md rounded-xl flex-shrink-0 m-4 px-4 py-6 flex flex-col justify-center items-center"
>
              {tech.icon}
              <p className="mt-2 text-md font-medium text-gray-700">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Inline style animation */}
      <style>
        {`
          @keyframes scroll-cards {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-scroll-cards {
            animation: scroll-cards 40s linear infinite;
          }
        `}
      </style>
    </div>
  );
};