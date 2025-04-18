// pages/HomePage.jsx
import React from 'react';
import Slider from '../components/Slider';
import NewsLatter from '../components/NewsLatter';
import TrendingProducts from '../components/TrendingProducts';
import Categories from '../components/Categories';
import PromoBanner from '../components/PromoBanner';
import Nav from '../components/navbar/Nav';
import Navt from '../components/navbar/Navt';
import FlipkartSlider from '../components/FlipkartSlider';

const HomePage = () => {
  return (
    <>
      <Navt />
      {/* <Nav /> */}
      {/* <Slider /> */}
      <FlipkartSlider />
      <Categories />
      <TrendingProducts />
      <PromoBanner />
      <NewsLatter />
    </>
  );
};

export default HomePage;
