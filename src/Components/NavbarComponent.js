import React from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import "./NavbarComponent.css";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -2,
    top: 0,
    // border: `1px solid ${theme.palette.background.paper}`,
   
  },
}))(Badge);

const NavbarComponent = ({ pageName }) => {
  return (
    <div>
      <Navbar bg="light" expand="lg" className="">
        <div className="container">
          <Navbar.Brand href="#home" className="nav-logo">
            Tech<span className="nav-logo__sub">Deal.</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link className={pageName === "home" && "nav-active"}>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link className={pageName === "shop" && "nav-active"}>
                <Link to="/shop">Shop</Link>
              </Nav.Link>
              <Nav.Link className={pageName === "contact" && "nav-active"}>
                <Link to="/contact">Contact Us</Link>
              </Nav.Link>
              <Nav.Link className={pageName === "cart" && "nav-active"}>
                <Link to="/cart">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={2} color="primary" >
                      <ShoppingCartIcon />
                    </StyledBadge>
                  </IconButton>
                </Link>
              </Nav.Link>
              <NavDropdown title="Login" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <VerifiedUserIcon className="nav_icons" />
                  <Link to="/login">Login</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <PersonAddIcon className="nav_icons" />
                  <Link to="/register">New Customer? Sign Up</Link>
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <AccountCircleIcon className="nav_icons" />
                  <Link to="/seller-login">Login as Seller</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <PersonAddIcon className="nav_icons" />
                  <Link to="/seller-registration">
                    {" "}
                    New Seller? Register Now
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
