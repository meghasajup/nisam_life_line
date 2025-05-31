import React, { useRef } from 'react';
import {
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa';

const services = [
  {
    name: 'Mobile App Development',
    image: 'https://icaninfotech.com/wp-content/uploads/2022/11/port-final.png', // Replace with actual image URLs
    description: 'Build robust and user-friendly mobile applications.',
  },
  {
    name: 'Web Development',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYdAdQnrVDOSNpvaWU3ZGrH5gfngFCGZimcQ&s',
    description: 'Create responsive and modern websites and applications.',
  },
  {
    name: 'Digital marketing ',
    image: 'https://www.bigtrunk.co.in/wp-content/uploads/2023/01/Digital-marketing-copy.jpg',
    description: 'Digital marketing is the use of online channels and digital technologies to promote products, services, or brands to reach and engage target audiences.',
  },
  {
    name: 'UI/UX Design',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGA7XCdHJkW4FUjIzeSHetB6X3Kbq-56W6tw&ss',
    description: 'Design beautiful and intuitive user interfaces.',
  },
  {
    name: 'Student project Support',
    image: 'https://thumbs.dreamstime.com/b/colleagues-working-startup-project-office-listening-to-manager-presentation-colleagues-working-startup-project-128930725.jpg',
    description: ' platform that provides resources, guidance, and tools to help students successfully complete their academic projects.',
  },
  {
    name: 'E-commerce Development',
    image: 'https://kwebmaker.com/_next/image/?url=https%3A%2F%2Fmykrishna.kwebmaker.com%2Fpublic%2Fadmin%2Fassets%2Fimages%2Fblog-images%2FThe-Ultimate-Guide-to-Ecommerce-Website-Development-in-2023jpg&w=3840&q=75',
    description: 'E-commerce development involves creating online platforms that enable businesses to sell products or services digitally, including features like product listings, shopping carts, secure payments, and user account management.',
  },
];

export const HelpYouGetStarted = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const scrollContainer = scrollRef.current;
    scrollContainer.scrollBy({ left: direction === 'left' ? -300 : 300, behavior: 'smooth' });
  };

  return (
    <div className="py-16 px-4 bg-white text-center">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-4xl font-serif text-[#00C3A5]">We'll Help You Get Started.</h2>
        <div className="flex gap-3">
          <button
            onClick={() => scroll('left')}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto no-scrollbar gap-4 pt-4 scroll-smooth"
      >
        {services.map((service, index) => (
          <div 
            key={index}
            className="w-[20rem] h-[28rem] bg-gray-50 shadow-md border border-gray-200 rounded-none px-6 py-6 flex flex-col justify-between items-center flex-shrink-0 text-left pb-4 mt-10"
          >
            <img
              src={service.image}
              alt={service.name}
              className="w-24 h-24 object-cover mb-4 rounded-full"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">{service.name}</h3>
            <p className="text-sm text-gray-600 text-center mb-2 line-clamp-4 overflow-hidden">{service.description}</p>
            <button className="flex items-center gap-2 bg-white text-blue-600 border border-blue-600 px-4 py-2 rounded-xl hover:bg-blue-50 transition">
              Learn More<span className="text-lg">→</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
