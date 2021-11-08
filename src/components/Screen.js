import React, { Component } from "react";
import "../styles/screen.css";
export default class Screen extends Component {
  render() {
    return (
      <div className="screen">
        <div className="nav-links">
          <h2>ipod.js</h2>
          <p className="highlight">
            Cover Flow{" "}
            <span className="hidden">
              <i className="fas fa-chevron-right"></i>
            </span>
          </p>
          <p>Music</p>
          <p>Games</p>
          <p>Settings</p>
        </div>
      </div>
    );
  }
}
