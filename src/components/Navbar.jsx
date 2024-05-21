import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import cartIcon from "../assets/images/headerbarcarticon.png";
import thirdIcon from "../assets/images/headerbar3rdicon.png";
import searchIcon from "../assets/images/headerbarsearchicon.png";
import "./Navbar.css"; // Your custom styles (if any)

const FashionNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home" >
        <b>FASHION</b>
        <span className="tagline">TAGLINE HERE</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto middle-elements">
          <Nav.Link href="#home">HOME</Nav.Link>
          <Nav.Link href="#shop">SHOP</Nav.Link>
          <Nav.Link href="#men">MEN</Nav.Link>
          <Nav.Link href="#women">WOMEN</Nav.Link>
          <Nav.Link href="#stores">FIND STORES</Nav.Link>
        </Nav>
        <Form inline className="header-icons">
          <Button variant="link">
            <img src={cartIcon} alt="cart" className="ficon" />
          </Button>
          <Button variant="link">
            <img src={searchIcon} alt="search" />
          </Button>
          <Button variant="link">
            <img src={thirdIcon} alt="icon" />
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default FashionNavbar;
