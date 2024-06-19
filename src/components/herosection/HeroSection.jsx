import React from "react";
import HeroCake from "../../assets/images/hero-section-img.png";
const HeroSection = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-section-data section-padding">
        <div className="hero-section-left">
          <div className="hero-section-title drop-shadow">Homemade cakes</div>
          <p className="drop-shadow">
            Indulge in the artistry of cake-making with CakeIt. From classic
            flavors to bespoke designs, our cakes are crafted to make your
            special moments truly unforgettable. Whether it’s a birthday,
            wedding, or any celebration, our creations are designed to delight
            your taste buds and impress your guests.
          </p>
          <button className="drop-shadow">Learn More</button>
        </div>
        <div className="hero-section-right">
          <img src={HeroCake} alt="cake" className="drop-shadow" />
        </div>
      </div>
      <span className="circle-1 "></span>
      <span className="circle-2 "></span>
      <span className="circle-3 "></span>
      <span className="circle-4 "></span>
      <span className="circle-5 "></span>
    </section>
  );
};

export default HeroSection;
