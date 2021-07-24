import React, { Component } from "react";
import Auxiliary from "../../hoc/Auxiliary";
import Navbar from "../Navbar/Navbar";

class Layout extends Component {
  render() {
    return (
      <Auxiliary>
        <Navbar />
        <main>{this.props.children}</main>
      </Auxiliary>
    );
  }
}
export default Layout;
