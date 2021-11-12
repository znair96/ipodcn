import React, { Component } from "react";
import "../styles/screen.css";
import Menu from "./Menu";
import CoverFlow from "./CoverFlow";
import Music from "./Music";
import Games from "./Games";
import Settings from "./Settings";
export default class Screen extends Component {
  render() {
    let menu = this.props.menuOptionSelected.menuItem;
    let jsxVal = <Menu />;
    let classValue = "screen";
    console.log(menu);
    if (menu !== "") {
      classValue = "white-background";
    }
    if (menu === "Cover Flow") {
      jsxVal = <CoverFlow />;
    } else if (menu === "Music") {
      jsxVal = <Music />;
    } else if (menu === "Games") {
      jsxVal = <Games />;
    } else if (menu === "Settings") {
      jsxVal = <Settings />;
    }
    return <div className={classValue}>{jsxVal}</div>;
  }
}
