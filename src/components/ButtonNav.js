import React, { Component } from "react";
import "../styles/buttonnav.css";
export default class ButtonNav extends Component {
  mouseMoveEvent(event) {
    let element = event.target.className;
    if (
      element === "forward" ||
      element === "backward" ||
      element === "nav-options"
    ) {
      console.log("Event Triggered");
    }
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 18,
        }}
      >
        <div className="outer-div">
          <div className="nav-options" onMouseMove={this.mouseMoveEvent}>
            <div id="fbm">
              <p className="menu">MENU</p>
              <p className="forward">
                <i className="fas fa-fast-forward"></i>
              </p>
              <p className="backward">
                <i className="fas fa-fast-backward"></i>
              </p>
            </div>
            <p className="play-pause">
              <div style={{ display: "flex" }}>
                <i className="fas fa-play"></i>
                <i className="fas fa-pause" style={{ paddingLeft: 4 }}></i>
              </div>
            </p>
          </div>
          <div className="inner-div"></div>
        </div>
      </div>
    );
  }
}
