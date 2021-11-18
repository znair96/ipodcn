import React from "react";
import "../styles/musicplayer.css";

export default function MusicPlayer() {
  return (
    <div>
      <div className="music-info-wrapper">
        <div className="music-image">
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
