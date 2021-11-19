import React from "react";
import "../styles/musicplayer.css";

export default function MusicPlayer(props) {
  const seconds = props.fullLength % 60;
  const minutes = parseInt(props.fullLength / 60);
  let totalDuration = "";
  if (seconds < 10) {
    totalDuration = minutes + ":0" + seconds;
  } else {
    totalDuration = minutes + ":" + seconds;
  }
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
      <div className="loader"></div>
      <div className="music-duration">
        <span className="start">00:00</span>
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
