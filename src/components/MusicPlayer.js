import React, { useEffect } from "react";
import "../styles/musicplayer.css";

export default function MusicPlayer(props) {
  useEffect(() => {
    document.getElementsByClassName("loader-progress")[0].style.width =
      props.width + "px";
  });
  const seconds = props.fullLength % 60;
  const minutes = parseInt(props.fullLength / 60);
  let totalDuration = "";
  if (seconds < 10) {
    totalDuration = "0" + minutes + ":0" + seconds;
  } else {
    totalDuration = "0" + minutes + ":" + seconds;
  }
  let convertTimertoMinSec = () => {
    let currentTimer = "";
    let currentMinute = 0;
    // let currentSecond = 0;
    if (props.timer < 60) {
      if (props.timer < 10) {
        currentTimer = "00:0" + props.timer;
      } else {
        currentTimer = "00:" + props.timer;
      }
    } else {
      currentMinute = parseInt(props.timer / 60);
      if (props.timer % 60 === 0) {
        currentTimer = "0" + currentMinute + ":00";
      } else {
        let second = props.timer % 60;
        if (second < 10) {
          currentTimer = `0${currentMinute}:0${second}`;
        } else {
          currentTimer = `0${currentMinute}:${second}`;
        }
      }
    }
    return currentTimer;
  };

  return (
    <div>
      <div className="music-info-wrapper">
        <div className="music-image">
          <audio id="audioElement" preload="none">
            <source src="../audio/Malare.mp3" />
          </audio>
          <img
            src="https://lyricsraag.com/wp-content/uploads/2020/09/malare-mounama-lyrics-english-male-female-translation.jpg"
            alt=""
          />
        </div>
        <div className="music-info">
          <h4>01 Malare</h4>
          <p>SP Balasubraniam,Janaki</p>
        </div>
      </div>
      <div className="loader">
        <div className="loader-progress"></div>
      </div>
      <div className="music-duration">
        <span className="start">{convertTimertoMinSec()}</span>
        <span className="end">{totalDuration}</span>
      </div>
      <div className="music-controls">
        <div className="play-back">
          <i className="far fa-backward"></i>
        </div>
        <div className="play">
          <i className="fal fa-play"></i>
        </div>
        <div className="play-next">
          <i className="far fa-forward"></i>
        </div>
      </div>
    </div>
  );
}
