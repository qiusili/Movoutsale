import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/navbar';
import Shelf from './components/shelf';

class App extends Component {
  render(){
    return(
      <div>
        <NavBar></NavBar>
        <Shelf></Shelf>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
