import React, { useState } from 'react';
import { motion } from 'framer-motion';
 import { FiShoppingCart, FiHeart, FiBookOpen, FiCreditCard, FiMap, FiUsers } from "react-icons/fi";
const MobileDevelopment = () => {
  // State for FAQ section
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Toggle FAQ items
  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Services data
  const services = [
    {
      title: "Technology Consulting",
      description: "Our experienced app developers will discuss your iOS or Android application needs to identify the most suitable technology stack and system architecture.",
      icon: "💻",
      color: "from-blue-500 to-cyan-400"
    },
    {
      title: "Custom Mobile App Development",
      description: "With over a decade of experience, we deliver reliable, scalable mobile solutions with out-of-the-box development strategies.",
      icon: "📱",
      color: "from-purple-500 to-indigo-400"
    },
    {
      title: "Enterprise Mobility Solutions",
      description: "Create highly scalable, top-performing mobility solutions to streamline business operations and drive growth.",
      icon: "🏢",
      color: "from-emerald-500 to-teal-400"
    },
    {
      title: "QA and Testing Services",
      description: "Ensure your app functions seamlessly across all platforms with our comprehensive quality assurance.",
      icon: "🔍",
      color: "from-amber-500 to-yellow-400"
    }
  ];

  // Why choose us
  const whyChooseUs = [
    "Industry-leading expertise",
    "Innovative design approach",
    "Native & hybrid app development",
    "Customized business solutions",
    "End-to-end development services",
    "Competitive pricing models"
  ];

  // Developer expertise
  const expertise = [
    {
      title: "iOS & Android Development",
      description: "Native app development for both major mobile platforms."
    },
    {
      title: "Cross-Platform Solutions",
      description: "Flutter and React Native development for cost-effective solutions."
    },
    {
      title: "UI/UX Design",
      description: "Creating intuitive, visually appealing mobile interfaces."
    },
    {
      title: "API Integration",
      description: "Seamless integration with backend services and third-party APIs."
    },
    {
      title: "App Maintenance & Support",
      description: "Ongoing updates, security patches, and performance optimization."
    },
    {
      title: "App Store Optimization",
      description: "Maximize visibility and downloads in app stores."
    }
  ];

  // Cost factors
  const costFactors = [
    "Platform (iOS, Android, Cross-platform)",
    "Design complexity",
    "Features & functionality",
    "Backend integration",
    "Maintenance requirements",
    "Timeline & urgency"
  ];

  // Industries served
 

const industries = [
  {
    title: "E-commerce",
    description: "Mobile shopping experiences with seamless checkout.",
    icon: <FiShoppingCart className="w-6 h-6" />
  },
  {
    title: "Healthcare",
    description: "Telemedicine, appointment booking, and health tracking.",
    icon: <FiHeart className="w-6 h-6" />
  },
  {
    title: "Education",
    description: "E-learning platforms and educational tools.",
    icon: <FiBookOpen className="w-6 h-6" />
  },
  {
    title: "Fintech",
    description: "Banking, payments, and financial management apps.",
    icon: <FiCreditCard className="w-6 h-6" />
  },
  {
    title: "Travel & Hospitality",
    description: "Booking systems and travel planning tools.",
    icon: <FiMap className="w-6 h-6" />
  },
  {
    title: "Social Networking",
    description: "Community building and social engagement platforms.",
    icon: <FiUsers className="w-6 h-6" />
  }
];


  // Development process
  const developmentProcess = [
    {
      step: "1",
      title: "Discovery & Planning",
      description: "Requirement analysis, wireframing, and technical planning."
    },
    {
      step: "2",
      title: "Design & Prototyping",
      description: "UI/UX design, prototyping, and user testing."
    },
    {
      step: "3",
      title: "Development",
      description: "Agile development with iterative releases."
    },
    {
      step: "4",
      title: "Testing & QA",
      description: "Comprehensive testing across devices and platforms."
    },
    {
      step: "5",
      title: "Deployment",
      description: "App store submission and launch."
    },
    {
      step: "6",
      title: "Maintenance",
      description: "Updates, enhancements, and performance optimization."
    }
  ];

  // Case studies
  const caseStudies = [
    {
      title: "Retail Shopping App",
      date: "2023",
      category: "E-commerce",
      description: "Developed a feature-rich shopping app with AR try-on capabilities for a fashion retailer."
    },
    {
      title: "Healthcare Platform",
      date: "2022",
      category: "Healthtech",
      description: "Created a telemedicine app connecting patients with specialists across the country."
    },
    {
      title: "Fitness Tracker",
      date: "2023",
      category: "Wellness",
      description: "Built a personalized workout and nutrition tracking app with AI recommendations."
    }
  ];

  // FAQs
  const faqs = [
    {
      question: "How much does mobile app development cost?",
      answer: "Costs range from $15,000 for basic apps to $200,000+ for complex enterprise solutions."
    },
    {
      question: "How long does it take to develop a mobile app?",
      answer: "Typically 3-6 months depending on complexity and features."
    },
    {
      question: "Do you develop both iOS and Android apps?",
      answer: "Yes, we develop for both platforms and create cross-platform solutions."
    },
    {
      question: "Will you help with app store submission?",
      answer: "Yes, we handle the entire process including app store optimization."
    },
    {
      question: "Do you provide post-launch support?",
      answer: "We offer comprehensive maintenance packages with updates and improvements."
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  const slideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7
      }
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-emerald-800 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform hover:from-gray-800 hover:to-emerald-700 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                variants={slideUp}
              >
                Transform Your Business With Powerful Mobile Apps
              </motion.h1>
              <motion.p
                className="text-xl text-violet-200 mb-8 max-w-2xl"
                variants={slideUp}
              >
                As a leading mobile app development company, we deliver custom, high-performance applications that drive growth and engage users.
              </motion.p>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
           <div className="relative">
  <div className="absolute -top-6 -left-6 w-full h-full bg-violet-600 rounded-2xl"></div>
  <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl w-full max-w-sm">
    <div className="bg-gradient-to-r from-violet-600 to-purple-500 p-6">
      <h3 className="text-white text-xl font-bold">Techitsa Mobile Solutions</h3>
    </div>
    <div className="p-6">
      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 mb-4 overflow-hidden">
        <img
          src="https://www.mindinventory.com/blog/wp-content/uploads/2018/12/benefits-of-mobile-app-for-business.webp"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-gray-700 mb-4">Transforming ideas into powerful mobile experiences</p>
      <div className="flex space-x-2">
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 overflow-hidden">
          <img
            src="https://www.businessofapps.com/wp-content/uploads/2020/08/zymr8_steps_the_mobile_app_dev_lifecycle_cover.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 overflow-hidden">
          <img
            src="https://www.appslure.com/wp-content/uploads/2024/02/An-Exciting-Future-of-Mobile-App-Development-Industry-Insights.webp"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 overflow-hidden">
          <img
            src="https://www.addevice.io/storage/ckeditor/uploads/images/65f82dcd3866a_ai.in.mobile.app.development.1920.1080.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</div>

            </motion.div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true }}
            >
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
                variants={slideUp}
              >
                Our Mobile App Development Services
              </motion.h2>
              <motion.p
                className="text-lg text-gray-600 mb-8"
                variants={slideUp}
              >
                In today's mobile-first world, applications have become essential touchpoints between businesses and users. For over a decade, Techista has established itself as a premier mobile app development company, crafting solutions across diverse industries.
              </motion.p>
              <motion.p
                className="text-lg text-gray-600"
                variants={slideUp}
              >
                We specialize in creating native and hybrid applications for iOS and Android, transforming your vision into intuitive, high-performance mobile experiences.
              </motion.p>
            </motion.div>

            <motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  className="grid grid-cols-2 gap-4"
>
  <div className="bg-gray-200 border-2 border-dashed rounded-xl h-64 flex items-center justify-center overflow-hidden">
    <img
      src="https://img.freepik.com/free-vector/realistic-ui-ux-background_23-2149046824.jpg?semt=ais_hybrid&w=740"
      alt=""
      className="h-full w-full object-cover"
    />
  </div>
  <div className="bg-gray-200 border-2 border-dashed rounded-xl h-64 mt-8 flex items-center justify-center overflow-hidden">
    <img
      src="https://img.freepik.com/free-vector/app-development-illustration_52683-47931.jpg?semt=ais_hybrid&w=740"
      alt=""
      className="h-full w-full object-cover"
    />
  </div>
  <div className="bg-gray-200 border-2 border-dashed rounded-xl h-64 flex items-center justify-center overflow-hidden">
    <img
      src="https://img.freepik.com/free-photo/high-angle-hands-holding-paper_23-2149930977.jpg?semt=ais_hybrid&w=740"
      alt=""
      className="h-full w-full object-cover"
    />
  </div>
  <div className="bg-gray-200 border-2 border-dashed rounded-xl h-64 mt-8 flex items-center justify-center overflow-hidden">
    <img
      src="https://img.freepik.com/premium-vector/mobile-application-coding-flat-3d-isometric-vector-concept-illustration_92926-5948.jpg?semt=ais_hybrid&w=740"
      alt=""
      className="h-full w-full object-cover"
    />
  </div>
</motion.div>

          </div>
        </div>
      </div>

      {/* Services */}
      <div className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Comprehensive Mobile Development Services
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-violet-600 to-purple-500 mx-auto rounded-full mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: "6rem" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              We provide end-to-end mobile solutions that transform business operations and enhance user experiences.
            </motion.p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl">
                  <div className={`bg-gradient-to-r ${service.color} h-2`}></div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="text-4xl mr-4">{service.icon}</div>
                      <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                    <div className="mt-6">
                      <button className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg font-medium transition-colors duration-300 group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-purple-500 group-hover:text-white">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-16 bg-gradient-to-r from-violet-600 to-purple-500 rounded-2xl shadow-xl p-8 text-white text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Build Your Mobile Solution?</h3>
            <p className="text-violet-100 max-w-2xl mx-auto mb-6">
              Partner with a leading app development company to create innovative, high-quality mobile experiences for your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-6 py-3 bg-white text-violet-700 font-bold rounded-lg shadow-md hover:bg-gray-100 transition-colors">
                Schedule a Consultation
              </button>
              <button className="px-6 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                View Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96">
                <img src="https://www.softwaresuggest.com/blog/wp-content/uploads/2024/03/14-best-free-and-open-source-mobile-app-development-software-1.jpg" alt="" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Us For Mobile App Development?
              </h2>
              <ul className="space-y-4 mb-8">
                {whyChooseUs.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-violet-600 rounded-full p-1 mt-1 mr-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-lg text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-violet-50 rounded-xl p-6 border border-violet-100">
                <div className="flex items-start">
                  <div className="bg-violet-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <p className="text-violet-800">
                    "Techista transformed our business with a custom mobile app that increased customer engagement by 65% in the first quarter."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Expertise */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Mobile Development Expertise
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
          >
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:border-violet-300 transition-all"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-violet-100 text-violet-600 rounded-lg w-12 h-12 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Development Process */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Development Process
          </motion.h2>

          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-violet-600 to-purple-500 transform -translate-y-1/2 hidden lg:block"></div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative"
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true }}
            >
              {developmentProcess.map((step, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 relative"
                >
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-violet-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6 text-center">{step.title}</h3>
                  <p className="text-gray-600 text-center">{step.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Industries */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Industries We Serve
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
          >
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-violet-100 text-violet-600 rounded-lg w-12 h-12 flex items-center justify-center mr-4">
                    <div className="bg-violet-100 text-violet-600 rounded-lg w-12 h-12 flex items-center justify-center mr-">
    {industry.icon}
  </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{industry.title}</h3>
                </div>
                <p className="text-gray-600">{industry.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Case Studies */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Success Stories
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
          >
            {caseStudies.map((caseStudy, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="bg-gray-200 border-2 border-dashed w-full h-48"></div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-medium text-violet-600 bg-violet-100 px-3 py-1 rounded-full">
                      {caseStudy.category}
                    </span>
                    <span className="text-sm text-gray-500">{caseStudy.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{caseStudy.title}</h3>
                  <p className="text-gray-600 mb-4">{caseStudy.description}</p>
                  <button className="text-violet-600 font-medium hover:text-violet-800 transition-colors">
                    Read Case Study →
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.div
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  className="flex justify-between items-center w-full p-6 text-left"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                  <svg
                    className={`w-6 h-6 text-violet-600 transform transition-transform ${openFaqIndex === index ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>

                {openFaqIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-6 text-gray-600"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 bg-gradient-to-r from-violet-700 to-purple-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Business with a Mobile App?
          </motion.h2>
          <motion.p
            className="text-xl text-violet-200 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's discuss your project and create a custom mobile solution that exceeds your expectations.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* <button className="px-8 py-4 bg-white text-violet-700 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
              Get a Free Consultation
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
              View Our Portfolio
            </button> */}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MobileDevelopment;