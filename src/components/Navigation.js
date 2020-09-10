import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import {NavDropdown} from "react-bootstrap"

import "../nav.css";

export default function Navigation() {
  let url = "/";
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="nav-menu" fixed="top">
        <Navbar.Brand href={url}>
          <img
            src={require("../static/images/logo.jpg")}
            width="200"
            height="60"
            alt=""
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link href="/" id="links">
              HOME
            </Nav.Link>
            <Nav.Link href="/restuarant" id="links">
              RESTUARANT
            </Nav.Link>
            <Nav.Link href="/menu" id="links">
              OUR MENU
            </Nav.Link>

            <NavDropdown title="SERVICES" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.2">
                Uganda & Nigeria Locals.
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Dines and Takeaways{" "}
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                ONLINE ORDERS
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/aboutus" id="links">
              ABOUT US
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
}
