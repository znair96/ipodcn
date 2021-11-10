import React, { Component } from "react";
import "../styles/buttonnav.css";
import ZingTouch from "zingtouch";
export default class ButtonNav extends Component {
  componentDidMount() {
    let element = document.getElementsByClassName("nav-options")[0];
    let activeRegion = new ZingTouch.Region(element);
    //Customised Pan event
    let customPan = new ZingTouch.Pan({
      threshold: 15,
      numInputs: 1,
    });
    //Binding the event in the region
    activeRegion.bind(element, customPan, (event) => {
      if (document.getElementById("cover-flow").className === "highlight") {
        document.getElementById("cover-flow").classList.remove("highlight");
        document.getElementById("music").classList.add("highlight");
      } else if (document.getElementById("music").className === "highlight") {
        document.getElementById("music").classList.remove("highlight");
        document.getElementById("games").classList.add("highlight");
      } else if (document.getElementById("games").className === "highlight") {
        document.getElementById("games").classList.remove("highlight");
        document.getElementById("settings").classList.add("highlight");
      } else if (
        document.getElementById("settings").className === "highlight"
      ) {
        document.getElementById("settings").classList.remove("highlight");
        document.getElementById("cover-flow").classList.add("highlight");
      }
    });
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
          <div className="nav-options">
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
