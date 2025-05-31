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
      icon: "🧭"
    },
    {
      title: "Attractive Design",
      description: "The design of a website is the first thing visitors will notice. An attractive and visually pleasing design that is simple and clean should be essential to make a good first impression of your brand.",
      icon: "🎨"
    },
    {
      title: "Responsive & Mobile-Friendly",
      description: "With more people accessing the internet on mobile devices, it's essential to ensure that your website looks and works well on all devices.",
      icon: "📱"
    },
    {
      title: "Relevant & High-Quality Content",
      description: "Ensure that content is relevant, informative, and engaging while keeping text easy to read, broken into paragraphs, and properly formatted.",
      icon: "✍️"
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
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 via-purple-900 to-violet-800 z-0"></div>
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
                Professional Web Development Services in Kochi
              </motion.h1>
              <motion.p
                className="text-xl text-violet-200 mb-8 max-w-2xl"
                variants={slideUp}
              >
                We craft stunning, high-performance websites that drive business growth and engage your audience.
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
                  <div className="bg-gradient-to-r from-indigo-600 to-purple-500 p-6">
                    <h3 className="text-white text-xl font-bold">iROID Web Solutions</h3>
                  </div>
                  <div className="p-6">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 mb-4 flex items-center justify-center text-gray-500">
                      <img src="https://i.pinimg.com/736x/f7/a2/e9/f7a2e9feda69ff0767250527649c3324.jpg" alt="" />
                    </div>
                    <p className="text-gray-700 mb-4">Transforming ideas into powerful digital experiences</p>
                    <div className="flex space-x-2">
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 flex items-center justify-center text-gray-500 text-xs">
                        <img src="https://img.freepik.com/free-psd/user-interface-design-website-template_23-2149182791.jpg" alt="" />
                      </div>
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 flex items-center justify-center text-gray-500 text-xs">
                        <img src="https://spec.nith.ac.in/BLOGS/a1%20(5).jpg" alt="" />
                      </div>
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 flex items-center justify-center text-gray-500 text-xs">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHkf6rn3i5_kgzlsD8ua0fn6JFKAjONmdwkg&s" alt="" />
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
                Leading Web Development Company in Kerala
              </motion.h2>
              <motion.p
                className="text-lg text-gray-600 mb-8"
                variants={slideUp}
              >
                At our core, we strive to be a leading website development company in Kerala. We take pride in crafting websites that are both visually stunning and technically advanced, utilizing only the most powerful and innovative technologies available on the market.
              </motion.p>
              <motion.p
                className="text-lg text-gray-600"
                variants={slideUp}
              >
                Our team of expert developers creates custom solutions that drive business growth, enhance user engagement, and deliver measurable results.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-gray-200 border-2 border-dashed rounded-xl h-64 flex items-center justify-center text-gray-500">
                <img src="https://admin.12grids.com/uploads/blogs/original_cover_images/future-of-responsive-web-design-12grids.jpg" alt="" />
              </div>
              <div className="bg-gray-200 border-2 border-dashed rounded-xl h-64 mt-8 flex items-center justify-center text-gray-500">
                <img src="https://blog.powr.io/hs-fs/hubfs/ecommerce-website-example-github.webp?width=801&height=450&name=ecommerce-website-example-github.webp" alt="" />
              </div>
              <div className="bg-gray-200 border-2 border-dashed rounded-xl h-64 flex items-center justify-center text-gray-500">
                <img src="https://www.cloudways.com/blog/wp-content/uploads/CMS-Platforms.jpg" alt="" />
              </div>
              <div className="bg-gray-200 border-2 border-dashed rounded-xl h-64 mt-8 flex items-center justify-center text-gray-500">
                <img src="https://cdn-proxy.slickplan.com/wp-content/uploads/2022/06/ux-portfolio-example-1.jpg" alt="" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features */}
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
              Features of an Exceptional Website
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-500 mx-auto rounded-full mb-6"
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
              We build websites that combine stunning design with exceptional functionality
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
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl">
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
            >
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center text-gray-500">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYVdW0fc-FqPszgE_rb3REkWfAbJ26pxgURg&s" alt="" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Us For Web Development?
              </h2>
              <ul className="space-y-4 mb-8">
                {whyChooseUs.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-indigo-600 rounded-full p-1 mt-1 mr-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-lg text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-100">
                <div className="flex items-start">
                  <div className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <p className="text-indigo-800">
                    "iROID transformed our online presence with a custom website that increased conversions by 40% in the first three months."
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
            Our Web Development Expertise
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
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:border-indigo-300 transition-all"
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

      {/* Cost Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Transparent Pricing
          </motion.h2>

          <p className="text-gray-700 text-center max-w-3xl mx-auto mb-10">
            We believe in transparent pricing tailored to your unique business needs. Below are the key factors that influence the cost of your website development project.
          </p>

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
                <div className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">{factor}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-500 rounded-2xl shadow-xl p-8 text-white text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">No Hidden Costs</h3>
            <p className="text-indigo-100 max-w-2xl mx-auto mb-6">
              We provide detailed quotes with all costs outlined upfront. Our pricing is competitive and tailored to your specific requirements.
            </p>
            <button className="px-6 py-3 bg-white text-indigo-700 font-bold rounded-lg shadow-md hover:bg-gray-100 transition-colors">
              Request a Quote
            </button>
          </motion.div>
        </div>
      </div>

      {/* Industries */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Industries We Serve
          </motion.h2>

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
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
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

      {/* Development Process */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Development Process
          </motion.h2>

          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-500 transform -translate-y-1/2 hidden lg:block"></div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true }}
            >
              {developmentProcess.map((step, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 relative"
                >
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
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
                    className={`w-6 h-6 text-indigo-600 transform transition-transform ${openFaqIndex === index ? 'rotate-180' : ''}`}
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
      <div className="py-16 bg-gradient-to-r from-indigo-700 to-purple-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Online Presence?
          </motion.h2>
          <motion.p
            className="text-xl text-indigo-200 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Partner with Kochi's leading web development company to create a stunning, high-performing website for your business.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <button className="px-8 py-4 bg-white text-indigo-700 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
              Get a Free Quote
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
              View Our Portfolio
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopmentService;