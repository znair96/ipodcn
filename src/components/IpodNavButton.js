import React, { Component } from "react";
import ZingTouch from "zingtouch";
export default class IpodNavButton extends Component {
  componentDidMount() {
    console.log(this.props.currentMenu + " from mount");
    let element = document.getElementsByClassName("nav-options")[0];
    let activeRegion = new ZingTouch.Region(element);
    //Customised Pan event
    let customPan = new ZingTouch.Pan({
      threshold: 25,
      numInputs: 1,
    });
    //Binding the event in the region
    let menu = ["cover-flow", "music", "games", "settings"];
    //   const musicOptions = ["all-songs", "artists", "albums"];

    activeRegion.bind(element, customPan, (event) => {
      const id = document.querySelector(".highlight").id;
      const fetchIndexOfMenu = menu.indexOf(id);
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
  // componentDidUpdate() {
  //   // console.log("I am in music componentdidmount");
  //   debugger;
  //   console.log(this.props.currentMenu + " from update");
  //   let menu;
  //   if (this.props.currentMenu === "Music") {
  //     menu = ["all-songs", "artists", "albums"];
  //   } else {
  //     menu = ["cover-flow", "music", "games", "settings"];
  //   }
  //   let element = document.getElementsByClassName("nav-options")[0];
  //   let activeRegion = new ZingTouch.Region(element);
  //   //Customised Pan event
  //   let customPan = new ZingTouch.Pan({
  //     threshold: 25,
  //     numInputs: 1,
  //   });
  //   //Binding the event in the region
  //   // let menu = ["cover-flow", "music", "games", "settings"];
  //   // const menu = ["all-songs", "artists", "albums"];
  //   activeRegion.bind(element, customPan, (event) => {
  //     debugger;
  //     const id = document.querySelector(".highlight").id;
  //     const fetchIndexOfMenu = menu.indexOf(id);
  //     console.log(fetchIndexOfMenu, id);
  //     if (fetchIndexOfMenu !== menu.length - 1) {
  //       document
  //         .getElementById(menu[fetchIndexOfMenu])
  //         .classList.remove("highlight");
  //       document
  //         .getElementById(menu[fetchIndexOfMenu + 1])
  //         .classList.add("highlight");
  //     } else {
  //       document
  //         .getElementById(menu[fetchIndexOfMenu])
  //         .classList.remove("highlight");
  //       document.getElementById(menu[0]).classList.add("highlight");
  //     }
  //   });
  // }
  render() {
    //  const event = (this.props.currentMenu!=="Menu") ? "" : `onClick=${this.props.menuSelect}`;
    if (
      this.props.currentMenu !== "Menu" ||
      this.props.currentMenu === "Music"
    ) {
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
                <p className="menu" onClick={this.props.menuSelect}>
                  MENU
                </p>
                <p className="forward">
                  <i className="fas fa-fast-backward"></i>
                </p>
                <p className="backward">
                  <i className="fas fa-fast-forward"></i>
                </p>
              </div>
              <p className="play-pause">
                <div style={{ display: "flex" }}>
                  <i className="fas fa-play"></i>
                  <i className="fas fa-pause" style={{ paddingLeft: 4 }}></i>
                </div>
              </p>
              <div id="inner-div"></div>
            </div>
          </div>
        </div>
      );
    } else {
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
                <p className="menu" onClick={this.props.menuSelect}>
                  MENU
                </p>
                <p className="forward">
                  <i className="fas fa-fast-backward"></i>
                </p>
                <p className="backward">
                  <i className="fas fa-fast-forward"></i>
                </p>
              </div>
              <p
                className="play-pause"
                onClickCapture={this.props.changeToPlayPause}
              >
                <div style={{ display: "flex" }}>
                  <i className="fas fa-play"></i>
                  <i className="fas fa-pause" style={{ paddingLeft: 4 }}></i>
                </div>
              </p>
              <div id="inner-div" onClick={this.props.optionSelected}></div>
            </div>
          </div>
        </div>
      );
    }
  }
}
