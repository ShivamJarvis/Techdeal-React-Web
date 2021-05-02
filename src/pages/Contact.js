import React from "react";
import NavbarComponent from "./../Components/NavbarComponent";
import "./Contact.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CallIcon from '@material-ui/icons/Call';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
function Contact() {
  return (
    <div className="contact_body">
      <NavbarComponent pageName="contact"></NavbarComponent>
      <div className="container text-center">
        <h1 className="contact_us_heading">Get In Touch</h1>
        <p className="contact_us_text">
          We are ready to give you next level online shopping experience.
        </p>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="row mb-5">

                  {/* Address Data */}
                  <div className="col-lg-2 col-md-2 col-sm-12 mb-5 mt-4">
                      <LocationOnIcon className="contact_icon" />
                  </div>
                  <div className="col-lg-10 col-md-10 col-sm-12 mb-5 mt-4">
                    <h5 className="contact_detail_heading_title">Address</h5>
                    <h5 className="contact_detail_heading">Dvipvision, K G Road,</h5>
                    <h5 className="contact_detail_heading">Delhi (East),</h5>
                    <h5 className="contact_detail_heading">110001</h5>
                  </div>

                    {/* Direct Contact data */}
                  <div className="col-lg-2 col-md-2 col-sm-12 mb-5">
                      <CallIcon className="contact_icon" />
                  </div>
                  <div className="col-lg-10 col-md-10 col-sm-12 mb-5">
                    <h5 className="contact_detail_heading_title">Phone</h5>
                    <h5 className="contact_detail_heading">+91 9876543210</h5>
                  
                  </div>


                    {/* Direct Mail data */}
                  <div className="col-lg-2 col-md-2 col-sm-12 mb-5">
                      <MailOutlineIcon className="contact_icon" />
                  </div>
                  <div className="col-lg-10 col-md-10 col-sm-12 mb-5">
                    <h5 className="contact_detail_heading_title">Email</h5>
                    <h5 className="contact_detail_heading">info@techdeal.com</h5>
                  </div>
              </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 contact-form-area">
            <form className="contact-form">
                <h4 className="mb-5 send-message-text">Send Message</h4>
              <div className="mb-5">
                <TextField id="name" label="Name" className="w-100" />
              </div>
              <div className="mb-5">
                <TextField id="email" label="Email" className="w-100" />
              </div>
              <div className="mb-5">
                <TextField id="text" label="Type Your Message..." className="w-100" />
              </div>
              <Button variant="contained" type="submit" className="contact-btn">Send</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
