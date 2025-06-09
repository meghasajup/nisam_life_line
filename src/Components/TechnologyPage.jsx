import React, { useState, useEffect } from 'react';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, 
  FaAngular, FaVuejs, FaPython 
} from 'react-icons/fa';
import { 
  SiMongodb, SiMysql, SiExpress, SiDjango, 
  SiFlask, SiGraphql, SiTypescript 
} from 'react-icons/si';

const technologies = [
  { name: 'HTML', icon: <FaHtml5 />, color: 'text-orange-600' },
  { name: 'CSS', icon: <FaCss3Alt />, color: 'text-blue-600' },
  { name: 'JavaScript', icon: <FaJs />, color: 'text-yellow-400' },
  { name: 'TypeScript', icon: <SiTypescript />, color: 'text-blue-500' },
  { name: 'React', icon: <FaReact />, color: 'text-cyan-400' },
  { name: 'Angular', icon: <FaAngular />, color: 'text-red-600' },
  { name: 'Vue', icon: <FaVuejs />, color: 'text-green-500' },
  { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-600' },
  { name: 'Express.js', icon: <SiExpress />, color: 'text-gray-800' },
  { name: 'Python', icon: <FaPython />, color: 'text-blue-400' },
  { name: 'Flask', icon: <SiFlask />, color: 'text-gray-500' },
  { name: 'GraphQL', icon: <SiGraphql />, color: 'text-pink-600' },
  { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-700' },
  { name: 'MySQL', icon: <SiMysql />, color: 'text-blue-700' },
];

export const TechnologyPage = () => {
  // Find React's index and calculate the initial angle to center it
  const reactIndex = technologies.findIndex(tech => tech.name === 'React');
  const initialAngle = 360 - (reactIndex * (360 / technologies.length));
  
  const [angle, setAngle] = useState(initialAngle);
  const [activeTech, setActiveTech] = useState(technologies[reactIndex]);
  const radius = 200; // Radius of the carousel circle

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle(prev => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const handleTechHover = (tech) => {
    setActiveTech(tech);
  };

  return (
    <div className="py-20 px-4 bg-gradient-to-br from-slate-50 via-white to-slate-100 text-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#00C3A5]/5 to-transparent rounded-full blur-3xl -translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#00C3A5]/5 to-transparent rounded-full blur-3xl translate-x-48 translate-y-48"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-6 leading-tight">
            Our <span className="bg-gradient-to-r from-[#00C3A5] to-[#00a389] bg-clip-text text-transparent">Technology</span> Stack
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00C3A5] to-[#00a389] mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed font-medium">
            We leverage cutting-edge technologies to build robust and scalable solutions that drive innovation and deliver exceptional user experiences
          </p>
        </div>

        <div className="relative h-96 md:h-[500px] mb-20">
          {/* Central active technology display */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="w-56 h-56 bg-white/90 backdrop-blur-sm rounded-full shadow-2xl flex flex-col items-center justify-center p-8 border-4 border-[#00C3A5] relative group">
              {/* Rotating border effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00C3A5] via-[#00a389] to-[#00C3A5] opacity-0 group-hover:opacity-20 transition-opacity duration-500 animate-spin"></div>
              
              <div className={`text-7xl mb-6 ${activeTech.color} transform transition-all duration-500 group-hover:scale-110 relative z-10`}>
                {activeTech.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 relative z-10">{activeTech.name}</h3>
              
              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-full bg-[#00C3A5]/10 blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Circular carousel */}
          <div className="absolute inset-0 flex items-center justify-center">
            {technologies.map((tech, index) => {
              const itemAngle = (index * (360 / technologies.length) + angle) % 360;
              const radian = (itemAngle * Math.PI) / 180;
              const x = radius * Math.cos(radian);
              const y = radius * Math.sin(radian);

              return (
                <div
                  key={index}
                  className={`absolute w-20 h-20 bg-white/95 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center cursor-pointer transition-all duration-500 hover:scale-125 hover:shadow-2xl hover:bg-white group border border-gray-100/50 ${tech.color}`}
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                  onMouseEnter={() => handleTechHover(tech)}
                >
                  <div className="text-3xl transform transition-transform duration-300 group-hover:rotate-12">{tech.icon}</div>
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00C3A5]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              );
            })}
          </div>

          {/* Orbital ring decoration */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[440px] h-[440px] border border-dashed border-[#00C3A5]/20 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Technology grid for mobile */}
        <div className="md:hidden grid grid-cols-4 gap-6 px-2">
          {technologies.slice(0, 8).map((tech, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg flex flex-col items-center border border-gray-100/50 hover:shadow-xl hover:scale-105 transition-all duration-300 group"
              onMouseEnter={() => handleTechHover(tech)}
            >
              <div className={`text-4xl mb-3 ${tech.color} transform transition-transform duration-300 group-hover:scale-110`}>{tech.icon}</div>
              <span className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{tech.name}</span>
              
              {/* Mobile hover effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00C3A5]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className="mt-16 flex justify-center">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-[#00C3A5] rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-[#00C3A5]/60 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
            <div className="w-3 h-3 bg-[#00C3A5]/30 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
          </div>
        </div>
      </div>
    </div>
  );
};