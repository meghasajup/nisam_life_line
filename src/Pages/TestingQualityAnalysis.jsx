import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TestingQualityAnalysis = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Toggle FAQ items
  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Features data
  const features = [
    {
      title: "Comprehensive Test Coverage",
      description: "We ensure all aspects of your application are thoroughly tested, including functionality, performance, security, and usability.",
      icon: "🔍"
    },
    {
      title: "Automated Testing Solutions",
      description: "Implement cutting-edge automation frameworks to accelerate testing cycles and improve accuracy.",
      icon: "🤖"
    },
    {
      title: "Performance & Load Testing",
      description: "Identify bottlenecks and ensure your application performs optimally under various load conditions.",
      icon: "📊"
    },
    {
      title: "Security Vulnerability Assessment",
      description: "Detect and resolve security weaknesses before they become critical issues.",
      icon: "🔒"
    }
  ];

  // Why choose us
  const whyChooseUs = [
    "Expert QA Engineers with 10+ years experience",
    "Industry-standard testing methodologies",
    "Customized testing strategies",
    "Detailed reporting with actionable insights",
    "Continuous integration support",
    "Cost-effective testing solutions"
  ];

  // Testing expertise
  const expertise = [
    {
      title: "Functional Testing",
      description: "Validate that all features work according to specifications and requirements.",
      icon: "✅"
    },
    {
      title: "Regression Testing",
      description: "Ensure new changes don't break existing functionality.",
      icon: "🔄"
    },
    {
      title: "API Testing",
      description: "Verify the reliability, functionality, and security of your application interfaces.",
      icon: "🔌"
    },
    {
      title: "Mobile App Testing",
      description: "Comprehensive testing across various devices and OS versions.",
      icon: "📱"
    },
    {
      title: "Accessibility Testing",
      description: "Ensure your application is usable by people with disabilities.",
      icon: "♿"
    },
    {
      title: "Localization Testing",
      description: "Verify that your application works correctly in different locales and languages.",
      icon: "🌐"
    }
  ];

  // Industries served
  const industries = [
    {
      title: "E-commerce",
      description: "Ensure seamless shopping experiences and secure transactions.",
      icon: "🛒"
    },
    {
      title: "FinTech",
      description: "Critical testing for financial applications requiring maximum security.",
      icon: "💳"
    },
    {
      title: "Healthcare",
      description: "Testing for compliance, security and reliability of medical applications.",
      icon: "🏥"
    },
    {
      title: "SaaS Platforms",
      description: "Continuous testing for cloud-based software solutions.",
      icon: "☁️"
    },
    {
      title: "Gaming",
      description: "Performance and functionality testing for immersive gaming experiences.",
      icon: "🎮"
    },
    {
      title: "IoT Devices",
      description: "Testing for interconnected devices and systems.",
      icon: "📶"
    }
  ];

  // Testing process
  const testingProcess = [
    {
      step: "1",
      title: "Requirement Analysis",
      description: "Understand project goals and define test objectives.",
      icon: "📋"
    },
    {
      step: "2",
      title: "Test Planning",
      description: "Develop comprehensive test strategy and plan.",
      icon: "📝"
    },
    {
      step: "3",
      title: "Test Design",
      description: "Create detailed test cases and automation scripts.",
      icon: "✏️"
    },
    {
      step: "4",
      title: "Execution & Reporting",
      description: "Perform tests and provide detailed defect reports.",
      icon: "📊"
    }
  ];

  // Tools we use
  const testingTools = [
    { name: "Selenium", icon: "🔧" },
    { name: "Cypress", icon: "⚡" },
    { name: "Jest", icon: "🃏" },
    { name: "JMeter", icon: "📈" },
    { name: "Postman", icon: "📬" },
    { name: "Appium", icon: "📱" },
    { name: "BrowserStack", icon: "🌐" },
    { name: "JIRA", icon: "📋" }
  ];

  // FAQs
  const faqs = [
    {
      question: "What types of testing do you offer?",
      answer: "We provide comprehensive testing services including functional, regression, performance, security, accessibility, and localization testing."
    },
    {
      question: "How do you ensure test coverage?",
      answer: "We use requirement traceability matrices and risk-based testing approaches to ensure maximum coverage of critical functionality."
    },
    {
      question: "Do you provide automated testing?",
      answer: "Yes, we implement and maintain automated testing frameworks tailored to your application's needs and technology stack."
    },
    {
      question: "How quickly can you start a new testing project?",
      answer: "We can typically onboard and begin testing within 2-3 business days after receiving requirements and access."
    },
    {
      question: "What is your defect reporting process?",
      answer: "We provide detailed defect reports with screenshots, videos, logs, and steps to reproduce, all integrated with your issue tracking system."
    }
  ];

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const slideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const staggerItem = {
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

  const cardHover = {
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-emerald-900">
        {/* Background noise texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={staggerItem} className="mb-4">
                <span className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white border border-white/20">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
                  Trusted by Fortune 500 companies
                </span>
              </motion.div>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                variants={staggerItem}
              >
                <span className="bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">Precision Testing</span> <br />
                <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">Quality Assurance</span>
              </motion.h1>

              <motion.p
                className="text-xl text-blue-100 mb-8 max-w-2xl leading-relaxed"
                variants={staggerItem}
              >
                Elevate your software quality with comprehensive testing solutions that ensure reliability, performance, and exceptional user experiences.
              </motion.p>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center relative"
            >
              {/* Image container with decorative elements */}
              <motion.div
                className="relative w-full max-w-xl"
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.5 }
                }}
              >
                {/* Main image with shadow and border */}
                <motion.div
                  className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 transform rotate-1"
                  whileHover={{
                    rotate: 0,
                    borderColor: "rgba(255,255,255,0.4)",
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                    transition: {
                      duration: 0.5,
                      ease: "easeOut"
                    }
                  }}
                >
                  <motion.img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    alt="Quality Assurance Testing"
                    className="w-full h-auto object-cover"
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.8 }
                    }}
                  />

                  {/* Overlay gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-emerald-900/30"
                    whileHover={{
                      opacity: 0.2,
                      transition: { duration: 0.5 }
                    }}
                  />

                  {/* Glow effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-emerald-400/20 to-blue-400/20 opacity-0 pointer-events-none"
                    whileHover={{
                      opacity: 0.3,
                      transition: { duration: 0.5 }
                    }}
                  />
                </motion.div>

                {/* Floating elements that appear on hover */}
                <motion.div
                  className="absolute -top-4 -left-4 w-16 h-16 bg-emerald-400 rounded-full opacity-0 blur-xl"
                  whileHover={{
                    opacity: 0.3,
                    x: 10,
                    y: 10,
                    transition: {
                      duration: 0.8,
                      delay: 0.2
                    }
                  }}
                />

                <motion.div
                  className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-400 rounded-full opacity-0 blur-xl"
                  whileHover={{
                    opacity: 0.3,
                    x: -10,
                    y: -10,
                    transition: {
                      duration: 0.8,
                      delay: 0.3
                    }
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Animated background elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-emerald-500/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </section>


      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-emerald-100 text-blue-800 rounded-full text-sm font-medium mb-4 border border-blue-200">
              Our Methodology
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">Testing Approach</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We employ a multi-layered testing strategy to ensure every aspect of your application meets the highest quality standards.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                variants={{
                  ...staggerItem,  // Initial animation
                  ...cardHover     // Hover animation
                }}
                whileHover="hover"
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-emerald-100/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                <div className="h-full bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 group-hover:border-blue-200 transition-all duration-300">
                  <div className="p-6">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-100 to-blue-100 text-emerald-800 rounded-full text-sm font-medium mb-4 border border-emerald-200">
              Specialized Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Testing Expertise</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored testing solutions designed for your specific technology stack and business requirements.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true }}
          >
            {expertise.map((item, index) => (
              <motion.div
                variants={{
                  ...staggerItem,
                  ...cardHover
                }}
                whileHover="hover"
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/50 to-blue-100/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                <div className="h-full bg-white p-6 rounded-xl shadow-lg border border-gray-200 group-hover:border-emerald-200 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-4">{item.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 rounded-full text-sm font-medium mb-4 border border-emerald-200">
              Our Workflow
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quality Assurance <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Process</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach to ensure comprehensive coverage and maximum efficiency.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-200 to-teal-200 transform -translate-y-1/2 hidden lg:block"></div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              viewport={{ once: true }}
            >
              {testingProcess.map((step, index) => (
                <motion.div
                  key={index}
                  variants={{
                    ...staggerItem,
                    hover: {
                      y: -10,
                      transition: { duration: 0.3 }
                    }
                  }}
                  whileHover="hover"
                  className="relative"
                >
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl shadow-lg z-10">
                    {step.step}
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 h-full pt-12">
                    <div className="text-3xl mb-4 text-center">{step.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{step.title}</h3>
                    <p className="text-gray-600 text-center">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-emerald-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-200 rounded-full text-sm font-medium mb-4 border border-emerald-500/20">
              Technology Stack
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry-Leading <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">Testing Tools</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-teal-300 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We leverage the most advanced testing tools to ensure comprehensive coverage and efficient processes.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true }}
          >
            {testingTools.map((tool, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{
                  y: -5,
                  backgroundColor: "rgba(16, 185, 129, 0.2)",
                  transition: { duration: 0.3 }
                }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 flex flex-col items-center justify-center text-center hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-4">{tool.icon}</div>
                <h3 className="text-lg font-medium">{tool.name}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* FAQ */}
      <div className="py-20 bg-gradient-to-br from-gray-50 via-white to-emerald-50 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-gray-500/5 to-emerald-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-60 right-20 w-60 h-60 bg-gradient-to-r from-emerald-500/8 to-gray-500/8 rounded-full blur-2xl"></div>
          <div className="absolute bottom-40 left-1/3 w-32 h-32 bg-gradient-to-r from-gray-500/10 to-emerald-500/10 rounded-full blur-xl"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 mb-8 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-2 h-2 bg-gradient-to-r from-gray-500 to-emerald-500 rounded-full mr-3"></div>
              <span className="text-sm font-medium bg-gradient-to-r from-gray-600 to-emerald-600 bg-clip-text text-transparent">
                Got Questions? We Have Answers
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <span className="text-gray-900">Frequently Asked </span>
              <span className="bg-gradient-to-r from-gray-500 to-emerald-500 bg-clip-text text-transparent">
                Questions
              </span>
            </motion.h2>

            <motion.div
              className="w-24 h-1.5 bg-gradient-to-r from-gray-500 to-emerald-500 mx-auto rounded-full mb-8 relative"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "6rem", opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-emerald-500 rounded-full blur-sm opacity-50"></div>
            </motion.div>

            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Find answers to common questions about our mobile app development services and process.
            </motion.p>
          </div>

          {/* FAQ Items */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                <div className="bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                  {/* Top Gradient Border */}
                  <div className="h-1 bg-gradient-to-r from-gray-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <button
                    className="flex justify-between items-center w-full p-8 text-left group relative"
                    onClick={() => toggleFaq(index)}
                  >
                    {/* Background Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-50/50 to-emerald-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="flex items-start flex-1 relative z-10">
                      {/* Question Number */}
                      <div className="bg-gradient-to-r from-gray-500 to-emerald-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 text-sm font-bold shadow-lg">
                        {String(index + 1).padStart(2, '0')}
                      </div>

                      <div className="flex-1">
                        <span className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-600 group-hover:to-emerald-600 group-hover:bg-clip-text transition-all duration-300">
                          {faq.question}
                        </span>
                      </div>
                    </div>

                    {/* Arrow Icon */}
                    <div className="relative z-10 ml-4">
                      <div className="bg-gradient-to-r from-gray-100 to-emerald-100 group-hover:from-gray-500 group-hover:to-emerald-500 rounded-full p-3 transition-all duration-300">
                        <svg
                          className={`w-5 h-5 text-gray-600 group-hover:text-white transform transition-all duration-300 ${openFaqIndex === index ? 'rotate-180' : ''
                            }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </div>
                    </div>
                  </button>

                  {/* Answer Content */}
                  {openFaqIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="relative"
                    >
                      {/* Separator Line */}
                      <div className="px-8">
                        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
                      </div>

                      <div className="px-8 pb-8 pt-6">
                        <div className="bg-gradient-to-r from-gray-50/50 to-emerald-50/50 rounded-xl p-6 border border-gray-100/50 relative overflow-hidden">
                          {/* Background Pattern */}
                          <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
                            <div className="w-full h-full bg-gradient-to-br from-gray-500 to-emerald-500 rounded-full transform rotate-12"></div>
                          </div>

                          <div className="flex items-start relative z-10">
                            {/* Answer Icon */}
                            <div className="bg-gradient-to-r from-gray-500 to-emerald-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                              </svg>
                            </div>

                            <div className="flex-1">
                              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Floating Shadow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-500/10 to-emerald-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10 transform translate-y-4"></div>
              </motion.div>
            ))}
          </motion.div>



          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-emerald-100 to-gray-100 rounded-full border border-emerald-200/50">
              <span className="text-emerald-700 font-medium mr-2">Still have questions?</span>
              <a href="/contact"><button className="text-emerald-600 hover:text-emerald-800 font-semibold underline decoration-2 underline-offset-2 transition-colors">
                Contact us
              </button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestingQualityAnalysis;