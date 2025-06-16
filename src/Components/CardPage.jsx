import React, { useState } from 'react';
import { FaClock, FaUsers, FaHeadset, FaPaintBrush, FaUserCircle, FaLock, FaSearch, FaLaptopCode } from 'react-icons/fa';

const commitments = [
  {
    icon: <FaPaintBrush />,
    title: "Client-Centric Approach",
    description: "We prioritize your vision and goals, ensuring the final product aligns with your brand and business needs.",
    color: "border-l-blue-500"
  },
  {
    icon: <FaUsers />,
    title: "Transparent Communication",
    description: "We keep you informed throughout every stage of development—no surprises, no hidden costs.",
    color: "border-l-green-500"
  },
  {
    icon: <FaClock />,
    title: "On-Time Delivery",
    description: "We commit to delivering projects within the agreed timeline without compromising on quality.",
    color: "border-l-yellow-500"
  },
  {
    icon: <FaHeadset />,
    title: "Scalable & Future-Proof Solutions",
    description: "We build websites and apps that grow with your business and adapt to future technologies.",
    color: "border-l-purple-500"
  },
  {
    icon: <FaUserCircle />,
    title: "User-Centric Design",
    description: "We ensure your site is easy to use, visually appealing, and optimized for an excellent user experience.",
    color: "border-l-pink-500"
  },
  {
    icon: <FaLock />,
    title: "Security Best Practices",
    description: "Your website and user data are protected with modern security protocols and secure coding standards.",
    color: "border-l-red-500"
  },
  {
    icon: <FaSearch />,
    title: "SEO-Friendly Code",
    description: "All of our websites are optimized for search engines from the start, helping you rank better and faster.",
    color: "border-l-emerald-500"
  },
  {
    icon: <FaLaptopCode />,
    title: "Cross-Browser & Device Compatibility",
    description: "We guarantee seamless performance across major browsers and devices.",
    color: "border-l-violet-500"
  },
];

export const CardPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Geometric background pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMGMzYTUiIG9wYWNpdHk9Ii4xIj48cGF0aCBkPSJNMjEgM2gydjJIMjF6TTMgMjFoMnYySDN6Ii8+PHBhdGggZD0iTTIyIDdoMnYySDIyek0xMSA3aDJ2MkgxMXpNNyA3aDJ2Mkg3ek0xOCA3aDJ2MkgxOHpNMTQgN2gydjJIMTR6TTMgMTFoMnYySDN6TTMgMTVoMnYySDN6TTMgMTloMnYySDN6TTcgMTFoMnYySDd6TTcgMTVoMnYySDd6TTcgMTloMnYySDd6TTExIDExaDJ2MkgxMXpNMTEgMTVoMnYySDExek0xMSAxOWgydjJIMTF6TTE1IDExaDJ2MkgxNXpNMTUgMTVoMnYySDE1ek0xNSAxOWgydjJIMTV6TTE5IDExaDJ2MkgxOXpNMTkgMTVoMnYySDE5ek0xOSAxOWgydjJIMTl6TTIzIDExaDJ2MkgyM3pNMjMgMTVoMnYySDIzek0yMyAxOWgydjJIMjN6TTI3IDExaDJ2MkgyN3pNMjcgMTVoMnYySDI3ek0yNyAxOWgydjJIMjd6TTMxIDExaDJ2MkgzMXpNMzEgMTVoMnYySDMxek0zMSAxOWgydjJIMzF6TTM1IDExaDJ2MkgzNXpNMzUgMTVoMnYySDM1ek0zNSAxOWgydjJIMzV6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Modern Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-[#00C3A5]"></div>
            <span className="text-[#00C3A5] font-medium tracking-wide">OUR PROMISES</span>
            <div className="w-12 h-0.5 bg-[#00C3A5]"></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The <span className="text-[#00C3A5]">Commitments</span> Behind<br />Our Work
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These core principles guide every project we undertake to ensure exceptional results
          </p>
        </div>
        
        {/* Interactive Timeline Layout */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Selection Panel */}
          <div className="lg:w-1/3 bg-white rounded-2xl shadow-lg p-6 h-fit sticky top-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Guarantees</h2>
            <div className="space-y-3">
              {commitments.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                    activeIndex === index 
                      ? 'bg-gradient-to-r from-gray-500 to-emerald-500 shadow-sm' 
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg ${
                      activeIndex === index ? 'bg-[#00C3A5] text-white' : 'bg-gray-100 text-[#00C3A5]'
                    }`}>
                      {item.icon}
                    </div>
                    <span className={`font-medium ${
                      activeIndex === index ? 'text-gray-900' : 'text-gray-700'
                    }`}>{item.title}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          {/* Detail View */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className={`p-8 border-l-8 ${commitments[activeIndex].color} transition-all duration-500`}>
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-4 bg-gray-100 rounded-xl text-[#00C3A5]">
                      {commitments[activeIndex].icon}
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">{commitments[activeIndex].title}</h2>
                  </div>
                  <div className="text-xs font-medium px-3 py-1 bg-[#00C3A5]/10 text-[#00A691] rounded-full">
                    Commitment #{activeIndex + 1}
                  </div>
                </div>
                
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  {commitments[activeIndex].description}
                </p>
                
                <div className="mt-10 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">How we deliver:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3 text-[#00C3A5]">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-600">Regular progress updates and review sessions</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3 text-[#00C3A5]">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-600">Clear documentation at every phase</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3 text-[#00C3A5]">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-600">Post-launch support and optimization</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-gray-500 to-emerald-500 p-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">Ready to experience our commitments?</h3>
                    <p className="text-white/90 mt-1">Let's discuss how we can apply these principles to your project</p>
                  </div>
                  <a href="/contact">
                  <button className="px-6 py-3 bg-white text-[#00A691] font-medium rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap">
                    Start Your Project
                  </button>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Progress Indicator */}
            <div className="mt-8 flex justify-center">
              <div className="flex gap-2">
                {commitments.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      activeIndex === index ? 'bg-[#00C3A5]' : 'bg-gray-300 hover:bg-gray-400'
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