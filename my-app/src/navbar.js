import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Navbar, Nav, Button } from 'react-bootstrap';

class NavBar extends Component {

  state = {
    catogries : [ 'Bedframe', 'Mattress', 'Desk', 'ArmChair', 'Sofa' ]
  }

  render(){

    return(
      <React.Fragment>

        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">MovoutSale</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#Dashboard" disabled>Dashboard</Nav.Link>
          </Nav>
          <Button variant="outline-info">Log in</Button>
        </Navbar>

        <Nav className="justify-content-center" variant="tabs">
          {
            this.state.catogries.map((catogry,index) =>
            <Nav.Item>
              <Nav.Link eventKey={`link-${index}`}>
                {catogry}
              </Nav.Link>
            </Nav.Item>)
          }
        </Nav>

      </React.Fragment>
    )
  }
}

export default NavBar;
