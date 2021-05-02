import React from "react";
import Navbar from "../Components/NavbarComponent";
import HeroSection from "../Components/HeroSection";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import CountUp from "react-countup";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import BuildIcon from "@material-ui/icons/Build";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import Footer from "../Components/Footer";
import NewProducts from "../Components/NewProducts";
import PopularProducts from "../Components/PopularProducts";
import OurPartners from "../Components/OurPartners";
import OurCustomer from "../Components/OurCustomer";
import RecentProducts from "../Components/RecentProducts";
function Home() {
  AOS.init();
  return (
    <div>
      <Navbar pageName="home" />
      <HeroSection />
     <NewProducts/>
     <PopularProducts/>
     <OurPartners/>
      <div className="container-fluid">
        <div className="row text-center we-have-section">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <EmojiEmotionsIcon className="we-have-icon" />
            <br />
            <span className="counter">
              <CountUp start={0} end={20000} suffix="+" duration={5}></CountUp>
            </span>
            <h3>Happy Customers</h3>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <BuildIcon className="we-have-icon" />
            <br />
            <span className="counter">
              <CountUp start={0} end={1000} suffix="+" duration={5}></CountUp>
            </span>
            <h3>PC Build</h3>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <LocalShippingIcon className="we-have-icon" />
            <br />
            <span className="counter">
              <CountUp start={0} end={500} suffix="+" duration={5}></CountUp>
            </span>
            <h3>Order Delivered</h3>
          </div>
        </div>
      </div>
     <OurCustomer/>
      <RecentProducts/>
      <Footer />


    </div>
  );
}

export default Home;
