import React, { useState, useEffect } from "react";

// Mock images for demonstration
const image1 = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop&crop=center";
const image2 = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop&crop=center";
const image3 = "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=1920&h=1080&fit=crop&crop=center";

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
    <div className="relative w-screen h-[99vh] overflow-hidden bg-gray-900">
      {/* Slide Image */}
      <div className="relative w-full h-full">
        <img
          src={slides[currentIndex].image}
          alt={`Slide ${currentIndex + 1}`}
          className="absolute top-0 left-0 w-full h-full object-cover object-center transition-all duration-1000 ease-in-out transform hover:scale-105"
        />

        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>

        {/* Animated Text Content */}
        <div className="absolute inset-0 flex items-center z-20 px-4 sm:px-8 lg:px-20">
          <div className="text-white max-w-3xl space-y-6 md:space-y-8 p-6 md:p-8 animate-fade-in">
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mb-6 animate-pulse"></div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent drop-shadow-2xl">
              {slides[currentIndex].title}
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl mt-4 md:mt-6 max-w-2xl font-light leading-relaxed text-gray-100 drop-shadow-lg">
              {slides[currentIndex].description}
            </p>
            <div className="flex items-center space-x-4 pt-4">
              <div className="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500"></div>
              <span className="text-sm font-medium text-gray-300 uppercase tracking-wider">
                0{currentIndex + 1} / 0{slides.length}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-white/10 backdrop-blur-md text-white rounded-full p-4 hover:bg-white/20 hover:scale-110 transition-all duration-300 border border-white/20 shadow-2xl z-30 group"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:-translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-white/10 backdrop-blur-md text-white rounded-full p-4 hover:bg-white/20 hover:scale-110 transition-all duration-300 border border-white/20 shadow-2xl z-30 group"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Enhanced Indicators */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-4 z-30">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`h-3 rounded-full transition-all duration-500 hover:scale-110 ${
              idx === currentIndex 
                ? "w-12 bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-500/50" 
                : "w-3 bg-white/40 hover:bg-white/70 backdrop-blur-sm border border-white/30"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Enhanced Play/Pause Button */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute bottom-12 right-8 bg-white/10 backdrop-blur-md text-white rounded-full p-4 hover:bg-white/20 hover:scale-110 transition-all duration-300 border border-white/20 shadow-2xl z-30 group"
        aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
      >
        {isAutoPlaying ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20 z-30">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-5000 ease-linear"
          style={{ width: isAutoPlaying ? '100%' : `${((currentIndex + 1) / slides.length) * 100}%` }}
        />
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default CarouselComponent;