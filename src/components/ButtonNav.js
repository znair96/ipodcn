import React, { Component } from "react";
// import Screen from "./Screen";
import "../styles/screen.css";
import Menu from "./Menu";
import CoverFlow from "./CoverFlow";
import MusicPlayer from "./MusicPlayer";
import Games from "./Games";
import Settings from "./Settings";
import Music from "./Music";
import "../styles/buttonnav.css";
import song from "../audio/Malare-S.P.-Balasubrahmanyam-S.-Janaki.m4a";
import IpodNavButton from "./IpodNavButton";
export default class ButtonNav extends Component {
  constructor(props) {
    super(props);
    this.audio = new Audio(song);
    this.state = {
      menuItem: "",
      timer: 0,
      width: 0,
    };
  }
  optionSelected = () => {
    let menuOption =
      document.getElementsByClassName("highlight")[0].textContent;
    this.setState({
      menuItem: menuOption,
    });
  };
  //Event triggered when menu is clicked
  menuSelect = () => {
    if (this.state.menuItem.trim() === "All Songs") {
      this.setState({
        menuItem: "Music",
      });
    } else {
      this.setState({
        menuItem: "",
      });
    }
  };

  changeToPlayPause = () => {
    const play = document.getElementsByClassName("play")[0];
    const pause = document.getElementsByClassName("pause")[0];
    document.getElementsByClassName("loader-progress")[0].style.width =
      this.state.width + "px";
    let timerCount = setInterval(() => {
      if (this.audio.paused) {
        document.getElementsByClassName("loader-progress")[0].style.width =
          this.state.width + "px";
        clearInterval(timerCount);
      } else {
        if (this.state.timer === parseInt(this.audio.duration)) {
          this.setState({
            timer: 0,
            width: 0,
          });
          clearInterval(timerCount);
        } else {
          this.setState({
            timer: this.state.timer + 1,
            width: this.state.width + 265 / this.audio.duration,
          });
          document.getElementsByClassName("loader-progress")[0].style.width =
            this.state.width + "px";
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
    let menu = this.state.menuItem;
    menu = menu.trim();
    let currentMenu;
    let jsxVal;
    let classValue = "screen";
    if (menu !== "") {
      classValue = "white-background";
    }
    if (menu !== "") {
      classValue = "white-background";
    }
    if (menu === "Cover Flow") {
      jsxVal = <CoverFlow />;
      currentMenu = "CoverFlow";
    } else if (menu === "Music") {
      classValue = "screen";
      currentMenu = "Music";
      jsxVal = <Music />;
    } else if (menu === "Games") {
      jsxVal = <Games />;
      currentMenu = "Games";
    } else if (menu === "Settings") {
      jsxVal = <Settings />;
      currentMenu = "Settings";
    } else if (menu === "All Songs") {
      jsxVal = (
        <MusicPlayer
          timer={this.state.timer}
          fullLength={parseInt(this.audio.duration)}
          width={this.state.width}
        />
      );

      currentMenu = "Music Player";
    } else {
      jsxVal = <Menu />;
      currentMenu = "Menu";
    }
    return (
      <>
        <div className={classValue}>{jsxVal}</div>
        <IpodNavButton
          menuSelect={this.menuSelect}
          changeToPlayPause={this.changeToPlayPause}
          optionSelected={this.optionSelected}
          currentMenu={currentMenu}
        />
      </>
    );
  }
}
