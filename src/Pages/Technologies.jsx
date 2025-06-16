import React, { useState } from 'react';
import nodejs from '../assets/Technologies/backend/node.png';
import php from '../assets/Technologies/backend/php.png';
import laravel from '../assets/Technologies/backend/laravel.png';
import react from '../assets/Technologies/Frontend/react.png';
import angular from '../assets/Technologies/Frontend/Angular.png';
import javascript from '../assets/Technologies/Frontend/javas.png';
import flutter from '../assets/Technologies/Mobile_app/flutter.png';
import ecommerce from '../assets/Technologies/e_commerce/custom-ecoomerce.png';
import wordpress from '../assets/Technologies/CMS/wordpress.png';
import bootstrap from '../assets/Technologies/Frontend/bootstrap.png';
import website from '../assets/Technologies/Website dev/web-design.png';
import wireframe from '../assets/Technologies/UI-UX/wireframe.png';
import figma from '../assets/Technologies/UI-UX/1034770564.png';
import uiux from '../assets/Technologies/UI-UX/ux-writing.png';
import mobileapp from '../assets/Technologies/Software_dev/app-design.png';
import webapp from '../assets/Technologies/Software_dev/icons8-web-apps-64.png';
import typescript from '../assets/Technologies/Frontend/typescript-def.png';
import html from '../assets/Technologies/Frontend/HTML.png';
import tailwind from '../assets/Technologies/Frontend/tailwind.png';
import cloudinary from '../assets/Technologies/enterprises/cloudinary.png';
import devops from '../assets/Technologies/enterprises/devops.png';
import db from '../assets/Technologies/enterprises/db.png';
import integration from '../assets/Technologies/enterprises/intergration.png';
import express from '../assets/Technologies/Frontend/express.png';
import seo from '../assets/Technologies/digital_marketing/seo.png';
import { motion } from 'framer-motion';

export const Technologies = () => {
    const [selectedCategory, setSelectedCategory] = useState('Backend Technologies');
    const [showQuoteModal, setShowQuoteModal] = useState(false);
    const [showContactPage, setShowContactPage] = useState(false);

    const categories = [
        { name: 'Frontend Technologies', count: 7 },
        { name: 'Backend Technologies', count: 4 },
        { name: 'Mobile Development', count: 1 },
        { name: 'Software Development', count: 2 },
        { name: 'Enterprise Solutions', count: 4 },
        { name: 'eCommerce Development', count: 1 },
        { name: 'CMS Systems', count: 1 },
        { name: 'Digital Marketing', count: 1 },
        { name: 'UI / UX Design', count: 3 },
        { name: 'Website Development', count: 1 }
    ];

    const technologies = {
        'Backend Technologies': [
            {
                name: 'Node.js',
                image: nodejs,
                description: 'Start nurturing your business with Node.js development services that deliver high-performance, scalable server-side applications.'
            },
            {
                name: 'Express',
                image: express,
                description: "Build fast and minimalist web applications with Express.js, the flexible Node.js framework that simplifies server-side development and API creation."
            },
            {
                name: 'PHP',
                image: php,
                description: 'Have an idea that needs scalable and affordable solution? Leveraging dominant frameworks and libraries, we build dynamic web applications.'
            },
            {
                name: 'Laravel',
                image: laravel,
                description: 'Laravel, the most popular PHP framework, offers the right tools to facilitate the faster development of websites & apps more robust, & very easy to maintain.'
            }
        ],
        'Frontend Technologies': [
            {
                name: 'React.js',
                image: react,
                description: 'Build interactive user interfaces with React.js, creating dynamic and responsive web applications that engage users effectively.'
            },
            {
                name: 'Angular',
                image: angular,
                description: 'Create enterprise-grade applications with Angular, providing robust architecture and powerful features for complex projects.'
            },
            {
                name: 'JavaScript',
                image: javascript,
                description: 'Power your web applications with modern JavaScript, implementing cutting-edge features and interactive functionalities.'
            },
            {
                name: 'TypeScript',
                image: typescript,
                description: 'Enhance code quality and maintainability with TypeScript, bringing strong typing to large-scale JavaScript applications.'
            },
            {
                name: 'HTML5/CSS3',
                image: html,
                description: 'Craft pixel-perfect, responsive designs using the latest HTML5 and CSS3 standards for optimal user experience across devices.'
            },
            {
                name: 'Tailwind CSS',
                image: tailwind,
                description: 'Rapidly build custom user interfaces with Tailwind CSS, offering utility-first approach for efficient styling.'
            },
            {
                name: 'Bootstrap',
                image: bootstrap,
                description: 'Rapidly build custom user interfaces with Tailwind CSS, offering utility-first approach for efficient styling.'
            },
        ],
        'Mobile Development': [
            {
                name: 'Flutter',
                image: flutter,
                description: 'Create beautiful, natively compiled applications for mobile with Flutter, Google\'s UI toolkit for cross-platform development.'
            },
        ],
        'Digital Marketing': [
            {
                name: 'SEO',
                image: seo,
                description: 'We boast an excellent team of SEO specialists ensuring outstanding results at a competitive cost. Enhance your website ranking & maximize your online presence.'
            }
        ],
        'eCommerce Development': [
            {
                name: 'Custom eCommerce',
                image: ecommerce,
                description: 'Build tailored eCommerce solutions from scratch, designed specifically for your business model and customer needs.'
            }
        ],
        'CMS Systems': [
            {
                name: 'WordPress',
                image: wordpress,
                description: 'Create powerful content management systems with WordPress, offering flexibility and ease of use for content creators.'
            }
        ],
        'Software Development': [
            {
                name: 'Mobile App',
                image: mobileapp,
                description: 'Enhance your business with our next-gen solutions, incorporating role-based user interfaces seamlessly integrated into your backend logic and data services.'
            },
            {
                name: 'Web App',
                image: webapp,
                description: 'Craft user-friendly websites and applications using our top-tier web development solutions, honed by years of expertise in the competitive digital landscape.'
            }
        ],
        'UI / UX Design': [
            {
                name: 'Figma',
                image: figma,
                description: 'Design collaborative and interactive prototypes with Figma, streamlining the design-to-development workflow.'
            },
            {
                name: 'UI/UX',
                image: uiux,
                description: 'User experience design determines how an interface looks and feels that a user is accustomed to. Employ our designers to produce eye-catching designs for you.'
            },
            {
                name: 'Wireframing',
                image: wireframe,
                description: 'Develop detailed wireframes and prototypes that serve as the foundation for exceptional user experiences.'
            }
        ],
        'Enterprise Solutions': [
            {
                name: 'Cloud Solutions',
                image: cloudinary,
                description: 'Implement scalable cloud infrastructure using AWS, Azure, Cloudinary and Google Cloud Platform for enterprise applications.'
            },
            {
                name: 'DevOps',
                image: devops,
                description: 'Streamline development and deployment processes with modern DevOps practices and automation tools.'
            },
            {
                name: 'Database Solutions',
                image: db,
                description: 'Design and implement robust database architectures using SQL and MongoDB technologies for optimal performance.'
            },
            {
                name: 'Integration',
                image: integration,
                description: 'Connect disparate systems and applications with seamless integration solutions for enterprise environments.'
            }
        ],
        'Website Development': [
            {
                name: 'Website Development',
                image: website,
                description: 'We are specialists in every aspect of web design & website development, we offer our clients the services that enable them to realize their greatest potential.'
            }
        ]
    };

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

    const cardVariants = {
        hidden: { 
            opacity: 0, 
            y: 30,
            scale: 0.9
        },
        visible: { 
            opacity: 1, 
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-emerald-50/30">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-800 text-white py-20 md:py-28 px-4">
                <div className="container mx-auto px-6 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Our Technology Stack
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed opacity-90">
                        Empower your business with our comprehensive IT solutions that connect you with customers and drive growth.
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

            {/* Main Content */}
            <div className="container mx-auto px-6 py-16">
                <div className="flex flex-col xl:flex-row gap-10">
                    {/* Enhanced Sidebar */}
                    <div className="xl:w-1/3">
                        <motion.div 
                            className="bg-white rounded-2xl shadow-2xl sticky top-8 overflow-hidden border border-gray-100"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            {/* Sidebar Header */}
                            <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-emerald-900 p-8">
                                <div className="flex items-center space-x-3 mb-2">
                                    <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                                    <div className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                                    <div className="w-1 h-1 bg-emerald-200 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                                </div>
                                <h3 className="text-white text-2xl font-bold tracking-tight">Technology Categories</h3>
                                <p className="text-emerald-200 text-sm mt-2 font-light">Explore our expertise domains</p>
                            </div>
                            
                            {/* Categories List */}
                            <div className="p-6 space-y-3 bg-gradient-to-b from-gray-50 to-white">
                                {categories.map((category, index) => (
                                    <motion.button
                                        key={category.name}
                                        onClick={() => setSelectedCategory(category.name)}
                                        className={`w-full text-left px-6 py-4 rounded-xl transition-all duration-500 flex justify-between items-center group relative overflow-hidden ${
                                            selectedCategory === category.name
                                                ? 'bg-gradient-to-r from-emerald-600 to-emerald-700 text-white shadow-xl shadow-emerald-500/25 transform scale-105'
                                                : 'text-gray-700 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-emerald-100 hover:text-emerald-800 hover:shadow-lg hover:scale-102'
                                        }`}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                        whileHover={{ x: selectedCategory === category.name ? 0 : 5 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <span className="font-medium text-sm relative z-10">{category.name}</span>
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold relative z-10 ${
                                            selectedCategory === category.name
                                                ? 'bg-white/20 text-white'
                                                : 'bg-emerald-100 text-emerald-700 group-hover:bg-emerald-200'
                                        }`}>
                                            {category.count}
                                        </span>
                                        
                                        {/* Hover effect overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Enhanced Technology Cards */}
                    <div className="xl:w-2/3">
                        <motion.div 
                            className="mb-12"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <div className="flex items-center space-x-4 mb-6">
                                <div className="w-1 h-12 bg-gradient-to-b from-emerald-500 to-emerald-700 rounded-full"></div>
                                <div>
                                    <h2 className="text-4xl font-bold text-gray-800 mb-2 tracking-tight">{selectedCategory}</h2>
                                    <p className="text-gray-600 text-lg font-light">
                                        Explore our expertise in {selectedCategory.toLowerCase()} and discover how we can help transform your business.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div 
                            className="grid lg:grid-cols-2 gap-8"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            key={selectedCategory}
                        >
                            {technologies[selectedCategory]?.map((tech, index) => (
                                <motion.div
                                    key={tech.name}
                                    variants={cardVariants}
                                    className="group relative"
                                    whileHover={{ y: -8 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                >
                                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 hover:border-emerald-200 relative overflow-hidden backdrop-blur-sm">
                                        {/* Card background gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-emerald-50/30 to-emerald-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        
                                        {/* Decorative corner element */}
                                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-emerald-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        
                                        <div className="flex items-start space-x-6 relative z-10">
                                            <div className="flex-shrink-0 relative">
                                                <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                                    <img
                                                        src={tech.image}
                                                        alt={tech.name}
                                                        className="w-10 h-10 object-contain filter group-hover:brightness-110 transition-all duration-300"
                                                    />
                                                </div>
                                                {/* Pulsing ring */}
                                                <div className="absolute inset-0 rounded-2xl border-2 border-emerald-400 opacity-0 group-hover:opacity-30 scale-110 group-hover:scale-125 transition-all duration-500"></div>
                                            </div>
                                            
                                            <div className="flex-1">
                                                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-emerald-800 transition-colors duration-300 tracking-tight">
                                                    {tech.name}
                                                </h3>
                                                <p className="text-gray-600 leading-relaxed text-base font-light">
                                                    {tech.description}
                                                </p>
                                                
                                                {/* Subtle progress bar effect */}
                                                <div className="mt-6 w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                                                    <div className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};