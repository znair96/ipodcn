import React, { Component } from "react";
import Screen from "./Screen";
import "../styles/buttonnav.css";
import ZingTouch from "zingtouch";
import song from "../audio/Malare-S.P.-Balasubrahmanyam-S.-Janaki.m4a";
export default class ButtonNav extends Component {
  constructor(props) {
    super(props);
    this.audio = new Audio(song);
    this.width = 0;
    this.state = {
      menuItem: "",
      timer: 0,
    };
    // console.log(this.audio.duration);
  }

  componentDidMount() {
    let element = document.getElementsByClassName("nav-options")[0];
    let activeRegion = new ZingTouch.Region(element);
    //Customised Pan event
    let customPan = new ZingTouch.Pan({
      threshold: 20,
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
  //Inner div selected
  optionSelected = () => {
    let menuOption =
      document.getElementsByClassName("highlight")[0].textContent;
    this.setState({
      menuItem: menuOption,
    });
  };
  //Event triggered when menu is clicked
  menuSelect = () => {
    this.setState({
      menuItem: "",
    });
  };

  changeToPlayPause = () => {
    const play = document.getElementsByClassName("play")[0];
    const pause = document.getElementsByClassName("pause")[0];
    let timerCount = setInterval(() => {
      if (this.audio.paused) {
        document.getElementsByClassName("loader-progress")[0].style.width =
          this.width + "px";
        clearInterval(timerCount);
      } else {
        if (this.state.timer === parseInt(this.audio.duration)) {
          this.setState({
            timer: 0,
          });
          this.width = 0;
          clearInterval(timerCount);
        } else {
          this.setState({
            timer: this.state.timer + 1,
          });
          this.width = this.width + 265 / this.audio.duration;
          document.getElementsByClassName("loader-progress")[0].style.width =
            this.width + "px";
        }
      }
    }, 1000);
    if (play) {
      this.audio.play();
      play.getElementsByTagName("i")[0].classList.remove("fal");
      play.getElementsByTagName("i")[0].classList.remove("fa-play");
      play.getElementsByTagName("i")[0].classList.add("fal");
      play.getElementsByTagName("i")[0].classList.add("fa-pause");
      play.classList.remove("play");
      play.classList.add("pause");
    } else {
      this.audio.pause();
      pause.getElementsByTagName("i")[0].classList.remove("fal");
      pause.getElementsByTagName("i")[0].classList.remove("fa-pause");
      pause.getElementsByTagName("i")[0].classList.add("fal");
      pause.getElementsByTagName("i")[0].classList.add("fa-play");
      pause.classList.remove("pause");
      pause.classList.add("play");
    }
  };
  render() {
    return (
      <>
        <Screen
          menuOptionSelected={this.state.menuItem}
          fullLength={parseInt(this.audio.duration)}
          timer={this.state.timer}
        />
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
                <p className="menu" onClick={this.menuSelect}>
                  MENU
                </p>
                <p className="forward">
                  <i className="fas fa-fast-backward"></i>
                </p>
                <p className="backward">
                  <i className="fas fa-fast-forward"></i>
                </p>
              </div>
              <p className="play-pause" onClickCapture={this.changeToPlayPause}>
                <div style={{ display: "flex" }}>
                  <i className="fas fa-play"></i>
                  <i className="fas fa-pause" style={{ paddingLeft: 4 }}></i>
                </div>
              </p>
              <div id="inner-div" onClick={this.optionSelected}></div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
