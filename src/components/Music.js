import React, { Component } from "react";
import ZingTouch from "zingtouch";
export default class Music extends Component {
  componentDidMount() {
    // console.log("I am in music componentdidmount");
    // debugger;
    // console.log(this.props.currentMenu + " from update");
    let menu;
    if (this.props.currentMenu === "Music") {
      menu = ["all-songs", "artists", "albums"];
    } else {
      menu = ["cover-flow", "music", "games", "settings"];
    }
    let element = document.getElementsByClassName("nav-options")[0];
    let activeRegion = new ZingTouch.Region(element);
    //Customised Pan event
    let customPan = new ZingTouch.Pan({
      threshold: 25,
      numInputs: 1,
    });
    //Binding the event in the region
    // let menu = ["cover-flow", "music", "games", "settings"];
    // const menu = ["all-songs", "artists", "albums"];
    activeRegion.bind(element, customPan, (event) => {
      // debugger;
      const id = document.querySelector(".highlight").id;
      const fetchIndexOfMenu = menu.indexOf(id);
      console.log(fetchIndexOfMenu, id);
      if (fetchIndexOfMenu !== menu.length - 1) {
        document
          .getElementById(menu[fetchIndexOfMenu])
          .classList.remove("highlight");
        document
          .getElementById(menu[fetchIndexOfMenu + 1])
          .classList.add("highlight");
      } else {
        document
          .getElementById(menu[fetchIndexOfMenu])
          .classList.remove("highlight");
        document.getElementById(menu[0]).classList.add("highlight");
      }
    });
  }
  render() {
    return (
      <div className="nav-links">
        <h2>Music</h2>
        <p id="all-songs" className="highlight">
          All Songs{" "}
          <span className="hidden">
            <i className="fas fa-chevron-right"></i>
          </span>
        </p>
        <p id="artists">
          Artists
          <span className="hidden">
            <i className="fas fa-chevron-right"></i>
          </span>
        </p>
        <p id="albums">
          Albums
          <span className="hidden">
            <i className="fas fa-chevron-right"></i>
          </span>
        </p>
      </div>
    );
  }
}
