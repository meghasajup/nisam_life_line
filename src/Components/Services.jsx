import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const services = [
  {
    name: 'Mobile App Development',
    image: 'https://icaninfotech.com/wp-content/uploads/2022/11/port-final.png',
    description: 'Build robust and user-friendly mobile applications.',
  },
  {
    name: 'Web Development',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYdAdQnrVDOSNpvaWU3ZGrH5gfngFCGZimcQ&s',
    description: 'Create responsive and modern websites and applications.',
  },
  {
    name: 'Digital Marketing',
    image: 'https://www.bigtrunk.co.in/wp-content/uploads/2023/01/Digital-marketing-copy.jpg',
    description: 'Digital marketing is the use of online channels and digital technologies to promote products, services, or brands to reach and engage target audiences.',
  },
  {
    name: 'UI/UX Design',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGA7XCdHJkW4FUjIzeSHetB6X3Kbq-56W6tw&ss',
    description: 'Design beautiful and intuitive user interfaces.',
  },
  {
    name: 'Student Project Support',
    image: 'https://thumbs.dreamstime.com/b/colleagues-working-startup-project-office-listening-to-manager-presentation-colleagues-working-startup-project-128930725.jpg',
    description: 'Platform that provides resources, guidance, and tools to help students successfully complete their academic projects.',
  },
  {
    name: 'E-commerce Development',
    image: 'https://kwebmaker.com/_next/image/?url=https%3A%2F%2Fmykrishna.kwebmaker.com%2Fpublic%2Fadmin%2Fassets%2Fimages%2Fblog-images%2FThe-Ultimate-Guide-to-Ecommerce-Website-Development-in-2023jpg&w=3840&q=75',
    description: 'E-commerce development involves creating online platforms that enable businesses to sell products or services digitally.',
  },
];

export const HelpYouGetStarted = () => {
  return (
    <div className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            We'll Help You <span className="text-[#00C3A5]">Get Started</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our comprehensive services are designed to bring your ideas to life with excellence and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="p-8 flex flex-col items-center text-center h-full">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-[#00C3A5] to-[#0084FF] p-1 mb-6">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover rounded-full border-2 border-white"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.name}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
               
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};