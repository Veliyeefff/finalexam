import React, { Component } from "react";
import Slider from "react-slick";

export default class Sliders extends Component {
    render() {
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                <Slider style={{ width: "100%" }} {...settings}>
                    <div>
                        <div>
                            <div className="number">
                                <h2>99</h2>
                            </div>
                            <div className="start">
                                <i classname="fa-solid fa-star"></i>
                                <i classname="fa-solid fa-star"></i>
                                <i classname="fa-solid fa-star"></i>
                                <i classname="fa-solid fa-star"></i>
                                <i classname="fa-solid fa-star"></i>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className="number">
                                <h2>99</h2>
                            </div>
                            <div className="start">
                                <i classname="fa-solid fa-star"></i>
                                <i classname="fa-solid fa-star"></i>
                                <i classname="fa-solid fa-star"></i>
                                <i classname="fa-solid fa-star"></i>
                                <i classname="fa-solid fa-star"></i>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className="number">
                                <h2>99</h2>
                            </div>
                            <div className="start">
                                <i classname="fa-solid fa-star"></i>
                                <i classname="fa-solid fa-star"></i>
                                <i classname="fa-solid fa-star"></i>
                                <i classname="fa-solid fa-star"></i>
                                <i classname="fa-solid fa-star"></i>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div style={{ width: "100%" }}>
                            <div className="number">
                                <h2>99</h2>
                            </div>
                            <div className="start">
                                <i classname="fa-solid fa-star"></i>
                                <i classname="fa-solid fa-star"></i>
                                <i classname="fa-solid fa-star"></i>
                                <i classname="fa-solid fa-star"></i>
                                <i classname="fa-solid fa-star"></i>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}