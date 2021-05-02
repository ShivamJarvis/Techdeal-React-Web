import React from "react";
import NavbarComponent from "./../Components/NavbarComponent";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import "./NewSeller.css"
function NewSeller() {
  const { Dragger } = Upload;
  const props = {
    name: "file",
    multiple: true,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return (
    <div className='pb-5'>
      <NavbarComponent />
      <div className="container">
        <h1 className="seller-register-text">Seller Registeration</h1>
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
            <div className="col-lg-6 col-md-6 col-sm-12">
              <TextField
                type="text"
                id="phone"
                label="Phone"
                className="w-100 mb-4"
                variant="outlined"
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <TextField
                type="text"
                id="alt__phone"
                label="Alternate Phone"
                className="w-100 mb-4"
                variant="outlined"
              />
            </div>
            <div className="col-12">
              <TextField
                type="text"
                id="business_name"
                label="Business Name"
                className="w-100 mb-4"
                variant="outlined"
              />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <TextField
                type="text"
                id="state"
                label="State"
                className="w-100 mb-4"
                variant="outlined"
              />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <TextField
                type="text"
                id="city"
                label="City"
                className="w-100 mb-4"
                variant="outlined"
              />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <TextField
                type="text"
                id="zip"
                label="ZIP Code"
                className="w-100 mb-4"
                variant="outlined"
              />
            </div>
            <div className="col-12">
              <TextField
                type="text"
                id="business_address"
                label="Business Complete Address"
                className="w-100 mb-4"
                variant="outlined"
              />
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12">
              <TextField
                type="text"
                id="pan"
                label="Pan No."
                className="w-100 mb-4"
                variant="outlined"
              />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <TextField
                type="text"
                id="aadhar"
                label="Aadhar Card no."
                className="w-100 mb-4"
                variant="outlined"
              />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <TextField
                type="text"
                id="gst"
                label="GST No."
                className="w-100 mb-4"
                variant="outlined"
              />
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12">
              <TextField
                type="text"
                id="bank_name"
                label="Bank Name"
                className="w-100 mb-4"
                variant="outlined"
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <TextField
                type="text"
                id="ifsc"
                label="Bank IFSC Code"
                className="w-100 mb-4"
                variant="outlined"
              />
            </div>
            <div className="col-12">
              <TextField
                type="text"
                id="acc_no"
                label="Bank Account No."
                className="w-100 mb-4"
                variant="outlined"
              />
            </div>

            <div className="col-12 mb-5">
              <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
                <p className="ant-upload-hint" style={{fontSize:"1.10rem"}}>
                  Please upload your PAN Card , Aadhar Card(Front + Back) in image format e.g .png, .jpg, .jpeg. To successfully register with us.
                </p>
              </Dragger>
            </div>
            <div className="col-12 mt-4">
              <ReCAPTCHA
                sitekey="6Lc-78gZAAAAAKcghX0bAS0yrTUGrE8jCms6AlVm"
                className="ml-3"
              />
            </div>
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
          <Link to="/seller-login" className="login-extra-links">
            Already Registered? Login Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NewSeller;
