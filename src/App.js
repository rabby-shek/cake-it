import React from 'react'
import './App.css';
import HeroSection from './components/herosection/HeroSection';
import Header from './components/header/Header';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Shop from './components/shop/Shop';
const App = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <About />
      <Shop />
      <Footer />
    </>
  )
}
export default App
