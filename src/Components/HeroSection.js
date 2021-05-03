import React from "react";
import "./HeroSection.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Typed from "react-typed";
import {Link} from 'react-router-dom'
const HeroSection = () => {
  AOS.init();

  return (
    <div class="container-fluid hero-section text-center">
      <h1 class="pb-5 do-shop" data-aos="fade-right" data-aos-duration="3000">
        Do Shopping At One Place
      </h1>
      <h2 class="pt-5 deal-text" data-aos="fade-down" data-aos-duration="3000">
        We Deals in
      </h2>
      <Typed
        strings={[
          "Graphic Cards",
          "Gaming Monitors",
          "Gaming CPU",
          "Gaming Cabinets",
          "Gaming Acessories or More",
        ]}
        typeSpeed={80}
        backSpeed={70}
        loop
      >
        <span id="typed"></span>
      </Typed>
      <br />
     
       <Link className="btn btn-primary mt-5 my-btn" to="/shop/products-list">Shop Now</Link>
  
    </div>
  );
}

export default HeroSection;
