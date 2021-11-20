import React, { Component } from "react";
import "../styles/screen.css";
import Menu from "./Menu";
import CoverFlow from "./CoverFlow";
import MusicPlayer from "./MusicPlayer";
import Games from "./Games";
import Settings from "./Settings";
export default class Screen extends Component {
  render() {
    let menu = this.props.menuOptionSelected;
    menu = menu.trim();
    let jsxVal;
    let classValue = "screen";
    if (menu !== "") {
      classValue = "white-background";
    }
    if (menu === "Cover Flow") {
      jsxVal = <CoverFlow />;
    } else if (menu === "Music") {
      jsxVal = (
        <MusicPlayer
          fullLength={this.props.fullLength}
          timer={this.props.timer}
        />
      );
      // classValue = "screen";
    } else if (menu === "Games") {
      jsxVal = <Games />;
    } else if (menu === "Settings") {
      jsxVal = <Settings />;
    } else {
      jsxVal = <Menu />;
    }
    return <div className={classValue}>{jsxVal}</div>;
  }
}
