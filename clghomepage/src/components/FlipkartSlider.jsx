import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import slideimg1 from "../assets/banner/bn1.png";
import slideimg2 from "../assets/banner/bn2.png";
import slideimg3 from "../assets/banner/bn3.png";

const FlipkartSlider = () => {
  const slides = [slideimg1, slideimg2, slideimg3];

  return (
    <Swiper
      modules={[Navigation, Autoplay, EffectFade, Pagination]}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      loop={true}
      speed={800}
      pagination={{
        clickable: true,
        el: ".custom-pagination",
        renderBullet: (index, className) =>
          `<span class="${className} custom-bullet"></span>`,
      }}
      className="w-[98vw] h-[30vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] mt-2 relative"
    >
      {slides.map((img, index) => (
        <SwiperSlide key={index}>
          <div className="w-full h-full relative">
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-fill rounded-lg sm:rounded-xl"
            />
          </div>
        </SwiperSlide>
      ))}

      {/* Navigation Arrows */}
      <div
        className="swiper-button-prev hidden sm:flex !text-gray-800 !left-2 sm:!left-4 after:!text-lg sm:after:!text-2xl"
        aria-label="Previous slide"
      ></div>
      <div
        className="swiper-button-next hidden sm:flex !text-gray-800 !right-2 sm:!right-4 after:!text-lg sm:after:!text-2xl"
        aria-label="Next slide"
      ></div>
    </Swiper>
  );
};

export default FlipkartSlider;
