import React from "react";
import './ProductCategory.css'
import OwlCarousel from "react-owl-carousel";
import Card from './Card'
import {Link} from 'react-router-dom'
const  ProductCategory = ({image,headingText}) => {
  return (
    <div>
      <div
        className="consoles-heading text-center"
        style={{background: `linear-gradient(#373b4483, #4286f49c),
            url("./../images/${image}")`}}
      >
        <h1>{headingText}</h1>
         <Link to="/shop/products-list" className="btn btn-primary my-btn mt-5"> Explore More</Link>
      </div>
    
      <OwlCarousel
          className="owl-theme"
          loop={true}
          margin={10}
          autoPlay={true}
          animateOut={true}
          items={4}
          autoplayTimeout={3000}
          autoplayHoverPause={true}
          responsive={{
            0: {
              items: 1,
            },
            600: {
              items: 3,
            },
            1000: {
              items: 4,
            },
          }}
        >
         <Card />
        </OwlCarousel>



    </div>
  );
}

export default ProductCategory;
