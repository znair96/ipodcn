import React, { Component } from "react";
import "../styles/screen.css";
export default class Screen extends Component {
  render() {
    return (
      <div className="screen">
        <div className="nav-links">
          <h2>ipod.js</h2>
          <p id="cover-flow" className="highlight">
            Cover Flow{" "}
            <span className="hidden">
              <i className="fas fa-chevron-right"></i>
            </span>
          </p>
          <p id="music">
            Music
            <span className="hidden">
              <i className="fas fa-chevron-right"></i>
            </span>
          </p>
          <p id="games">
            Games
            <span className="hidden">
              <i className="fas fa-chevron-right"></i>
            </span>
          </p>
          <p id="settings">
            Settings
            <span className="hidden">
              <i className="fas fa-chevron-right"></i>
            </span>
          </p>
        </div>
      </div>
    );
  }
}
