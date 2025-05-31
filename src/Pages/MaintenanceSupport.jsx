import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MaintenanceSupport = () => {
  // State for FAQ section
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Toggle FAQ items
  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Features data
  const features = [
    {
      title: "Proactive Monitoring",
      description: "24/7 monitoring of your systems to detect and resolve issues before they impact your business operations.",
      icon: "📈"
    },
    {
      title: "Rapid Response Times",
      description: "Guaranteed response times with SLAs tailored to your business criticality levels.",
      icon: "⏱️"
    },
    {
      title: "Security Management",
      description: "Continuous security updates, vulnerability scanning, and threat mitigation to protect your systems.",
      icon: "🔒"
    },
    {
      title: "Performance Optimization",
      description: "Regular system tuning and optimization to ensure peak performance and efficiency.",
      icon: "⚡"
    }
  ];

  // Why choose us
  const whyChooseUs = [
    "Dedicated support team with 15+ years experience",
    "Proactive rather than reactive maintenance",
    "Customized SLAs to match your business needs",
    "Transparent pricing with no hidden costs",
    "Enterprise-grade tools and monitoring systems",
    "Continuous improvement and system optimization"
  ];

  // Services offered
  const services = [
    {
      title: "IT Infrastructure Support",
      description: "Comprehensive maintenance of servers, networks, and storage systems.",
      icon: "🖥️"
    },
    {
      title: "Application Maintenance",
      description: "Ongoing support for business-critical applications and software.",
      icon: "📱"
    },
    {
      title: "Cloud Management",
      description: "24/7 monitoring and maintenance of cloud environments.",
      icon: "☁️"
    },
    {
      title: "Database Administration",
      description: "Performance tuning, backup management, and optimization of databases.",
      icon: "💾"
    },
    {
      title: "Security Management",
      description: "Vulnerability scanning, patch management, and threat monitoring.",
      icon: "🛡️"
    },
    {
      title: "Disaster Recovery",
      description: "Comprehensive backup solutions and disaster recovery planning.",
      icon: "🔄"
    }
  ];

  // Support tiers
  const supportTiers = [
    {
      name: "Basic",
      price: "$499",
      period: "month",
      features: [
        "Business hours support",
        "Monthly system reviews",
        "Remote assistance",
        "Security patches",
        "Standard response time"
      ],
      recommended: false
    },
    {
      name: "Professional",
      price: "$899",
      period: "month",
      features: [
        "24/5 support coverage",
        "Weekly system checks",
        "Proactive monitoring",
        "Priority response",
        "Monthly reports",
        "Performance tuning"
      ],
      recommended: true
    },
    {
      name: "Enterprise",
      price: "$1,499",
      period: "month",
      features: [
        "24/7 premium support",
        "Dedicated support engineer",
        "Daily system checks",
        "Emergency on-site assistance",
        "Custom SLAs",
        "Quarterly optimization"
      ],
      recommended: false
    }
  ];

  // Industries served
  const industries = [
    {
      title: "Healthcare",
      description: "Critical system support for medical facilities and patient management systems.",
      icon: "🏥"
    },
    {
      title: "Finance",
      description: "High-availability support for trading platforms and banking systems.",
      icon: "💳"
    },
    {
      title: "E-commerce",
      description: "24/7 support for online stores and payment processing systems.",
      icon: "🛒"
    },
    {
      title: "Manufacturing",
      description: "Industrial system maintenance for production environments.",
      icon: "🏭"
    },
    {
      title: "Education",
      description: "Campus-wide IT support and learning management systems.",
      icon: "🎓"
    },
    {
      title: "Government",
      description: "Secure maintenance for public sector systems and infrastructure.",
      icon: "🏛️"
    }
  ];

  // Support process
  const supportProcess = [
    {
      step: "1",
      title: "Issue Identification",
      description: "Proactive monitoring detects potential issues before they occur.",
      icon: "🔍"
    },
    {
      step: "2",
      title: "Rapid Response",
      description: "Immediate notification and assignment to appropriate engineer.",
      icon: "📞"
    },
    {
      step: "3",
      title: "Resolution",
      description: "Expert troubleshooting and problem resolution.",
      icon: "✅"
    },
    {
      step: "4",
      title: "Prevention",
      description: "Root cause analysis to prevent future occurrences.",
      icon: "🛡️"
    }
  ];

  // FAQs
  const faqs = [
    {
      question: "What's included in your maintenance plans?",
      answer: "Our plans include proactive monitoring, security updates, performance optimization, troubleshooting, and technical support based on the selected service tier."
    },
    {
      question: "Do you offer emergency support?",
      answer: "Yes, our premium plans include 24/7 emergency support with guaranteed response times."
    },
    {
      question: "How quickly can you respond to critical issues?",
      answer: "Response times vary by plan: Basic (4 business hours), Professional (2 hours), Enterprise (30 minutes)."
    },
    {
      question: "Can I customize my support plan?",
      answer: "Absolutely! We can tailor our services to meet your specific business requirements and budget."
    },
    {
      question: "Do you provide on-site support?",
      answer: "Yes, our Enterprise plan includes on-site support when remote resolution isn't possible."
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
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800 via-blue-600 to-teal-600 z-0"></div>
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
                Professional IT Maintenance & Support
              </motion.h1>
              <motion.p
                className="text-xl text-blue-100 mb-8 max-w-2xl"
                variants={slideUp}
              >
                Proactive maintenance and responsive support to keep your systems running smoothly 24/7.
              </motion.p>
              <motion.div variants={slideUp} className="flex flex-wrap gap-4">
                <button className="px-8 py-3 bg-white text-blue-700 font-bold rounded-lg shadow-lg hover:bg-blue-50 transition-colors">
                  Get Support Plan
                </button>
                <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                  Contact Our Team
                </button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-full h-full bg-teal-500 rounded-2xl"></div>
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl w-full max-w-md">
                  <div className="bg-gradient-to-r from-blue-600 to-teal-500 p-6">
                    <h3 className="text-white text-xl font-bold">SupportGuard Services</h3>
                  </div>
                  <div className="p-6">
                    <div className="bg-gradient-to-br from-blue-50 to-teal-50 border-2 border-dashed border-blue-200 rounded-xl w-full h-64 mb-4 flex items-center justify-center">
                      <div className="text-center p-4">
                        <div className="flex justify-center mb-4">
                          <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl">
                            <span>99.9%</span>
                          </div>
                        </div>
                        <p className="text-blue-800 font-medium">Uptime Guarantee</p>
                        <p className="text-blue-600 mt-2">24/7 Monitoring & Support</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">24/7 Support</div>
                      <div className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">Proactive Monitoring</div>
                      <div className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">Security</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
              <p className="text-gray-600">System Uptime</p>
            </motion.div>
            <motion.div
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <p className="text-gray-600">Support Coverage</p>
            </motion.div>
            <motion.div
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">15 min</div>
              <p className="text-gray-600">Avg. Response Time</p>
            </motion.div>
            <motion.div
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <p className="text-gray-600">Client Retention</p>
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
                Comprehensive Maintenance & Support Solutions
              </motion.h2>
              <motion.p
                className="text-lg text-gray-600 mb-8"
                variants={slideUp}
              >
                At SupportGuard, we provide more than just break-fix support. Our proactive maintenance approach focuses on preventing issues before they disrupt your business operations.
              </motion.p>
              <motion.p
                className="text-lg text-gray-600 mb-8"
                variants={slideUp}
              >
                With our enterprise-grade monitoring tools and expert engineers, we ensure your systems run at peak performance while reducing downtime and operational costs.
              </motion.p>
              <motion.div variants={slideUp}>
                <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                  View Our Maintenance Plans
                </button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-gradient-to-br from-blue-50 to-teal-50 border-2 border-dashed border-blue-200 rounded-xl h-64 flex flex-col items-center justify-center p-4 text-center">
                <div className="text-5xl mb-4">🔄</div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">Proactive Maintenance</h3>
                <p className="text-blue-600">Prevent issues before they occur</p>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 border-2 border-dashed border-teal-200 rounded-xl h-64 mt-8 flex flex-col items-center justify-center p-4 text-center">
                <div className="text-5xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-teal-800 mb-2">Security First</h3>
                <p className="text-teal-600">Continuous vulnerability management</p>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-dashed border-indigo-200 rounded-xl h-64 flex flex-col items-center justify-center p-4 text-center">
                <div className="text-5xl mb-4">⚙️</div>
                <h3 className="text-xl font-bold text-indigo-800 mb-2">Performance Tuning</h3>
                <p className="text-indigo-600">Keep systems running optimally</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-dashed border-purple-200 rounded-xl h-64 mt-8 flex flex-col items-center justify-center p-4 text-center">
                <div className="text-5xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-purple-800 mb-2">Detailed Reporting</h3>
                <p className="text-purple-600">Transparent system health insights</p>
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
              Our Maintenance & Support Features
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
              Comprehensive services designed to maximize system reliability and performance
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
                <h3 className="text-2xl font-bold text-blue-800 mb-6">Our Maintenance Approach</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Preventive Maintenance</h4>
                      <p className="text-gray-600">Regular system checks and updates to prevent failures</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Predictive Analysis</h4>
                      <p className="text-gray-600">Advanced monitoring to predict and prevent potential issues</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Continuous Optimization</h4>
                      <p className="text-gray-600">Ongoing tuning to maintain peak system performance</p>
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
                Why Choose Our Support Services?
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
                      "Switching to SupportGuard's maintenance plan reduced our system downtime by 78% and cut our IT operational costs by 35% within the first year."
                    </p>
                    <p className="text-blue-700 font-medium mt-3">- IT Director, Healthcare Network</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Services Offered */}
      <div className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Maintenance Services
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Comprehensive support solutions for all your IT infrastructure needs
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Pricing Tiers */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Flexible Support Plans
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Choose the support level that matches your business requirements
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
          >
            {supportTiers.map((tier, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative rounded-2xl overflow-hidden shadow-lg ${tier.recommended
                    ? "ring-2 ring-blue-600 transform -translate-y-2"
                    : "border border-gray-200"
                  }`}
              >
                {tier.recommended && (
                  <div className="absolute top-0 left-0 right-0 bg-blue-600 text-white text-center py-2 font-bold">
                    MOST POPULAR
                  </div>
                )}
                <div className="p-8 bg-white">
                  <h3 className="text-2xl font-bold text-center text-gray-900 mb-2">{tier.name}</h3>
                  <div className="text-center mb-6">
                    <span className="text-4xl font-bold text-blue-600">{tier.price}</span>
                    <span className="text-gray-500">/{tier.period}</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-3 px-4 rounded-lg font-medium ${tier.recommended
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                      }`}
                  >
                    Select Plan
                  </button>
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
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Custom Enterprise Solutions</h3>
            <p className="text-blue-100 max-w-2xl mx-auto mb-6">
              Need a tailored solution? Our enterprise support packages are customized to meet the specific needs of large organizations with complex infrastructures.
            </p>
            <button className="px-6 py-3 bg-white text-blue-700 font-bold rounded-lg shadow-md hover:bg-blue-50 transition-colors">
              Request Custom Plan
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
            Specialized maintenance solutions for diverse industry requirements
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

      {/* Support Process */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Support Process
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
              {supportProcess.map((step, index) => (
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
            Ready for Stress-Free IT Maintenance?
          </motion.h2>
          <motion.p
            className="text-xl text-blue-100 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Focus on your business while we ensure your IT infrastructure runs flawlessly 24/7.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <button className="px-8 py-4 bg-white text-blue-700 font-bold rounded-lg hover:bg-blue-50 transition-colors shadow-lg">
              Get Started Today
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
              Schedule a Demo
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceSupport;