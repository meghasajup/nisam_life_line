import React from 'react';
import { Compass, Palette, Smartphone, FileText } from 'lucide-react';

const features = [
    {
        icon: <Compass className="w-8 h-8 text-white" />,
        title: "User-Friendly Navigation",
        description: "Visitors to your website should be able to find what they're looking for easily and quickly. Navigation should be clear, intuitive, and consistent across all pages.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop&crop=center"
    },
    {
        icon: <Palette className="w-8 h-8 text-white" />,
        title: "Attractive Design",
        description: "The design of a website is the first thing visitors will notice. An attractive and visually pleasing design that is simple and clean should be essential elements.",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=400&fit=crop&crop=center"
    },
    {
        icon: <Smartphone className="w-8 h-8 text-white" />,
        title: "Responsive & Mobile-Friendly",
        description: "With more people accessing the internet on mobile devices, it's essential to ensure that your website is optimized for mobile viewing and functionality.",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=400&fit=crop&crop=center"
    },
    {
        icon: <FileText className="w-8 h-8 text-white" />,
        title: "Relevant & High-Quality Content",
        description: "Ensure that content is relevant, informative, and engaging while keeping text easy to read, broken into digestible sections with clear headings.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop&crop=center"
    }
];

export const WebDevelopmentLanding = () => {
    return (
        <div className="py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-[#00C3A5]/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0084FF]/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-block mb-4">
                        <span className="bg-gradient-to-r from-[#00C3A5] to-[#0084FF] bg-clip-text text-transparent text-sm font-semibold tracking-wider uppercase">
                            Premium Features
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                        Features of an <span className="text-[#00C3A5] relative">
                            Exceptional Website
                            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#00C3A5] to-[#0084FF] rounded-full opacity-30"></div>
                        </span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                        We build websites that combine stunning design with exceptional functionality, creating digital experiences that captivate and convert.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 overflow-hidden hover:shadow-2xl hover:shadow-[#00C3A5]/10 transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02] cursor-pointer"
                            style={{
                                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                            }}
                        >
                            <div className="p-8 flex flex-col items-center text-center h-full relative">
                                {/* Gradient overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#00C3A5]/5 to-[#0084FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                                <div className="relative z-10 w-full flex flex-col items-center">
                                    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-[#00C3A5] to-[#0084FF] p-1 mb-6 shadow-lg group-hover:shadow-xl group-hover:shadow-[#00C3A5]/20 transition-all duration-300 group-hover:scale-110">
                                        <img
                                            src={feature.image}
                                            alt={feature.title}
                                            className="w-full h-full object-cover rounded-full border-2 border-white"
                                        />
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-[#00C3A5] transition-colors duration-300">
                                        {feature.title}
                                    </h3>

                                    <p className="text-gray-600 mb-6 flex-grow leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </div>
    );
};