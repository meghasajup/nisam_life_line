import { useState } from 'react';
import { motion } from 'framer-motion';
import jeswin from "../images/Jeswin.jpg";
import keshav from "../images/Keshu.jpg";
import megha from "../images/Megha.jpg";
import sumayya from "../images/Summaya.jpg";
import maneesha from "../images/Maneesha.jpg";

export const AboutPage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const teamMembers = [
    {
      name: "Jeswin Joseph",
      role: "Full Stack Developer",
      image: jeswin,
      socialLinks: {
        instagram: "https://www.instagram.com/jes_win_____?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        linkedin: "https://www.linkedin.com/in/jeswinjoseph-?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/JESWIN100"
      }
    },
    {
      name: "Keshava Patteri M",
      role: "Full Stack Developer",
      image: keshav,
      socialLinks: {
        instagram: "hhttps://www.instagram.com/keshu_mkt?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        linkedin: "https://www.linkedin.com/in/keshava-patteri-m-5471a32b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/keshavapatteri"
      }
    },
    {
      name: "Megha Saju P",
      role: "Full Stack Developer",
      image: megha,
      socialLinks: {
        instagram: "https://www.instagram.com/_megh4?igsh=ZXh2NW5qa2cxYzM1",
        linkedin: "https://www.linkedin.com/in/megha-abhin-73b25132b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/meghasajup"
      }
    },
    {
      name: "Fathimath Sumayya O",
      role: "Full Stack Developer",
      image: sumayya,
      socialLinks: {
        instagram: "https://www.instagram.com/sumi_zaya_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        linkedin: "https://www.linkedin.com/in/fathimath-sumayya-o-b30396307?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/Sumayyaom"
      }
    },
    {
      name: "Mannesha MA",
      role: "Full Stack Developer",
      image: maneesha,
      socialLinks: {
        instagram: "https://www.instagram.com/maneeshama7?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        linkedin: "https://www.linkedin.com/in/maneesha-ma?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/maneesha465"
      }
    }
  ];

  const socialIcons = [
    {
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      color: "hover:text-pink-400",
      label: "Instagram",
      key: "instagram"
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
        </svg>
      ),
      color: "hover:text-blue-400",
      label: "LinkedIn",
      key: "linkedin"
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      color: "hover:text-gray-800",
      label: "GitHub",
      key: "github"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Reusable Section Component
  const ImageTextSection = ({
    reverse = false,
    title,
    subtitle,
    content,
    imageUrl,
    bgColor = "bg-white"
  }) => (
    <div className={`flex flex-col lg:flex-row w-full min-h-screen ${bgColor}`}>
      <div className={`lg:w-1/2 w-full p-8 lg:p-12 flex flex-col justify-center ${reverse ? "lg:order-2" : ""}`}>
        <div className="max-w-lg mx-auto">
          <h4 className="text-emerald-600 font-semibold uppercase tracking-wider text-sm mb-3">
            {subtitle}
          </h4>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
            {title}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            {content}
          </p>
        </div>
      </div>

      <div className={`lg:w-1/2 w-full ${reverse ? "lg:order-1" : ""}`}>
        <motion.div
          className="w-full h-full"
          initial={{ opacity: 0, x: reverse ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">

      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-800 text-white py-20 md:py-28 px-4">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Story at TechIsta Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed opacity-90">
            TechIsta Solutions since 2025 - transforming complex challenges into elegant technological innovations.
          </p>
        </div>

        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-emerald-400/10"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 200 + 50}px`,
                height: `${Math.random() * 200 + 50}px`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </section>




      {/* Stats Section with Cards */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-emerald-100/40 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-100/30 to-transparent rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-purple-100/20 to-transparent rounded-full blur-xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Transforming <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-800">Digital Vision</span>
              <br />into Reality
            </h2>

            <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700 rounded-full mx-auto"></div>
          </motion.div>

          {/* Content Card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            {/* Card Glow Effect */}
            <div className="absolute -inset-6 bg-gradient-to-r from-emerald-400/20 via-blue-400/20 to-purple-400/20 rounded-3xl blur-2xl opacity-60"></div>

            {/* Main Content Card */}
            <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-16 shadow-2xl border border-white/50">
              {/* Decorative Quote Icon */}
              <div className="absolute top-8 left-8 w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg transform rotate-12">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Content Grid */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="space-y-8">
                  <div className="space-y-6">
                    <p className="text-xl text-gray-700 leading-relaxed font-medium">
                      As As a <span className="text-emerald-600 font-semibold">leading website and mobile app development company in Kerala</span>, we specialize in crafting impactful digital experiences that drive growth and customer engagement.
                    </p>

                    <p className="text-lg text-gray-600 leading-relaxed">
                      Our team is dedicated to delivering high-quality websites, web applications, and mobile apps tailored to meet the unique needs of businesses across diverse industries.
                    </p>
                  </div>

                  {/* Key Features Grid */}
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { icon: "🚀", label: "Digital Growth", desc: "Strategic solutions" },
                      { icon: "🎯", label: "Targeted Approach", desc: "Industry-specific" },
                      { icon: "💡", label: "Innovation", desc: "Cutting-edge tech" },
                      { icon: "🤝", label: "Partnership", desc: "Long-term support" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-3 p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="text-2xl">{item.icon}</div>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm">{item.label}</h4>
                          <p className="text-xs text-gray-600">{item.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Visual Content */}
                <div className="relative">
                  {/* Decorative Background */}
                  <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-200/30 via-blue-200/20 to-purple-200/30 rounded-2xl blur-xl"></div>

                  {/* Content Box */}
                  <div className="relative bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-8 border border-emerald-100/50">
                    <div className="space-y-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                        <h3 className="text-xl font-bold text-gray-900">Our Commitment</h3>
                      </div>

                      <p className="text-gray-700 leading-relaxed">
                        With years of experience, we go beyond just building websites or apps — we create <span className="font-semibold text-emerald-700">powerful platforms</span> that help our clients connect meaningfully with their audience, streamline operations, and increase revenue.
                      </p>

                      <div className="pt-4 border-t border-emerald-200/50">
                        <p className="text-sm text-gray-600 italic">
                          "We understand that digital presence is not just a necessity but a <span className="font-semibold text-emerald-700">strategic asset</span>, and we are committed to transforming your vision into a scalable, user-focused digital solution."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Decorative Line */}
              <div className="mt-12 flex justify-center">
                <div className="w-32 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent rounded-full"></div>
              </div>
            </div>
          </motion.div>

          {/* Stats or Achievement Section */}
          <motion.div
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { number: "2025", label: "Established", icon: "🏛️" },
              { number: "100%", label: "Client Satisfaction", icon: "⭐" },
              { number: "∞", label: "Innovation Drive", icon: "🚀" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 hover:shadow-xl transition-all duration-500"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="text-3xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-emerald-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>




      {/* Professional Services Sections */}
      <div className="relative">

        {/* Section 1: Strategy & Consulting */}
        <section className="relative py-32 overflow-hidden">
          {/* Advanced Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/80 to-emerald-50/40"></div>
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-emerald-100/30 to-transparent"></div>
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-emerald-200/20 to-blue-200/20 rounded-full blur-3xl"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Content Side */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {/* Badge */}
                <motion.div
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 backdrop-blur-sm border border-emerald-200/50 text-emerald-700 px-6 py-3 rounded-full font-semibold shadow-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="w-2.5 h-2.5 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full animate-pulse shadow-lg"></div>
                  Shaping Business
                </motion.div>

                {/* Title */}
                <motion.h2
                  className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Expertise in{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-800">
                    Strategy & Consulting
                  </span>
                </motion.h2>

                {/* Decorative Line */}
                <motion.div
                  className="w-24 h-1.5 bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700 rounded-full relative overflow-hidden"
                  initial={{ width: 0 }}
                  whileInView={{ width: 96 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse"></div>
                </motion.div>

                {/* Content */}
                <motion.p
                  className="text-xl text-gray-600 leading-relaxed font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  TechIsta Solutions offers extensive expertise in strategy and consulting to administer enterprises of all scopes to get to their destiny, digitally-enabled condition, both in the way they function internally and benefit their customers.
                </motion.p>

                {/* Feature Cards */}
                <motion.div
                  className="grid grid-cols-2 gap-4 mt-8"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  {[
                    { icon: "🎯", title: "Strategic Planning", desc: "Digital roadmap creation" },
                    { icon: "📊", title: "Business Analysis", desc: "Data-driven insights" },
                    { icon: "🚀", title: "Growth Solutions", desc: "Scalable frameworks" },
                    { icon: "💡", title: "Innovation", desc: "Future-ready strategies" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="group p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50 hover:shadow-xl transition-all duration-500 hover:scale-105"
                      whileHover={{ y: -5 }}
                    >
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <h4 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h4>
                      <p className="text-xs text-gray-600">{item.desc}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Image Side */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                <div className="relative">
                  {/* Background Decorations */}
                  <div className="absolute -inset-8 bg-gradient-to-tr from-emerald-400/20 via-blue-400/15 to-purple-400/20 rounded-3xl blur-2xl"></div>
                  <div className="absolute -inset-4 bg-gradient-to-br from-white/60 to-gray-100/60 rounded-3xl shadow-2xl transform rotate-1"></div>
                  
                  <motion.div
                    className="relative rounded-3xl overflow-hidden shadow-2xl"
                    whileHover={{ scale: 1.02, rotateY: 3 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                      alt="Strategy & Consulting"
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 via-transparent to-transparent"></div>
                  </motion.div>

                  {/* Floating Elements */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl shadow-xl flex items-center justify-center"
                    animate={{ rotate: [0, 10, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 2: Collaborative Team Approach */}
        <section className="relative py-32 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-blue-200/20 to-emerald-200/20 rounded-full blur-3xl"></div>
            <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-100/20 to-transparent"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Image Side - Left */}
              <motion.div
                className="relative lg:order-1"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="relative">
                  {/* Background Decorations */}
                  <div className="absolute -inset-8 bg-gradient-to-bl from-blue-400/20 via-emerald-400/15 to-purple-400/20 rounded-3xl blur-2xl"></div>
                  <div className="absolute -inset-4 bg-gradient-to-tl from-white/60 to-gray-100/60 rounded-3xl shadow-2xl transform -rotate-1"></div>
                  
                  <motion.div
                    className="relative rounded-3xl overflow-hidden shadow-2xl"
                    whileHover={{ scale: 1.02, rotateY: -3 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                      alt="Collaborative Team Approach"
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent"></div>
                  </motion.div>

                  {/* Floating Team Icon */}
                  <motion.div
                    className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl shadow-xl flex items-center justify-center"
                    animate={{ rotate: [0, -10, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                  >
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>

              {/* Content Side - Right */}
              <motion.div
                className="space-y-8 lg:order-2"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                {/* Badge */}
                <motion.div
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-blue-600/10 backdrop-blur-sm border border-blue-200/50 text-blue-700 px-6 py-3 rounded-full font-semibold shadow-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="w-2.5 h-2.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full animate-pulse shadow-lg"></div>
                  Working Together
                </motion.div>

                {/* Title */}
                <motion.h2
                  className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  Collaborative{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">
                    Team Approach
                  </span>
                </motion.h2>

                {/* Decorative Line */}
                <motion.div
                  className="w-24 h-1.5 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-full relative overflow-hidden"
                  initial={{ width: 0 }}
                  whileInView={{ width: 96 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse"></div>
                </motion.div>

                {/* Content */}
                <motion.p
                  className="text-xl text-gray-600 leading-relaxed font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  Our cross-functional teams work in synergy to deliver exceptional results. By fostering open communication and leveraging diverse expertise, we create solutions that exceed client expectations while maintaining agility throughout the development process.
                </motion.p>

                {/* Collaboration Features */}
                <motion.div
                  className="space-y-4 mt-8"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  {[
                    { icon: "🤝", title: "Cross-functional Synergy", desc: "Seamless team integration" },
                    { icon: "💬", title: "Open Communication", desc: "Transparent collaboration" },
                    { icon: "⚡", title: "Agile Development", desc: "Flexible & responsive approach" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50 hover:shadow-lg transition-all duration-300"
                      whileHover={{ x: 10, scale: 1.02 }}
                    >
                      <div className="text-3xl">{item.icon}</div>
                      <div>
                        <h4 className="font-bold text-gray-900">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 3: Security & Reliability Focus */}
        <section className="relative py-32 overflow-hidden">
          {/* Advanced Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/80 to-red-50/30"></div>
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-red-100/20 to-transparent"></div>
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-red-200/20 to-orange-200/20 rounded-full blur-3xl"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Content Side */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {/* Badge */}
                <motion.div
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-red-500/10 to-red-600/10 backdrop-blur-sm border border-red-200/50 text-red-700 px-6 py-3 rounded-full font-semibold shadow-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="w-2.5 h-2.5 bg-gradient-to-r from-red-500 to-red-600 rounded-full animate-pulse shadow-lg"></div>
                  Protecting Assets
                </motion.div>

                {/* Title */}
                <motion.h2
                  className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Security &{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-700 to-red-800">
                    Reliability Focus
                  </span>
                </motion.h2>

                {/* Decorative Line */}
                <motion.div
                  className="w-24 h-1.5 bg-gradient-to-r from-red-500 via-red-600 to-red-700 rounded-full relative overflow-hidden"
                  initial={{ width: 0 }}
                  whileInView={{ width: 96 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse"></div>
                </motion.div>

                {/* Content */}
                <motion.p
                  className="text-xl text-gray-600 leading-relaxed font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  We prioritize security at every layer of our solutions. From secure coding practices to rigorous penetration testing, we ensure that your digital assets remain protected against evolving threats while maintaining maximum uptime and reliability.
                </motion.p>

                {/* Security Features Grid */}
                <motion.div
                  className="grid grid-cols-2 gap-4 mt-8"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  {[
                    { icon: "🔒", title: "Secure Coding", desc: "Best practice implementation" },
                    { icon: "🛡️", title: "Threat Protection", desc: "Multi-layer defense" },
                    { icon: "⚡", title: "High Uptime", desc: "99.9% availability" },
                    { icon: "🔍", title: "Penetration Testing", desc: "Regular security audits" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="group p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50 hover:shadow-xl transition-all duration-500 hover:scale-105"
                      whileHover={{ y: -5 }}
                    >
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <h4 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h4>
                      <p className="text-xs text-gray-600">{item.desc}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Image Side */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                <div className="relative">
                  {/* Background Decorations */}
                  <div className="absolute -inset-8 bg-gradient-to-tr from-red-400/20 via-orange-400/15 to-yellow-400/20 rounded-3xl blur-2xl"></div>
                  <div className="absolute -inset-4 bg-gradient-to-br from-white/60 to-gray-100/60 rounded-3xl shadow-2xl transform rotate-1"></div>
                  
                  <motion.div
                    className="relative rounded-3xl overflow-hidden shadow-2xl"
                    whileHover={{ scale: 1.02, rotateY: 3 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img
                      src="https://www.securitymagazine.com/ext/resources/Issues/2024/03-March/SEC-0324-Cyber-Feat-Slide1-1170x658.jpg?1711833837"
                      alt="Security & Reliability Focus"
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-red-900/60 via-transparent to-transparent"></div>
                  </motion.div>

                  {/* Floating Security Icon */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl shadow-xl flex items-center justify-center"
                    animate={{ rotate: [0, 10, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>




      {/* Mission Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        {/* Background with Gradient Mesh */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30"></div>
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-emerald-100/40 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-blue-100/30 to-transparent rounded-full blur-2xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Content */}
            <motion.div
              className="space-y-10"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Section Header */}
              <div className="space-y-6">
                <motion.div
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 backdrop-blur-sm border border-emerald-200/50 text-emerald-700 px-6 py-3 rounded-full font-semibold"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  Our Purpose & Direction
                </motion.div>

                <motion.h2
                  className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Our Mission &{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-800">
                    Vision
                  </span>
                </motion.h2>

                {/* Decorative Line */}
                <motion.div
                  className="w-24 h-1.5 bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700 rounded-full relative overflow-hidden"
                  initial={{ width: 0 }}
                  whileInView={{ width: 96 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                </motion.div>
              </div>

              {/* Mission Cards */}
              <div className="space-y-6">
                {[
                  {
                    title: "Empowering Businesses",
                    content: "To empower businesses through cutting-edge technology solutions that solve real-world problems.",
                    icon: (
                      <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    ),
                    gradient: "from-emerald-500 to-teal-500"
                  },
                  {
                    title: "Sustainable Partnerships",
                    content: "We believe in building long-term partnerships with our clients, delivering not just products but sustainable value.",
                    icon: (
                      <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    ),
                    gradient: "from-blue-500 to-emerald-500"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="group relative"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.2 }}
                    whileHover={{ y: -8 }}
                  >
                    {/* Card Glow Effect */}
                    <div className={`absolute -inset-1 bg-gradient-to-r ${item.gradient} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-all duration-500`}></div>

                    {/* Main Card */}
                    <div className="relative flex items-start space-x-6 bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-500">
                      {/* Icon Container */}
                      <div className={`relative flex-shrink-0 p-4 bg-gradient-to-br ${item.gradient} rounded-2xl shadow-lg`}>
                        <div className="text-white">
                          {item.icon}
                        </div>
                        {/* Icon Glow */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-2xl blur-lg opacity-30`}></div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 space-y-3">
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                          {item.content}
                        </p>
                      </div>

                      {/* Decorative Arrow */}
                      <motion.div
                        className="flex-shrink-0 text-emerald-500 opacity-0 group-hover:opacity-100 transition-all duration-300"
                        whileHover={{ x: 5 }}
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Image Section */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
              {/* Background Decorative Elements */}
              <div className="absolute -inset-8">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-teal-500/20 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-400/20 to-emerald-400/20 rounded-full blur-xl"></div>
              </div>

              {/* Main Image Container */}
              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-tr from-emerald-400/30 via-teal-500/20 to-blue-500/30 rounded-3xl transform rotate-1 blur-xl"></div>
                <div className="absolute -inset-3 bg-gradient-to-br from-white/50 to-gray-100/50 rounded-3xl transform -rotate-1 shadow-2xl"></div>

                {/* Image Container */}
                <motion.div
                  className="relative rounded-3xl overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.02, rotateY: 5 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <img
                    src="https://centralcityhealth.org/wp-content/uploads/2018/05/MissionVisionValues.jpg"
                    alt="Our mission at Techista Solutions"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"></div>

                  {/* Quote Section */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 p-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <div className="space-y-4">
                      {/* Quote Icon */}
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>

                      <blockquote className="text-white text-xl lg:text-2xl font-medium italic leading-relaxed">
                        "Technology is best when it brings people together"
                      </blockquote>

                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-px bg-gradient-to-r from-emerald-400 to-transparent"></div>
                        <p className="text-emerald-200 text-lg font-medium">Matt Mullenweg</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Floating Elements */}
                  <motion.div
                    className="absolute top-6 right-6 w-3 h-3 bg-emerald-400 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.div
                    className="absolute top-16 right-12 w-2 h-2 bg-white/60 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 0.8, 0.3]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>




      {/* Team Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-slate-50 via-white to-emerald-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-6 py-2 rounded-full text-sm font-semibold mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              Our Team
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-emerald-600 to-gray-900 mb-6">
              Meet Our Talented
              <br />
              <span className="text-emerald-600">Developers</span>
            </h1>

            <div className="w-32 h-1.5 bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 rounded-full mx-auto mb-8 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full animate-pulse"></div>
            </div>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A passionate team of <span className="font-semibold text-emerald-600">Full Stack Developers</span> dedicated to crafting
              innovative solutions and delivering exceptional digital experiences
            </p>
          </motion.div>

          {/* Team Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            {teamMembers.map((person, index) => (
              <motion.div
                key={index}
                variants={item}
                className="relative group"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Glow Effect */}
                <motion.div
                  className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 opacity-0 blur-lg group-hover:opacity-30 transition-all duration-500"
                  animate={{
                    opacity: hoveredCard === index ? 0.4 : 0,
                    scale: hoveredCard === index ? 1.02 : 1
                  }}
                />

                {/* Main Card */}
                <motion.div
                  className="relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-white/50 h-full flex flex-col"
                  whileHover={{ y: -12, rotateY: 5 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  {/* Image Container */}
                  <div className="relative h-80 overflow-hidden bg-gradient-to-br from-emerald-100 to-blue-100">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>

                    {/* Profile Image */}
                    <motion.div
                      className="absolute inset-0"
                      animate={{
                        scale: hoveredCard === index ? 1.1 : 1
                      }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                      <img
                        src={person.image}
                        alt={person.name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>

                    {/* Social Links */}
                    <div className="absolute top-4 right-4 z-20">
                      <div className="flex flex-col gap-2">
                        {socialIcons.map((social, i) => (
                          <motion.a
                            key={i}
                            href={person.socialLinks[social.key]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-gray-600 ${social.color} transition-all duration-300 shadow-lg border border-white/50`}
                            aria-label={`${person.name}'s ${social.label}`}
                            initial={{ opacity: 0, x: 20, scale: 0.8 }}
                            animate={{
                              opacity: hoveredCard === index ? 1 : 0,
                              x: hoveredCard === index ? 0 : 20,
                              scale: hoveredCard === index ? 1 : 0.8
                            }}
                            transition={{
                              delay: i * 0.1,
                              duration: 0.3,
                              ease: "easeOut"
                            }}
                            whileHover={{
                              scale: 1.1,
                              rotate: 5
                            }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {social.icon}
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex-grow flex flex-col justify-center text-center bg-gradient-to-br from-white to-gray-50/50">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                        {person.name}
                      </h3>
                      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                          <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                        </svg>
                        {person.role}
                      </div>
                    </motion.div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400"></div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
          </motion.div>
        </div>
      </section>
    </div>
  );
};