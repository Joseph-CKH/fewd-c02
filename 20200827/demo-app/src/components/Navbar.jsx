import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Navbar extends PureComponent {
  render() {
    return (
      <div>
        <NavLink to="/" activeClassName="selected">
          <button>item</button>;
        </NavLink>
        <NavLink to="/Item" activeClassName="selected">
          <button>Items</button>;
        </NavLink>
      </div>
    );
  }
}

export default Navbar;
