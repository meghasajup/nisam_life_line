import React, { useState, useEffect } from 'react';

const CMSHeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80"
  ];

  const smallImages = [
    "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80g",
    "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate main image
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-emerald-800 text-white font-medium rounded-lg shadow-lg z-0">
        {/* Floating particles animation */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white bg-opacity-20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        {/* Gradient overlay with subtle animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-emerald-900/20 to-gray-900/40 animate-pulse" 
             style={{ animationDuration: '4s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 transform transition-all duration-1200 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <span className="inline-block hover:scale-110 transition-transform duration-300">Powerful</span>{' '}
              <span className="inline-block hover:scale-110 transition-transform duration-300 delay-100 bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent">Content</span>{' '}
              <span className="inline-block hover:scale-110 transition-transform duration-300 delay-200">Management</span>{' '}
              <span className="inline-block hover:scale-110 transition-transform duration-300 delay-300 text-emerald-300">Solutions</span>
            </h1>
            
            <p className={`text-xl text-violet-200 mb-8 max-w-2xl transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              We build custom CMS platforms that empower teams to create, manage, and deliver exceptional content experiences.
            </p>
          </div>

          {/* Right Content - Enhanced CMS Mockup */}
          <div className={`flex justify-center transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-12 opacity-0 scale-90'}`}>
            <div className="relative group">
              {/* Animated shadow */}
              <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-r from-gray-500 to-emerald-500 rounded-2xl transform group-hover:rotate-3 transition-transform duration-300"></div>
              
              {/* CMS mockup */}
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl w-full max-w-sm transform group-hover:-rotate-1 transition-all duration-300 hover:shadow-3xl">
                {/* Header */}
                <div className="bg-gradient-to-r from-gray-500 to-emerald-500 p-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 transform skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
                  <h3 className="text-white text-xl font-bold relative z-10">CMS Solutions</h3>
                  <div className="absolute top-2 right-2 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  {/* Main image with rotation */}
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 mb-4 overflow-hidden relative group/image">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 z-10"></div>
                    <img
                      src={images[currentImageIndex]}
                      alt="CMS Development"
                      className="w-full h-full object-cover transform transition-all duration-500 group-hover/image:scale-110"
                    />
                    {/* Loading indicator */}
                    <div className="absolute bottom-2 left-2 flex space-x-1">
                      {images.map((_, index) => (
                        <div
                          key={index}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === currentImageIndex ? 'bg-blue-500' : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4 transform transition-all duration-300 group-hover:text-gray-900">
                    Custom content management systems built for your needs
                  </p>
                  
                  {/* Small images with stagger animation */}
                  <div className="flex space-x-2">
                    {smallImages.map((src, index) => (
                      <div
                        key={index}
                        className={`bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 overflow-hidden transform transition-all duration-300 hover:scale-110 hover:rotate-3 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                        style={{ transitionDelay: `${1000 + index * 200}ms` }}
                      >
                        <img
                          src={src}
                          alt={`CMS preview ${index + 1}`}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-125"
                        />
                      </div>
                    ))}
                  </div>
                  
                  {/* Color indicators */}
                  <div className="flex justify-center mt-6 gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                    <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -z-10 top-0 left-0 w-4 h-4 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
              <div className="absolute -z-10 top-20 -right-2 w-3 h-3 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute -z-10 bottom-10 -left-4 w-2 h-2 bg-purple-300 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default CMSHeroSection;