import React, { Component } from "react";
import { Col, UncontrolledCarousel} from "reactstrap";
import {helloMedia } from "./libraries/content";

class Hello extends Component {
  render() {
    return (
      <div>
        <UncontrolledCarousel items={helloMedia} />
        <Col id="Hello">
          <h1>Hello!</h1>
          <h2>Noi suntem Enhydra :)</h2>
        </Col>
      </div>
    );
  }
}

export default Hello;
