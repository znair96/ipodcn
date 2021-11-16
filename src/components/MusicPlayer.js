import React from "react";

export default function MusicPlayer() {
  return (
    <div className="screen">
      <div className="music-info-wrapper">
        <div className="music-image">
          <img src="" alt="" />
        </div>
        <div className="music-info">
          <h2>01 Malare</h2>
          <p>SP Balasubraniam,Janaki</p>
        </div>
      </div>
      <div className="loader"></div>
    </div>
  );
}
