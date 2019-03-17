import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Nav, Navbar, Button }  from 'react-bootstrap';

export default class NavBar extends Component {
  render(){
    console.log("HERE");

    return(
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">MovoutSale</Navbar.Brand>

          <Nav className="mr-auto">
            <Nav.Link href="#Dashboard">Dashboard</Nav.Link>
          </Nav>
          <Button variant="outline-info">Log in</Button>
        </Navbar>

    );
  }
}
