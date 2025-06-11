import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiShoppingCart, FiHeart, FiBookOpen, FiCreditCard, FiMap, FiUsers } from "react-icons/fi";
import MobileHeader from '../Components/MobileDevHeader';
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
    {
      title: "Industry-leading expertise",
      description: "Over a decade of experience in mobile app development",
      icon: "🏆"
    },
    {
      title: "Innovative design approach",
      description: "Cutting-edge UI/UX design that enhances user experience",
      icon: "💡"
    },
    {
      title: "Native & hybrid app development",
      description: "Comprehensive solutions for all mobile platforms",
      icon: "📱"
    },
    {
      title: "Customized business solutions",
      description: "Tailored applications that meet your specific needs",
      icon: "⚙️"
    },
    {
      title: "End-to-end development services",
      description: "From concept to deployment and beyond",
      icon: "🔄"
    },
    {
      title: "Competitive pricing models",
      description: "Flexible pricing options that fit your budget",
      icon: "💰"
    }
  ];

  // Developer expertise
  const expertise = [
    {
      title: "Android Development with Flutter",
      description: "Native app development for both major mobile platforms with optimal performance and user experience.",
      icon: "📱",
      color: "from-blue-500 to-cyan-400",
      bgColor: "from-blue-50 to-cyan-50",
      iconBg: "bg-gradient-to-r from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-200/50",
      hoverBorder: "hover:border-blue-400/60"
    },
    {
      title: "Cross-Platform Solutions",
      description: "Flutter and React Native development for cost-effective solutions that work seamlessly across platforms.",
      icon: "🔄",
      color: "from-purple-500 to-indigo-400",
      bgColor: "from-purple-50 to-indigo-50",
      iconBg: "bg-gradient-to-r from-purple-500/10 to-indigo-500/10",
      borderColor: "border-purple-200/50",
      hoverBorder: "hover:border-purple-400/60"
    },
    {
      title: "UI/UX Design",
      description: "Creating intuitive, visually appealing mobile interfaces that prioritize user experience and engagement.",
      icon: "🎨",
      color: "from-emerald-500 to-teal-400",
      bgColor: "from-emerald-50 to-teal-50",
      iconBg: "bg-gradient-to-r from-emerald-500/10 to-teal-500/10",
      borderColor: "border-emerald-200/50",
      hoverBorder: "hover:border-emerald-400/60"
    },
    {
      title: "API Integration",
      description: "Seamless integration with backend services, third-party APIs, and cloud platforms for enhanced functionality.",
      icon: "🔗",
      color: "from-orange-500 to-red-400",
      bgColor: "from-orange-50 to-red-50",
      iconBg: "bg-gradient-to-r from-orange-500/10 to-red-500/10",
      borderColor: "border-orange-200/50",
      hoverBorder: "hover:border-orange-400/60"
    },
    {
      title: "App Maintenance & Support",
      description: "Ongoing updates, security patches, performance optimization, and 24/7 technical support services.",
      icon: "🛠️",
      color: "from-amber-500 to-yellow-400",
      bgColor: "from-amber-50 to-yellow-50",
      iconBg: "bg-gradient-to-r from-amber-500/10 to-yellow-500/10",
      borderColor: "border-amber-200/50",
      hoverBorder: "hover:border-amber-400/60"
    },
    {
      title: "App Store Optimization",
      description: "Maximize visibility and downloads in app stores with strategic optimization and marketing techniques.",
      icon: "📊",
      color: "from-rose-500 to-pink-400",
      bgColor: "from-rose-50 to-pink-50",
      iconBg: "bg-gradient-to-r from-rose-500/10 to-pink-500/10",
      borderColor: "border-rose-200/50",
      hoverBorder: "hover:border-rose-400/60"
    }
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
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
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
        duration: 0.7
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <MobileHeader />

      {/* Introduction */}
      <div className="bg-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-emerald-50 opacity-40"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-gray-500 to-emerald-500 rounded-full opacity-10 transform translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-r from-emerald-500 to-gray-500 rounded-full opacity-10 transform -translate-x-16 translate-y-16"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.div variants={slideUp} className="relative">
                <div className="absolute -left-4 top-0 w-1 h-16 bg-gradient-to-b from-gray-500 to-emerald-500 rounded-full"></div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Our Mobile App
                  <span className="bg-gradient-to-r from-gray-600 to-emerald-600 bg-clip-text text-transparent"> Development</span> Services
                </h2>
              </motion.div>

              <motion.p
                className="text-xl text-gray-700 leading-relaxed font-light"
                variants={slideUp}
              >
                In today's mobile-first world, applications have become essential touch points between businesses and users. For over a decade, <span className="font-semibold text-gray-900">TechIsta</span> has established itself as a premier mobile app development company, crafting solutions across diverse industries.
              </motion.p>

              <motion.p
                className="text-lg text-gray-600 leading-relaxed"
                variants={slideUp}
              >
                We specialize in creating native and hybrid applications for Android, transforming your vision into intuitive, high-performance mobile experiences.
              </motion.p>

              <motion.div
                variants={slideUp}
                className="flex flex-wrap gap-4 pt-4"
              >
                <div className="bg-gradient-to-r from-gray-500 to-emerald-500 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  Andorid Development
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Main Image Grid */}
              <div className="grid grid-cols-2 gap-6">
                <motion.div
                  variants={imageVariants}
                  className="relative group"
                >
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                    <div className="h-48 rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-emerald-100">
                      <img
                        src="https://img.freepik.com/free-vector/realistic-ui-ux-background_23-2149046824.jpg?semt=ais_hybrid&w=740"
                        alt="UI/UX Design"
                        className="h-full w-full object-cover hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-500/20 to-emerald-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>

                <motion.div
                  variants={imageVariants}
                  className="relative group mt-8"
                >
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                    <div className="h-48 rounded-xl overflow-hidden bg-gradient-to-br from-emerald-100 to-gray-100">
                      <img
                        src="https://img.freepik.com/free-vector/app-development-illustration_52683-47931.jpg?semt=ais_hybrid&w=740"
                        alt="App Development"
                        className="h-full w-full object-cover hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-gray-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>

                <motion.div
                  variants={imageVariants}
                  className="relative group"
                >
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                    <div className="h-48 rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-emerald-100">
                      <img
                        src="https://img.freepik.com/free-photo/high-angle-hands-holding-paper_23-2149930977.jpg?semt=ais_hybrid&w=740"
                        alt="Mobile Strategy"
                        className="h-full w-full object-cover hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-500/20 to-emerald-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>

                <motion.div
                  variants={imageVariants}
                  className="relative group mt-8"
                >
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                    <div className="h-48 rounded-xl overflow-hidden bg-gradient-to-br from-emerald-100 to-gray-100">
                      <img
                        src="https://img.freepik.com/premium-vector/mobile-application-coding-flat-3d-isometric-vector-concept-illustration_92926-5948.jpg?semt=ais_hybrid&w=740"
                        alt="Mobile Coding"
                        className="h-full w-full object-cover hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-gray-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-gray-500 to-emerald-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-emerald-500 to-gray-500 rounded-full opacity-30 animate-bounce"></div>
            </motion.div>
          </div>
        </div>
      </div>




      {/* Services */}
      <div className="py-20 bg-gradient-to-br from-gray-50 via-white to-emerald-50 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-gray-500/10 to-emerald-500/10 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-r from-emerald-500/10 to-gray-500/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-r from-gray-500/15 to-emerald-500/15 rounded-full blur-lg"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-gray-500/10 to-emerald-500/10 backdrop-blur-sm rounded-full border border-gray-200/50 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-medium bg-gradient-to-r from-gray-600 to-emerald-600 bg-clip-text text-transparent">
                Premium Mobile Solutions
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <span className="text-gray-900">Comprehensive </span>
              <span className="bg-gradient-to-r from-gray-500 to-emerald-500 bg-clip-text text-transparent">
                Mobile Development
              </span>
              <br />
              <span className="text-gray-900">Services</span>
            </motion.h2>

            <motion.div
              className="w-32 h-1.5 bg-gradient-to-r from-gray-500 to-emerald-500 mx-auto rounded-full mb-8 relative"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "8rem", opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-emerald-500 rounded-full blur-sm opacity-50"></div>
            </motion.div>

            <motion.p
              className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              viewport={{ once: true }}
            >
              We provide end-to-end mobile solutions that transform business operations and enhance user experiences with cutting-edge technology and innovative design.
            </motion.p>
          </div>

          {/* Services Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden h-full transform transition-all duration-500 group-hover:-translate-y-3 border border-gray-100/50 backdrop-blur-sm relative">
                  {/* Gradient Top Border */}
                  <div className={`bg-gradient-to-r ${service.color} h-1.5 relative`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Card Content */}
                  <div className="p-8 relative">
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                      <div className="w-full h-full bg-gradient-to-br from-gray-500 to-emerald-500 rounded-full transform rotate-12"></div>
                    </div>

                    {/* Icon and Title */}
                    <div className="flex items-start mb-6">
                      <div className="text-5xl mr-4 transform group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-600 group-hover:to-emerald-600 group-hover:bg-clip-text transition-all duration-300">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-8 text-base">
                      {service.description}
                    </p>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>

                {/* Floating Shadow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-500/20 to-emerald-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10 transform translate-y-4"></div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="relative bg-white rounded-3xl shadow-2xl p-12 md:p-16 text-center overflow-hidden border border-gray-100/50"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-emerald-50/50"></div>
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gray-500 to-emerald-500"></div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r from-gray-500/10 to-emerald-500/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-emerald-500/10 to-gray-500/10 rounded-full blur-2xl"></div>

            <div className="relative z-10">
              <motion.h3
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <span className="text-gray-900">Ready to Build Your </span>
                <span className="bg-gradient-to-r from-gray-500 to-emerald-500 bg-clip-text text-transparent">
                  Mobile Solution?
                </span>
              </motion.h3>

              <motion.p
                className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Partner with a leading app development company to create innovative, high-quality mobile experiences that drive business growth and user engagement.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>




      {/* Why Choose Us */}
      <div className="py-24 bg-gradient-to-br from-slate-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.1),transparent_50%)]"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-violet-500/20 to-emerald-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-gradient-to-r from-emerald-500/20 to-violet-500/20 rounded-full blur-2xl animate-bounce"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left Side - Image */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={imageVariants}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Main Image Container */}
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100/50 transform rotate-1 hover:rotate-0 transition-transform duration-700">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gray-500 to-emerald-500"></div>

                <div className="p-6">
                  <div className="relative h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-slate-100">
                    <img
                      src="https://www.softwaresuggest.com/blog/wp-content/uploads/2024/03/14-best-free-and-open-source-mobile-app-development-software-1.jpg"
                      alt="Mobile App Development"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-gray-500/30 to-emerald-500/30 rounded-full blur-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-emerald-500/30 to-gray-500/30 rounded-full blur-xl"></div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={textVariants}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Header */}
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  <span className="text-gray-900">Why </span>
                  <span className="bg-gradient-to-r from-gray-500 to-emerald-500 bg-clip-text text-transparent">
                    Choose Us
                  </span>
                </h2>

                <p className="text-xl text-gray-600 leading-relaxed">
                  We combine cutting-edge technology with creative excellence to deliver mobile solutions that transform businesses and delight users.
                </p>
              </div>

              {/* Features Grid */}
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {whyChooseUs.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl border border-gray-100/50 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-gray-500 to-emerald-500 text-white rounded-xl w-12 h-12 flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-emerald-600 group-hover:bg-clip-text transition-all duration-300">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>




      {/* Expertise */}
      <div className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-gray-500/5 to-emerald-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-60 right-20 w-60 h-60 bg-gradient-to-r from-gray-500/5 to-emerald-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 left-1/4 w-32 h-32 bg-gradient-to-r from-gray-500/5 to-emerald-500/5 rounded-full blur-2xl animate-pulse delay-2000"></div>
          <div className="absolute bottom-20 right-1/3 w-48 h-48 bg-gradient-to-r from-gray-500/5 to-emerald-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <motion.div
              className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-lg mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-2 h-2 bg-gradient-to-r from-gray-500 to-emerald-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-semibold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                Technical Excellence
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              variants={titleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="text-gray-900">Our Mobile Development</span>
              <br />
              <span className="bg-gradient-to-r from-gray-500 to-emerald-500 bg-clip-text text-transparent">
                Expertise
              </span>
            </motion.h2>

            <motion.div
              className="flex justify-center mb-8"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "auto", opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="h-1.5 w-32 bg-gradient-to-r from-gray-500 to-emerald-500 rounded-full relative">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-emerald-500 rounded-full blur-sm opacity-60"></div>
              </div>
            </motion.div>

            <motion.p
              className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
            >
              We combine cutting-edge technologies with innovative methodologies to deliver mobile solutions that exceed expectations and drive business success.
            </motion.p>
          </div>

          {/* Expertise Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                <div className={`bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-lg border ${item.borderColor} ${item.hoverBorder} transition-all duration-500 hover:shadow-2xl hover:scale-105 h-full relative overflow-hidden`}>
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                  {/* Top Gradient Line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon Container */}
                    <div className="flex items-center mb-6">
                      <div className={`${item.iconBg} rounded-2xl w-16 h-16 flex items-center justify-center mr-5 group-hover:scale-110 transition-transform duration-300 border border-white/50`}>
                        <span className="text-3xl">{item.icon}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-800 group-hover:to-gray-600 group-hover:bg-clip-text transition-all duration-300">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed text-base group-hover:text-gray-700 transition-colors duration-300">
                      {item.description}
                    </p>

                    {/* Decorative Elements */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                      <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-full`}></div>
                    </div>
                  </div>

                  {/* Hover Effect Lines */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className={`absolute top-0 left-0 w-full h-px bg-gradient-to-r ${item.color}`}></div>
                    <div className={`absolute bottom-0 left-0 w-full h-px bg-gradient-to-r ${item.color}`}></div>
                    <div className={`absolute top-0 left-0 h-full w-px bg-gradient-to-b ${item.color}`}></div>
                    <div className={`absolute top-0 right-0 h-full w-px bg-gradient-to-b ${item.color}`}></div>
                  </div>
                </div>

                {/* Floating Shadow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 transform translate-y-4`}></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>




      {/* Industries */}
      <div className="py-20 bg-gradient-to-br from-gray-50 via-white to-emerald-50 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 right-10 w-40 h-40 bg-gradient-to-r from-gray-500/10 to-emerald-500/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-r from-emerald-500/10 to-gray-500/10 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-gray-500/5 to-emerald-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-gray-500/10 to-emerald-500/10 backdrop-blur-sm rounded-full border border-gray-200/50 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-medium bg-gradient-to-r from-gray-600 to-emerald-600 bg-clip-text text-transparent">
                Diverse Industry Expertise
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <span className="text-gray-900">Industries We </span>
              <span className="bg-gradient-to-r from-gray-500 to-emerald-500 bg-clip-text text-transparent">
                Transform
              </span>
            </motion.h2>

            <motion.div
              className="w-32 h-1.5 bg-gradient-to-r from-gray-500 to-emerald-500 mx-auto rounded-full mb-8 relative"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "8rem", opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-emerald-500 rounded-full blur-sm opacity-50"></div>
            </motion.div>

            <motion.p
              className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              viewport={{ once: true }}
            >
              From startups to enterprises, we deliver tailored mobile solutions across diverse industries, driving innovation and growth through cutting-edge technology.
            </motion.p>
          </div>

          {/* Industries Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
          >
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden h-full transform transition-all duration-500 group-hover:-translate-y-3 border border-gray-100/50 backdrop-blur-sm relative">
                  {/* Gradient Top Border */}
                  <div className="bg-gradient-to-r from-gray-500 to-emerald-500 h-1.5 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Card Content */}
                  <div className="p-8 relative">
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                      <div className="w-full h-full bg-gradient-to-br from-gray-500 to-emerald-500 rounded-full transform rotate-12"></div>
                    </div>

                    {/* Icon Container */}
                    <div className="relative mb-6">
                      <div className="bg-gradient-to-br from-gray-100 to-emerald-100 rounded-2xl w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative overflow-hidden">
                        {/* Icon Background Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        {/* Icon */}
                        <div className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 relative z-10">
                          {industry.icon}
                        </div>
                      </div>

                      {/* Floating Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-500/20 to-emerald-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-600 group-hover:to-emerald-600 group-hover:bg-clip-text transition-all duration-300">
                      {industry.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed text-base group-hover:text-gray-700 transition-colors duration-300">
                      {industry.description}
                    </p>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>

                {/* Floating Shadow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-500/20 to-emerald-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10 transform translate-y-4"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>



      {/* FAQ */}
      {/* Enhanced FAQ Section */}
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

export default MobileDevelopment;