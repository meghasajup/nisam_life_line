import React, { useState } from 'react';
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
      bio: "Specializes in React architecture and state management with 5 years of experience.",
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
      bio: "Expert in backend systems and API design with a focus on scalability.",
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
      bio: "Passionate about UI/UX design and frontend performance optimization.",
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
      bio: "Focuses on database optimization and security best practices.",
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
      bio: "Focuses on database optimization and security best practices.",
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
      <section className="relative bg-gradient-to-br from-gray-900 to-emerald-900 text-white py-20 md:py-28 px-4">
        <div className="container mx-auto px-6 text-center">
                    
                      <h1 className="text-5xl font-bold mb-6">Our Story at TechIsta Solutions
</h1>
                    <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
                        TechIsta Solutions since 2025 - transforming complex challenges into elegant technological innovations.
                    </p>
                </div>


        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mt-16 bg-gray-50 rounded-2xl p-8 md:p-12 shadow-inner">
            <p className="text-lg text-gray-700 leading-relaxed">
             As a leading website and mobile app development company in Kerala, we specialize in crafting impactful digital experiences that drive growth and customer engagement. Our team is dedicated to delivering high-quality websites, web applications, and mobile apps tailored to meet the unique needs of businesses across diverse industries.

With years of experience, we go beyond just building websites or apps — we create powerful platforms that help our clients connect meaningfully with their audience, streamline operations, and increase revenue. We understand that digital presence is not just a necessity but a strategic asset, and we are committed to transforming your vision into a scalable, user-focused digital solution.
            </p>
          </div>
        </div>
      </section>

      {/* Reusable Image/Text Sections */}
      <div className='mx-auto max-w-7xl'>
        <ImageTextSection
          title="Expertise in Strategy & Consulting"
          subtitle="Shaping Business"
          content="TechIsta Solutions offers extensive expertise in strategy and consulting to administer enterprises of all scopes to get to their destiny, digitally-enabled condition, both in the way they function internally and benefit their customers."
          imageUrl="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        />

        <ImageTextSection
          reverse={true}
          title="Collaborative Team Approach"
          subtitle="Working Together"
          content="Our cross-functional teams work in synergy to deliver exceptional results. By fostering open communication and leveraging diverse expertise, we create solutions that exceed client expectations while maintaining agility throughout the development process."
          imageUrl="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          bgColor="bg-gray-50"
        />

        <ImageTextSection
          title="Security & Reliability Focus"
          subtitle="Protecting Assets"
          content="We prioritize security at every layer of our solutions. From secure coding practices to rigorous penetration testing, we ensure that your digital assets remain protected against evolving threats while maintaining maximum uptime and reliability."
          imageUrl="https://www.securitymagazine.com/ext/resources/Issues/2024/03-March/SEC-0324-Cyber-Feat-Slide1-1170x658.jpg?1711833837"
        />

      </div>
      {/* Enhanced Mission Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto bg-gradient-to-br from-gray-50 to-white">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Mission & Vision
            </h2>

            <div className="space-y-6">
              {[
                {
                  title: "Empowering Businesses",
                  content: "To empower businesses through cutting-edge technology solutions that solve real-world problems.",
                  icon: (
                    <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )
                },
                {
                  title: "Sustainable Partnerships",
                  content: "We believe in building long-term partnerships with our clients, delivering not just products but sustainable value.",
                  icon: (
                    <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  )
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                  whileHover={{ y: -5 }}
                >
                  <div className="mt-1 p-2 bg-emerald-50 rounded-lg">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-tr from-emerald-400 to-teal-500 rounded-3xl transform rotate-3 blur-xl opacity-20"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://centralcityhealth.org/wp-content/uploads/2018/05/MissionVisionValues.jpg"
                alt="Our mission at Techista Solutions"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent flex items-end p-8">
                <div>
                  <blockquote className="text-white italic text-lg">
                    "Technology is best when it brings people together"
                  </blockquote>
                  <p className="text-emerald-200 mt-2">- Matt Mullenweg</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="text-emerald-600">Experienced</span> & Professional Team
            </h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet our team of experts dedicated to delivering exceptional results
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {teamMembers.map((person, index) => (
              <motion.div
                key={index}
                variants={item}
                className="relative"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <motion.div
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 h-full flex flex-col border border-gray-200"
                  whileHover={{ y: -8 }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>

                    <motion.div
                      className="absolute inset-0"
                      animate={{
                        scale: hoveredCard === index ? 1.05 : 1
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <img
                        src={person.image}
                        alt={person.name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>

                    <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                      <div className="flex items-center">
                        <div className="mr-3">
                          <div className="bg-emerald-500 w-3 h-3 rounded-full animate-pulse"></div>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{person.name}</h3>
                          <p className="text-emerald-200 font-medium text-sm">{person.role}</p>
                        </div>
                      </div>
                    </div>

                    <div className="absolute top-5 right-5 z-20">
                      <div className="flex gap-2">
                        {socialIcons.map((social, i) => (
                          <motion.a
                            key={i}
                            href={person.socialLinks[social.key]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-500 ${social.color} transition-colors shadow-md`}
                            aria-label={`${person.name}'s ${social.label}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{
                              opacity: hoveredCard === index ? 1 : 0,
                              y: hoveredCard === index ? 0 : 20
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {social.icon}
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 flex-grow">
                    <p className="text-gray-600 text-sm mb-4">{person.bio}</p>

                    {/* <div className="pt-4 border-t border-gray-100">
                      <div className="flex justify-between items-center">
                        <div className="text-sm text-gray-500">
                          <span>1+ years experience</span>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -inset-1 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-500 z-[-1] opacity-0 blur-md"
                  animate={{
                    opacity: hoveredCard === index ? 0.3 : 0
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900 to-gray-900"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds.png')] opacity-10"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to start your project?
          </motion.h2>

          <motion.p
            className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            We'd love to hear about your ideas and how we can help bring them to life.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <button className="px-8 py-4 bg-gradient-to-r from-white to-gray-100 text-emerald-900 font-bold rounded-xl shadow-2xl hover:shadow-emerald-900/20 transition-all duration-300 hover:scale-105 transform">
              <a href="/contact" className="flex items-center gap-2">
                Get in Touch
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </button>
          </motion.div>
        </div>

        {/* Floating elements */}
        <motion.div
          className="absolute top-10 left-10 w-8 h-8 rounded-full bg-emerald-400/20"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-12 h-12 rounded-full bg-white/10"
          animate={{
            y: [0, 20, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
      </section>
    </div>
  );
};