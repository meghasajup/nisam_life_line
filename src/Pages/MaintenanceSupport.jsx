import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const MaintenanceSupport = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Data
  const features = [
    {
      title: "Proactive Monitoring",
      description: "24/7 monitoring of your systems to detect and resolve issues before they impact your business operations.",
      icon: "📈",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Rapid Response",
      description: "Guaranteed response times with SLAs tailored to your business criticality levels.",
      icon: "⏱️",
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Security Management",
      description: "Continuous security updates, vulnerability scanning, and threat mitigation to protect your systems.",
      icon: "🔒",
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Performance Optimization",
      description: "Regular system tuning and optimization to ensure peak performance and efficiency.",
      icon: "⚡",
      color: "from-amber-500 to-orange-500"
    }
  ];

  const whyChooseUs = [
    "Certified IT professionals with 10+ years experience",
    "Proactive rather than reactive maintenance approach",
    "Customized SLAs to match your business needs",
    "Transparent pricing with no hidden costs",
    "Enterprise-grade monitoring and management tools",
    "Continuous improvement and system optimization"
  ];

  const services = [
    {
      title: "IT Infrastructure Support",
      description: "Comprehensive maintenance of servers, networks, and storage systems.",
      icon: "🖥️",
      bg: "bg-blue-50",
      border: "border-blue-200"
    },
    {
      title: "Application Maintenance",
      description: "Ongoing support for business-critical applications and software.",
      icon: "📱",
      bg: "bg-purple-50",
      border: "border-purple-200"
    },
    {
      title: "Cloud Management",
      description: "24/7 monitoring and maintenance of cloud environments.",
      icon: "☁️",
      bg: "bg-cyan-50",
      border: "border-cyan-200"
    },
    {
      title: "Database Administration",
      description: "Performance tuning, backup management, and optimization of databases.",
      icon: "💾",
      bg: "bg-emerald-50",
      border: "border-emerald-200"
    },
    {
      title: "Security Management",
      description: "Vulnerability scanning, patch management, and threat monitoring.",
      icon: "🛡️",
      bg: "bg-amber-50",
      border: "border-amber-200"
    },
    {
      title: "Disaster Recovery",
      description: "Comprehensive backup solutions and disaster recovery planning.",
      icon: "🔄",
      bg: "bg-indigo-50",
      border: "border-indigo-200"
    }
  ];

  const industries = [
    {
      title: "Healthcare",
      description: "Critical system support for medical facilities and patient management systems.",
      icon: "🏥",
      color: "bg-gradient-to-r from-gray-500 to-emerald-500 bg-clip-text text-transparent"
    },
    {
      title: "Finance",
      description: "High-availability support for trading platforms and banking systems.",
      icon: "💳",
      color: "bg-gradient-to-r from-gray-500 to-emerald-500 bg-clip-text text-transparent"
    },
    {
      title: "E-commerce",
      description: "24/7 support for online stores and payment processing systems.",
      icon: "🛒",
      color: "bg-gradient-to-r from-gray-500 to-emerald-500 bg-clip-text text-transparent"
    },
    {
      title: "Manufacturing",
      description: "Industrial system maintenance for production environments.",
      icon: "🏭",
      color: "bg-gradient-to-r from-gray-500 to-emerald-500 bg-clip-text text-transparent"
    },
    {
      title: "Education",
      description: "Campus-wide IT support and learning management systems.",
      icon: "🎓",
      color: "bg-gradient-to-r from-gray-500 to-emerald-500 bg-clip-text text-transparent"
    },
    {
      title: "Government",
      description: "Secure maintenance for public sector systems and infrastructure.",
      icon: "🏛️",
      color: "bg-gradient-to-r from-gray-500 to-emerald-500 bg-clip-text text-transparent"
    }
  ];

  const supportProcess = [
    {
      step: "1",
      title: "Issue Identification",
      description: "Proactive monitoring detects potential issues before they occur.",
      icon: "🔍",
      color: "bg-blue-600"
    },
    {
      step: "2",
      title: "Rapid Response",
      description: "Immediate notification and assignment to appropriate engineer.",
      icon: "📞",
      color: "bg-purple-600"
    },
    {
      step: "3",
      title: "Resolution",
      description: "Expert troubleshooting and problem resolution.",
      icon: "✅",
      color: "bg-emerald-600"
    },
    {
      step: "4",
      title: "Prevention",
      description: "Root cause analysis to prevent future occurrences.",
      icon: "🛡️",
      color: "bg-amber-600"
    }
  ];

  const faqs = [
    {
      question: "What's included in your maintenance plans?",
      answer: "Our comprehensive plans include proactive monitoring, security updates, performance optimization, troubleshooting, and technical support based on the selected service tier. We also provide regular health reports and recommendations for system improvements."
    },
    {
      question: "Do you offer emergency support?",
      answer: "Yes, our premium plans include 24/7 emergency support with guaranteed response times. Our enterprise package provides a dedicated support engineer for critical systems."
    },
    {
      question: "How quickly can you respond to critical issues?",
      answer: "Response times vary by plan: Basic (4 business hours), Professional (2 hours), Enterprise (30 minutes). For critical severity issues, we provide immediate escalation procedures."
    },
    {
      question: "Can I customize my support plan?",
      answer: "Absolutely! We offer flexible service packages that can be tailored to meet your specific business requirements, compliance needs, and budget constraints."
    },
    {
      question: "What makes your support different from others?",
      answer: "Our proactive approach focuses on preventing issues before they occur, rather than just fixing problems. We combine enterprise-grade monitoring tools with certified engineers who specialize in your industry."
    }
  ];

  // Animations
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

  const staggerItems = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Enterprise IT Maintenance & Support | SupportGuard</title>
        <meta name="description" content="Professional IT maintenance and support services with proactive monitoring, rapid response, and enterprise-grade solutions to maximize your system uptime." />
      </Helmet>

      <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen font-sans antialiased">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-emerald-900">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-[length:100px_100px]"></div>
          </div>

          {/* Subtle animated particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-emerald-400 rounded-full"
                initial={{
                  x: Math.random() * 100 + '%',
                  y: Math.random() * 100 + '%',
                  width: Math.random() * 5 + 1 + 'px',
                  height: Math.random() * 5 + 1 + 'px',
                  opacity: Math.random() * 0.2 + 0.1
                }}
                animate={{
                  y: [0, Math.random() * 100 - 50],
                  x: [0, Math.random() * 100 - 50],
                  transition: {
                    duration: Math.random() * 10 + 10,
                    repeat: Infinity,
                    repeatType: 'reverse'
                  }
                }}
              />
            ))}
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
              >
                <motion.div
                  className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6"
                  variants={slideUp}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-sm font-medium text-white">24/7 Support Available</span>
                </motion.div>

                <motion.h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                  variants={slideUp}
                >
                  <span className="bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
                    Enterprise IT Maintenance
                  </span>
                  <br />
                  <span className="text-emerald-400/90">& Support Solutions</span>
                </motion.h1>

                <motion.p
                  className="text-xl text-blue-100/90 mb-8 max-w-2xl leading-relaxed"
                  variants={slideUp}
                >
                  Proactive monitoring and responsive support to maximize your system uptime and performance while reducing operational costs.
                </motion.p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="flex justify-center relative"
              >
                <div className="relative w-full max-w-lg">
                  {/* floating elements */}
                  <motion.div
                    className="absolute -top-10 -left-10 w-32 h-32 bg-emerald-500/20 rounded-full blur-xl"
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />

                  <motion.div
                    className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-xl"
                    animate={{
                      y: [0, 20, 0],
                      opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2
                    }}
                  />

                  {/* Main card */}
                  <motion.div
                    className="relative bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-white/20 transform hover:scale-[1.02] transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-2xl font-bold text-white">System Health Dashboard</h3>
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-emerald-400 rounded-full mr-2 animate-pulse"></div>
                          <span className="text-sm text-white/80">Live</span>
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-gray-900/80 to-emerald-900/30 rounded-xl p-6 border border-white/10 mb-6 backdrop-blur-sm">
                        <div className="flex justify-between items-center mb-4">
                          <div>
                            <h4 className="text-white/80 text-sm font-medium">Overall System Health</h4>
                            <h3 className="text-3xl font-bold text-white mt-1">98.7%</h3>
                          </div>
                          <div className="w-16 h-16">
                            <svg viewBox="0 0 36 36" className="circular-chart">
                              <path
                                className="circle-bg"
                                d="M18 2.0845
                                  a 15.9155 15.9155 0 0 1 0 31.831
                                  a 15.9155 15.9155 0 0 1 0 -31.831"
                                fill="none"
                                stroke="#2d3748"
                                strokeWidth="3"
                              />
                              <path
                                className="circle"
                                strokeDasharray="90, 100"
                                d="M18 2.0845
                                  a 15.9155 15.9155 0 0 1 0 31.831
                                  a 15.9155 15.9155 0 0 1 0 -31.831"
                                fill="none"
                                stroke="#10b981"
                                strokeWidth="3"
                                strokeLinecap="round"
                              />
                            </svg>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                          {[
                            { label: "Servers", value: "12/12", status: "Online", color: "emerald" },
                            { label: "Databases", value: "8/8", status: "Stable", color: "emerald" },
                            { label: "Services", value: "24/25", status: "1 Warning", color: "amber" }
                          ].map((item, i) => (
                            <motion.div
                              key={i}
                              className={`bg-gray-900/50 rounded-lg p-3 border border-white/5 backdrop-blur-sm`}
                              whileHover={{ y: -2 }}
                            >
                              <p className="text-xs text-white/60 mb-1">{item.label}</p>
                              <p className="text-white font-medium">{item.value} <span className={`text-${item.color}-400`}>{item.status}</span></p>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-between">
                        {[
                          { icon: "⏱️", label: "Avg. Response", value: "23 min", color: "emerald" },
                          { icon: "🔄", label: "Uptime (30d)", value: "99.97%", color: "blue" },
                          { icon: "🛡️", label: "Secured", value: "100%", color: "purple" }
                        ].map((item, i) => (
                          <motion.div
                            key={i}
                            className="text-center"
                            whileHover={{ scale: 1.05 }}
                          >
                            <div className={`w-12 h-12 bg-${item.color}-500/20 rounded-full flex items-center justify-center mx-auto mb-2 backdrop-blur-sm`}>
                              <span className={`text-${item.color}-400 text-xl`}>{item.icon}</span>
                            </div>
                            <p className="text-xs text-white/70">{item.label}</p>
                            <p className="text-white font-medium">{item.value}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>




        {/* Introduction Section */}
        <div className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-[length:300px_300px] opacity-5"></div>
          <div className="max-w-7xl mx-auto relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={containerVariants}
                viewport={{ once: true }}
              >
                <motion.div
                  className="inline-flex items-center px-4 py-2 bg-white border border-emerald-800/20 rounded-full mb-6 shadow-sm"
                  variants={slideUp}
                  whileHover={{ scale: 1.03 }}
                >
                  <span className="text-sm font-medium bg-gradient-to-r from-gray-600 to-emerald-600 bg-clip-text text-transparent">
                    PREVENTIVE MAINTENANCE
                  </span>
                </motion.div>

                <motion.h2
                  className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight"
                  variants={slideUp}
                >
                  <span className="bg-gradient-to-r from-gray-700 to-emerald-600 bg-clip-text text-transparent">
                    Reduce Downtime
                  </span>
                  <br />
                  <span className="text-gray-800">With Proactive System Management</span>
                </motion.h2>

                <motion.p
                  className="text-lg text-gray-600 mb-8 leading-relaxed"
                  variants={slideUp}
                >
                  At SupportGuard, we shift from reactive break-fix support to a proactive maintenance model that prevents issues before they impact your business.
                </motion.p>

                <motion.p
                  className="text-lg text-gray-600 mb-8 leading-relaxed"
                  variants={slideUp}
                >
                  Our certified engineers combine enterprise-grade monitoring tools with deep technical expertise to keep your systems running at peak performance while reducing operational costs.
                </motion.p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-6"
              >
                {[
                  {
                    icon: "📊",
                    title: "Performance Metrics",
                    desc: "Real-time dashboards with key system health indicators",
                    color: "blue"
                  },
                  {
                    icon: "🔍",
                    title: "Anomaly Detection",
                    desc: "AI-powered alerts for unusual system behavior",
                    color: "emerald"
                  },
                  {
                    icon: "🛡️",
                    title: "Security Posture",
                    desc: "Continuous vulnerability assessment and scoring",
                    color: "purple"
                  },
                  {
                    icon: "📈",
                    title: "Capacity Planning",
                    desc: "Resource utilization trends and forecasts",
                    color: "amber"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className={`bg-gradient-to-br from-${item.color}-50 to-white rounded-2xl border border-${item.color}-100 p-6 shadow-sm hover:shadow-md transition-all duration-300 ${index % 2 === 0 ? '' : 'mt-8'}`}
                    whileHover={{ y: -5 }}
                  >
                    <div className={`bg-${item.color}-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4`}>
                      <span className="text-3xl">{item.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>




        {/* Features Section */}
        <div className="py-20 bg-gray-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-[length:100px_100px] opacity-5"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-16">
              <motion.div
                className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200 mb-6 mx-auto"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="text-sm font-medium bg-gradient-to-r from-gray-600 to-emerald-600 bg-clip-text text-transparent">
                  OUR CAPABILITIES
                </span>
              </motion.div>

              <motion.h2
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Comprehensive Maintenance <span className="bg-gradient-to-r from-gray-600 to-emerald-600 bg-clip-text text-transparent">Features</span>
              </motion.h2>

              <motion.div
                className="w-24 h-1.5 bg-gradient-to-r from-gray-500 to-emerald-500 mx-auto rounded-full mb-6"
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
                Our suite of maintenance services is designed to maximize system reliability while minimizing operational disruptions.
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
                  className="group relative"
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden h-full border border-gray-200 group-hover:border-transparent transition-all duration-300 hover:shadow-xl">
                    <div className="p-6">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-3xl mb-6 text-white shadow-md`}>
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>




        {/* Why Choose Us Section */}
        <div className="py-20 bg-white relative">
          <div className="absolute inset-0 bg-[url('/pattern-dots.svg')] bg-[length:30px_30px] opacity-10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Maintenance Methodology</h3>
                  <div className="space-y-6">
                    {[
                      {
                        num: "1",
                        title: "Preventive Maintenance",
                        desc: "Regular system checks and updates to prevent failures before they occur"
                      },
                      {
                        num: "2",
                        title: "Predictive Analysis",
                        desc: "Advanced monitoring to predict and prevent potential system issues"
                      },
                      {
                        num: "3",
                        title: "Continuous Optimization",
                        desc: "Ongoing tuning to maintain peak system performance and efficiency"
                      }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start bg-white p-4 rounded-xl border border-gray-100 hover:border-emerald-200 transition-all duration-300 hover:shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className={`bg-gradient-to-r from-gray-600 to-emerald-600 text-white rounded-lg w-10 h-10 flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0 shadow-sm`}>
                          {item.num}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                          <p className="text-gray-600">{item.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="inline-flex items-center px-4 py-2 bg-white border border-emerald-800/20 rounded-full mb-6 shadow-sm"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <span className="text-sm font-medium bg-gradient-to-r from-gray-600 to-emerald-600 bg-clip-text text-transparent">
                    WHY CHOOSE US
                  </span>
                </motion.div>

                <motion.h2
                  className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  The SupportGuard <span className="bg-gradient-to-r from-gray-600 to-emerald-600 bg-clip-text text-transparent">Difference</span>
                </motion.h2>

                <motion.ul
                  className="space-y-4 mb-8"
                  initial="hidden"
                  whileInView="visible"
                  variants={staggerItems}
                  viewport={{ once: true }}
                >
                  {whyChooseUs.map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start bg-white/50 backdrop-blur-sm p-4 rounded-lg border border-gray-100 hover:border-emerald-200 transition-colors"
                      variants={itemVariants}
                      whileHover={{ x: 5 }}
                    >
                      <div className="bg-emerald-800 rounded-full p-1 mt-1 mr-3 flex-shrink-0 shadow-sm">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="text-lg text-gray-800">{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </div>
          </div>
        </div>




        {/* Services Offered Section */}
        <div className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-[length:100px_100px] opacity-5"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-16">
              <motion.div
                className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200 mb-6 mx-auto"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="text-sm font-medium bg-gradient-to-r from-gray-600 to-emerald-600 bg-clip-text text-transparent">
                  OUR SERVICES
                </span>
              </motion.div>

              <motion.h2
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Comprehensive <span className="bg-gradient-to-r from-gray-600 to-emerald-600 bg-clip-text text-transparent">Maintenance Services</span>
              </motion.h2>

              <motion.p
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Specialized support solutions tailored to your IT infrastructure needs
              </motion.p>
            </div>

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
                  className={`group ${service.bg} rounded-xl border ${service.border} p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
                >
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-lg ${service.bg} border ${service.border} flex items-center justify-center text-2xl mr-4 shadow-sm`}>
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <button className="text-sm font-medium bg-gradient-to-r from-gray-600 to-emerald-600 bg-clip-text text-transparent hover:text-emerald-800 flex items-center transition-colors">
                    Service details
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>




        {/* Industries Section */}
        <div className="py-20 bg-white relative">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-[length:300px_300px] opacity-5"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-16">
              <motion.div
                className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200 mb-6 mx-auto"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="text-sm font-medium bg-gradient-to-r from-gray-600 to-emerald-600 bg-clip-text text-transparent">
                  INDUSTRY EXPERTISE
                </span>
              </motion.div>

              <motion.h2
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Specialized Support for <span className="bg-gradient-to-r from-gray-600 to-emerald-600 bg-clip-text text-transparent">Your Industry</span>
              </motion.h2>

              <motion.p
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our team has deep expertise across multiple sectors with tailored solutions for each industry's unique requirements
              </motion.p>
            </div>

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
                  className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="flex items-center mb-4">
                    <div className="text-4xl mr-4">{industry.icon}</div>
                    <h3 className={`text-xl font-semibold ${industry.color}`}>{industry.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{industry.description}</p>
                  <button className="text-sm font-medium bg-gradient-to-r from-gray-600 to-emerald-600 bg-clip-text text-transparent hover:text-emerald-800 flex items-center transition-colors">
                    Learn more
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>




        {/* Support Process Section */}
        <div className="py-20 bg-gray-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-[length:100px_100px] opacity-5"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-16">
              <motion.div
                className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200 mb-6 mx-auto"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="text-sm font-medium bg-gradient-to-r from-gray-600 to-emerald-600 bg-clip-text text-transparent">
                  OUR PROCESS
                </span>
              </motion.div>

              <motion.h2
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                The SupportGuard <span className="bg-gradient-to-r from-gray-600 to-emerald-600 bg-clip-text text-transparent">Workflow</span>
              </motion.h2>

              <motion.p
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                A structured approach to maintaining your systems and resolving issues efficiently
              </motion.p>
            </div>

            <div className="relative">
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 transform -translate-y-1/2 z-0"></div>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10"
                initial="hidden"
                whileInView="visible"
                variants={containerVariants}
                viewport={{ once: true }}
              >
                {supportProcess.map((step, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${step.color} text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl shadow-lg`}>
                      {step.step}
                    </div>
                    <div className="text-4xl mb-4 mt-6 text-center">{step.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{step.title}</h3>
                    <p className="text-gray-600 text-center">{step.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>




        {/* FAQ Section */}
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
                <div className="w-2 h-2 bg-gradient-to-r from-gray-600 to-emerald-600 rounded-full mr-3"></div>
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
                <span className="bg-gradient-to-r from-gray-600 to-emerald-600 bg-clip-text text-transparent">
                  Questions
                </span>
              </motion.h2>

              <motion.div
                className="w-24 h-1.5 bg-gradient-to-r from-gray-600 to-emerald-600 mx-auto rounded-full mb-8 relative"
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "6rem", opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-emerald-600 rounded-full blur-sm opacity-50"></div>
              </motion.div>

              <motion.p
                className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                viewport={{ once: true }}
              >
                Find answers to common questions about our maintenance and support services.
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
                    <div className="h-1 bg-gradient-to-r from-gray-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <button
                      className="flex justify-between items-center w-full p-8 text-left group relative"
                      onClick={() => toggleFaq(index)}
                    >
                      {/* Background Hover Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-50/50 to-emerald-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      <div className="flex items-start flex-1 relative z-10">
                        {/* Question Number */}
                        <div className="bg-gradient-to-r from-gray-600 to-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 text-sm font-bold shadow-lg">
                          {String(index + 1).padStart(2, '0')}
                        </div>

                        <div className="flex-1">
                          <span className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-700 group-hover:to-emerald-700 group-hover:bg-clip-text transition-all duration-300">
                            {faq.question}
                          </span>
                        </div>
                      </div>

                      {/* Arrow Icon */}
                      <div className="relative z-10 ml-4">
                        <div className="bg-gradient-to-r from-gray-100 to-emerald-100 group-hover:from-gray-600 group-hover:to-emerald-600 rounded-full p-3 transition-all duration-300">
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
                              <div className="w-full h-full bg-gradient-to-br from-gray-600 to-emerald-600 rounded-full transform rotate-12"></div>
                            </div>

                            <div className="flex items-start relative z-10">
                              {/* Answer Icon */}
                              <div className="bg-gradient-to-r from-gray-600 to-emerald-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
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
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-600/10 to-emerald-600/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10 transform translate-y-4"></div>
                </motion.div>
              ))}
            </motion.div>

            {/* Bottom CTA */}
            <div className="text-center mt-16">
              <div className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-emerald-100 to-gray-100 rounded-full border border-emerald-200/50 shadow-sm hover:shadow-md transition-all duration-300">
                <span className="text-emerald-700 font-medium mr-2">Still have questions?</span>
                <a href="/contact"><button className="text-emerald-600 hover:text-emerald-800 font-semibold underline decoration-2 underline-offset-2 transition-colors">
                  Contact us
                </button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MaintenanceSupport;