import React from "react";
import Button from "@material-ui/core/Button";
import Rating from "@material-ui/lab/Rating";
import './Card.css'
const Card = () => {

  return (
    <div class="card product-card my-3">
      <img class="mx-auto product-img-thumbnail" src="../images/xbox.jpeg" alt="name"/>
      <div class="card-body product-card-body text-center mx-auto">
        <div class="cvp">
          <h5 class="card-title product-card-title">Product Name</h5>
          <Rating
            name="half-rating-read"
            defaultValue={4.5}
            precision={0.5}
            readOnly
          />
          <p class="card-text product-card-price">&#8377; 41990</p>
          <a class="btn product-btn product-details details px-auto" href="https://www.codingbrewing.in">
            <Button
              variant="outlined"
              color="primary"
              className="product-card-btn"
            >
              More Details
            </Button>
          </a>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Card;
