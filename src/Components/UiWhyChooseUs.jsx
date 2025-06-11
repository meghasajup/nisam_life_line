import React from 'react';
import { motion } from 'framer-motion';

const UiWhyChooseSection = () => {
    const whyChooseUs = [
        {
            title: "User-centered design approach",
            description: "Every decision backed by user research and testing"
        },
        {
            title: "Data-driven design decisions",
            description: "Analytics and insights guide our design process"
        },
        {
            title: "Cross-platform design expertise",
            description: "Seamless experiences across all devices and platforms"
        },
        {
            title: "Agile design process",
            description: "Rapid iterations with continuous feedback loops"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className="py-20 bg-gradient-to-br from-slate-50 via-white to-emerald-50 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
            </div>

            {/* Floating geometric shapes */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    className="absolute top-20 right-20 w-8 h-8 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-lg opacity-20"
                    animate={{
                        rotate: [0, 180, 360],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
                <motion.div
                    className="absolute bottom-32 left-16 w-6 h-6 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-30"
                    animate={{
                        y: [-10, 10, -10],
                        x: [-5, 5, -5]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    {/* Left side - Enhanced visual */}
                    <motion.div
                        initial={{ opacity: 0, x: -50, scale: 0.95 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Main image container with advanced styling */}
                        <div className="relative group">
                            {/* Gradient border */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>

                            {/* Image container */}
                            <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl border border-white/50">
                                <div className="aspect-[4/3] overflow-hidden">
                                    <img
                                        src="https://blog.robosoftin.com/wp-content/uploads/2025/01/UI-UX-article-for-publishing-02.jpg"
                                        alt="UI/UX Design Process"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Additional decorative elements */}
                        <div className="absolute -z-10 top-8 left-8 w-full h-full bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl opacity-30"></div>
                    </motion.div>

                    {/* Right side - Enhanced content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        {/* Section badge */}
                        <motion.div
                            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 border border-emerald-200 mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <svg className="w-4 h-4 text-emerald-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                            </svg>
                            <span className="text-emerald-700 font-medium text-sm">Why Choose Us</span>
                        </motion.div>

                        <motion.h2
                            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-emerald-800 bg-clip-text text-transparent mb-6 leading-tight"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            Excellence in Every
                            <span className="block">Design Decision</span>
                        </motion.h2>

                        <motion.p
                            className="text-lg text-gray-600 mb-10 leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            viewport={{ once: true }}
                        >
                            We don't just create beautiful interfaces—we craft experiences that drive results and delight users at every touchpoint.
                        </motion.p>

                        {/* Enhanced features list */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="space-y-4 mb-10"
                        >
                            {whyChooseUs.map((item, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="group flex items-start p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 border border-transparent hover:border-emerald-100"
                                >
                                    <div className="relative mr-4 mt-1">
                                        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full p-2 group-hover:scale-110 transition-transform duration-300">
                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-emerald-700 transition-colors duration-300">
                                            {item.title}
                                        </h4>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Enhanced testimonial */}
                        <motion.div
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.7, delay: 0.6 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            {/* Gradient background */}
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 via-white to-teal-50 rounded-2xl"></div>

                            {/* Content */}
                            <div className="relative bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-emerald-100 shadow-lg">
                                <div className="flex items-start">
                                    {/* Quote icon */}
                                    <div className="relative mr-6 flex-shrink-0">
                                        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl w-14 h-14 flex items-center justify-center">
                                            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                            </svg>
                                        </div>
                                        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur opacity-20"></div>
                                    </div>

                                    <div className="flex-1">
                                        <blockquote className="text-gray-800 text-lg leading-relaxed mb-4 italic">
                                            "Working with Techista transformed our product's usability. Their UX research uncovered insights that led to a complete redesign, resulting in a 45% increase in user retention and 60% boost in conversions."
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default UiWhyChooseSection;