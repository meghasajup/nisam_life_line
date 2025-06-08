// src/components/ServicesPage.jsx
import { motion } from 'framer-motion';
import { useState } from 'react';

// Service icons (using Heroicons v2)
const ServiceIcon = ({ icon }) => (
  <div className="p-3 rounded-full bg-indigo-100 text-indigo-600">
    {icon}
  </div>
);

const ServiceCard = ({ service, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -10 }}
    className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all"
  >
    <ServiceIcon icon={service.icon} />
    <h3 className="text-xl font-bold mt-4 mb-2">{service.title}</h3>
    <p className="text-gray-600 mb-4">{service.description}</p>
    <a href={service.link}>
    <button className="text-indigo-600 font-medium hover:text-indigo-800 flex items-center">
      Learn more
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    </button>
    </a>
  </motion.div>
);

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  
 const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies for optimal performance.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    link: "/WebDevelopmentService",
    category: "development"
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "User-centered designs that enhance usability and create engaging digital experiences.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 17h.01" />
      </svg>
    ),
    link: "/UIDesignService",
    category: "design"
  },
  {
    id: 3,
    title: "Mobile Development",
    description: "Cross-platform mobile applications for iOS and Android to enhance your mobile presence.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    link: "/MobileDevelopment",
    category: "development"
  },
  {
    id: 4,
    title: "CMS Development",
    description: "Custom Content Management Systems tailored for easy content updates and scalability.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h10" />
      </svg>
    ),
    link: "/CMSDevelopment",
    category: "development"
  },
  {
    id: 5,
    title: "E-commerce Development",
    description: "Robust and scalable e-commerce solutions to grow your online business effectively.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.4 5h11.8M7 13l4-8m4 8v5a1 1 0 001 1h1m-6 0a1 1 0 001-1v-5" />
      </svg>
    ),
    link:"/EcommerceDevelopment",
    category: "development"
  },
  {
    id: 6,
    title: "Maintenance & Support",
    description: "Ongoing support and maintenance to keep your applications running smoothly and securely.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M3 10a9 9 0 0118 0v5a9 9 0 01-18 0v-5z" />
      </svg>
    ),
    link: "/MaintenanceSupport",
    category: "support"
  },
  {
    id: 7,
    title: "Testing & Quality Analysis",
    description: "Ensure your product's quality with manual and automated testing strategies.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7M13 17h8m-8 4h6" />
      </svg>
    ),
    link:"/TestingQualityAnalysis",
    category: "qa"
  },
  // {
  //   id: 8,
  //   title: "Website Development",
  //   description: "Responsive, SEO-friendly websites tailored to meet your business goals.",
  //   icon: (
  //     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12v.01M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
  //     </svg>
  //   ),
  //   category: "development"
  // },
  {
  id: 9,
  title: "SEO Optimization",
  description: "Boost your visibility with technical SEO, keyword strategy, and performance optimization.",
  icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m4-4h1a2 2 0 012 2v6a2 2 0 01-2 2h-1m-4 0H6a2 2 0 01-2-2v-6a2 2 0 012-2h1" />
    </svg>
  ),
  category: "marketing"
}

];


  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(service => service.category === activeTab);

  return (
    <div className="min-h-screen ">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className=""
      >
        {/* Header */}
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-800  text-white py-20 mb-10">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl font-bold mb-6"> Our Services</h1>
                    <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
                        Professional solutions tailored to your business needs.
                    </p>
                </div>
            </div>

        {/* Category Tabs */}
        <div className='max-w-7xl mx-auto'>

        
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {['all', 'design', 'development', 'marketing'].map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-2 rounded-full font-medium capitalize transition-colors ${
                activeTab === category
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {filteredServices.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              delay={index * 0.1} 
            />
          ))}
        </motion.div>
</div>
        {/* CTA Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-24 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to transform your business?
          </h2>
          <p className="text-indigo-100 max-w-2xl mx-auto text-xl mb-8">
            Let's discuss how we can help you achieve your goals
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-indigo-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all"
          >
            Get Started Today
          </motion.button>
        </motion.div> */}
      </motion.div>
      
    </div>
  );
};

export default ServicesPage;