import React, { useState } from 'react';

const UiServicesSection = () => {
  const [hoveredService, setHoveredService] = useState(null);

  // Services data with enhanced content
  const services = [
    {
      title: "User Interface Design",
      description: "Creating visually stunning interfaces that enhance user experience and drive engagement with modern design principles.",
      icon: "🎨",
      features: ["Responsive Design", "Interactive Prototypes", "Visual Hierarchy", "Brand Consistency"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "User Experience Research",
      description: "Conducting in-depth user research to understand behaviors, needs, and motivations for creating intuitive user journeys.",
      icon: "🔍",
      features: ["User Testing", "Journey Mapping", "Persona Development", "Analytics Integration"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Prototyping & Wireframing",
      description: "Developing interactive prototypes to validate concepts and refine user flows before development begins.",
      icon: "📐",
      features: ["Interactive Mockups", "User Flow Design", "Concept Validation", "Rapid Iteration"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Design Systems",
      description: "Creating comprehensive design systems that ensure consistency across all digital products and platforms.",
      icon: "📚",
      features: ["Component Libraries", "Style Guides", "Documentation", "Scalable Frameworks"],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 via-white to-emerald-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-gray-500/10 to-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-emerald-500/10 to-gray-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-gray-400/5 to-emerald-400/5 rounded-full blur-2xl"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-16 w-2 h-2 bg-emerald-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-48 right-32 w-1 h-1 bg-gray-400 rounded-full opacity-70 animate-ping"></div>
        <div className="absolute bottom-32 left-24 w-1.5 h-1.5 bg-emerald-300 rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute bottom-48 right-16 w-2 h-2 bg-gray-300 rounded-full opacity-60 animate-ping"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-gray-500 to-emerald-500 rounded-2xl mb-6 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
            </svg>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Our <span className="bg-gradient-to-r from-gray-500 to-emerald-500 bg-clip-text text-transparent">Premium</span> Services
          </h2>
          
          <div className="w-32 h-1 bg-gradient-to-r from-gray-500 to-emerald-500 mx-auto rounded-full mb-8"></div>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive solutions to elevate your digital products and create exceptional user experiences that drive engagement and conversions
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Card Container */}
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden transform transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-2xl border border-white/50">
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-emerald-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-[2px] bg-white rounded-3xl"></div>
                
                {/* Content */}
                <div className="relative p-8 lg:p-10">
                  {/* Icon Section */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-r from-gray-500 to-emerald-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-3xl font-bold text-gray-300 group-hover:text-emerald-400 transition-colors duration-300">
                        0{index + 1}
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-600 group-hover:to-emerald-600 group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                    {service.description}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-gray-500/10 to-transparent rounded-full transform -translate-x-12 translate-y-12 group-hover:scale-150 transition-transform duration-700"></div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-500/20 to-emerald-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UiServicesSection;