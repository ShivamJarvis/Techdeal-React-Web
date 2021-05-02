import React from 'react'
import OwlCarousel from "react-owl-carousel";

function OurCustomer() {
    return (
        <div className="container-fluid our-customer-container">
        <h1 className="text-center most-pop-heading our-customer-heading" >
          Our Customer Says
        </h1>
        <OwlCarousel
          className="owl-theme text-center"
          loop={true}
          margin={10}
          autoPlay
          autoplayTimeout={100}
          autoplaySpeed={10}
          items={4}
         
          autoplayHoverPause={true}
          responsive={{
            0: {
              items: 1,
            },
            600: {
              items: 1,
            },
            1000: {
              items: 1,
            },
          }}
        >
          <div>
            <h4>
              &#10077;Their Services are awesome. product deliver on time,
              thanks techdeal.&#10078;
            </h4>
            <span>By Shivam Gupta</span>
          </div>

          <div>
            <h4>
              &#10077;Their Team is very coperative and guide me correct prodcut
              at best price.&#10078;
            </h4>
            <span>By Katik Gupta</span>
          </div>

          <div>
            <h4>
              &#10077;Incredible prices list out for the product, cheaper than
              market rate.&#10078;
            </h4>
            <span>By Katik Gupta</span>
          </div>
        </OwlCarousel>
      </div>
    )
}

export default OurCustomer
