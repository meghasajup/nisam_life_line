import React from 'react';
import { Compass, Palette, Smartphone, FileText } from 'lucide-react';

const features = [
  {
    icon: <Compass className="w-6 h-6 text-white" />,
    title: "User-Friendly Navigation",
    description:
      "Visitors to your website should be able to find what they're looking for easily and quickly. Navigation should be clear, intuitive, and consistent across all pages.",
    image:
      "https://blog.qasource.com/hubfs/a-complete-guide-to-user-interface-testing.png",
  },
  {
    icon: <Palette className="w-6 h-6 text-white" />,
    title: "Attractive Design",
    description:
      "The design of a website is the first thing visitors will notice. An attractive and visually pleasing design that is simple and clean should be essential elements.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=400&fit=crop&crop=center",
  },
  {
    icon: <Smartphone className="w-6 h-6 text-white" />,
    title: "Responsive & Mobile-Friendly",
    description:
      "With more people accessing the internet on mobile devices, it's essential to ensure that your website is optimized for mobile viewing and functionality.",
    image:
      "https://cdn.prod.website-files.com/62fec8041edae129b05e72ac/63aacec8c753bddee861cc61_Blog-HeroImage-Mobile-firendly-Website-1600x900px.jpeg",
  },
  {
    icon: <FileText className="w-6 h-6 text-white" />,
    title: "Relevant & High-Quality Content",
    description:
      "Ensure that content is relevant, informative, and engaging while keeping text easy to read, broken into digestible sections with clear headings.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop&crop=center",
  },
];


<style>
  {`
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in {
      animation: fadeIn 0.6s ease-out forwards;
    }
    .group:hover .group-hover-scale-110 {
      transform: scale(1.1);
    }
  `}
</style>


export const WebDevelopmentLanding = () => {
  return (
    <div className="py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="bg-gradient-to-r from-gray-500 to-emerald-500 bg-clip-text text-transparent text-sm font-semibold tracking-wider uppercase mb-2 animate-fade-in">
            Premium Features
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
            Crafting Digital Excellence with{' '}
            <span className="bg-gradient-to-r from-gray-500 to-emerald-500 bg-clip-text text-transparent">
              Purpose-Driven Design
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Our websites blend aesthetic elegance with functional precision, delivering
            immersive experiences that captivate and convert.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full border-l-2 border-dashed border-emerald-500/30" />

          <div className="space-y-24">
            {features.map((feature, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center md:justify-between relative ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                    } group`}
                  data-aos={`fade-${isLeft ? 'right' : 'left'}`}
                >
                  {/* Content */}
                  <div className="md:w-[45%] p-6 bg-white rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-gradient-to-r from-gray-500 to-emerald-500">
                        {feature.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 mt-2 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="mt-6 overflow-hidden rounded-lg border border-gray-200">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Connector line */}
                  <div className="hidden md:block absolute left-1/2 top-1/2 h-[2px] w-16 bg-gradient-to-r from-gray-500/20 to-emerald-500/20 group-even:bg-gradient-to-l"></div>

                  {/* Icon */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-y-1/2 transform -translate-x-1/2 z-10 w-12 h-12 rounded-full bg-gradient-to-r from-gray-500 to-emerald-500 items-center justify-center shadow-lg ring-4 ring-white transition-all duration-300 group-hover:scale-110">
                    {feature.icon}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
