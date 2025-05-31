import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CMSDevelopment = () => {
  // State for FAQ section
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Toggle FAQ items
  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Services data
  const services = [
    {
      title: "WordPress Development",
      description: "Custom themes, plugins, and full-site development on the world's most popular CMS.",
      icon: "📝",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Joomla Development",
      description: "Enterprise-grade solutions with powerful content management capabilities.",
      icon: "🖥️",
      color: "from-orange-500 to-amber-500"
    },
    {
      title: "Drupal Development",
      description: "Highly scalable and secure solutions for complex content ecosystems.",
      icon: "💧",
      color: "from-blue-700 to-indigo-600"
    },
    {
      title: "Headless CMS",
      description: "API-first architecture for omnichannel content delivery.",
      icon: "🔌",
      color: "from-purple-500 to-pink-500"
    }
  ];

  // Why choose us
  const whyChooseUs = [
    "10+ years of CMS expertise",
    "Custom solutions for unique needs",
    "SEO-optimized architecture",
    "Responsive design implementation",
    "Security-focused development",
    "Ongoing maintenance & support"
  ];

  // Features
  const features = [
    {
      title: "User Management",
      description: "Role-based access control with granular permissions.",
      icon: "👥"
    },
    {
      title: "Content Workflows",
      description: "Custom editorial workflows and approval processes.",
      icon: "🔄"
    },
    {
      title: "Multilingual Support",
      description: "Built-in translation capabilities for global audiences.",
      icon: "🌐"
    },
    {
      title: "SEO Optimization",
      description: "Clean code and structured data for better rankings.",
      icon: "🔍"
    },
    {
      title: "E-commerce Integration",
      description: "Seamless connection with shopping cart solutions.",
      icon: "🛒"
    },
    {
      title: "API Integrations",
      description: "Connect with third-party services and applications.",
      icon: "🔗"
    }
  ];

  // Platforms we work with
  const platforms = [
    {
      name: "WordPress",
      description: "Flexible, user-friendly platform powering 43% of the web."
    }
  ];

  // Development process
  const processSteps = [
    {
      step: "1",
      title: "Requirement Analysis",
      description: "Understanding your content needs and business goals."
    },
    {
      step: "2",
      title: "Platform Selection",
      description: "Choosing the right CMS for your specific requirements."
    },
    {
      step: "3",
      title: "Design & Development",
      description: "Creating custom templates and functionality."
    },
    {
      step: "4",
      title: "Content Migration",
      description: "Seamless transfer of existing content to new CMS."
    },
    {
      step: "5",
      title: "Training & Launch",
      description: "Empowering your team to manage content effectively."
    }
  ];

  // FAQs
  const faqs = [
    {
      question: "Which CMS is best for my business?",
      answer: "It depends on your specific needs. WordPress is great for most websites, Drupal excels at complex content structures, and headless CMS solutions are ideal for omnichannel content delivery."
    },
    {
      question: "How much does a custom CMS development cost?",
      answer: "Costs range from ₹80,000 for basic WordPress sites to ₹8,00,000+ for enterprise Drupal implementations, depending on complexity and features."
    },
    {
      question: "Can you migrate my existing website to a new CMS?",
      answer: "Yes, we specialize in seamless content migrations from any platform to your new CMS with minimal disruption."
    },
    {
      question: "Do you provide CMS training?",
      answer: "Absolutely! We provide comprehensive training to ensure your team can effectively manage content after launch."
    },
    {
      question: "How long does CMS development take?",
      answer: "Typically 4-12 weeks depending on complexity, from initial planning to final launch."
    }
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Ananya Sharma",
      company: "Global News Network",
      content: "The Drupal solution they built handles our 50,000+ articles with ease. The custom editorial workflow has transformed our publishing process.",
      avatar: "AS"
    },
    {
      name: "Rahul Mehta",
      company: "EduTech Solutions",
      content: "Our new WordPress multisite network allows 25+ schools to manage their own content while maintaining brand consistency.",
      avatar: "RM"
    },
    {
      name: "Priya Patel",
      company: "HealthCare Online",
      content: "The multilingual Joomla site they developed serves patients in 8 languages with region-specific content.",
      avatar: "PP"
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
      <div className="relative overflow-hidden inset-0 bg-gradient-to-r from-gray-900 to-emerald-800 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform hover:from-gray-800 hover:to-emerald-700 z-0">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E")`
        }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative">
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
                Powerful Content Management Solutions
              </motion.h1>
              <motion.p
                className="text-xl text-blue-200 mb-8 max-w-2xl"
                variants={slideUp}
              >
                We build custom CMS platforms that empower teams to create, manage, and deliver exceptional content experiences.
              </motion.p>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-full h-full bg-violet-600  rounded-2xl"></div>
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl w-full max-w-md">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6">
                    <h3 className="text-white text-xl font-bold">CMS Solutions</h3>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-center mb-4">
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-64 h-64 flex items-center justify-center">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2I5r9G9h59NZtsojKcwhGCCUGYWc51QOsbw&s" alt="" />
                      </div>
                    </div>
                    <p className="text-gray-700 text-center">Custom content management systems built for your needs</p>
                    <div className="flex justify-center mt-6 gap-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                      <div className="w-3 h-3 rounded-full bg-purple-500"></div>
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
                Expert CMS Development Services
              </motion.h2>
              <motion.p
                className="text-lg text-gray-600 mb-8"
                variants={slideUp}
              >
                We specialize in creating custom content management solutions that empower your team to manage digital content efficiently. Whether you need a simple blog platform or a complex enterprise content ecosystem, we deliver CMS solutions tailored to your specific requirements.
              </motion.p>
              <motion.p
                className="text-lg text-gray-600"
                variants={slideUp}
              >
                Our CMS implementations focus on usability, scalability, and security, ensuring your content platform grows with your business while maintaining optimal performance.
              </motion.p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-dashed border-blue-200 rounded-xl h-64 flex flex-col items-center justify-center text-gray-500 p-4">
                <img src="https://kinsta.com/wp-content/uploads/2018/03/wp-what-is-a-content-management-system-1024x512.jpg" alt="" />
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-dashed border-blue-200 rounded-xl h-64 mt-8 flex flex-col items-center justify-center text-gray-500 p-4">
    <img src="https://www.cflowapps.com/wp-content/uploads/2021/02/workflow-efficiency.jpg" alt="" />
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-dashed border-blue-200 rounded-xl h-64 flex flex-col items-center justify-center text-gray-500 p-4">
              <img src="https://www.1000grad.de/wp-content/uploads/2023/07/Headless-CMS-1-scaled.jpg" alt="" />
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-dashed border-blue-200 rounded-xl h-64 mt-8 flex flex-col items-center justify-center text-gray-500 p-4">
                <img src="https://themesnap.com/wp-content/uploads/2024/08/optimizing_cms_user_access.jpg" alt="" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Our CMS Development Services
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mb-6"
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
              Comprehensive solutions to build, optimize, and maintain your content platform
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
                <div className={`bg-gradient-to-br ${service.color} rounded-2xl shadow-lg overflow-hidden h-full transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl`}>
                  <div className="p-6 text-white">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="opacity-90">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-dashed border-blue-200 rounded-xl w-full h-96 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-5xl mb-4">📈</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Results</h3>
                  <p className="text-gray-600">Our CMS implementations reduce content management time by an average of 40%</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our CMS Solutions?
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

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <p className="text-blue-800">
                    "The custom WordPress CMS they built has transformed our content workflow. What used to take hours now takes minutes, and our team couldn't be happier with the intuitive interface."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Essential CMS Features
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mb-6"
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
              We implement all the features your content team needs to succeed
            </motion.p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:border-blue-300 transition-all"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Platforms */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              CMS Platforms We Specialize In
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mb-6"
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
              We work with all major content management platforms
            </motion.p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
          >
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-4">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCxa3XSVAFs3-W8Ld77MJzb5L9f08jNGheBg&s" alt="" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{platform.name}</h3>
                <p className="text-gray-600 text-sm">{platform.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Process */}
      <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Our CMS Development Process
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: "6rem" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 transform -translate-y-1/2"></div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative"
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true }}
            >
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 relative"
                >
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
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

      {/* Testimonials */}
      {/* <div className="py-16 bg-gradient-to-r from-blue-800 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Client Success Stories
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto rounded-full mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: "6rem" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />
            <motion.p
              className="text-xl text-blue-200 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Hear from organizations that transformed their content management
            </motion.p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-white text-blue-600 rounded-full w-12 h-12 flex items-center justify-center font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-blue-200 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex text-yellow-300 mb-4">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <p className="text-white/90">{testimonial.content}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div> */}

      {/* FAQ */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: "6rem" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </div>

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
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  className="flex justify-between items-center w-full p-6 text-left"
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
      <div className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500 rounded-full -m-24 opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500 rounded-full -m-32 opacity-20"></div>

            <div className="relative z-10">
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Ready to Transform Your Content Management?
              </motion.h2>
              <motion.p
                className="text-xl text-blue-200 max-w-2xl mx-auto mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Let's build a CMS solution that empowers your team and engages your audience
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <button className="px-8 py-4 bg-white text-blue-700 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
                  Get Started
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                  Schedule a Consultation
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CMSDevelopment;