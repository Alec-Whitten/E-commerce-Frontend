import React from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

const NavigationComponent = props => {
  return (
    <div className="nav-wrapper">
      <div className="left-side">
        <div id="logo">
        </div>
      </div>
      <div className="center">
        <div className="nav-link-wrapper">
          <NavLink exact to="/" activeClassName="nav-link-active">
            Home
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink to="/catalog" activeClassName="nav-link-active">
            Catalog
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink to="/about" activeClassName="nav-link-active">
            About
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink to="/contact" activeClassName="nav-link-active">
            Contact
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink to="/order" activeClassName="nav-link-active">
            Order
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default withRouter(NavigationComponent);