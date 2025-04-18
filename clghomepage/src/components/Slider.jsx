import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade, Parallax } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import slideimg1 from '../assets/flirting-young-sexy-woman.png';
import slideimg2 from '../assets/fashion-1623084.png';

const Slider = () => {
  const slides = [
    {
      title: "Women Summer",
      subtitle: "Trend Style",
      description: "Introducing the Ambuz women's autumn/summer fashion collection that blends comfort with contemporary style.",
      image: slideimg1,
      buttonText: "Explore Summer",
      bgGradient: "from-amber-50 to-white"
    },
    {
      title: "Elegant Autumn",
      subtitle: "Collection",
      description: "Discover timeless fashion pieces for every occasion in our premium autumn collection.",
      image: slideimg2,
      buttonText: "View Collection",
      bgGradient: "from-stone-50 to-white"
    },
    {
      title: "Winter Cozy",
      subtitle: "Essentials",
      description: "Wrap yourself in comfort and style with our luxurious winter essentials.",
      image: slideimg2,
      buttonText: "Shop Winter",
      bgGradient: "from-blue-50 to-white"
    }
  ];

  return (
    <Swiper
      modules={[Navigation, Autoplay, EffectFade, Parallax]}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      autoplay={{ 
        delay: 5000,
        disableOnInteraction: false 
      }}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      parallax={true}
      loop={true}
      speed={1000}
      className="relative w-full h-screen max-h-[90vh]"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className={`flex flex-col md:flex-row items-center justify-between px-4 md:px-16 lg:px-24 h-full bg-gradient-to-r ${slide.bgGradient}`}>
            {/* Text Content */}
            <div 
              className="max-w-xl space-y-6 md:space-y-8 z-10 order-2 md:order-1 mt-8 md:mt-0"
              data-swiper-parallax="-300"
              data-swiper-parallax-duration="600"
            >
              <h1 
                className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight text-gray-800"
                data-swiper-parallax-opacity="0"
                data-swiper-parallax-scale="0.5"
              >
                {slide.title} <br /> 
                <span className="font-light text-gray-500">{slide.subtitle}</span>
              </h1>
              <p 
                className="text-gray-600 text-base md:text-lg max-w-md"
                data-swiper-parallax-opacity="0"
                data-swiper-parallax-y="50"
              >
                {slide.description}
              </p>
              <button 
                className="px-6 py-3 border-2 border-gray-800 text-gray-800 rounded-full hover:bg-gray-800 hover:text-white transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-opacity-50"
                data-swiper-parallax-opacity="0"
                data-swiper-parallax-y="100"
              >
                {slide.buttonText} →
              </button>
            </div>
            
            {/* Image */}
            <div 
              className="relative w-full md:w-1/2 h-1/2 md:h-full flex items-end justify-center order-1 md:order-2"
              data-swiper-parallax="100"
              data-swiper-parallax-duration="800"
            >
              <img
                src={slide.image}
                alt={`${slide.title} ${slide.subtitle}`}
                className="max-h-[60vh] md:max-h-[80vh] object-contain object-bottom transition-transform duration-1000 hover:scale-105"
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
      
      {/* Custom Navigation Arrows */}
      <div className="swiper-button-prev !text-gray-800 !left-4 after:!text-2xl"></div>
      <div className="swiper-button-next !text-gray-800 !right-4 after:!text-2xl"></div>
    </Swiper>
  );
};

export default Slider;