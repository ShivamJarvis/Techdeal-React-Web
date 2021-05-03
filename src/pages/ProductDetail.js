import React from "react";
import NavbarComponent from "./../Components/NavbarComponent";
import "./ProductDetail.css";
import ImageGallery from "react-image-gallery";
import Rating from "@material-ui/lab/Rating";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import LocalAtmTwoToneIcon from "@material-ui/icons/LocalAtmTwoTone";
import AccountBalanceWalletTwoToneIcon from "@material-ui/icons/AccountBalanceWalletTwoTone";
import LocalShippingTwoToneIcon from "@material-ui/icons/LocalShippingTwoTone";
import { InputNumber } from "antd";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import BuildIcon from "@material-ui/icons/Build";
import DescriptionIcon from "@material-ui/icons/Description";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { message } from "antd";
import Card from "./../Components/Card";
import Footer from "./../Components/Footer";
import { Empty } from "antd";
const success = () => {
  message.success("Product Added To Cart");
};

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

const ProductDetail = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1016/1000/600/",
      thumbnail: "https://picsum.photos/id/1016/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];
  // const { id } = useParams();
  return (
    <div>
      <NavbarComponent></NavbarComponent>
      <div className="row w-100">
        <div className="col-lg-6 col-md-6 col-sm-12 p-3">
          <ImageGallery
            items={images}
            showBullets={false}
            shoNav={false}
            showPlayButton={false}
            autoPlay={true}
            thumbnailPosition="left"
          />
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12 p-3">
          <h1 className="product-detail__name ml-3">Product Name</h1>
          <Rating
            name="half-rating-read"
            defaultValue={4.5}
            value={4.5}
            precision={0.5}
            readOnly
            className="ml-3"
          />
          <h2 className="mt-4 product-detail__price ml-3">&#8377; 41990</h2>
          <h5 className="mt-4 product-detail__seller ml-3">
            Seller: TechDeal Pvt. Ltd.
          </h5>

          <div>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <LocalShippingTwoToneIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Delivery Methods"
                  secondary="Standard and Express"
                />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <AccountBalanceWalletTwoToneIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Payment Methods"
                  secondary="Credit / Debit Cards (Maestro, Viso, Rupay, BAJAJ, American Express) and UPI"
                />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <LocalAtmTwoToneIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Cash On Delivery" secondary="Accepted" />
              </ListItem>
            </List>
          </div>

          <div className="site-input-number-wrapper ml-3">
            <InputNumber size="large" min={1} max={100000} defaultValue={1} />
            <Button
              variant="contained"
              color="primary"
              className="ml-3 mb-1 product-detail__add_cart_btn"
              onClick={success}
            >
              Add To Cart
            </Button>
          </div>
        </div>

        <div className="col-12 px-5">
          <div className={`product-detail__app_bar`}>
            <AppBar position="static" color="default">
              <Tabs
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                indicatorColor="primary"
                textColor="primary"
                aria-label="scrollable force tabs example"
              >
                <Tab
                  label="Product Description"
                  icon={<DescriptionIcon />}
                  {...a11yProps(0)}
                />
                <Tab
                  label="Product Specification"
                  icon={<BuildIcon />}
                  {...a11yProps(1)}
                />
              </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
              <Empty />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Empty />
            </TabPanel>
          </div>
        </div>

        <div className="col-12 my-5">
          <h1 className="ml-5 product-detail__review mb-5">Reviews</h1>
          <Empty />
        </div>

        <div className="col-12 my-5">
          <h1 className="text-center most-pop-heading">Related Products</h1>
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-12">
              <Card />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <Card />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <Card />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <Card />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
