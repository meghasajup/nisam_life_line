import React, { useState } from 'react';
import { motion } from 'framer-motion';

const EcommerceDevelopment = () => {
  // State for FAQ section
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Toggle FAQ items
  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Services data
  const services = [
    {
      title: "E-commerce Store Development",
      description: "Custom online stores built with modern platforms like Shopify, WooCommerce, and Magento.",
      icon: "🛒",
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Mobile Shopping Apps",
      description: "Native iOS and Android apps for seamless mobile shopping experiences.",
      icon: "📱",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Payment Gateway Integration",
      description: "Secure integration of payment processors like Stripe, PayPal, and Razorpay.",
      icon: "💳",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Inventory Management",
      description: "Advanced systems to track, manage, and optimize your product inventory.",
      icon: "📊",
      color: "from-amber-500 to-yellow-500"
    }
  ];

  // Why choose us
  const whyChooseUs = [
    "E-commerce specialists with 10+ years experience",
    "Mobile-first responsive designs",
    "SEO-optimized product listings",
    "Conversion rate optimization",
    "Secure payment processing",
    "24/7 technical support"
  ];

  // Features
  const features = [
    {
      title: "Product Catalogs",
      description: "Beautifully organized product displays with filters and search functionality.",
      icon: "📋"
    },
    {
      title: "Shopping Cart",
      description: "Intuitive cart system with saved items and easy checkout process.",
      icon: "🛒"
    },
    {
      title: "User Accounts",
      description: "Personalized accounts with order history and saved preferences.",
      icon: "👤"
    },
    {
      title: "Payment Processing",
      description: "Multiple payment options with PCI-compliant security.",
      icon: "💳"
    },
    {
      title: "Order Management",
      description: "Dashboard to track, manage, and fulfill customer orders.",
      icon: "📦"
    },
    {
      title: "Analytics Dashboard",
      description: "Detailed insights into sales, customers, and marketing performance.",
      icon: "📈"
    }
  ];

  // Platforms we work with
  const platforms = [
    {
      name: "Shopify",
      description: "All-in-one commerce platform to start, grow, and manage a business."
    },
    {
      name: "WooCommerce",
      description: "Customizable e-commerce solution built on WordPress."
    },
    {
      name: "Magento",
      description: "Flexible e-commerce platform for growing businesses."
    },
    {
      name: "BigCommerce",
      description: "Enterprise-grade e-commerce solution."
    },
    {
      name: "Custom Solutions",
      description: "Tailor-made e-commerce platforms for unique business needs."
    }
  ];

  // Development process
  const processSteps = [
    {
      step: "1",
      title: "Discovery & Strategy",
      description: "Understanding your business goals and target audience."
    },
    {
      step: "2",
      title: "Design & Prototyping",
      description: "Creating wireframes and UI designs for your store."
    },
    {
      step: "3",
      title: "Development",
      description: "Building your e-commerce platform with modern technologies."
    },
    {
      step: "4",
      title: "Testing & Optimization",
      description: "Ensuring flawless performance across all devices."
    },
    {
      step: "5",
      title: "Launch & Marketing",
      description: "Going live and driving traffic to your new store."
    }
  ];

  // FAQs
  const faqs = [
    {
      question: "How much does an e-commerce website cost?",
      answer: "Costs range from ₹1,00,000 for basic stores to ₹10,00,000+ for custom enterprise solutions, depending on features and complexity."
    },
    {
      question: "How long does it take to build an e-commerce store?",
      answer: "Typically 3-6 months from concept to launch, depending on the scope and complexity of the project."
    },
    {
      question: "Which e-commerce platform is best?",
      answer: "We recommend platforms based on your business needs. Shopify is great for startups, WooCommerce for WordPress sites, and Magento for larger enterprises."
    },
    {
      question: "Do you provide ongoing maintenance?",
      answer: "Yes, we offer maintenance packages that include security updates, performance optimization, and content updates."
    },
    {
      question: "Can you migrate my existing store?",
      answer: "Yes, we specialize in seamless migrations from any platform to your new e-commerce solution."
    }
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "FashionHub",
      content: "Our online sales increased by 180% after launching our new e-commerce platform. The team delivered beyond our expectations.",
      avatar: "RK"
    },
    {
      name: "Priya Sharma",
      company: "HomeDecor India",
      content: "The mobile app they developed has become our primary sales channel. User-friendly and beautifully designed.",
      avatar: "PS"
    },
    {
      name: "Vikram Patel",
      company: "ElectroWorld",
      content: "The inventory management system they implemented saved us 20 hours per week in operational costs.",
      avatar: "VP"
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
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 to-indigo-800">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`
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
                Transform Your Business with E-commerce
              </motion.h1>
              <motion.p
                className="text-xl text-indigo-200 mb-8 max-w-2xl"
                variants={slideUp}
              >
                We build high-conversion online stores that drive sales and grow your business.
              </motion.p>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-full h-full bg-purple-600 rounded-2xl"></div>
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl w-full max-w-md">
                  <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6">
                    <h3 className="text-white text-xl font-bold">E-commerce Solutions</h3>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-center mb-4">
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-64 h-64 flex items-center justify-center">
                        <img src="https://wizzy.ai/blog/wp-content/uploads/2024/07/9175118_6461-1024x640.jpg" alt="" />
                      </div>
                    </div>
                    <p className="text-gray-700 text-center">Custom online stores built for your business needs</p>
                    <div className="flex justify-center mt-6 gap-2">
                      <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                      <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    </div>
                  </div>
                </div>
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
              Our E-commerce Services
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full mb-6"
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
              Comprehensive solutions to build, grow, and optimize your online store
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
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-dashed border-purple-200 rounded-xl w-full h-96 flex items-center justify-center">
                <img src="https://cybridge.in/img/lead-generation/leadgen-attract.png" alt="" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our E-commerce Solutions?
              </h2>
              <ul className="space-y-4 mb-8">
                {whyChooseUs.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-purple-600 rounded-full p-1 mt-1 mr-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-lg text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
                <div className="flex items-start">
                  <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <p className="text-purple-800">
                    "Our online sales tripled within 6 months of launching our new e-commerce platform. The seamless integration with our inventory system saved us countless hours."
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
              Essential E-commerce Features
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full mb-6"
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
              We implement all the features your online store needs to succeed
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
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:border-purple-300 transition-all"
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
              Platforms We Specialize In
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full mb-6"
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
              We work with all major e-commerce platforms
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
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-4"></div>
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
              Our E-commerce Development Process
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: "6rem" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 transform -translate-y-1/2"></div>

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
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
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
      <div className="py-16 bg-gradient-to-r from-purple-900 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Success Stories
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-purple-400 to-indigo-400 mx-auto rounded-full mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: "6rem" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />
            <motion.p
              className="text-xl text-indigo-200 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Hear from businesses that transformed their online sales
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
                  <div className="bg-white text-purple-600 rounded-full w-12 h-12 flex items-center justify-center font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-purple-200 text-sm">{testimonial.company}</p>
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
      </div>

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
              className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full mb-6"
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
                    className={`w-6 h-6 text-purple-600 transform transition-transform ${openFaqIndex === index ? 'rotate-180' : ''}`}
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
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500 rounded-full -m-24 opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500 rounded-full -m-32 opacity-20"></div>

            <div className="relative z-10">
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Ready to Launch Your E-commerce Store?
              </motion.h2>
              <motion.p
                className="text-xl text-purple-200 max-w-2xl mx-auto mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Let's build a high-conversion online store that grows your business
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <button className="px-8 py-4 bg-white text-purple-700 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
                  Get Started
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                  Schedule a Call
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceDevelopment;