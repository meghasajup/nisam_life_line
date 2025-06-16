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

export const WebDevelopmentLanding = () => {
  return (
    <div className="py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="bg-gradient-to-r from-[#00C3A5] to-[#0084FF] bg-clip-text text-transparent text-sm font-semibold tracking-wider uppercase mb-2">
            Premium Features
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
            Explore the Journey of an{' '}
            <span className="text-[#00C3A5]">Exceptional Website</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We design websites that are visually stunning and user-centric, ensuring a seamless and impressive experience across all devices.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full border-l-2 border-dashed border-[#00C3A5]" />

          <div className="space-y-16">
            {features.map((feature, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center md:justify-between relative ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className="md:w-5/12 p-4 bg-white/80 backdrop-blur rounded-xl shadow-md border border-white/60">
                    <h3 className="text-2xl font-semibold text-gray-800">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mt-2 text-sm">{feature.description}</p>
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="mt-4 w-full rounded-lg border"
                    />
                  </div>

                  {/* Icon */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-y-1/2 transform -translate-x-1/2 z-10 w-10 h-10 rounded-full bg-gradient-to-r from-[#00C3A5] to-[#0084FF] items-center justify-center shadow-lg">
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
