import React, { Component } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">MovoutSale</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#Dashboard" disabled>
              Dashboard
            </Nav.Link>
          </Nav>
          <Button variant="outline-info">Sign up</Button>
          <Button variant="outline-info">Log in</Button>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default NavBar;
