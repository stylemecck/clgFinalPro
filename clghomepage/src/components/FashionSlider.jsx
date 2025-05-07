import React, { useState, useEffect } from 'react';

const FashionSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Summer Collection 2023",
      description: "Discover our new summer collection with fresh colors and lightweight fabrics perfect for the season.",
      offer: "30% OFF on all summer items",
      buttonText: "SHOP NOW",
      imageUrl: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      bgColor: "bg-pink-50"
    },
    {
      title: "Elegant Evening Wear",
      description: "Make a statement at your next event with our exclusive evening wear collection.",
      offer: "Free shipping on orders over $100",
      buttonText: "EXPLORE",
      imageUrl: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      bgColor: "bg-blue-50"
    },
    {
      title: "Casual Weekend Style",
      description: "Comfort meets style in our new casual weekend collection for men and women.",
      offer: "Buy 2 get 1 free on selected items",
      buttonText: "SHOP DEAL",
      imageUrl: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",
      bgColor: "bg-green-50"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative w-full h-screen max-h-[800px] overflow-hidden ${slides[currentSlide].bgColor} transition-colors duration-500`}>
      {/* Slide Content */}
      <div className="relative h-full w-full">
        {/* Image - Full size background on mobile, half on desktop */}
        <div className="absolute inset-0 md:right-1/2 overflow-hidden">
          <img 
            src={slides[currentSlide].imageUrl} 
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover object-center"
          />
          {/* Overlay for better text readability on mobile */}
          <div className="absolute inset-0 bg-black/30 md:bg-transparent"></div>
        </div>

        {/* Text Content - Overlaps image on mobile, sits beside on desktop */}
        <div className="absolute inset-0 md:left-1/2 flex items-center p-8 md:p-12 z-10">
          <div className="max-w-2xl bg-white/90 md:bg-transparent p-6 md:p-0 rounded-lg md:rounded-none backdrop-blur-sm md:backdrop-blur-none">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">{slides[currentSlide].title}</h2>
            <p className="text-lg md:text-xl mb-6 text-gray-700">{slides[currentSlide].description}</p>
            <p className="text-xl md:text-2xl font-semibold mb-8 text-red-600">{slides[currentSlide].offer}</p>
            <button className="px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors">
              {slides[currentSlide].buttonText}
            </button>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center z-20">
        <button 
          onClick={prevSlide}
          className="mx-2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <div className="flex space-x-2 mx-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-white w-6' : 'bg-white/50'}`}
            />
          ))}
        </div>
        
        <button 
          onClick={nextSlide}
          className="mx-2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FashionSlider;