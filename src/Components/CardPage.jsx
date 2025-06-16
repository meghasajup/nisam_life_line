import React, { useState } from 'react';
import { FaClock, FaUsers, FaHeadset, FaPaintBrush, FaUserCircle, FaLock, FaSearch, FaLaptopCode } from 'react-icons/fa';

const commitments = [
  {
    icon: <FaPaintBrush className="text-xl" />,
    title: "Client-Centric Approach",
    description: "We prioritize your vision and goals, ensuring the final product aligns with your brand and business needs.",
    color: "border-l-emerald-800",
    details: [
      "Custom solutions tailored to your specific requirements",
      "Regular client feedback sessions",
      "Brand-aligned design philosophy"
    ]
  },
  {
    icon: <FaUsers className="text-xl" />,
    title: "Transparent Communication",
    description: "We keep you informed throughout every stage of development—no surprises, no hidden costs.",
    color: "border-l-emerald-800",
    details: [
      "Dedicated project management portal",
      "Weekly progress reports",
      "Clear pricing structure"
    ]
  },
  {
    icon: <FaClock className="text-xl" />,
    title: "On-Time Delivery",
    description: "We commit to delivering projects within the agreed timeline without compromising on quality.",
    color: "border-l-emerald-800",
    details: [
      "Agile development methodology",
      "Milestone-based delivery",
      "Contingency planning"
    ]
  },
  {
    icon: <FaHeadset className="text-xl" />,
    title: "Scalable & Future-Proof Solutions",
    description: "We build websites and apps that grow with your business and adapt to future technologies.",
    color: "border-l-emerald-800",
    details: [
      "Modular architecture design",
      "Technology roadmap planning",
      "Performance optimization"
    ]
  },
  {
    icon: <FaUserCircle className="text-xl" />,
    title: "User-Centric Design",
    description: "We ensure your site is easy to use, visually appealing, and optimized for an excellent user experience.",
    color: "border-l-emerald-800",
    details: [
      "UX research and testing",
      "Accessibility compliance",
      "Conversion-focused design"
    ]
  },
  {
    icon: <FaLock className="text-xl" />,
    title: "Security Best Practices",
    description: "Your website and user data are protected with modern security protocols and secure coding standards.",
    color: "border-l-emerald-800",
    details: [
      "Regular security audits",
      "Data encryption standards",
      "Compliance with industry regulations"
    ]
  },
  {
    icon: <FaSearch className="text-xl" />,
    title: "SEO-Friendly Code",
    description: "All of our websites are optimized for search engines from the start, helping you rank better and faster.",
    color: "border-l-emerald-800",
    details: [
      "Semantic HTML structure",
      "Performance optimization",
      "SEO metadata strategy"
    ]
  },
  {
    icon: <FaLaptopCode className="text-xl" />,
    title: "Cross-Browser & Device Compatibility",
    description: "We guarantee seamless performance across major browsers and devices.",
    color: "border-l-emerald-800",
    details: [
      "Responsive design testing",
      "Browser compatibility checks",
      "Mobile-first approach"
    ]
  },
];

export const CardPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(null);

  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Subtle animated background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMGMzYTUiIG9wYWNpdHk9Ii4xIj48cGF0aCBkPSJNMjEgM2gydjJIMjF6TTMgMjFoMnYySDN6Ii8+PHBhdGggZD0iTTIyIDdoMnYySDIyek0xMSA3aDJ2MkgxMXpNNyA3aDJ2Mkg3ek0xOCA3aDJ2MkgxOHpNMTQgN2gydjJIMTR6TTMgMTFoMnYySDN6TTMgMTVoMnYySDN6TTMgMTloMnYySDN6TTcgMTFoMnYySDd6TTcgMTVoMnYySDd6TTcgMTloMnYySDd6TTExIDExaDJ2MkgxMXpNMTEgMTVoMnYySDExek0xMSAxOWgydjJIMTF6TTE1IDExaDJ2MkgxNXpNMTUgMTVoMnYySDE1ek0xNSAxOWgydjJIMTV6TTE5IDExaDJ2MkgxOXpNMTkgMTVoMnYySDE5ek0xOSAxOWgydjJIMTl6TTIzIDExaDJ2MkgyM3pNMjMgMTVoMnYySDIzek0yMyAxOWgydjJIMjN6TTI3IDExaDJ2MkgyN3pNMjcgMTVoMnYySDI3ek0yNyAxOWgydjJIMjd6TTMxIDExaDJ2MkgzMXpNMzEgMTVoMnYySDMxek0zMSAxOWgydjJIMzF6TTM1IDExaDJ2MkgzNXpNMzUgMTVoMnYySDM1ek0zNSAxOWgydjJIMzV6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Elegant Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-gray-500 to-emerald-500"></div>
            <span className="bg-gradient-to-r from-gray-500 to-emerald-500 bg-clip-text text-transparent text-sm uppercase">Our Commitments</span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-[#00C3A5]"></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            The <span className="bg-gradient-to-r from-gray-600 to-emerald-500 bg-clip-text text-transparent">Principles</span> That<br />Define Our Work
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            These core commitments guide every project we undertake to deliver exceptional digital experiences
          </p>
        </div>
        
        {/* Enhanced Interactive Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sleek Selection Panel */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-md p-6 h-fit sticky top-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 relative pb-4 after:absolute after:bottom-0 after:left-0 after:w-16 after:h-0.5 after:bg-gradient-to-r from-gray-500 to-emerald-500]">
                Our Guarantees
              </h2>
              <div className="space-y-2">
                {commitments.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    onMouseEnter={() => setIsHovering(index)}
                    onMouseLeave={() => setIsHovering(null)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                      activeIndex === index 
                        ? 'bg-gradient-to-r from-gray-500 to-emerald-500' 
                        : 'hover:bg-gray-50 border-l-4 border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg transition-colors duration-300 ${
                        activeIndex === index ? 'bg-gradient-to-r from-gray-500 to-emerald-500 text-white' 
                        : isHovering === index ? 'bg-gradient-to-r from-gray-500 to-emerald-500 text-[#00A691]' 
                        : 'bg-gray-100 text-[#00A691]'
                      }`}>
                        {item.icon}
                      </div>
                      <div className="text-left">
                        <span className={`font-medium block ${
                          activeIndex === index ? 'text-gray-900' : 'text-gray-700'
                        }`}>{item.title}</span>
                        <span className={`text-xs mt-1 block transition-all duration-300 ${
                          activeIndex === index ? 'text-gray-600 opacity-100' : 'text-gray-500 opacity-0 h-0'
                        }`}>Commitment #{index + 1}</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Polished Detail View */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all duration-500 hover:shadow-lg">
              <div className={`p-8 border-l-8 ${commitments[activeIndex].color} transition-all duration-500`}>
                <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
                  <div className="flex items-center gap-4">
                    <div className={`p-4 rounded-xl ${commitments[activeIndex].color.replace('border-l-', 'bg-')} bg-opacity-10 text-[#00A691]`}>
                      {commitments[activeIndex].icon}
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 leading-tight">{commitments[activeIndex].title}</h2>
                      <div className="text-sm font-medium px-3 py-1 bg-[#00C3A5]/10 text-[#00A691] rounded-full inline-block mt-2">
                        Core Commitment #{activeIndex + 1}
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  {commitments[activeIndex].description}
                </p>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-[#00C3A5]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    How We Deliver Excellence
                  </h3>
                  <ul className="space-y-3">
                    {commitments[activeIndex].details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <div className="flex-shrink-0 mt-1 mr-3 text-[#00C3A5]">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Enhanced CTA Section */}
              <div className="bg-gradient-to-r from-gray-600 to-emerald-500 p-8 relative overflow-hidden">
                <div className="absolute -right-10 -bottom-10 w-32 h-32 rounded-full bg-white opacity-10"></div>
                <div className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-white opacity-5"></div>
                
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-2">Ready to experience our commitments firsthand?</h3>
                    <p className="text-white/90">Let's discuss how we can apply these principles to your next project</p>
                  </div>
                  <a href="/contact">
                    <button className="px-6 py-3 bg-white text-gray-800 font-medium rounded-lg hover:bg-gray-100 transition-all transform hover:-translate-y-0.5 shadow-md hover:shadow-lg whitespace-nowrap flex items-center gap-2">
                      <span>Start Your Project</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </button>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Refined Progress Indicator */}
            <div className="mt-8 flex justify-center">
              <div className="flex gap-2 bg-white p-2 rounded-full shadow-inner border border-gray-100">
                {commitments.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeIndex === index ? 'bg-[#00C3A5] transform scale-125' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to commitment ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};