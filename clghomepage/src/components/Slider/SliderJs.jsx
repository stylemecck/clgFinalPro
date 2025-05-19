// Slider.jsx
import { useState, useEffect } from "react";
import img1 from '../../components/Slider/a1.png'
import img2 from '../../components/Slider/a2.png'
import img3 from '../../components/Slider/a3.png'
import img4 from '../../components/Slider/a4.png'

const slides = [
  {
    image:
      img1,
    title: "Spring Break: How to Fashion Your Holiday",
    subtitle: "Your boarding pass to good fashion.",
  },
  {
    image:
      img2,
    title: "Summer Escapes: Stylish Getaways",
    subtitle: "Travel in trend this season.",
  },
  {
    image:
      img4,
    title: "City Vibes: Urban Fashion Tips",
    subtitle: "Turn heads in the streets.",
  },
];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="relative w-full h-[500px] md:h-[80vh] overflow-hidden ">
      <div
        className="w-full h-full bg-cover bg-center duration-700 ease-in-out"
        style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
      ></div>

      {/* Text Overlay */}
      <div className="absolute bottom-0 left-0 w-full bg-white/90 p-6 md:w-1/2">
        <h2 className="text-xl font-bold uppercase">
          {slides[currentIndex].title}
        </h2>
        <p className="text-gray-600 mt-1">
          {slides[currentIndex].subtitle}
        </p>
        <div className="w-10 h-0.5 bg-red-500 mt-3" />
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-2xl"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-2xl"
      >
        ❯
      </button>
    </div>
  );
}
