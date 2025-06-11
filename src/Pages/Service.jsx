import { motion } from 'framer-motion';
import { useState } from 'react';

const ServiceIcon = ({ icon }) => (
  <div className="relative p-5 rounded-2xl bg-gradient-to-br from-white to-gray-50 text-gray-700 group-hover:from-emerald-50 group-hover:to-emerald-100 transition-all duration-500 shadow-inner">
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500 to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
    <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
  </div>
);

const ServiceCard = ({ service, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay, ease: [0.23, 1, 0.32, 1] }}
    whileHover={{ y: -12, scale: 1.03 }}
    className="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl border border-gray-100 hover:border-emerald-200 transition-all duration-500 relative overflow-hidden backdrop-blur-sm"
  >
    {/* Background elements */}
    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-emerald-100/30 to-blue-100/30 rounded-full -translate-y-20 translate-x-20 group-hover:scale-125 transition-transform duration-700"></div>
    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-gray-100/50 to-emerald-50/50 rounded-full translate-y-12 -translate-x-12 group-hover:scale-110 transition-transform duration-700"></div>

    <div className="relative z-10">
      <div className="mb-6">
        <ServiceIcon icon={service.icon} />
      </div>

      <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-emerald-800 transition-colors duration-300">
        {service.title}
      </h3>

      <p className="text-gray-600 mb-8 leading-relaxed text-base line-height-loose">
        {service.description}
      </p>

      <div className="flex items-center justify-between">
        <a href={service.link} className="flex-1">
          <motion.button
            className="w-full inline-flex items-center justify-center bg-gradient-to-r from-gray-800 to-emerald-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-emerald-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Explore Service
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.3 }}
            >
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </motion.svg>
          </motion.button>
        </a>
      </div>
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
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >




        {/* Header */}
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-800 text-white py-20 md:py-28 px-4 mb-8">
          <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed opacity-90">
              Professional solutions tailored to your business needs.
            </p>
          </div>

          {/* Animated background elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-emerald-400/10"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 200 + 50}px`,
                  height: `${Math.random() * 200 + 50}px`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: Math.random() * 5 + 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </section>

        <div className='max-w-7xl mx-auto px-6 relative'>
          {/* Category Filters */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`group relative px-8 py-4 rounded-2xl font-semibold capitalize transition-all duration-500 backdrop-blur-sm ${activeTab === category.id
                    ? 'bg-gradient-to-r from-gray-900 to-emerald-800 text-white shadow-2xl shadow-emerald-300/25'
                    : 'bg-white/80 text-gray-700 hover:bg-white hover:text-gray-900 shadow-lg hover:shadow-xl border border-gray-200 hover:border-emerald-200'
                  }`}
              >
                <span className="relative z-20 flex items-center gap-3">
                  {category.label}
                  <span className={`text-xs px-3 py-1 rounded-full font-medium ${activeTab === category.id
                      ? 'bg-white/25 text-white'
                      : 'bg-gray-100 text-gray-600 group-hover:bg-emerald-100 group-hover:text-emerald-700'
                    }`}>
                    {category.count}
                  </span>
                </span>
                {activeTab === category.id && (
                  <motion.div
                    layoutId="activeTabBg"
                    className="absolute inset-0 bg-gradient-to-r from-gray-900 to-emerald-800 rounded-2xl shadow-2xl"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.15, duration: 0.8 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Services Grid */}
          <motion.div
            key={activeTab}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 pb-24"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, staggerChildren: 0.1 }}
          >
            {filteredServices.map((service, index) => (
              <ServiceCard
                key={`${activeTab}-${service.id}`}
                service={service}
                delay={index * 0.15}
              />
            ))}
          </motion.div>




          {/* Call to Action Section */}
          <motion.div
            className="text-center py-20 mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-emerald-800 text-white p-16 rounded-3xl shadow-2xl overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-emerald-400/10 rounded-full translate-x-20 translate-y-20"></div>

              <div className="relative z-10">
                <motion.h2
                  className="text-4xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                >
                  <a href="/contact">Ready to Start Your Project?</a>
                </motion.h2>
                <motion.p
                  className="text-xl mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                >
                  Let's discuss how our services can help bring your vision to life and drive your business forward. Our team of experts is ready to transform your ideas into reality.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4, duration: 0.6 }}
                >
                  <motion.button
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-gray-800 px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl hover:bg-gray-50 transition-all duration-500 relative overflow-hidden group"
                  >
                    <span className="relative z-10">
                      <a href="/contact" className="flex items-center gap-2">
                        Get Started Today
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ServicesPage;