import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import mobileAppDev from '../images/App-Development.png'

const services = [
  {
    name: 'Mobile App Development',
    image: mobileAppDev,
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
    <div className="py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#00C3A5]/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0084FF]/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-[#00C3A5] to-[#0084FF] bg-clip-text text-transparent text-sm font-semibold tracking-wider uppercase">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            We'll Help You <span className="text-[#00C3A5] relative">
              Get Started
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#00C3A5] to-[#0084FF] rounded-full opacity-30"></div>
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Our comprehensive services are designed to bring your ideas to life with excellence and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 overflow-hidden hover:shadow-2xl hover:shadow-[#00C3A5]/10 transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02] cursor-pointer"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <div className="p-8 flex flex-col items-center text-center h-full relative">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00C3A5]/5 to-[#0084FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                <div className="relative z-10 w-full flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-[#00C3A5] to-[#0084FF] p-1 mb-6 shadow-lg group-hover:shadow-xl group-hover:shadow-[#00C3A5]/20 transition-all duration-300 group-hover:scale-110">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover rounded-full border-2 border-white"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-[#00C3A5] transition-colors duration-300">
                    {service.name}
                  </h3>

                  <p className="text-gray-600 mb-6 flex-grow leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};