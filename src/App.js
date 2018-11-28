import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navbar, NavbarBrand } from 'reactstrap'
import Home from './components/Home'
import Dash from './components/Dash'


class App extends Component {
  render() {
    return (
      <div className="App">
       <Router>
        <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
        </Navbar>

          <Route path="/" exact component={Home} />
          <Route path="/dash/" component={Dash} />
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
