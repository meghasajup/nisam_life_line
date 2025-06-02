import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TestingQualityAnalysis = () => {
  // State for FAQ section
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

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

  // Cost factors
  const costFactors = [
    "Application Complexity",
    "Testing Scope & Coverage",
    "Automation Requirements",
    "Timeline & Urgency",
    "Device & Platform Coverage",
    "Reporting & Documentation Needs"
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
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute overflow-hidden inset-0 bg-gradient-to-r from-gray-900 to-emerald-800 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform hover:from-gray-800 hover:to-emerald-700 z-0"></div>
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
                Professional Testing & Quality Analysis
              </motion.h1>
              <motion.p
                className="text-xl text-blue-100 mb-8 max-w-2xl"
                variants={slideUp}
              >
                Elevate your software quality with comprehensive testing solutions that ensure reliability, performance, and exceptional user experiences.
              </motion.p>
              <motion.div variants={slideUp}>
                {/* <button className="px-8 py-3 bg-white text-blue-700 font-bold rounded-lg shadow-lg hover:bg-blue-50 transition-colors mr-4">
                  Request Testing Proposal
                </button>
                <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                  View Case Studies
                </button> */}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-full h-full  bg-violet-600 rounded-2xl"></div>
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl w-full max-w-md">
                  <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 p-6">
                    <h3 className="text-white text-xl font-bold">QualityGuard Testing Services</h3>
                  </div>
                  <div className="p-6">
                    <div className="bg-gradient-to-br from-blue-50 to-teal-50 border-2 border-dashed border-blue-200 rounded-xl w-full h-64 mb-4 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl mb-2">🔍</div>
                        <p className="text-blue-800 font-medium">Comprehensive Quality Assurance</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">Detecting issues before they impact your users</p>
                    <div className="flex flex-wrap gap-2">
                      <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Automation</div>
                      <div className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">Performance</div>
                      <div className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">Security</div>
                      <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">UX Testing</div>
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
                World-Class Quality Assurance Services
              </motion.h2>
              <motion.p
                className="text-lg text-gray-600 mb-8"
                variants={slideUp}
              >
                At QualityGuard, we specialize in delivering comprehensive testing solutions that go beyond simple bug detection. Our approach combines industry best practices with innovative techniques to ensure your software meets the highest standards of quality, security, and performance.
              </motion.p>
              <motion.p
                className="text-lg text-gray-600"
                variants={slideUp}
              >
                With over a decade of experience across diverse industries, our team of certified QA engineers provides the expertise needed to identify critical issues before they impact your users and your business.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-gradient-to-br from-blue-50 to-teal-50 border-2 border-dashed border-blue-200 rounded-xl h-64 flex flex-col items-center justify-center p-4 text-center">
                <div className="text-5xl mb-4">📈</div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">98% Defect Detection</h3>
                <p className="text-blue-600">Industry-leading defect discovery rate</p>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 border-2 border-dashed border-teal-200 rounded-xl h-64 mt-8 flex flex-col items-center justify-center p-4 text-center">
                <div className="text-5xl mb-4">⏱️</div>
                <h3 className="text-xl font-bold text-teal-800 mb-2">40% Faster Releases</h3>
                <p className="text-teal-600">Accelerated testing cycles</p>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-dashed border-indigo-200 rounded-xl h-64 flex flex-col items-center justify-center p-4 text-center">
                <div className="text-5xl mb-4">💰</div>
                <h3 className="text-xl font-bold text-indigo-800 mb-2">70% Cost Reduction</h3>
                <p className="text-indigo-600">Through test automation</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-dashed border-purple-200 rounded-xl h-64 mt-8 flex flex-col items-center justify-center p-4 text-center">
                <div className="text-5xl mb-4">🌐</div>
                <h3 className="text-xl font-bold text-purple-800 mb-2">300+ Devices</h3>
                <p className="text-purple-600">Cross-platform testing coverage</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Our Comprehensive Testing Approach
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto rounded-full mb-6"
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
              We employ a multi-layered testing strategy to ensure every aspect of your application meets quality standards
            </motion.p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl border border-blue-100">
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
              className="order-2 lg:order-1"
            >
              <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 border border-blue-200 shadow-lg">
                <h3 className="text-2xl font-bold text-blue-800 mb-6">Our Testing Methodology</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Requirement Analysis</h4>
                      <p className="text-gray-600">Thorough understanding of business objectives and technical requirements</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Test Strategy Development</h4>
                      <p className="text-gray-600">Creating customized testing approach based on risk assessment</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Execution & Reporting</h4>
                      <p className="text-gray-600">Comprehensive testing with detailed defect documentation</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Testing Services?
              </h2>
              <ul className="space-y-4 mb-8">
                {whyChooseUs.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-blue-600 rounded-full p-1 mt-1 mr-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-lg text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-blue-800 italic">
                      "QualityGuard's testing services identified critical performance bottlenecks that we had missed internally. Their detailed reports helped us improve our application's response time by 65%."
                    </p>
                    <p className="text-blue-700 font-medium mt-3">- CTO, FinTech Startup</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Expertise */}
      <div className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Testing Expertise
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Comprehensive testing solutions tailored to your specific needs
          </motion.p>

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
                className="bg-white p-6 rounded-xl shadow-lg border border-blue-100 hover:border-blue-300 transition-all"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Tools Section */}
      <div className="py-16 bg-gradient-to-r from-blue-900 to-teal-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Industry-Leading Testing Tools
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-300 mx-auto rounded-full mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: "6rem" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />
            <motion.p
              className="text-xl text-blue-100 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              We leverage the most advanced testing tools to ensure comprehensive coverage and efficient processes
            </motion.p>
          </div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
          >
            {testingTools.map((tool, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-blue-800/30 backdrop-blur-sm p-6 rounded-xl border border-blue-600/30 flex flex-col items-center justify-center text-center hover:bg-blue-800/50 transition-colors"
              >
                <div className="text-4xl mb-4">{tool.icon}</div>
                <h3 className="text-lg font-medium">{tool.name}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Cost Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Transparent Testing Pricing
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Flexible engagement models tailored to your budget and requirements
          </motion.p>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
          >
            {costFactors.map((factor, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 flex items-start hover:shadow-xl transition-shadow"
              >
                <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">{factor}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-16 bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl shadow-xl p-8 text-white text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Flexible Engagement Models</h3>
            <p className="text-blue-100 max-w-2xl mx-auto mb-6">
              We offer project-based, dedicated team, and hourly engagement models to suit your specific testing requirements and budget.
            </p>
            <button className="px-6 py-3 bg-white text-blue-700 font-bold rounded-lg shadow-md hover:bg-blue-50 transition-colors">
              Get Pricing Details
            </button>
          </motion.div>
        </div>
      </div>

      {/* Industries */}
      <div className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Industries We Serve
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Specialized testing solutions for diverse industry requirements
          </motion.p>

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
                className="bg-white p-6 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">{industry.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900">{industry.title}</h3>
                </div>
                <p className="text-gray-600">{industry.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Testing Process */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Quality Assurance Process
          </motion.h2>

          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-teal-500 transform -translate-y-1/2 hidden lg:block"></div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true }}
            >
              {testingProcess.map((step, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white p-6 rounded-xl shadow-lg border border-blue-100 relative"
                >
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                    {step.step}
                  </div>
                  <div className="text-3xl mb-4 mt-6 text-center">{step.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{step.title}</h3>
                  <p className="text-gray-600 text-center">{step.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-16 bg-gradient-to-b from-white to-blue-50">
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
                className="bg-white border border-blue-200 rounded-xl overflow-hidden"
              >
                <button
                  className="flex justify-between items-center w-full p-6 text-left hover:bg-blue-50 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                  <svg
                    className={`w-6 h-6 text-blue-600 transform transition-transform ${openFaqIndex === index ? 'rotate-180' : ''}`}
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
      <div className="py-16 bg-gradient-to-r from-blue-700 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Ready to Enhance Your Software Quality?
          </motion.h2>
          <motion.p
            className="text-xl text-blue-100 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Partner with our expert QA team to deliver flawless software experiences to your users.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <button className="px-8 py-4 bg-white text-blue-700 font-bold rounded-lg hover:bg-blue-50 transition-colors shadow-lg">
              Request a Consultation
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
              Download Testing Brochure
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TestingQualityAnalysis;