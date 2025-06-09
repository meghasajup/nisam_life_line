import { motion } from 'framer-motion';
import { useState } from 'react';

// Enhanced Service icons with updated color scheme
const ServiceIcon = ({ icon }) => (
  <div className="relative p-4 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 text-gray-700 group-hover:from-gray-100 group-hover:to-gray-200 transition-all duration-300">
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-gray-900 to-emerald-800 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
    {icon}
  </div>
);

const ServiceCard = ({ service, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    whileHover={{ y: -8, scale: 1.02 }}
    className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-gray-300 transition-all duration-300 relative overflow-hidden"
  >
    {/* Subtle background pattern */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-50 to-transparent rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
    
    <div className="relative z-10">
      <ServiceIcon icon={service.icon} />
      <h3 className="text-2xl font-bold mt-6 mb-3 text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
        {service.title}
      </h3>
      <p className="text-gray-600 mb-6 leading-relaxed text-base">
        {service.description}
      </p>
      <a href={service.link}>
        <button className="inline-flex items-center text-gray-700 font-semibold hover:text-emerald-700 group-hover:translate-x-1 transition-all duration-300">
          Learn more
          <motion.svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 ml-2" 
            viewBox="0 0 20 20" 
            fill="currentColor"
            whileHover={{ x: 3 }}
            transition={{ duration: 0.2 }}
          >
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </motion.svg>
        </button>
      </a>
    </div>
  </motion.div>
);

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState('all');

  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      link: "/WebDevelopmentService",
      category: "development"
    },
    {
      id: 2,
      title: "UI/UX Design",
      description: "User-centered designs that enhance usability and create engaging digital experiences for your audience.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 17h.01" />
        </svg>
      ),
      link: "/UIDesignService",
      category: "design"
    },
    {
      id: 3,
      title: "Mobile Development",
      description: "Cross-platform mobile applications for iOS and Android to enhance your mobile presence and reach.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      link: "/MobileDevelopment",
      category: "development"
    },
    {
      id: 4,
      title: "CMS Development",
      description: "Custom Content Management Systems tailored for easy content updates, scalability, and seamless workflow.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h10" />
        </svg>
      ),
      link: "/CMSDevelopment",
      category: "development"
    },
    {
      id: 5,
      title: "E-commerce Development",
      description: "Robust and scalable e-commerce solutions to grow your online business effectively and increase revenue.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.4 5h11.8M7 13l4-8m4 8v5a1 1 0 001 1h1m-6 0a1 1 0 001-1v-5" />
        </svg>
      ),
      link: "/EcommerceDevelopment",
      category: "development"
    },
    {
      id: 6,
      title: "Maintenance & Support",
      description: "Ongoing support and maintenance to keep your applications running smoothly, securely, and up-to-date.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      link: "/MaintenanceSupport",
      category: "support"
    },
    {
      id: 7,
      title: "Testing & Quality Analysis",
      description: "Comprehensive quality assurance with manual and automated testing strategies for reliable products.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      link: "/TestingQualityAnalysis",
      category: "qa"
    },
    {
      id: 8,
      title: "SEO Optimization",
      description: "Boost your online visibility with technical SEO, keyword strategy, and performance optimization services.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      link: "/SEOOptimization",
      category: "marketing"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Services', count: services.length },
    { id: 'design', label: 'Design', count: services.filter(s => s.category === 'design').length },
    { id: 'development', label: 'Development', count: services.filter(s => s.category === 'development').length },
    { id: 'marketing', label: 'Marketing', count: services.filter(s => s.category === 'marketing').length },
    { id: 'qa', label: 'Quality Assurance', count: services.filter(s => s.category === 'qa').length },
    { id: 'support', label: 'Support', count: services.filter(s => s.category === 'support').length }
  ];

  const filteredServices = activeTab === 'all'
    ? services
    : services.filter(service => service.category === activeTab);

  return (
    <div className="min-h-screen bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header - Unchanged as requested */}
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-800 text-white py-20 mb-16">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
              Professional solutions tailored to your business needs.
            </p>
          </div>
        </div>

        <div className='max-w-7xl mx-auto px-6'>
          {/* Enhanced Category Tabs with updated colors */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`group relative px-6 py-3 rounded-full font-semibold capitalize transition-all duration-300 ${
                  activeTab === category.id
                    ? 'bg-gradient-to-r from-gray-900 to-emerald-800 text-white shadow-lg shadow-gray-300'
                    : 'bg-white text-gray-700 hover:bg-gray-50 hover:text-gray-900 shadow-md hover:shadow-lg border border-gray-200'
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {category.label}
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    activeTab === category.id 
                      ? 'bg-white/20 text-white' 
                      : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200 group-hover:text-gray-700'
                  }`}>
                    {category.count}
                  </span>
                </span>
                {activeTab === category.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-gray-900 to-emerald-800 rounded-full"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Enhanced Services Grid */}
          <motion.div
            key={activeTab}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {filteredServices.map((service, index) => (
              <ServiceCard
                key={`${activeTab}-${service.id}`}
                service={service}
                delay={index * 0.1}
              />
            ))}
          </motion.div>

          {/* Call to Action Section with updated colors */}
          <motion.div 
            className="text-center py-16 mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-emerald-800 text-white p-12 rounded-3xl shadow-xl">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Let's discuss how our services can help bring your vision to life and drive your business forward.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gray-800 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300"
              >
                <a href="/contact">Get Started Today</a>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ServicesPage;