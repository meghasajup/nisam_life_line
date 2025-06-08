import React, { useState, useEffect } from "react";
import image1 from "../images/page1.png"
import image2 from "../images/page2.png"
import image3 from "../images/page3.png"
const slides = [
  {
    image: image1,
    title: "Best Website Development Company",
    description: "Your One-step Hub for Websites, Web Apps & Project Support.",
  },
  {
    image: image2,
    title: "Team Collaboration",
    description: "Where brilliant minds connect, breakthrough ideas emerge.",
  },
  {
    image: image3,
    title: "Global Reach",
    description: "Connecting ideas with the world, digital solutions empower clients across borders and exceed expectations at every step.",
  },
];

export const CarouselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setIsAutoPlaying(false);
  };

  const goToSlide = (idx) => {
    setCurrentIndex(idx);
    setIsAutoPlaying(false);
  };

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  return (
    <div className="relative w-screen   h-[99vh] overflow-hidden">
      {/* Slide Image */}
      <div className="relative w-full h-full">
        <img
          src={slides[currentIndex].image}
          alt={`Slide ${currentIndex + 1}`}
          className="absolute top-0 left-0 w-full h-full object-cover object-center transition-all duration-1000 ease-in-out"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10"></div>

        {/* Text Content */}
        <div className="absolute inset-0 flex items-center z-20 px-4 sm:px-8 lg:px-16">
          <div className="text-white max-w-2xl space-y-4 md:space-y-6 p-4 md:p-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              {slides[currentIndex].title}
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl mt-2 md:mt-4 max-w-lg">
              {slides[currentIndex].description}
            </p>
           
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/30 text-white rounded-full p-2 hover:bg-white/50 backdrop-blur-sm z-30 transition-all"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/30 text-white rounded-full p-2 hover:bg-white/50 backdrop-blur-sm z-30 transition-all"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex ? "w-8 bg-blue-500" : "w-4 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Play/Pause Button */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute bottom-8 right-8 bg-white/30 text-white rounded-full p-2 hover:bg-white/50 backdrop-blur-sm z-30 transition-all"
        aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
      >
        {isAutoPlaying ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>
    </div>
  );
};
