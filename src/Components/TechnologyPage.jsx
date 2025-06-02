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
    <div className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white text-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Our <span className="text-[#00C3A5]">Technology</span> Stack
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We leverage cutting-edge technologies to build robust and scalable solutions
        </p>

        <div className="relative h-96 md:h-[500px] mb-16">
          {/* Central active technology display */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="w-48 h-48 bg-white rounded-full shadow-xl flex flex-col items-center justify-center p-6 border-4 border-[#00C3A5]">
              <div className={`text-6xl mb-4 ${activeTech.color}`}>
                {activeTech.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800">{activeTech.name}</h3>
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
                  className={`absolute w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-125 hover:shadow-lg ${tech.color}`}
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                  onMouseEnter={() => handleTechHover(tech)}
                >
                  <div className="text-2xl">{tech.icon}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Technology grid for mobile */}
        <div className="md:hidden grid grid-cols-4 gap-4">
          {technologies.slice(0, 8).map((tech, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center"
              onMouseEnter={() => handleTechHover(tech)}
            >
              <div className={`text-3xl mb-2 ${tech.color}`}>{tech.icon}</div>
              <span className="text-xs font-medium text-gray-700">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};