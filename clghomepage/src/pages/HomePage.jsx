// pages/HomePage.jsx
import React from "react";
import NewsLatter from "../components/NewsLatter";
import TrendingProducts from "../components/TrendingProducts";
import Categories from "../components/Categories";
import PromoBanner from "../components/PromoBanner";
import FlipkartSlider from "../components/FlipkartSlider";


import slideimg1 from "../assets/banner/bw1.gif"; // image ko import kar lena
import slideimg2 from "../assets/banner/bw2.gif";
import slideimg3 from "../assets/banner/bm1.gif"; // kahi pe bhi rakho bas yeha pe import kar lena kaam karega chaho toh public wala me bhi rakh sakte ho ya apna se folder structure bana ke 

const HomePage = () => {

  return (
    <>
      <FlipkartSlider
        images={[slideimg1, slideimg2, slideimg3]} //props ke through image 
        links={["/product/1", "/product/2", "/login"]} // yeha pe link array container hai
      />

      <Categories />
      <TrendingProducts />
      <PromoBanner />
      <NewsLatter />
    </>
  );
};

export default HomePage;
