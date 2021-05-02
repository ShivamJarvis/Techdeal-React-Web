import React from "react";
import NavbarComponent from "./../Components/NavbarComponent";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./NewCustomer.css";
function NewCustomer() {
  return (
    <div>
      <NavbarComponent />
      <div className="container">
        <h1 className="customer-register-text">Customer Registeration</h1>
      </div>
      <div className="container text-center">
        <form>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <TextField
                type="text"
                id="f_name"
                label="First Name"
                className="w-100 mb-4"
                variant="outlined"
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <TextField
                type="text"
                id="l_name"
                label="Last Name"
                className="w-100 mb-4"
                variant="outlined"
              />
            </div>
            <div className="col-sm-12">
              <TextField
                type="email"
                id="email"
                label="Email"
                className="w-100 mb-4"
                variant="outlined"
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <TextField
                type="text"
                id="password"
                label="Password"
                className="w-100 mb-4"
                variant="outlined"
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <TextField
                type="text"
                id="confirm_password"
                label="Confirm Password"
                className="w-100 mb-4"
                variant="outlined"
              />
            </div>
            <ReCAPTCHA
              sitekey="6Lc-78gZAAAAAKcghX0bAS0yrTUGrE8jCms6AlVm"
              className="ml-3"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="w-100 my-4 login-btn"
            >
              Register Now
            </Button>
          </div>
        </form>
        <div>
          <Link to="/login" className="login-extra-links">
            Already Registered? Login Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NewCustomer;
