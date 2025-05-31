
import React from 'react';
import { FaClock, FaUsers, FaHeadset, FaPaintBrush, FaUserCircle, FaLock, FaSearch, FaLaptopCode  } from 'react-icons/fa';

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
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl text-[#00C3A5] font-serif">Our Commitments & Guarantees</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-center"
            >
             <div className="flex justify-center">
      {card.icon}
    </div>
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


