import React from "react";
import NavbarComponent from "./../Components/NavbarComponent";
import { Table } from "antd";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { message } from "antd";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom"
import "./Cart.css";
const errorMsg = () => {
  message.success("Product Deleted From Cart");
};
const Cart = () => {
  const dataSource = [
    {
      key: "1",
      image: <img src="./images/xbox.jpeg" alt="xbox" className="w-25" />,
      p_name: <h6>X Box</h6>,
      cat: <h6>Consoles</h6>,
      qty: 1,
      price: <h6>&#8377; 41990</h6>,
      remove: (
        <IconButton onClick={errorMsg} style={{ color: "red" }}>
          <DeleteIcon />
        </IconButton>
      ),
    },
    {
      key: "2",
      image: <img src="./images/xbox.jpeg" alt="xbox" className="w-25" />,
      p_name: <h6>X Box : Limited Edition</h6>,
      cat: <h6>Consoles</h6>,
      qty: <h6>1</h6>,
      price: <h6>&#8377; 41990</h6>,
      remove: (
        <IconButton onClick={errorMsg} style={{ color: "red" }}>
          <DeleteIcon />
        </IconButton>
      ),
    },
  ];

  const columns = [
    {
      title: "",
      dataIndex: "image",
      key: "image",
    },
    {
      title: "Product Name",
      dataIndex: "p_name",
      key: "p_name",
    },
    {
      title: "Category",
      dataIndex: "cat",
      key: "cat",
    },
    {
      title: "Quantity",
      dataIndex: "qty",
      key: "qty",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "",
      dataIndex: "remove",
      key: "remove",
    },
  ];

  return (
    <div>
      <NavbarComponent pageName="cart" />
      <div className="px-5 mt-5">
        <Table
          dataSource={dataSource}
          columns={columns}
          bordered={true}
          pagination={false}
        />

        <Button variant="contained" className="mt-5 cart-total__checkout_btn" color="secondary ">
          <Link to="/shop" className="cart-total__continue_shopping">Continue Shopping</Link>
        </Button>
      </div>

      <div className="container mt-5 mx-5">
        <h1 className="mb-4 cart-total__heading">Cart Total</h1>
        <div className="row cart-total__row">
          <div className="col-6 cart-total__head py-3">
            <h5 className="cart-total__head_content">Subtotal</h5>
          </div>
          <div className="col-6 py-3">
            <h5 className="cart-total__head_prices">&#8377; 83980</h5>
          </div>
          <div className="col-6 cart-total__head py-3">
            <h5 className="cart-total__head_content">Delivery Charges</h5>
          </div>
          <div className="col-6 py-3">
            <h5 className="cart-total__head_prices">&#8377; 500</h5>
          </div>
          <div className="col-6 cart-total__head py-3">
            <h5 className="cart-total__head_content">Total</h5>
          </div>
          <div className="col-6 py-3">
            <h5 className="cart-total__head_prices">&#8377; 84780</h5>
          </div>
          <div className="col-12 mt-4 ">
            <Button variant="contained" className="cart-total__checkout_btn">
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
