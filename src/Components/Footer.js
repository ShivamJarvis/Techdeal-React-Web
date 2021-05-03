import React from "react";
import "./Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import {Link} from 'react-router-dom'
function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-fluid px-5">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <h6>About</h6>
            <p className="text-justify">
              This is an ecommerce website whichy deals in all kinds of electronic and computer based tech gadgets and tools at best price. Here you find all kinds of tech products cheaper than market price.
            </p>
          </div>

          <div className="col-sm-6 col-md-6 col-lg-6">
            <h6>Useful Links</h6>
            <ul className="footer-links">
              <li>
                <Link to="/" className='footer-links'>Home</Link>
              </li>
              <li>
              <Link to="/shop" className='footer-links'>Shop</Link>
              </li>
              <li>
              <Link to="/contact" className='footer-links'>Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Copyright &copy; 2021 All Rights Reserved by
              <Link to="/" className="footer-links"> TechDeal</Link>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li>
                <a className="facebook footer-links" href="https://www.facebook.com">
                  <FacebookIcon />
                </a>
              </li>
              <li>
                <a className="twitter footer-links" href="https://www.twitter.com">
                  <TwitterIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
