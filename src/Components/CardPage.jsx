import React from 'react';
import { FaClock, FaUsers, FaHeadset, FaPaintBrush, FaUserCircle, FaLock, FaSearch, FaLaptopCode } from 'react-icons/fa';

export const cards = [
  {
    icon: <FaPaintBrush className="text-4xl text-blue-500 mb-4" />,
    title: "Client-Centric Approach",
    description: "We prioritize your vision and goals, ensuring the final product aligns with your brand and business needs.",
  },
  {
    icon: <FaUsers className="text-4xl text-green-500 mb-4" />,
    title: "Transparent Communication",
    description: "We keep you informed throughout every stage of development—no surprises, no hidden costs.",
  },
  {
    icon: <FaClock className="text-4xl text-yellow-500 mb-4" />,
    title: "On-Time Delivery",
    description: "We commit to delivering projects within the agreed timeline without compromising on quality.",
  },
  {
    icon: <FaHeadset className="text-4xl text-purple-500 mb-4" />,
    title: "Scalable & Future-Proof Solutions",
    description: "We build websites and apps that grow with your business and adapt to future technologies.",
  },
  {
    icon: <FaUserCircle className="text-4xl text-purple-500 mb-4" />,
    title: "User-Centric Design",
    description: "We ensure your site is easy to use, visually appealing, and optimized for an excellent user experience.",
  },
  {
    icon: <FaLock className="text-4xl text-purple-500 mb-4" />,
    title: "Security Best Practices",
    description: "Your website and user data are protected with modern security protocols and secure coding standards.",
  },
  {
    icon: <FaSearch className="text-4xl text-purple-500 mb-4" />,
    title: "SEO-Friendly Code",
    description: "All of our websites are optimized for search engines from the start, helping you rank better and faster.",
  },
  {
    icon: <FaLaptopCode className="text-4xl text-purple-500 mb-4" />,
    title: "Cross-Browser & Device Compatibility",
    description: "We guarantee seamless performance across major browsers and devices."
  },
];

export const CardPage = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#00C3A5] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#00C3A5] opacity-5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <div className="w-20 h-1 bg-[#00C3A5] mx-auto mb-6 rounded-full"></div>
            <h2 className="text-4xl lg:text-5xl text-[#00C3A5] font-serif mb-4 leading-tight">
              <span className='text-black text-4xl lg:text-5xl'>Our</span> Commitments <span className='text-black text-4xl lg:text-5xl'>&</span> Guarantees
            </h2>
            <div className="w-20 h-1 bg-[#00C3A5] mx-auto mt-6 rounded-full"></div>
          </div>
          <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            We stand behind our work with these core promises that drive everything we do
          </p>
        </div>
        
        {/* Enhanced Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center border border-gray-100 hover:border-[#00C3A5]/20 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Card background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon container with enhanced styling */}
              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gray-50 rounded-2xl group-hover:bg-white group-hover:shadow-md transition-all duration-300">
                    {React.cloneElement(card.icon, {
                      className: card.icon.props.className + " transform group-hover:scale-110 transition-transform duration-300"
                    })}
                  </div>
                </div>
                
                {/* Enhanced title */}
                <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-[#00C3A5] transition-colors duration-300 leading-tight">
                  {card.title}
                </h3>
                
                {/* Enhanced description */}
                <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300">
                  {card.description}
                </p>
              </div>
              
              {/* Decorative accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00C3A5] to-[#00A691] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl"></div>
            </div>
          ))}
        </div>
        
        {/* Optional bottom accent */}
        <div className="text-center mt-16">
          <div className="inline-block w-32 h-1 bg-gradient-to-r from-transparent via-[#00C3A5] to-transparent rounded-full"></div>
        </div>
      </div>
    </div>
  );
};