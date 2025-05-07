import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BridalBannerCarousel = () => {
  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    appendDots: dots => (
      <div className="absolute bottom-4">
        <ul className="flex justify-center space-x-2">{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <div className="w-2 h-2 rounded-full bg-white bg-opacity-50 hover:bg-opacity-100 transition-all"></div>
    )
  };

  // Banner data
  const banners = [
    {
      id: 1,
      category: "WOMEN'S",
      title: "Bridal Oakes",
      description: "CELEBRATE YOUR BIG DAY IN TIMELESS ELEGANCE WITH OUR BRIDAL SAREES - A PERFECT BLEND OF TRADITION, LUXURY, AND GRACE",
      offer: "UP TO 50% OFF, TERMS AND CONDITIONS APPLY",
      bgImage: "url('https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3')"
    },
    {
      id: 2,
      category: "NEW COLLECTION",
      title: "Silk Radiance",
      description: "EXPERIENCE THE LUXURY OF HANDWOVEN SILK SAREES FOR YOUR SPECIAL OCCASIONS",
      offer: "LIMITED EDITION - SHOP NOW",
      bgImage: "url('https://images.unsplash.com/photo-1590344861959-5d59b8d689b7?ixlib=rb-4.0.3')"
    },
    {
      id: 3,
      category: "EXCLUSIVE",
      title: "Designer Lehengas",
      description: "STUNNING DESIGNER LEHENGAS THAT REDEFINE ELEGANCE AND SOPHISTICATION",
      offer: "FREE ACCESSORIES WITH EVERY PURCHASE",
      bgImage: "url('https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3')"
    }
  ];

  return (
    <div className="relative">
      <Slider {...settings}>
        {banners.map((banner) => (
          <div key={banner.id} className="w-full h-80 md:h-96 relative">
            {/* Background image with overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: banner.bgImage }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>
            
            {/* Content */}
            <div className="relative h-80 md:h-96 flex items-center justify-center p-4 text-center">
              <div className="max-w-2xl mx-auto text-white">
                <p className="text-red-400 font-bold text-lg mb-2">{banner.category}</p>
                <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">{banner.title}</h1>
                <p className="text-sm md:text-base leading-relaxed mb-4 md:mb-6">
                  {banner.description.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
                <p className="text-red-400 font-bold text-xs md:text-sm">
                  {banner.offer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BridalBannerCarousel;