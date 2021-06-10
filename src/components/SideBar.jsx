import React, { Component } from "react";


class SideBar extends Component {
  state = {};
  render() {
    return (
      <div id="SideBar">
        <p id="text">
          <h2>Our Team</h2>
          <ul>
            Ion - Absolute unit
            <br />
            Alex - Analylicts
            <br />
            Ciprian - Mb programer
          </ul>
          <a href="/gallery">
          <h2>Gallery</h2>
          </a>
          random images
        </p>
      </div>
    );
  }
}

export default SideBar;
