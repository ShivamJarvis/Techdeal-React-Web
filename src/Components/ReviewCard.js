import React from "react";
import "./ReviewCard.css";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
const ReviewCard = () => {
  return (
    <div className="review-card__container px-5">
      <div className="row">
        <div className="col-1">
          <Avatar size={64} icon={<UserOutlined />} />
        </div>
        <div className="col-10">
          <p>
            This is the best online market place where you can buy products at
            best price{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
