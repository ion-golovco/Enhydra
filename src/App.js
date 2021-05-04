import React from "react";
import {Col, Container } from "reactstrap";
import Hello from "./components/Hello";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Col sm='12'>
            <Hello />
        </Col>
    );
}

export default App;
