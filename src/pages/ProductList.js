import React from "react";
import Card from "./../Components/Card";
import NavbarComponent from "./../Components/NavbarComponent";
import "./ProductList.css";
import Slider from "@material-ui/core/Slider";
import List from "@material-ui/core/List";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
const ProductList = () => {
  const [value, setValue] = React.useState([600, 20000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="container-fluid">
      <NavbarComponent />
      <div className="row my-4">
        <div className="col-lg-2 col-md-2 col-sm-12 filter-container">
          <TextField
            id="search"
            label="Search"
            variant="filled"
            className="mb-5 w-100 mt-5"
          />

          {/* Price Range */}
          <h4>Price Range</h4>
          <div className="mb-5">
            <Slider
              min={500}
              max={30000}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
            />
          </div>

          {/* Brand */}
          <h4>Brand</h4>
          <div className='mb-2'>
            <List component="nav" >
              <FormControlLabel
                control={<Switch name="checkedA" color="primary" />}
                label="Samsung"
              />
              <Divider />
              <FormControlLabel
                control={<Switch name="checkedA" color="primary" />}
                label="Sony"
              />
              <Divider light />
              <FormControlLabel
                control={<Switch name="checkedA" color="primary" />}
                label="Mivi"
              />
              <Divider light />
              <FormControlLabel
                control={<Switch name="checkedA" color="primary" />}
                label="Boat"
              />
              <Divider light />
            </List>
          </div>
          <h4>Category</h4>
          <div>
            <List component="nav" >
              <FormControlLabel
                control={<Switch name="checkedA" color="primary" />}
                label="Consoles"
              />
              <Divider />
              <FormControlLabel
                control={<Switch name="checkedA" color="primary" />}
                label="Storages"
              />
              <Divider light />
              <FormControlLabel
                control={<Switch name="checkedA" color="primary" />}
                label="Computer Acessories"
              />
              <Divider light />
              <FormControlLabel
                control={<Switch name="checkedA" color="primary" />}
                label="Sound"
              />
              <Divider light />
              <FormControlLabel
                control={<Switch name="checkedA" color="primary" />}
                label="Networking"
              />
              <Divider light />
              <FormControlLabel
                control={<Switch name="checkedA" color="primary" />}
                label="Games"
              />
              <Divider light />
            </List>
          </div>



        </div>

        <div className="col-lg-10 col-md-10 col-sm-12">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12">
              <Card />
            </div>
          
            <div className="col-lg-3 col-md-3 col-sm-12">
              <Card />
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
              <Card />
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
              <Card />
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
              <Card />
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
              <Card />
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
              <Card />
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
              <Card />
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
              <Card />
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
              <Card />
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
              <Card />
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
              <Card />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
