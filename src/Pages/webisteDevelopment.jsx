import React, { useState } from 'react';
import { motion } from 'framer-motion';

const WebDevelopmentService = () => {
  // State for FAQ section
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Toggle FAQ items
  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };



  // Features datage
  const features = [
    {
      title: "User-Friendly Navigation",
      description: "Visitors to your website should be able to find what they're looking for easily and quickly. Navigation should be intuitive, logical and consistent throughout the site.",
      icon: "🧭",
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50"
    },
    {
      title: "Attractive Design",
      description: "The design of a website is the first thing visitors will notice. An attractive and visually pleasing design that is simple and clean should be essential to make a good first impression of your brand.",
      icon: "🎨",
      gradient: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-50 to-pink-50"
    },
    {
      title: "Responsive & Mobile-Friendly",
      description: "With more people accessing the internet on mobile devices, it's essential to ensure that your website looks and works well on all devices.",
      icon: "📱",
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-50 to-teal-50"
    },
    {
      title: "Relevant & High-Quality Content",
      description: "Ensure that content is relevant, informative, and engaging while keeping text easy to read, broken into paragraphs, and properly formatted.",
      icon: "✍️",
      gradient: "from-orange-500 to-red-600",
      bgGradient: "from-orange-50 to-red-50"
    }
  ];

  // Why choose us
  const whyChooseUs = [
    "Expertise in Web Development",
    "Creative and Innovative Design",
    "Responsive and Mobile-Friendly Designs",
    "Customized Solutions",
    "Comprehensive Services",
    "Cost-Effective Solutions"
  ];

  // Developer expertise
  const expertise = [
    {
      title: "Full-Stack Web Development",
      description: "Handling both front-end and back-end development of web applications.",
      icon: "💻"
    },
    {
      title: "Custom Web Development",
      description: "Building custom solutions that meet specific business requirements.",
      icon: "🛠️"
    },
    {
      title: "CMS Development",
      description: "Developing websites using WordPress, Joomla, and Drupal.",
      icon: "📝"
    },
    {
      title: "E-commerce Development",
      description: "Creating secure e-commerce solutions with Magento, WooCommerce, and Shopify.",
      icon: "🛒"
    },
    {
      title: "Mobile-First Web Development",
      description: "Optimizing websites for mobile devices using responsive design techniques.",
      icon: "📲"
    },
    {
      title: "UI/UX Design",
      description: "Creating visually appealing and user-friendly interfaces.",
      icon: "🎯"
    }
  ];

  // Cost factors
  const costFactors = [
    "Type of Website",
    "Design Requirements",
    "Functionality & Features",
    "Content Creation",
    "Timeline & Urgency",
    "Maintenance & Support"
  ];

  // Industries served
  const industries = [
    {
      title: "E-commerce",
      description: "Showcase products, provide seamless checkout, and offer various payment options.",
      icon: "🛍️"
    },
    {
      title: "Healthcare",
      description: "Help patients find doctors, book appointments, and get medical advice.",
      icon: "🏥"
    },
    {
      title: "Education",
      description: "Showcase facilities, faculty, and research work to increase enrollment.",
      icon: "🎓"
    },
    {
      title: "Hospitality",
      description: "Provide information about hotel rooms, restaurants, and tourist attractions.",
      icon: "🏨"
    },
    {
      title: "Real Estate",
      description: "Offer property listings, virtual tours, and mortgage calculators.",
      icon: "🏠"
    },
    {
      title: "Professional Services",
      description: "Showcase services, client testimonials, and case studies.",
      icon: "💼"
    }
  ];

  // Development process
  const developmentProcess = [
    {
      step: "1",
      title: "Discovery & Planning",
      description: "Identify business goals, user needs, create wireframes and mockups.",
      icon: "🔍"
    },
    {
      step: "2",
      title: "Design & Development",
      description: "Create UI/UX designs and build the website with modern technologies.",
      icon: "🎨"
    },
    {
      step: "3",
      title: "Testing & Optimization",
      description: "Conduct comprehensive testing and optimize for performance.",
      icon: "🧪"
    },
    {
      step: "4",
      title: "Deployment & Maintenance",
      description: "Deploy to live server and provide ongoing updates and support.",
      icon: "🚀"
    }
  ];

  // FAQs
  const faqs = [
    {
      question: "What should I look for in a web development company?",
      answer: "Look for technical expertise, portfolio quality, communication skills, and client testimonials."
    },
    {
      question: "How long does website development take?",
      answer: "Typically 4-12 weeks depending on complexity and features required."
    },
    {
      question: "Will my website be search engine friendly?",
      answer: "Yes, we build all websites with SEO best practices from the ground up."
    },
    {
      question: "Is there any hidden cost?",
      answer: "No, we provide transparent pricing with all costs outlined upfront."
    },
    {
      question: "How much does it cost to create a website in Kerala?",
      answer: "Costs vary based on requirements, starting from ₹15,000 for basic sites up to ₹2,00,000+ for complex applications."
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
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

  const floatingAnimation = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-800">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full opacity-40 animate-ping"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-emerald-300 rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute bottom-40 left-16 w-1 h-1 bg-gray-300 rounded-full opacity-50 animate-ping"></div>
          <div className="absolute bottom-20 right-20 w-2 h-2 bg-emerald-300 rounded-full opacity-40 animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-center lg:text-left"
            >
              <motion.div
                className="inline-block bg-gradient-to-r from-gray-700 to-emerald-700 text-white px-6 py-2 rounded-full text-sm font-medium mb-6"
                variants={slideUp}
              >
                ✨ Leading Web Development Company
              </motion.div>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                variants={slideUp}
              >
                Professional
                <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent"> Web Development </span>
                Services
              </motion.h1>

              <motion.p
                className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed"
                variants={slideUp}
              >
                We craft stunning, high-performance websites that drive business growth and engage your audience with cutting-edge technology and innovative design.
              </motion.p>

              <motion.div
                className="flex items-center justify-center lg:justify-start space-x-6 text-gray-300"
                variants={slideUp}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <span className="text-sm">24/7 Support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <span className="text-sm">Fast Delivery</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center relative"
            >
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-gray-700 to-emerald-700 rounded-3xl blur opacity-75 animate-pulse"></div>

                {/* Main card */}
                <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl w-full max-w-md border border-white/20">
                  <div className="bg-gradient-to-r from-gray-500 to-emerald-500 p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-16 -translate-y-16"></div>
                    <div className="relative z-10">
                      <h3 className="text-white text-xl font-bold mb-2">iROID Web Solutions</h3>
                      <p className="text-indigo-200 text-sm">Premium Digital Experiences</p>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="relative rounded-2xl overflow-hidden mb-6 group">
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <img
                        src="https://i.pinimg.com/736x/f7/a2/e9/f7a2e9feda69ff0767250527649c3324.jpg"
                        alt="Web Development Showcase"
                        className="w-full h-48 object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <p className="text-sm font-medium">Modern Web Design</p>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-6 text-center">Transforming ideas into powerful digital experiences</p>

                    <div className="grid grid-cols-3 gap-3">
                      <div className="group cursor-pointer">
                        <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-indigo-50 to-purple-50 p-3 hover:from-indigo-100 hover:to-purple-100 transition-all duration-300">
                          <img
                            src="https://img.freepik.com/free-psd/user-interface-design-website-template_23-2149182791.jpg"
                            alt="UI Design"
                            className="w-full h-12 object-cover rounded-lg transform group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <p className="text-xs text-gray-600 mt-2 text-center">UI Design</p>
                      </div>

                      <div className="group cursor-pointer">
                        <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50 p-3 hover:from-purple-100 hover:to-pink-100 transition-all duration-300">
                          <img
                            src="https://spec.nith.ac.in/BLOGS/a1%20(5).jpg"
                            alt="Development"
                            className="w-full h-12 object-cover rounded-lg transform group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <p className="text-xs text-gray-600 mt-2 text-center">Development</p>
                      </div>

                      <div className="group cursor-pointer">
                        <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-violet-50 to-indigo-50 p-3 hover:from-violet-100 hover:to-indigo-100 transition-all duration-300">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHkf6rn3i5_kgzlsD8ua0fn6JFKAjONmdwkg&s"
                            alt="Optimization"
                            className="w-full h-12 object-cover rounded-lg transform group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-violet-600/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <p className="text-xs text-gray-600 mt-2 text-center">SEO</p>
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
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-gray-50 to-emerald-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-gray-100 to-emerald-100 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-emerald-100 to-gray-100 rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Content Section */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Badge */}
              <motion.div
                variants={slideUp}
                className="inline-flex items-center bg-gradient-to-r from-gray-50 to-emerald-50 border border-gray-200 rounded-full px-6 py-3"
              >
                <div className="w-3 h-3 bg-gradient-to-r from-gray-500 to-emerald-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-gray-700 font-semibold text-sm uppercase tracking-wide">
                  Trusted by 500+ Businesses
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                variants={slideUp}
              >
                <span className="text-gray-900">Leading </span>
                <span className="bg-gradient-to-r from-gray-600 via-emerald-600 to-gray-600 bg-clip-text text-transparent">
                  Web Development
                </span>
                <br />
                <span className="text-gray-900">Company </span>
                <span className="relative">

                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
                </span>
              </motion.h2>

              {/* Description */}
              <motion.div
                className="space-y-6"
                variants={slideUp}
              >
                <p className="text-xl text-gray-600 leading-relaxed">
                  At our core, we strive to be a leading website development company in Kerala. We take pride in crafting websites that are both
                  <span className="font-semibold text-gray-600"> visually stunning </span>
                  and
                  <span className="font-semibold text-emerald-600"> technically advanced</span>, utilizing only the most powerful and innovative technologies available on the market.
                </p>

                <p className="text-lg text-gray-600 leading-relaxed">
                  Our team of expert developers creates custom solutions that drive business growth, enhance user engagement, and deliver measurable results.
                </p>
              </motion.div>
            </motion.div>

            {/* Images Section */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Main container with improved layout */}
              <div className="relative grid grid-cols-12 grid-rows-12 gap-4 h-[600px]">
                {/* Large featured image */}
                <motion.div
                  variants={imageVariants}
                  className="col-span-7 row-span-7 relative group overflow-hidden rounded-3xl shadow-2xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-500/20 to-emerald-500/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img
                    src="https://admin.12grids.com/uploads/blogs/original_cover_images/future-of-responsive-web-design-12grids.jpg"
                    alt="Responsive Web Design"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-4 left-4 z-20">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2">
                      <p className="text-sm font-semibold text-gray-800">Responsive Design</p>
                    </div>
                  </div>
                </motion.div>

                {/* Top right image */}
                <motion.div
                  variants={imageVariants}
                  className="col-span-5 row-span-4 relative group overflow-hidden rounded-2xl shadow-lg ml-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-500/20 to-emerald-500/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img
                    src="https://blog.powr.io/hs-fs/hubfs/ecommerce-website-example-github.webp?width=801&height=450&name=ecommerce-website-example-github.webp"
                    alt="E-commerce Development"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 z-20">
                    <div className="bg-emerald-500 text-white rounded-full px-3 py-1 text-xs font-semibold">
                      E-commerce
                    </div>
                  </div>
                </motion.div>

                {/* Bottom left image */}
                <motion.div
                  variants={imageVariants}
                  className="col-span-4 row-span-4 relative group overflow-hidden rounded-2xl shadow-lg mt-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-gray-500/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img
                    src="https://www.cloudways.com/blog/wp-content/uploads/CMS-Platforms.jpg"
                    alt="CMS Development"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-3 left-3 z-20">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                      <p className="text-xs font-semibold text-gray-800">CMS Solutions</p>
                    </div>
                  </div>
                </motion.div>

                {/* Bottom right image */}
                <motion.div
                  variants={imageVariants}
                  className="col-span-8 row-span-4 relative group overflow-hidden rounded-2xl shadow-lg ml-2 mt-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-500/20 to-emerald-500/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img
                    src="https://cdn-proxy.slickplan.com/wp-content/uploads/2022/06/ux-portfolio-example-1.jpg"
                    alt="UX Design Portfolio"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 z-20">
                    <div className="bg-gradient-to-r from-gray-500 to-emerald-500 text-white rounded-full px-3 py-1 text-xs font-semibold">
                      UX/UI Design
                    </div>
                  </div>
                </motion.div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-gray-400 to-emerald-400 rounded-full opacity-60 animate-bounce"></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-emerald-400 to-gray-400 rounded-full opacity-40 animate-pulse"></div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-8 -left-8 w-24 h-24 border-2 border-dashed border-gray-300 rounded-full opacity-30"></div>
              <div className="absolute -bottom-12 -right-12 w-32 h-32 border-2 border-dashed border-emerald-300 rounded-full opacity-20"></div>
            </motion.div>
          </div>
        </div>
      </div>



      {/* Features */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-emerald-100 to-gray-100 rounded-full blur-3xl opacity-25"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-gray-100 to-indigo-100 rounded-full blur-3xl opacity-20"></div>
        </div>

        {/* Floating particles */}
        <motion.div
          className="absolute top-32 left-32 w-4 h-4 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-60"
          {...floatingAnimation}
        />
        <motion.div
          className="absolute top-40 right-40 w-3 h-3 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-50"
          {...floatingAnimation}
          transition={{ delay: 1 }}
        />
        <motion.div
          className="absolute bottom-32 left-40 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-70"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.7, 0.3, 0.7]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-20">
            <motion.div
              className="inline-flex items-center bg-gradient-to-r from-gray-50 to-emerald-50 border border-gray-200 rounded-full px-6 py-3 mb-6"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-3 h-3 bg-gradient-to-r from-gray-500 to-emerald-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-gray-700 font-semibold text-sm uppercase tracking-wide">
                Premium Features
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Features of an
              <br />
              <span className="bg-gradient-to-r from-gray-500 to-emerald-500 bg-clip-text text-transparent">
                Exceptional Website
              </span>
            </motion.h2>

            <motion.div
              className="w-32 h-1.5 bg-gradient-to-r from-gray-500 to-emerald-500 mx-auto rounded-full mb-8 shadow-lg"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "8rem", opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />

            <motion.p
              className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              We build websites that combine
              <span className="font-semibold text-gray-700"> stunning design </span>
              with
              <span className="font-semibold text-indigo-600"> exceptional functionality</span>,
              creating digital experiences that captivate and convert
            </motion.p>
          </div>

          {/* Features Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8"
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
              >
                {/* Card */}
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden h-full transform transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-2xl border border-white/50">
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                  {/* Decorative top border */}
                  <div className={`h-2 bg-gradient-to-r ${feature.gradient}`}></div>

                  {/* Content */}
                  <div className="relative p-8">
                    {/* Icon container */}
                    <div className="relative mb-6">
                      <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                      <div className="relative bg-white rounded-2xl p-4 shadow-lg group-hover:shadow-xl transition-shadow duration-500 w-20 h-20 flex items-center justify-center">
                        <div className="text-4xl transform group-hover:scale-110 transition-transform duration-500">
                          {feature.icon}
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300 leading-tight">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 group-hover:text-gray-700 leading-relaxed text-base transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>

                  {/* Decorative corner elements */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>

                {/* Floating shadow */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-300/20 to-indigo-300/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 transform translate-y-8"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>




      {/* Why Choose Us */}
      <div className="py-20 bg-gradient-to-br from-white via-gray-50 to-emerald-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-gray-100 to-emerald-100 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-emerald-100 to-gray-100 rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left side - Enhanced Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-gray-500 to-emerald-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-500"></div>

                {/* Main image container */}
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://saviynt.com/hs-fs/hubfs/Saviynt/root/solution-hero-office.png?width=768&height=780&name=solution-hero-office.png"
                    className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-500"
                    alt="Professional Web Development Team"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-gray-400 to-emerald-400 rounded-full opacity-60 animate-bounce"></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-emerald-400 to-gray-400 rounded-full opacity-40 animate-pulse"></div>
              </div>
            </motion.div>

            {/* Right side - Enhanced Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Badge */}
              <div className="inline-flex items-center bg-gradient-to-r from-gray-50 to-emerald-50 border border-gray-200 rounded-full px-6 py-3">
                <div className="w-3 h-3 bg-gradient-to-r from-gray-500 to-emerald-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-gray-700 font-semibold text-sm uppercase tracking-wide">
                  Industry Leaders
                </span>
              </div>

              {/* Main heading */}
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Why Choose Us For
                <span className="bg-gradient-to-r from-gray-500 to-emerald-500 bg-clip-text text-transparent">
                  {" "}Web Development?
                </span>
              </h2>

              {/* Feature list */}
              <div className="space-y-5">
                {whyChooseUs.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start group"
                  >
                    <div className="bg-gradient-to-r from-gray-500 to-emerald-500 rounded-full p-2 mt-1 mr-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-lg text-gray-800 font-medium group-hover:text-gray-900 transition-colors duration-300">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Enhanced testimonial */}
              <div className="relative mt-10">
                <div className="bg-gradient-to-br from-gray-50 to-emerald-50 rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  {/* Quote icon */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-gray-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-gradient-to-r from-gray-500 to-emerald-500 text-white rounded-full w-12 h-12 flex items-center justify-center mr-6 flex-shrink-0 shadow-lg">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-800 text-lg font-medium leading-relaxed mb-4">
                        "Our team transformed our online presence with a custom website that increased conversions by 40% in the first three months. Their expertise is unmatched!"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>




      {/* Expertise */}
      <div className="py-20 bg-gradient-to-br from-gray-50 via-white to-emerald-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-gray-100 to-emerald-100 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-emerald-100 to-gray-100 rounded-full blur-3xl opacity-25"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-gray-100 to-emerald-100 rounded-full blur-3xl opacity-20"></div>
        </div>

        {/* Floating particles */}
        <motion.div
          className="absolute top-32 left-32 w-4 h-4 bg-gradient-to-r from-gray-400 to-emerald-400 rounded-full opacity-60"
          {...floatingAnimation}
        />
        <motion.div
          className="absolute top-40 right-40 w-3 h-3 bg-gradient-to-r from-emerald-400 to-gray-400 rounded-full opacity-50"
          {...floatingAnimation}
          transition={{ delay: 1 }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-20">
            <motion.div
              className="inline-flex items-center bg-gradient-to-r from-gray-50 to-emerald-50 border border-gray-200 rounded-full px-6 py-3 mb-6"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-3 h-3 bg-gradient-to-r from-gray-500 to-emerald-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-gray-700 font-semibold text-sm uppercase tracking-wide">
                Technical Excellence
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Our Web Development
              <br />
              <span className="bg-gradient-to-r from-gray-500 to-emerald-500 bg-clip-text text-transparent">
                Expertise
              </span>
            </motion.h2>

            <motion.div
              className="w-32 h-1.5 bg-gradient-to-r from-gray-500 to-emerald-500 mx-auto rounded-full mb-8 shadow-lg"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "8rem", opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />

            <motion.p
              className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Delivering cutting-edge solutions with
              <span className="font-semibold text-gray-700"> advanced technologies </span>
              and
              <span className="font-semibold text-emerald-600"> proven methodologies</span>
            </motion.p>
          </div>

          {/* Expertise Grid */}
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
                className="group relative"
              >
                {/* Card */}
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden h-full transform transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-2xl border border-white/50">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-emerald-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Decorative top border */}
                  <div className="h-2 bg-gradient-to-r from-gray-500 to-emerald-500"></div>

                  {/* Content */}
                  <div className="relative p-8">
                    {/* Icon container */}
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-emerald-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                      <div className="relative bg-white rounded-2xl p-4 shadow-lg group-hover:shadow-xl transition-shadow duration-500 w-20 h-20 flex items-center justify-center">
                        <div className="text-4xl transform group-hover:scale-110 transition-transform duration-500">
                          {item.icon}
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300 leading-tight">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 group-hover:text-gray-700 leading-relaxed text-base transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>

                  {/* Decorative corner elements */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>

                {/* Floating shadow */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-300/20 to-emerald-300/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 transform translate-y-8"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>




      {/* Industries */}
      <div className="py-20 bg-gradient-to-br from-gray-50 via-white to-emerald-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-emerald-500/20 to-gray-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-gray-500/20 to-emerald-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-emerald-500/10 to-gray-500/10 rounded-full blur-3xl"></div>
        </div>

        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-32 left-32 w-2 h-2 bg-emerald-400 rounded-full opacity-60 animate-ping"></div>
          <div className="absolute top-40 right-40 w-1 h-1 bg-gray-300 rounded-full opacity-40 animate-pulse"></div>
          <div className="absolute bottom-32 left-40 w-1 h-1 bg-emerald-300 rounded-full opacity-50 animate-ping"></div>
          <div className="absolute bottom-20 right-32 w-2 h-2 bg-gray-400 rounded-full opacity-30 animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-20">
            <motion.div
              className="inline-flex items-center bg-gradient-to-r from-gray-50 to-emerald-50 border border-gray-200 rounded-full px-6 py-3 mb-6"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-3 h-3 bg-gradient-to-r from-gray-500 to-emerald-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-gray-700 font-semibold text-sm uppercase tracking-wide">
                Diverse Solutions
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Industries We
              <br />
              <span className="bg-gradient-to-r from-gray-500 to-emerald-500 bg-clip-text text-transparent">
                Transform
              </span>
            </motion.h2>

            <motion.div
              className="w-32 h-1.5 bg-gradient-to-r from-emerald-400 to-green-400 mx-auto rounded-full mb-8 shadow-lg"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "8rem", opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />

            <motion.p
              className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Empowering businesses across sectors with tailored digital solutions that drive
              <span className="font-semibold text-emerald-600"> growth and innovation</span>
            </motion.p>
          </div>

          {/* Industries Grid */}
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
                className="group relative"
              >
                {/* Card */}
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden h-full transform transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-2xl border border-white/50">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-emerald-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Decorative top border */}
                  <div className="h-2 bg-gradient-to-r from-gray-500 to-emerald-500"></div>

                  {/* Content */}
                  <div className="relative p-8">
                    {/* Icon container */}
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-emerald-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                      <div className="relative bg-white rounded-2xl p-4 shadow-lg group-hover:shadow-xl transition-shadow duration-500 w-20 h-20 flex items-center justify-center">
                        <div className="text-4xl transform group-hover:scale-110 transition-transform duration-500">
                          {industry.icon}
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300 leading-tight">
                      {industry.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 group-hover:text-gray-700 leading-relaxed text-base transition-colors duration-300">
                      {industry.description}
                    </p>
                  </div>

                  {/* Decorative corner elements */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>

                {/* Floating glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-300/20 to-emerald-300/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 transform translate-y-8"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>



      {/* FAQ */}
      {/* FAQ */}
      <div className="py-20 bg-gradient-to-br from-gray-50 via-white to-emerald-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-gray-100 to-emerald-100 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-emerald-100 to-gray-100 rounded-full blur-3xl opacity-20"></div>
        </div>

        {/* Floating particles */}
        <motion.div
          className="absolute top-32 left-32 w-4 h-4 bg-gradient-to-r from-gray-400 to-emerald-400 rounded-full opacity-60"
          {...floatingAnimation}
        />
        <motion.div
          className="absolute top-40 right-40 w-3 h-3 bg-gradient-to-r from-emerald-400 to-gray-400 rounded-full opacity-50"
          {...floatingAnimation}
          transition={{ delay: 1.5 }}
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-20">
            <motion.div
              className="inline-flex items-center bg-gradient-to-r from-gray-50 to-emerald-50 border border-gray-200 rounded-full px-6 py-3 mb-6"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-3 h-3 bg-gradient-to-r from-gray-500 to-emerald-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-gray-700 font-semibold text-sm uppercase tracking-wide">
                Got Questions?
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Frequently Asked
              <br />
              <span className="bg-gradient-to-r from-gray-500 to-emerald-500 bg-clip-text text-transparent">
                Questions
              </span>
            </motion.h2>

            <motion.div
              className="w-32 h-1.5 bg-gradient-to-r from-gray-500 to-emerald-500 mx-auto rounded-full mb-8 shadow-lg"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "8rem", opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />

            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Get answers to common questions about our
              <span className="font-semibold text-gray-700"> web development services </span>
              and
              <span className="font-semibold text-emerald-600"> process</span>
            </motion.p>
          </div>

          {/* FAQ Grid */}
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
                className="group"
              >
                <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-white/50 hover:shadow-xl transition-all duration-300">
                  {/* Gradient border on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  <div className="absolute inset-[1px] bg-white rounded-2xl"></div>

                  {/* Content */}
                  <div className="relative">
                    <button
                      className="flex justify-between items-center w-full p-8 text-left hover:bg-gradient-to-r hover:from-gray-50/50 hover:to-emerald-50/50 transition-all duration-300 group"
                      onClick={() => toggleFaq(index)}
                    >
                      <div className="flex items-start space-x-4">
                        {/* Question number */}
                        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-gray-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-white font-bold text-sm">{index + 1}</span>
                        </div>

                        {/* Question text */}
                        <span className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-gray-800 transition-colors duration-300 leading-relaxed">
                          {faq.question}
                        </span>
                      </div>

                      {/* Toggle icon */}
                      <div className="flex-shrink-0 ml-4">
                        <div className={`w-10 h-10 bg-gradient-to-r from-gray-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg transform transition-all duration-300 ${openFaqIndex === index ? 'rotate-180 scale-110' : 'group-hover:scale-105'}`}>
                          <svg
                            className="w-5 h-5 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                          </svg>
                        </div>
                      </div>
                    </button>

                    {/* Answer */}
                    {openFaqIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="border-t border-gray-100"
                      >
                        <div className="p-8 pt-6">
                          <div className="flex items-start space-x-4">
                            {/* Answer icon */}
                            <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-emerald-500 to-gray-500 rounded-full flex items-center justify-center mt-1">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                              </svg>
                            </div>

                            {/* Answer text */}
                            <div className="flex-1">
                              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-gray-500 to-emerald-500 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Still Have Questions?
              </h3>
              <p className="text-gray-100 text-lg mb-6 max-w-2xl mx-auto">
                Our expert team is here to help you with any additional questions about our web development services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="/contact"><button className="bg-white text-gray-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Contact Our Team
                </button></a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopmentService;