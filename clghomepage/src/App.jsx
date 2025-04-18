import React from 'react';
import Slider from './components/Slider';
import NewsLatter from './components/NewsLatter';
import TrendingProducts from './components/TrendingProducts';
import Categories from './components/Categories';
import PromoBanner from './components/PromoBanner';
import Nav from './components/navbar/Nav';
import Navt from './components/navbar/Navt';




const App = () => {
  return (
    <>
    <Navt />
    {/* <Nav /> */}
    <Slider />
    <Categories/>
    <TrendingProducts />
    <PromoBanner/>
    <NewsLatter />
    </>
  )
}

export default App