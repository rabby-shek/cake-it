import React from "react";
import AboutCake from "../../assets/images/about-img.png";
const About = () => {
  return (
    <section className="about-section section-padding" id="about">
      <div className="section-title drop-shadow">About US</div>
      <div className="about-data">
        <div className="item-1">
          <img src={AboutCake} alt="cake" className="drop-shadow" />
        </div>
        <div className="item-2 drop-shadow">
          Welcome to CakeIt, where baking is our passion and delighting
          customers with delicious cakes is our mission. At CakeIt, we
          specialize in crafting artisanal cakes that not only look exquisite
          but also taste divine. With a dedication to using the finest
          ingredients and a meticulous attention to detail, each cake is a
          masterpiece baked with love and care.
        </div>
      </div>
    </section>
  );
};

export default About;
