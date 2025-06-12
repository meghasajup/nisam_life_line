import React, { useState, useEffect } from 'react';
import { Target, TrendingUp, Code, Shield, ShoppingCart, Smartphone, Zap } from 'lucide-react';

export default function ITCompanyMissionPage() {
    const [activeTab, setActiveTab] = useState('about');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const features = [
        {
            icon: Code,
            title: "Custom Software Development",
            description: "Enterprise-grade solutions with cutting-edge technologies",
            color: "from-blue-500 to-blue-600"
        },
        {
            icon: ShoppingCart,
            title: "Ecommerce Development",
            description: "Custom online stores and digital commerce solutions",
            color: "from-blue-500 to-blue-600"
        },
        {
            icon: Shield,
            title: "Website Development",
            description: "Custom web solutions built with modern technologies",
            color: "from-blue-500 to-blue-600"
        },
        {
            icon: Smartphone,
            title: "Mobile App Development",
            description: "Cross-platform mobile applications that scale",
            color: "from-orange-500 to-orange-600"
        }
    ];

    const tabContent = {
        about: {
            title: "About Us",
            content: "We are a leading IT solutions provider specializing in digital transformation, custom software development, and innovative technology solutions. Our team of expert developers, architects, and consultants deliver scalable, secure, and efficient solutions that drive business success in the digital age."
        },
        mission: {
            title: "Our Mission",
            content: "To empower businesses through innovative technology solutions that streamline operations, enhance productivity, and accelerate digital transformation. We are committed to delivering high-quality software, robust infrastructure, and exceptional IT services that help our clients stay competitive in an ever-evolving digital landscape."
        },
        vision: {
            title: "Our Vision",
            content: "To become the most trusted technology partner for businesses worldwide, leading the digital revolution through innovative solutions, cutting-edge technologies, and exceptional service delivery. We envision a future where technology seamlessly integrates with business processes to create unprecedented value and growth opportunities."
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-emerald-600/5 to-purple-600/5"></div>
                    <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-400/5 rounded-full blur-3xl"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left Content */}
                        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-500 to-emerald-500 text-white rounded-full text-sm font-semibold mb-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                                <Zap className="w-4 h-4 mr-2" />
                                INNOVATION • TECHNOLOGY • EXCELLENCE
                            </div>

                            <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-8 bg-gradient-to-r from-slate-900 via-blue-900 to-emerald-900 bg-clip-text text-transparent">
                                Transforming Ideas Into
                                <span className="bg-gradient-to-r from-emerald-500 to-gray-500 bg-clip-text text-transparent"> Digital Reality</span>
                                <br />
                                Through Code.
                            </h1>

                            {/* Navigation Tabs */}
                            <div className="flex space-x-8 mb-8 border-b border-gray-200">
                                {Object.keys(tabContent).map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`pb-4 px-2 text-lg font-medium transition-all duration-300 relative ${activeTab === tab
                                            ? 'text-emerald-600'
                                            : 'text-gray-600 hover:text-gray-900'
                                            }`}
                                    >
                                        {tabContent[tab].title}
                                        {activeTab === tab && (
                                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-gray-500 rounded-full"></div>
                                        )}
                                    </button>
                                ))}
                            </div>

                            {/* Tab Content */}
                            <div className="mb-10">
                                <p className="text-xl text-gray-700 leading-relaxed">
                                    {tabContent[activeTab].content}
                                </p>
                            </div>

                            {/* Features Grid */}
                            <div className="grid sm:grid-cols-2 gap-6">
                                {features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 hover:bg-white transition-all duration-500 hover:shadow-2xl border border-gray-100/50 hover:border-emerald-200 transform hover:-translate-y-2"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl" style={{ background: `linear-gradient(135deg, ${feature.color.split(' ')[1]}, ${feature.color.split(' ')[3]})` }}></div>
                                        <div className="relative">
                                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                                <feature.icon className="w-6 h-6 text-white" />
                                            </div>
                                            <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                                                {feature.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Content - Enhanced Visual */}
                        <div className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                            {/* Main Tech Image with enhanced styling */}
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-gray-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 scale-105"></div>
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-sm">
                                    <img
                                        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                        alt="Team collaborating on technology solutions"
                                        className="aspect-[4/3] object-cover w-full group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                                </div>
                            </div>

                            {/* Floating elements */}
                            <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-r from-gray-400 to-emerald-400 rounded-2xl opacity-80 animate-pulse shadow-lg"></div>
                            <div className="absolute top-1/2 -left-4 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl opacity-60 animate-bounce shadow-lg"></div>
                            <div className="absolute bottom-8 -right-8 w-16 h-16 bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl opacity-70 animate-pulse shadow-lg"></div>
                        </div>
                    </div>
                </div>

                {/* Enhanced Wave Decoration */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#f8fafc" />
                                <stop offset="50%" stopColor="#ffffff" />
                                <stop offset="100%" stopColor="#f1f5f9" />
                            </linearGradient>
                        </defs>
                        <path d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,112C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill="url(#waveGradient)" />
                    </svg>
                </div>
            </div>
        </div>
    );
}