import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavBar from './navbar';

class App extends Component {
  render(){
    return(
      <div>
        <NavBar>
        </NavBar>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
