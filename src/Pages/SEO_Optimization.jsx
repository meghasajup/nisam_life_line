import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, BarChart2, TrendingUp, Globe, Target, Link2, Layout, PenTool, Smartphone, CheckCircle, Zap } from 'lucide-react';

const SEOServices = () => {
    const [openFaqIndex, setOpenFaqIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    const services = [
        {
            title: "Keyword Research",
            description: "Data-driven keyword strategies to target high-intent search queries.",
            icon: "🔍",
            color: "from-blue-500 to-cyan-500"
        },
        {
            title: "On-Page Optimization",
            description: "Technical and content optimizations to improve search visibility.",
            icon: "📝",
            color: "from-purple-500 to-indigo-500"
        },
        {
            title: "Link Building",
            description: "Earn high-quality backlinks from authoritative websites.",
            icon: "⛓️",
            color: "from-green-500 to-emerald-500"
        },
        {
            title: "Local SEO",
            description: "Dominate local search results and Google My Business listings.",
            icon: "📍",
            color: "from-amber-500 to-yellow-500"
        }
    ];

    const whyChooseUs = [
        "Transparent reporting dashboard",
        "White-hat techniques only",
        "Custom strategies for your industry",
        "Proven track record of results"
    ];

    const features = [
        {
            title: "Technical SEO Audit",
            desc: "Comprehensive analysis of your website's technical health.",
            icon: Search
        },
        {
            title: "Content Strategy",
            desc: "SEO-optimized content that ranks and converts.",
            icon: PenTool
        },
        {
            title: "Rank Tracking",
            desc: "Monitor keyword positions and competitor movements.",
            icon: TrendingUp
        },
        {
            title: "Mobile Optimization",
            desc: "Ensure perfect performance on all devices.",
            icon: Smartphone
        },
        {
            title: "Schema Markup",
            desc: "Implement structured data for rich snippets.",
            icon: Layout
        },
        {
            title: "Analytics Integration",
            desc: "Measure traffic and conversion metrics.",
            icon: BarChart2
        }
    ];

    const faqs = [
        {
            question: "How long does SEO take to show results?",
            answer: "Typically 3-6 months for noticeable improvements, with full results in 6-12 months depending on competition."
        },
        {
            question: "What's included in your SEO reports?",
            answer: "Monthly reports include keyword rankings, traffic analytics, backlink profiles, and actionable recommendations."
        },
        {
            question: "How do you handle algorithm updates?",
            answer: "We monitor all major updates and adjust strategies accordingly to maintain and improve your rankings."
        },
        {
            question: "What's your pricing structure?",
            answer: "Custom packages start at ₹25,000/month for small businesses up to ₹2,00,000+/month for enterprise solutions."
        }
    ];

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
            <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-800 text-white rounded-lg shadow-lg">
                <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`
                }}></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.2,
                                        delayChildren: 0.3
                                    }
                                }
                            }}
                        >
                            <motion.div
                                variants={{
                                    hidden: { y: 30, opacity: 0 },
                                    visible: {
                                        y: 0,
                                        opacity: 1,
                                        transition: {
                                            type: "spring",
                                            stiffness: 100,
                                            damping: 10
                                        }
                                    }
                                }}
                            >
                                <motion.h1
                                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    Dominate Search Results with Professional
                                    <span className="block bg-gradient-to-r from-gray-500 to-emerald-500 bg-clip-text text-transparent">
                                        SEO Services
                                    </span>
                                </motion.h1>
                            </motion.div>

                            <motion.p
                                className="text-xl text-blue-200 mb-8 max-w-2xl"
                                variants={{
                                    hidden: { x: -30, opacity: 0 },
                                    visible: {
                                        x: 0,
                                        opacity: 1,
                                        transition: {
                                            type: "spring",
                                            stiffness: 100,
                                            damping: 10,
                                            delay: 0.2
                                        }
                                    }
                                }}
                            >
                                Increase organic traffic, improve rankings, and grow your business with our data-driven SEO strategies.
                            </motion.p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                rotate: 0,
                                transition: {
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 10,
                                    delay: 0.5
                                }
                            }}
                            whileHover={{
                                y: -10,
                                transition: { type: "spring", stiffness: 300 }
                            }}
                            className="flex justify-center"
                        >
                            <div className="relative">
                                <motion.div
                                    className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-r from-gray-500 to-emerald-500 rounded-2xl"
                                    animate={{
                                        y: [0, -10, 0],
                                        transition: {
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }
                                    }}
                                ></motion.div>
                                <motion.div
                                    className="relative bg-white rounded-2xl overflow-hidden shadow-2xl w-full max-w-md"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <motion.div
                                        className="bg-gradient-to-r from-gray-500 to-emerald-500 p-6"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.7 }}
                                    >
                                        <h3 className="text-white text-xl font-bold">SEO Performance Metrics</h3>
                                    </motion.div>
                                    <div className="p-6">
                                        <motion.div
                                            className="flex justify-center mb-4"
                                            initial={{ scale: 0.8 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: 0.8 }}
                                        >
                                            <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl w-full h-64 flex items-center justify-center overflow-hidden">
                                                <motion.img
                                                    src="https://img.freepik.com/free-vector/gradient-seo-background_23-2148887720.jpg"
                                                    alt="SEO Concept Art"
                                                    initial={{ opacity: 0, scale: 1.05 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: 0.5, duration: 0.8 }}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </motion.div>
                                        <motion.p
                                            className="text-gray-700 text-center text-sm mt-4"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 1.0 }}
                                        >
                                            Average results for clients after 12 months of our SEO services
                                        </motion.p>
                                    </div>
                                </motion.div>
                            </div>
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
                            Comprehensive SEO Solutions
                        </motion.div>

                        <motion.h2
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            Our Professional
                            <span className="block bg-gradient-to-r from-gray-500 to-emerald-500 bg-clip-text text-transparent">
                                SEO Services
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
                            Data-driven strategies to improve your search rankings, drive qualified traffic, and increase conversions
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
                                <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden h-full transform transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-2xl group-hover:border-emerald-500 relative">
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-emerald-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>

                                    {/* Content */}
                                    <div className="p-8 relative z-10">
                                        {/* Icon Container */}
                                        <div className="mb-6 relative">
                                            <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                                {service.icon}
                                            </div>
                                            {/* Glow Effect */}
                                            <div className={`absolute inset-0 w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
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
                                                Custom Strategy
                                            </div>
                                            <div className="flex items-center text-sm text-gray-500">
                                                <div className="w-1.5 h-1.5 bg-gradient-to-r from-gray-500 to-emerald-500 rounded-full mr-3"></div>
                                                Monthly Reporting
                                            </div>
                                            <div className="flex items-center text-sm text-gray-500">
                                                <div className="w-1.5 h-1.5 bg-gradient-to-r from-gray-500 to-emerald-500 rounded-full mr-3"></div>
                                                White-Hat Techniques
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
                    className="absolute bottom-20 left-10 w-16 h-16 bg-gradient-to-r from-gray-500 to-emerald-500 rounded-full opacity-10 blur-xl"
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
                                        <Target className="w-12 h-12 text-white mx-auto mb-4" />
                                        <h3 className="text-2xl font-bold text-white">Results-Driven Approach</h3>
                                        <p className="text-white/90 mt-2">We focus on metrics that impact your bottom line</p>
                                    </div>
                                </div>
                                <div className="p-6 bg-white">
                                    <div className="flex justify-between items-center mb-4">
                                        <div className="text-sm font-medium text-gray-500">Client Satisfaction Rate</div>
                                        <div className="text-xl font-bold text-emerald-600">98%</div>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                        <div
                                            className="bg-gradient-to-r from-gray-500 to-emerald-500 h-2.5 rounded-full"
                                            style={{ width: '98%' }}
                                        ></div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating elements */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 rounded-xl -z-10"
                            />
                            <motion.div
                                animate={{ y: [0, 15, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 rounded-xl -z-10"
                            />
                        </motion.div>

                        {/* Right Column - Content */}
                        <motion.div variants={slideInRight} className="space-y-8">
                            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-gray-500 to-emerald-500 rounded-full text-white text-sm font-semibold shadow-lg mb-6">
                                <Zap className="w-4 h-4 mr-2" />
                                Why We Stand Out
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                                Why Choose Our
                                <span className="block bg-gradient-to-r from-gray-500 to-emerald-500 bg-clip-text text-transparent">
                                    SEO Services
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
                                            <div className="mt-1 w-16 h-1 bg-gradient-to-r from-gray-500 to-emerald-500 rounded-full"></div>
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
                            Comprehensive
                            <span className='bg-gradient-to-r from-gray-500 to-emerald-500 bg-clip-text text-transparent'> SEO Features</span>
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
                            Our full-spectrum SEO services cover every aspect of search engine optimization
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
                                SEO Questions Answered
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
                            Get answers to common questions about our SEO services and how we can help your business grow.
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

export default SEOServices;