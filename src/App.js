import React from "react";
import { Col, Row } from "reactstrap";
import Hello from "./components/Hello";
import Sidebar from "./components/SideBar";
import PostFeed from "./components/PostFeed";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <div>
            <Hello />
            <Row>
                <Col sm={{ size: "10", offset: 1 }} xs="12">
                    <Col sm="9" xs="12">
                        <PostFeed />
                    </Col>
                    <Col sm="3" xs="0">
                        <Sidebar />
                    </Col>
                </Col>
            </Row>
        </div>
    );
}

export default App;
