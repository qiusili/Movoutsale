import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Nav, Navbar, InputGroup, Form, FormControl, Button }  from 'react-bootstrap';

class Nb extends Component {
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

    )
  }


}

ReactDOM.render(
  <Nb />,
  document.getElementById('root')
);
