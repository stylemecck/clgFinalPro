import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const FlipkartSlider = ({ images = [], links = [] }) => {
  return (
    <div className="relative w-[98vw] mt-2 mx-3.5">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
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
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full relative">
              <Link to={links[index] || "#"}>
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-fill rounded-lg sm:rounded-xl"
                />
              </Link>
              <Link
                to={links[index] || "#"}
                className="absolute bottom-10 left-2 md:bottom-30 md:left-12 bg-slate-600 text-white px-4 py-2 md:px-6 md:py-3 text-sm md:text-xl font-medium md:font-semibold rounded-full shadow-md hover:bg-slate-700 transition duration-300"
              >
                Grab Now
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-pagination absolute bottom-4 left-0 right-0 flex justify-center z-10" />
    </div>
  );
};

export default FlipkartSlider;
