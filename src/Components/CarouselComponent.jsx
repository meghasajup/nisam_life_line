

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const slides = [
  {
    img: "https://img.freepik.com/premium-vector/geometric-template-website-banner_230610-400.jpg?semt=ais_items_boosted&w=740",
    title: "Welcome to TechIsta",
    description:
      "Providing guidance, resources, and technical assistance to help students successfully complete their academic and personal projects.",
  },
  {
    img: "https://images.ctfassets.net/nnkxuzam4k38/4BIP4ge9ontCTkNubiY4lb/48121f9d09134fd83670b1d6e182aa66/white-particles-background.png?w=3840&q=60&fm=webp",
    title: "Web Development Company",
    description:
      "Build dynamic, user-friendly, and scalable web applications with modern technologies and expert guidance.",
  },
];

export const CarouselComponent = () => {
  return (
    <div className="rounded-xl overflow-hidden relative">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        interval={5000}
        transitionTime={800}
        emulateTouch
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[500px] w-full flex items-center px-10">
            {index === 0 ? (
              <>
                {/* First Slide: text left, animation right */}
                <div className="flex-1 text-left">
                  <h1 className="text-5xl font-extrabold mb-4 px-20 text-[#00C3A5] whitespace-nowrap font-serif">
                    {slide.title}
                  </h1>
                  <p className="text-2xl text-[#9A6EFF] px-10">{slide.description}</p>
                </div>

                <div className="flex-1 flex justify-end">
                  <img
                    src="https://mir-s3-cdn-cf.behance.net/project_modules/source/7934b071252497.5bbeed275a7a7.gif"
                    alt="Animated Decoration"
                    className="w-80 h-80 object-contain"
                  />
                </div>
              </>
            ) : index === 1 ? (
              <>
                {/* Second Slide: Background image stays visible */}
                <img
                  src={slide.img}
                  alt={`Slide ${index + 1}`}
                  className="object-cover absolute inset-0 w-full h-full"
                />

                {/* Overlay container with animation left and text right */}
                <div className="relative z-10 flex w-full h-full px-10 items-center justify-between">
                  {/* Animation on left */}
                  <div className="flex-1 flex justify-start">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUthmhN6QwIiAtFyazOEwAAEYo3A1H34CzJA&s"
                      alt="Animated Decoration"
                      className="w-80 h-80 object-contain"
                    />
                  </div>

                  {/* Text on right */}
                  <div className="flex-1 text-right">
                    <h1 className="text-5xl font-extrabold mb-4 pr-20 text-[#00C3A5] whitespace-nowrap font-serif">
                      {slide.title}
                    </h1>
                    <p className="text-2xl text-[#9A6EFF] pr-10">{slide.description}</p>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Other slides fallback */}
                <img
                  src={slide.img}
                  alt={`Slide ${index + 1}`}
                  className="object-cover absolute inset-0 w-full h-full"
                />
                <div className="absolute inset-0 flex justify-center items-end flex-col px-8 text-right">
                  <h1 className="text-5xl font-extrabold mb-8 text-[#00C3A5] whitespace-nowrap font-serif">
                    {slide.title}
                  </h1>
                  <p className="text-2xl text-[#9A6EFF]">{slide.description}</p>
                </div>
              </>
            )}
          </div>
        ))}
      </Carousel>
    </div>
  );
};
