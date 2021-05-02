import React from "react";
import NavbarComponent from "./../Components/NavbarComponent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./Login.css";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";
const Login = () => {
  const onChange = (value) => {
    console.log(value);
  };
  return (
    <div>
      <NavbarComponent />
      <div className="container">
        <h1 className="login-text">Login</h1>
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col-12">
            <form>
              <TextField
                type="email"
                id="email"
                label="Enter Email"
                className="w-75 mb-4"
                variant="outlined"
              />
              <TextField
                type="password"
                id="password"
                label="Enter Password"
                className="w-75"
                variant="outlined"
              />
              <ReCAPTCHA
                sitekey="6Lc-78gZAAAAAKcghX0bAS0yrTUGrE8jCms6AlVm"
                onChange={onChange}
                className="recaptcha-place"
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className="w-75 my-4 login-btn"
              >
                Log In
              </Button>
            </form>
            <div className="my-3">
              <Link to="/" className="login-extra-links ">
                Forgot Password?
              </Link>
            </div>
            <div>
              <Link to="/register" className="login-extra-links">
                New Customer? Register Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
