import React, { useState, useEffect } from "react";
import homeimage from "../assets/Technologies/Frontend/homeimg.jpg"
const slides = [
  {
    image: homeimage,
     title: "Welcome to TechIsta Solutions",
    description: "Your One-step Hub for Websites, Web Apps & Project Support.",
  },
  {
    image: "https://img.freepik.com/free-photo/team-looking-futuristic-digital-interface-office_23-2151966687.jpg?ga=GA1.1.283967315.1748624414&semt=ais_hybrid&w=740",
    title: "Team Collaboration",
    description: "Where brilliant minds connect, breakthrough ideas emerge.",
  },
  {
    image: "https://images.unsplash.com/photo-1496065187959-7f07b8353c55?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
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
    <div className="relative overflow-hidden">
      {/* Slide Image Container with fixed aspect ratio (16:9) */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[14/6] min-h-[350px] sm:min-h-[400px]">
        <img
          src={slides[currentIndex].image}
          alt={`Slide ${currentIndex + 1}`}
          className="absolute top-0 left-0 w-full h-full  object-container sm:object-cover object-center transition-all duration-1000 ease-in-out"
        />

        {/* Slide Content (text overlay) */}
       <div className={`absolute inset-0 flex items-center z-20 px-4 sm:px-8`}>
  <div
    className={`
      text-white max-w-3xl space-y-6 p-4 rounded-md transition-all duration-700 ease-in-out
      ${currentIndex === 0 ? "mx-auto text-center" : ""}
      ${currentIndex === 1 ? "mx-auto text-center" : ""}
      ${currentIndex === 1 ? "ml-auto text-left" : ""}
    `}
  >
    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center animate-fadeIn">
      {slides[currentIndex].title}
    </h2>
    <p className="text-xl md:text-2xl animate-fadeIn">
      {slides[currentIndex].description}
    </p>
  </div>
</div>

      </div>

     
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
