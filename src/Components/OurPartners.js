import React from 'react'
import OwlCarousel from "react-owl-carousel";

function OurPartners() {
    return (
        <div class="container-fluid our-partners__conatiner">
        <h1 class="most-pop-heading text-center our-partners">Our Partners</h1>
        <OwlCarousel
          className="owl-theme"
          loop={true}
          margin={100}
          autoPlay={true}
          animateOut={true}
          items={7}
          center={true}
          autoplayTimeout={3000}
          autoplayHoverPause={true}
          nav={false}
          responsive={{
            0: {
              items: 1,
            },
            600: {
              items: 5,
            },
            1000: {
              items: 7,
            },
          }}
        >
          <div class="">
            <img src="./images/rog.png" alt="rog" />
          </div>
          <div class="">
            <img src="./images/boat.png" alt="boat" />
          </div>
          <div class="">
            <img src="./images/lenovo.png" alt="lenovo" />
          </div>
          <div class="">
            <img src="./images/hp.png" alt="hp" />
          </div>
          <div class="">
            <img src="./images/corsair.png" alt="corsair" />
          </div>
          <div class="">
            <img src="./images/wd.png" alt="wd" />
          </div>
          <div class="">
            <img src="./images/sandisk.png" alt="sandisk" />
          </div>
          <div class="">
            <img src="./images/nvidia.png" alt="nvidia" />
          </div>
        </OwlCarousel>
      </div>
    )
}

export default OurPartners
