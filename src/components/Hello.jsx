import React, { Component } from "react";
import { Col, Jumbotron } from "reactstrap";
import Slider from "./Slider";

class Hello extends Component {
    render() {
        return (
            <Col>
                <Slider
                    options={{
                        autoPlay: 4000,
                        pauseAutoPlayOnHover: true,
                        wrapAround: true,
                        fullscreen: true,
                        adaptiveHeight: false,
                    }}
                >
                    <img
                        id="carrouselImage"
                        src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
                        alt=""
                    />
                    <img
                        id="carrouselImage"
                        src="https://neilpatel.com/wp-content/uploads/2017/09/image-editing-tools.jpg"
                        alt=""
                    />
                    <img
                        id="carrouselImage"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
                        alt=""
                    />
                </Slider>
                <Col id="Hello">
                    <h1>Hello!</h1>
                    <h2>Noi suntem Red Panda :)</h2>
                </Col>
                <Jumbotron></Jumbotron>
            </Col>
        );
    }
}

export default Hello;
