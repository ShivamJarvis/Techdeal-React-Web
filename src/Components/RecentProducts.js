import React from 'react'
import OwlCarousel from "react-owl-carousel";
import Card from './Card'
function RecentProducts() {
    return (
        <div className="container-fluid">
        <h1 class="text-center mt-5 most-pop-heading">Recent Products</h1>
        <OwlCarousel
          className="owl-theme"
          loop={true}
          margin={10}
          autoPlay
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
    )
}

export default RecentProducts
