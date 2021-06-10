import React from "react";
import { Col, Row } from "reactstrap";
import Hello from "../Hello";
import Sidebar from "../SideBar";
import PostFeed from "../PostFeed";

import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div style={{ "background-color": "#232523" }}>
      <Hello />
      <Row>
        <Col sm={{ size: "10", offset: 1 }} xs="12">
          <Row>
            <Col sm="8" xs="12">
              <PostFeed />
            </Col>
            <Col sm="4" xs="0">
              <Sidebar />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default App;
