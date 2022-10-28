import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./navigation/nav-bar";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Catalog from "./pages/catalog";
import Order from "./pages/order";

export default class App extends Component {

  render() {
    return (
      <div className="container">
        <Router>
          <div>
            <NavBar/>

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/catalog" component={Catalog} />
              <Route path="/order" component={Order} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}