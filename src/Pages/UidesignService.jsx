import React, { useState } from 'react';
import { motion } from 'framer-motion';

const UIDesignService = () => {
  // State for FAQ section
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Toggle FAQ items
  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Services data
  const services = [
    {
      title: "User Interface Design",
      description: "Creating visually stunning interfaces that enhance user experience and drive engagement with modern design principles.",
      icon: "🎨"
    },
    {
      title: "User Experience Research",
      description: "Conducting in-depth user research to understand behaviors, needs, and motivations for creating intuitive user journeys.",
      icon: "🔍"
    },
    {
      title: "Prototyping & Wireframing",
      description: "Developing interactive prototypes to validate concepts and refine user flows before development begins.",
      icon: "📐"
    },
    {
      title: "Design Systems",
      description: "Creating comprehensive design systems that ensure consistency across all digital products and platforms.",
      icon: "📚"
    }
  ];

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

  // Design process
  const designProcess = [
    {
      step: "1",
      title: "Discover & Research",
      description: "Understanding users, business goals, and market landscape",
      icon: "🔎"
    },
    {
      step: "2",
      title: "Define & Strategize",
      description: "Creating user personas, journey maps, and information architecture",
      icon: "📝"
    },
    {
      step: "3",
      title: "Design & Prototype",
      description: "Developing wireframes, visual designs, and interactive prototypes",
      icon: "🎨"
    },
    {
      step: "4",
      title: "Test & Refine",
      description: "Conducting usability tests and iterating based on feedback",
      icon: "🧪"
    }
  ];

  // Industries served
  const industries = [
    {
      title: "Fintech",
      description: "Designing secure, intuitive financial applications",
      icon: "💰"
    },
    {
      title: "Healthcare",
      description: "Creating accessible health platforms and applications",
      icon: "🏥"
    },
    {
      title: "E-commerce",
      description: "Designing seamless shopping experiences",
      icon: "🛒"
    },
    {
      title: "Education",
      description: "Creating engaging learning platforms",
      icon: "🎓"
    },
    {
      title: "SaaS",
      description: "Designing complex enterprise applications",
      icon: "📊"
    },
    {
      title: "Entertainment",
      description: "Creating immersive media experiences",
      icon: "🎬"
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

  // Testimonials
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager, TechCorp",
      content: "The UI/UX redesign increased our user engagement by 65% and reduced bounce rates significantly. The team understood our vision perfectly."
    },
    {
      name: "Michael Chen",
      role: "CEO, StartupX",
      content: "Our conversion rates improved by 40% after implementing their UX recommendations. The attention to detail in the user journey was exceptional."
    },
    {
      name: "Emma Rodriguez",
      role: "Marketing Director, BrandVision",
      content: "The design system they created has streamlined our development process and ensured consistency across all our digital products."
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
                Transform Your Digital Experience
              </motion.h1>
              <motion.p
                className="text-xl text-indigo-200 mb-8 max-w-2xl"
                variants={slideUp}
              >
                We create intuitive, beautiful, and user-centered interfaces that drive engagement and conversions
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
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl w-full max-w-md">
                  <div className="bg-gradient-to-r from-purple-600 to-indigo-500 p-6">
                    <h3 className="text-white text-xl font-bold">Techista Design Studio</h3>
                  </div>
                  <div className="p-6">
                    <div className="bg-gradient-to-br from-purple-100 to-indigo-100 border-2 border-dashed border-purple-300 rounded-xl w-full h-64 mb-4 flex flex-col items-center justify-center text-gray-500">
                     <img src="https://img.freepik.com/free-photo/top-view-nutritional-counter-app-concept_23-2149880602.jpg?semt=ais_hybrid&w=740" alt="" />
                      <p className="text-sm">UI Design Mockup</p>
                    </div>
                    <p className="text-gray-700 mb-4">Transforming ideas into powerful user experiences</p>
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
                Leading UI/UX Design Agency
              </motion.h2>
              <motion.p
                className="text-lg text-gray-600 mb-8"
                variants={slideUp}
              >
                At our core, we strive to create digital experiences that are not only visually stunning but also intuitive and user-friendly. We combine creativity with strategic thinking to design interfaces that users love and businesses benefit from.
              </motion.p>
              <motion.p
                className="text-lg text-gray-600"
                variants={slideUp}
              >
                Our human-centered approach ensures that every design decision is backed by research and focused on solving real user problems while achieving business objectives.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-dashed border-purple-200 rounded-xl h-64 flex flex-col items-center justify-center text-gray-500 p-4">
                <img src="https://cdn.dribbble.com/userupload/16734509/file/original-5a0621b7a943fc636554615a823aa49d.png?resize=400x0" alt="" />
                <p className="mt-4 text-sm">Mobile UI Design</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-dashed border-purple-200 rounded-xl h-64 mt-8 flex flex-col items-center justify-center text-gray-500 p-4">
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/84abf4184403667.6551a930b3b2b.jpg" alt="" />
                <p className="mt-4 text-sm">Dashboard Design</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-dashed border-purple-200 rounded-xl h-64 flex flex-col items-center justify-center text-gray-500 p-4">
                <img src="https://versacreative.com/wp-content/uploads/VC_March_3_Blog_Banner-1200x900.png" alt="" />
                <p className="mt-4 text-sm">Web Components</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-dashed border-purple-200 rounded-xl h-64 mt-8 flex flex-col items-center justify-center text-gray-500 p-4">
                <img src="https://www.datameer.com/wp-content/uploads/2019/12/Data-Vizualisation.png" alt="" />
                <p className="text-sm">Data Visualization</p>
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
              Our UI/UX Design Services
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-purple-600 to-indigo-500 mx-auto rounded-full mb-6"
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
              Comprehensive solutions to elevate your digital products and user experiences
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
                  <div className="p-6">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
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
      </div>

      {/* Design Process */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Design Process
          </motion.h2>

          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-indigo-500 transform -translate-y-1/2 hidden lg:block"></div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true }}
            >
              {designProcess.map((step, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 relative"
                >
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
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

      {/* Portfolio */}
      <div className="py-16 bg-gray-50">
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
      </div>

      {/* Testimonials */}
      {/* <div className="py-16 bg-gradient-to-r from-purple-900 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Client Testimonials
          </motion.h2>

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
                  <div className="bg-white text-purple-600 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <i className="fas fa-user"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-purple-200 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex text-yellow-300 mb-4">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <p className="text-white/90">{testimonial.content}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div> */}

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
              {/* <motion.div
                className="flex flex-col sm:flex-row justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <button className="px-8 py-4 bg-white text-purple-700 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
                  Start Your Project
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                  Schedule a Call
                </button>
              </motion.div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UIDesignService;