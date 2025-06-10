import React, { useState } from 'react';
import { motion } from 'framer-motion';
import UiServicesSection from '../Components/UiServiceSection';

const UIDesignService = () => {
  // State for FAQ section
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Toggle FAQ items
  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };



    // Why choose us
    const whyChooseUs = [
      "Award-winning design team",
      "User-centered design approach",
      "Data-driven design decisions",
      "Cross-platform design expertise",
      "Agile design process",
      "Proven track record"
    ];

    // Design expertise
    const expertise = [
      {
        title: "Mobile App Design",
        description: "Designing intuitive mobile experiences for iOS and Android platforms.",
        icon: "📱"
      },
      {
        title: "Web Interface Design",
        description: "Creating responsive web interfaces with optimal user experiences.",
        icon: "💻"
      },
      {
        title: "Interaction Design",
        description: "Designing meaningful interactions that delight users and enhance usability.",
        icon: "🔄"
      },
      {
        title: "User Testing",
        description: "Conducting usability tests to validate designs and identify improvement areas.",
        icon: "🧪"
      },
      {
        title: "Accessibility Design",
        description: "Creating inclusive designs that work for users of all abilities.",
        icon: "♿"
      },
      {
        title: "Design Strategy",
        description: "Developing comprehensive design strategies aligned with business goals.",
        icon: "🧭"
      }
    ];

    // FAQs
    const faqs = [
      {
        question: "What's the difference between UI and UX design?",
        answer: "UI (User Interface) focuses on the visual elements and interactive properties of a product. UX (User Experience) encompasses the entire user journey, focusing on usability, accessibility, and efficiency in accomplishing tasks."
      },
      {
        question: "How long does a typical UI/UX project take?",
        answer: "Project timelines vary based on complexity. A mobile app UI might take 4-6 weeks, while a comprehensive website redesign with full UX research could take 12-16 weeks."
      },
      {
        question: "What design tools do you use?",
        answer: "We use industry-standard tools including Figma, Adobe XD, Sketch, InVision, and prototyping tools like ProtoPie. For research, we use UserTesting.com, Hotjar, and analytics platforms."
      },
      {
        question: "Do you provide design system documentation?",
        answer: "Yes, we deliver comprehensive design systems including style guides, component libraries, pattern libraries, and usage documentation."
      },
      {
        question: "How much does UI/UX design cost?",
        answer: "Costs vary based on project scope, starting from ₹50,000 for basic UI design up to ₹5,00,000+ for comprehensive UX research and design systems."
      }
    ];

    // Portfolio items
    const portfolioItems = [
      {
        title: "Finance Dashboard",
        description: "Modern financial management interface with data visualization",
        category: "Fintech"
      },
      {
        title: "E-commerce Platform",
        description: "Streamlined shopping experience with intuitive navigation",
        category: "E-commerce"
      },
      {
        title: "Health & Wellness App",
        description: "User-centered design for tracking health metrics",
        category: "Healthcare"
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
                  className="inline-block bg-gradient-to-r from-gray-500 to-emerald-500 text-white px-6 py-2 rounded-full text-sm font-medium mb-6"
                  variants={slideUp}
                >
                  ✨ Leading UI/UX Design Studio
                </motion.div>

                <motion.h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                  variants={slideUp}
                >
                  Transform Your
                  <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent"> Digital Experience </span>
                  with Design
                </motion.h1>

                <motion.p
                  className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed"
                  variants={slideUp}
                >
                  We create intuitive, beautiful, and user-centered interfaces that drive engagement, conversions, and deliver exceptional user experiences.
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
                    <span className="text-sm">User-Centered</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    </div>
                    <span className="text-sm">Data-Driven</span>
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
                  <div className="absolute -inset-1 bg-gradient-to-r from-gray-500 to-emerald-500 rounded-3xl blur opacity-75 animate-pulse"></div>

                  {/* Main card */}
                  <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl w-full max-w-md border border-white/20">
                    <div className="bg-gradient-to-r from-gray-500 to-emerald-500 p-6 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-16 -translate-y-16"></div>
                      <div className="relative z-10">
                        <h3 className="text-white text-xl font-bold mb-2">TechIsta Design Studio</h3>
                        <p className="text-emerald-200 text-sm">Premium Digital Experiences</p>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="relative rounded-2xl overflow-hidden mb-6 group">
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <img
                          src="https://img.freepik.com/free-photo/top-view-nutritional-counter-app-concept_23-2149880602.jpg"
                          alt="UI Design Showcase"
                          className="w-full h-48 object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <p className="text-sm font-medium">UI Design Mockup</p>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-6 text-center">Transforming ideas into powerful digital experiences</p>

                      <div className="grid grid-cols-3 gap-3">
                        <div className="group cursor-pointer">
                          <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-50 p-3 hover:from-emerald-100 hover:to-teal-100 transition-all duration-300">
                            <img
                              src="https://cdn.dribbble.com/userupload/16734509/file/original-5a0621b7a943fc636554615a823aa49d.png"
                              alt="Mobile UI"
                              className="w-full h-12 object-cover rounded-lg transform group-hover:scale-110 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                          <p className="text-xs text-gray-600 mt-2 text-center">Mobile UI</p>
                        </div>

                        <div className="group cursor-pointer">
                          <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-teal-50 to-cyan-50 p-3 hover:from-teal-100 hover:to-cyan-100 transition-all duration-300">
                            <img
                              src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/84abf4184403667.6551a930b3b2b.jpg"
                              alt="Dashboard"
                              className="w-full h-12 object-cover rounded-lg transform group-hover:scale-110 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-teal-600/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                          <p className="text-xs text-gray-600 mt-2 text-center">Dashboard</p>
                        </div>

                        <div className="group cursor-pointer">
                          <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-emerald-50 to-green-50 p-3 hover:from-emerald-100 hover:to-green-100 transition-all duration-300">
                            <img
                              src="https://versacreative.com/wp-content/uploads/VC_March_3_Blog_Banner-1200x900.png"
                              alt="Components"
                              className="w-full h-12 object-cover rounded-lg transform group-hover:scale-110 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                          <p className="text-xs text-gray-600 mt-2 text-center">Components</p>
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

                {/* Main Heading */}
                <motion.h2
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                  variants={slideUp}
                >
                  <span className="text-gray-900">Leading </span>
                  <span className="bg-gradient-to-r from-gray-600 via-emerald-600 to-gray-600 bg-clip-text text-transparent">
                    UI/UX Design
                  </span>
                  <br />
                  <span className="text-gray-900">Agency </span>
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
                    At our core, we strive to create digital experiences that are not only
                    <span className="font-semibold text-gray-600"> visually stunning </span>
                    but also
                    <span className="font-semibold text-emerald-600"> intuitive and user-friendly</span>. We combine creativity with strategic thinking to design interfaces that users love and businesses benefit from.
                  </p>

                  <p className="text-lg text-gray-600 leading-relaxed">
                    Our human-centered approach ensures that every design decision is backed by research and focused on solving real user problems while achieving business objectives.
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
                      src="https://img.freepik.com/free-photo/top-view-nutritional-counter-app-concept_23-2149880602.jpg"
                      alt="Mobile UI Design"
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-4 left-4 z-20">
                      <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2">
                        <p className="text-sm font-semibold text-gray-800">Mobile UI Design</p>
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
                      src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/84abf4184403667.6551a930b3b2b.jpg"
                      alt="Dashboard Design"
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 z-20">
                      <div className="bg-emerald-500 text-white rounded-full px-3 py-1 text-xs font-semibold">
                        Dashboard
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
                      src="https://versacreative.com/wp-content/uploads/VC_March_3_Blog_Banner-1200x900.png"
                      alt="Web Components"
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-3 left-3 z-20">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                        <p className="text-xs font-semibold text-gray-800">Components</p>
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
                      src="https://www.datameer.com/wp-content/uploads/2019/12/Data-Vizualisation.png"
                      alt="Data Visualization"
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 z-20">
                      <div className="bg-gradient-to-r from-gray-500 to-emerald-500 text-white rounded-full px-3 py-1 text-xs font-semibold">
                        Data Visualization
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


        {/* Services */}
        <UiServicesSection />


        {/* Why Choose Us */}
        < div className="py-16" >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-purple-100 to-indigo-100 border-2 border-dashed border-purple-300 rounded-xl w-full h-96 flex items-center justify-center text-gray-500">
                  <img src="https://blog.robosoftin.com/wp-content/uploads/2025/01/UI-UX-article-for-publishing-02.jpg" alt="" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Why Choose Our Design Services?
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
                      "Working with Techista transformed our product's usability. Their UX research uncovered insights that led to a complete redesign, resulting in a 45% increase in user retention."
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div >

        {/* Expertise */}
        < div className="py-16 bg-gray-50" >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Our Design Expertise
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
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:border-purple-300 transition-all"
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
        </div >


        {/* Portfolio */}
        < div className="py-16 bg-gray-50" >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Design Portfolio
            </motion.h2>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true }}
            >
              {portfolioItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="bg-gradient-to-br from-purple-100 to-indigo-100 h-48 flex items-center justify-center">
                    <div className="bg-white rounded-lg p-4 shadow-md w-4/5">
                      <div className="flex gap-2 mb-3">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      </div>
                      <div className="h-2 bg-purple-200 rounded mb-2"></div>
                      <div className="h-2 bg-purple-200 rounded w-3/4 mb-3"></div>
                      <div className="flex gap-2">
                        <div className="w-8 h-8 rounded bg-purple-300"></div>
                        <div className="w-8 h-8 rounded bg-indigo-300"></div>
                        <div className="w-8 h-8 rounded bg-violet-300"></div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                      <span className="text-xs font-medium text-purple-600 bg-purple-100 px-2 py-1 rounded-full">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div >

        

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
                    className="flex justify-between items-center w-full p-6 text-left hover:bg-gray-50 transition-colors"
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
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-purple-700 to-indigo-700 rounded-3xl p-12 text-center relative overflow-hidden">
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
                  Ready to Transform Your User Experience?
                </motion.h2>
                <motion.p
                  className="text-xl text-purple-200 max-w-2xl mx-auto mb-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Let's collaborate to create intuitive, beautiful interfaces that your users will love
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  };

  export default UIDesignService;