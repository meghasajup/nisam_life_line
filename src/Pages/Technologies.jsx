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
import smo from '../assets/Technologies/digital_marketing/smo.png';
import seo from '../assets/Technologies/digital_marketing/seo.png';

export const Technologies = () => {
    const [selectedCategory, setSelectedCategory] = useState('Backend Technologies');
    const [showQuoteModal, setShowQuoteModal] = useState(false);

    const categories = [
        { name: 'Frontend Technologies', count: 6 },
        { name: 'Backend Technologies', count: 4 },
        { name: 'Mobile Development', count: 1 },
        { name: 'Software Development', count: 2 },
        { name: 'Enterprise Solutions', count: 4 },
        { name: 'eCommerce Development', count: 1 },
        { name: 'CMS Systems', count: 1 },
        { name: 'Digital Marketing', count: 2 },
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
                name: 'SMO',
                image: smo,
                description: 'Our Social Media Optimization team at iROID can enhance your business visibility to the audience through effective and exceptional SMO strategies.'
            },
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

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-800 text-white py-20">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl font-bold mb-6">Our Technology Stack</h1>
                    <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
                        Fuel up your business with our innovative solutions. We provide comprehensive IT services
                        and solutions, going beyond just creating websites or apps to provide a platform for our
                        clients to connect with customers and grow their businesses.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-6 py-16">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar */}
                    <div className="lg:w-1/3">
                        <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-emerald-800 rounded-lg p-6 sticky top-6 shadow-xl">
                            <h3 className="text-white text-xl font-semibold mb-6">Technology Categories</h3>
                            <div className="space-y-2">
                                {categories.map((category) => (
                                    <button
                                        key={category.name}
                                        onClick={() => setSelectedCategory(category.name)}
                                        className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 flex justify-between items-center ${selectedCategory === category.name
                                            ? 'bg-emerald-700 text-white shadow-lg transform scale-105'
                                            : 'text-gray-200 hover:bg-emerald-800/50 hover:text-white'
                                            }`}
                                    >
                                        <span>{category.name}</span>
                                        <span className="bg-emerald-600 text-white px-2 py-1 rounded-full text-sm font-medium">
                                            {category.count}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Technology Cards */}
                    <div className="lg:w-2/3">
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold text-gray-800 mb-2">{selectedCategory}</h2>
                            <p className="text-gray-600">
                                Explore our expertise in {selectedCategory.toLowerCase()} and discover how we can help transform your business.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {technologies[selectedCategory]?.map((tech, index) => (
                                <div
                                    key={tech.name}
                                    className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 hover:border-emerald-300 group transform hover:-translate-y-1"
                                >
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0">
                                            <img
                                                src={tech.image}
                                                alt={tech.name}
                                                className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-emerald-800 transition-colors duration-300">
                                                {tech.name}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed mb-4">
                                                {tech.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-emerald-800 text-white py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                        Let's turn your vision into reality. Our expert team is ready to bring your ideas to life
                        using the latest technologies and best practices.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => setShowQuoteModal(true)}
                            className="px-8 py-3 bg-gradient-to-r from-gray-900 to-emerald-800 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform hover:from-gray-800 hover:to-emerald-700 border border-emerald-600"
                        >
                            REQUEST QUOTE
                            <span className="ml-2">→</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Quote Modal */}
            {showQuoteModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
                    <div className="bg-white rounded-xl p-8 max-w-md w-full shadow-2xl">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Request a Quote</h3>
                        <p className="text-gray-600 mb-6">
                            Thank you for your interest! We'll get back to you with a detailed quote for your project.
                        </p>
                        <div className="flex gap-4">
                            <button
                                onClick={() => setShowQuoteModal(false)}
                                className="flex-1 px-6 py-3 bg-gradient-to-r from-gray-900 to-emerald-800 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform hover:from-gray-800 hover:to-emerald-700"
                            >
                                GET STARTED
                            </button>
                            <button
                                onClick={() => setShowQuoteModal(false)}
                                className="flex-1 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300"
                            >
                                DISMISS
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};