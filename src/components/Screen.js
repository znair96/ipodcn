import React, { Component } from "react";
import "../styles/screen.css";
import Menu from "./Menu";
export default class Screen extends Component {
  render() {
    console.log(this.props.menuOptionSelected);
    return (
      <div className="screen">
        <Menu />
      </div>
    );
  }
}
