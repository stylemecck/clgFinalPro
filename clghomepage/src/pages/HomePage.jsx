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
import Navbar from './Navbar';

import slideimg1 from "../assets/banner/bw1.gif";
import slideimg2 from "../assets/banner/bw2.gif";
import slideimg3 from "../assets/banner/bm1.gif";

const HomePage = () => {

    const bannerImages = [slideimg1, slideimg2, slideimg3];

  return (
    <>
      <FlipkartSlider images={bannerImages} />
      <Categories />
      <TrendingProducts />
      <PromoBanner />
      <NewsLatter />
    </>
  );
};

export default HomePage;
