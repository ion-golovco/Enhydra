import React from "react";
import { Col, Container, Row } from "reactstrap";
import Hello from "./components/Hello";
import Sidebar from "./components/SideBar";
import PostFeed from "./components/PostFeed";
import TagLink from "./components/TagLink"
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <div>
            
            <Hello />
            <Row>
                <Col sm={{ size: "10", offset: 1 }} xs="12">
                    <Row>
                    <Col sm="9" xs="12">
                        <PostFeed />
                    </Col>
                    <Col sm="3" xs="0">
                        <Sidebar />
                    </Col>
                    </Row>
                </Col>
                
            </Row>
            
            <TagLink />
        </div>
    );
}

export default App;
