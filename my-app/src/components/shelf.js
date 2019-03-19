import React, { Component } from 'react';
import Item from './item';
import { Navbar, Nav, Button } from 'react-bootstrap';
import '../style/shelf.css'
import queenbed from '../img/queenbed.jpg';
import ikeadesk from '../img/ikeadesk.jpg';
import lshapeddesk from '../img/lshapeddesk.jpg';

let items = [
  { url:queenbed,
      name:"Queen Bed", price: 130, category: "BedFrame" },
  { url:ikeadesk,
      name:"Ikea Desk", price: 49, category: "Desk"},
  { url:lshapeddesk,
      name:"L-Shaped Desk", price: 93, category: "Desk"}
];

class Shelf extends Component {

  constructor(props){
    super(props) 
    this.state = {
        activeKey : "All",
        catogries : [ 'All','BedFrame', 'Mattress', 'Desk', 'ArmChair', 'Sofa' ]
    }
    
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(selectedKey) {
    this.setState({activeKey: selectedKey});
  }

  render() {
    

    const filteredItems = items.filter(item=>this.state.activeKey==="All"||item.category==this.state.activeKey)
    .map(item => {
      return (
        <div className="item">
          <Item name={item.name} url={item.url} price={item.price} />
        </div>
      )
    })

    return (
        <React.Fragment>
            <Nav className="justify-content-center" variant="tabs" 
            activeKey={this.state.activeKey} onSelect={this.handleSelect}>
            {
                this.state.catogries.map((catogry,index) =>
                <Nav.Item>
                <Nav.Link eventKey={catogry}>
                    {catogry}
                </Nav.Link>
                </Nav.Item>)
            }
            </Nav>
            <div className="shelf-container">
                <div className="items">{filteredItems}</div>
            </div>
        </React.Fragment>
    )
  }
}

export default Shelf