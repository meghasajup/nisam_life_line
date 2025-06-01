import React, { useState, useEffect } from 'react';

const slides = [
  {
    image: "https://wallpapercave.com/wp/wp8246854.jpg",
    title: "Welecom to Techista Solutions",
    description: "Where innovation meets business success."
  },
  {
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c29mdHdhcmUlMjBjb21wYW55fGVufDB8fDB8fHww",
    title: "Team Collaboration",
    description: "Empowering teams to work smarter and faster"
  },
  {
    image: "https://wallpapers.com/images/hd/business-background-83br7zd1i2i2o59x.jpg",
    title: "Global Reach",
    description: "Connecting businesses worldwide with our platform"
  }
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
    <div className="w-full relative group">
      {/* Full-width Slides Container */}
      <div className="relative overflow-hidden w-full h-[70vh] min-h-[500px]">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10"></div>
        
        {/* Slide Image */}
        <img
          src={slides[currentIndex].image}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover object-center transition-all duration-1000 ease-in-out"
        />
        
        {/* Slide Content */}
        <div className="absolute inset-0 flex items-center z-20">
          <div className="container mx-auto px-8 text-white max-w-4xl">
            <div className="space-y-6">
              <h2 className="text-5xl font-bold tracking-tight animate-fadeIn">
                {slides[currentIndex].title}
              </h2>
              <p className="text-xl animate-fadeIn delay-100">
                {slides[currentIndex].description}
              </p>
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium text-lg transition-all transform hover:scale-105 animate-fadeIn delay-200">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-8 transform -translate-y-1/2 bg-white/30 text-white rounded-full p-3 hover:bg-white/50 backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 z-20 shadow-lg hover:scale-110"
        aria-label="Previous Slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-8 transform -translate-y-1/2 bg-white/30 text-white rounded-full p-3 hover:bg-white/50 backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 z-20 shadow-lg hover:scale-110"
        aria-label="Next Slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex ? 'w-8 bg-blue-500' : 'w-4 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Play/Pause Button */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute bottom-8 right-8 bg-white/30 text-white rounded-full p-2 hover:bg-white/50 backdrop-blur-sm z-20 transition-all"
        aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
      >
        {isAutoPlaying ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
          </svg>
        )}
      </button>
    </div>
  );
};