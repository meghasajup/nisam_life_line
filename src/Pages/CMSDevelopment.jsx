import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CMSHeroSection from '../Components/CMSHero';
import { Database, Shield, Zap, Users, Code, Globe, CheckCircle} from 'lucide-react';

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
    }
  ];

  // Why choose us
  const whyChooseUs = [
    "Custom solutions for unique needs",
    "SEO-optimized architecture",
    "Responsive design implementation",
    "Security-focused development",
    "Ongoing maintenance & support"
  ];

  // Features
  const features = [
    { icon: Database, title: "Custom Architecture", desc: "Tailored CMS solutions built for your workflow" },
    { icon: Shield, title: "Enterprise Security", desc: "Advanced security protocols and data protection" },
    { icon: Zap, title: "Lightning Fast", desc: "Optimized performance for seamless user experience" },
    { icon: Users, title: "Multi-User Ready", desc: "Collaborative content management for teams" }
  ];

  const benefits = [
    "Drag & Drop Content Builder",
    "SEO-Optimized Structure",
    "Mobile-First Design",
    "API-First Architecture",
    "Advanced Analytics",
    "24/7 Technical Support"
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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

  const slideUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <CMSHeroSection />



      {/* Introduction */}
      <div className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.div variants={slideUp} className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-gray-500 to-emerald-500 rounded-full text-white text-sm font-semibold shadow-lg">
                  <Code className="w-4 h-4 mr-2" />
                  CMS Development
                </div>

                <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Expert CMS
                  <span className="block bg-gradient-to-r from-gray-600 to-emerald-600 bg-clip-text text-transparent">
                    Development Services
                  </span>
                </h2>

                <p className="text-xl text-gray-600 leading-relaxed">
                  Transform your content management with our cutting-edge CMS solutions. We create powerful,
                  intuitive platforms that empower your team to manage digital content with unprecedented ease and efficiency.
                </p>
              </motion.div>

              {/* Features Grid */}
              <motion.div variants={slideUp} className="grid grid-cols-2 gap-4 ">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={slideInLeft}
                    className="group bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-4 hover:shadow-lg hover:border-emerald-200 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-gradient-to-r from-gray-500 to-emerald-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">{feature.title}</h4>
                        <p className="text-xs text-gray-600 mt-1">{feature.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Benefits List */}
              <motion.div variants={slideUp} className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">What You Get:</h3>
                <div className="grid grid-cols-2 gap-2">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      variants={slideInLeft}
                      className="flex items-center space-x-2"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Visual Grid */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Main Grid Container */}
              <div className="grid grid-cols-2 gap-6">
                {/* Card 1 - Large */}
                <motion.div
                  variants={slideInRight}
                  className="col-span-2 bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 group"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-gradient-to-r from-gray-500 to-emerald-500 rounded-xl">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">99.9%</div>
                      <div className="text-sm text-gray-600">Uptime</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-gray-900">Enterprise-Grade CMS</h3>
                    <p className="text-sm text-gray-600">Scalable solutions built for performance and reliability</p>
                  </div>
                  <div className="mt-4 flex space-x-2">
                    <div className="h-2 bg-gradient-to-r from-gray-400 to-emerald-400 rounded-full flex-1"></div>
                    <div className="h-2 bg-gray-200 rounded-full w-8"></div>
                    <div className="h-2 bg-gray-200 rounded-full w-6"></div>
                  </div>
                </motion.div>

                {/* Card 2 */}
                <motion.div
                  variants={slideInRight}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-dashed border-blue-200 rounded-xl h-48 p-6 flex flex-col justify-between hover:border-emerald-300 transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute top-2 right-2 p-2 bg-white/80 rounded-lg backdrop-blur-sm">
                    <Database className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Content Hub</h4>
                    <p className="text-xs text-gray-600">Centralized content management with advanced workflow controls</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full"></div>
                    <span className="text-xs text-gray-500">Active</span>
                  </div>
                </motion.div>

                {/* Card 3 */}
                <motion.div
                  variants={slideInRight}
                  className="bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-dashed border-emerald-200 rounded-xl h-48 p-6 flex flex-col justify-between hover:border-blue-300 transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute top-2 right-2 p-2 bg-white/80 rounded-lg backdrop-blur-sm">
                    <Shield className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Secure & Fast</h4>
                    <p className="text-xs text-gray-600">Advanced security protocols with lightning-fast performance</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-12 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full"></div>
                    <span className="text-xs text-gray-500">Protected</span>
                  </div>
                </motion.div>

                {/* Card 4 - Analytics */}
                <motion.div
                  variants={slideInRight}
                  className="col-span-2 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-500 group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-full -translate-y-8 translate-x-8"></div>
                  <div className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold">Real-time Analytics</h3>
                      <Zap className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-emerald-400">24/7</div>
                        <div className="text-xs text-gray-400">Monitoring</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-emerald-400">5min</div>
                        <div className="text-xs text-gray-400">Setup Time</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-emerald-400">∞</div>
                        <div className="text-xs text-gray-400">Scalability</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-gray-500 to-emerald-500 rounded-full opacity-20 blur-sm"
              />
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full opacity-20 blur-sm"
              />
            </motion.div>
          </div>
        </div>
      </div>



      {/* Services */}
      <div className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Header Section */}
          <div className="text-center mb-20">
            <motion.div
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-500 to-emerald-500 rounded-full text-white text-sm font-semibold shadow-lg mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Globe className="w-4 h-4 mr-2" />
              Professional CMS Solutions
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Our CMS
              <span className="block bg-gradient-to-r from-gray-600 to-emerald-600 bg-clip-text text-transparent">
                Development Services
              </span>
            </motion.h2>

            <motion.div
              className="w-32 h-1.5 bg-gradient-to-r from-gray-500 to-emerald-500 mx-auto rounded-full mb-8 shadow-sm"
              initial={{ width: 0 }}
              whileInView={{ width: "8rem" }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            />

            <motion.p
              className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Comprehensive solutions to build, optimize, and maintain your content platform with
              <span className="font-semibold text-gray-800"> cutting-edge technology</span> and
              <span className="font-semibold text-gray-800"> expert craftsmanship</span>
            </motion.p>
          </div>

          {/* Services Grid */}
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
                className="group relative"
              >
                {/* Card */}
                <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden h-full transform transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-2xl group-hover:border-emerald-200 relative">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-emerald-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>

                  {/* Content */}
                  <div className="p-8 relative z-10">
                    {/* Icon Container */}
                    <div className="mb-6 relative">
                      <div className="w-16 h-16 bg-gradient-to-r from-gray-500 to-emerald-500 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      {/* Glow Effect */}
                      <div className="absolute inset-0 w-16 h-16 bg-gradient-to-r from-gray-500 to-emerald-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
                      {service.description}
                    </p>

                    {/* Feature List */}
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-gray-500 to-emerald-500 rounded-full mr-3"></div>
                        Custom Development
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-gray-500 to-emerald-500 rounded-full mr-3"></div>
                        Mobile Responsive
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-gray-500 to-emerald-500 rounded-full mr-3"></div>
                        SEO Optimized
                      </div>
                    </div>

                    {/* Bottom Accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-500 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </div>
                </div>

                {/* Floating Number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r from-gray-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  {index + 1}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 360, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-10 w-20 h-20 bg-gradient-to-r from-gray-500 to-emerald-500 rounded-full opacity-10 blur-xl"
        />
        <motion.div
          animate={{
            y: [20, -20, 20],
            rotate: [360, 0, 360]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-20 left-10 w-16 h-16 bg-gradient-to-r from-emerald-500 to-gray-500 rounded-full opacity-10 blur-xl"
        />
      </div>




      {/* Why Choose Us */}
      <div className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left Column - Visual */}
            <motion.div variants={slideInLeft} className="relative">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 transform transition-all duration-500 hover:scale-[1.02]">
                <div className="aspect-w-16 aspect-h-9 bg-gradient-to-r from-gray-500 to-emerald-500 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <Users className="w-12 h-12 text-white mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white">User-Centric Design</h3>
                    <p className="text-white/90 mt-2">Intuitive interfaces that your team will love</p>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-sm font-medium text-gray-500">Implementation Success Rate</div>
                    <div className="text-xl font-bold text-emerald-600">100%</div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-gradient-to-r from-gray-500 to-emerald-500 h-2.5 rounded-full"
                      style={{ width: '100%' }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-r from-gray-500/10 to-emerald-500/10 rounded-xl -z-10"
              />
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-r from-gray-500/10 to-emerald-500/10 rounded-xl -z-10"
              />
            </motion.div>

            {/* Right Column - Content */}
            <motion.div variants={slideInRight} className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-gray-500 to-emerald-500 rounded-full text-white text-sm font-semibold shadow-lg mb-6">
                <Zap className="w-4 h-4 mr-2" />
                Why We Stand Out
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Why Industry Leaders
                <span className="block bg-gradient-to-r from-gray-600 to-emerald-600 bg-clip-text text-transparent">
                  Choose Our Solutions
                </span>
              </h2>

              <ul className="space-y-5">
                {whyChooseUs.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="flex items-start bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-gray-200 hover:border-emerald-300 transition-all"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-gray-500 to-emerald-500 rounded-full text-white">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">{item}</h3>
                      <div className="mt-1 w-16 h-1 bg-gradient-to-r from-gray-400 to-emerald-400 rounded-full"></div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>




      {/* Features */}
      <div className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Powerful CMS Capabilities
            </motion.h2>
            <motion.div
              className="w-32 h-2 bg-gradient-to-r from-gray-500 to-emerald-500 mx-auto rounded-full mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: "8rem" }}
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
              Engineered to streamline your content workflow and maximize productivity
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
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="h-full bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 group-hover:shadow-2xl">
                  <div className="relative h-48 bg-gradient-to-r from-gray-500 to-emerald-500 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black/10"></div>
                    <feature.icon className="w-16 h-16 text-white opacity-90" />
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-white/30 to-white/0"></div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 mb-6">{feature.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>



      {/* FAQ */}
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

export default CMSDevelopment;