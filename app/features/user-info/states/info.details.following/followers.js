/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

"use strict";

import React                 from "react";


class Following extends React.Component {

    constructor(props) {
        super();
        this.state = {
            followingResponse: props.params.followingResponse
        };
    };

    componentDidMount() {
        var swiper = new Swiper("#swiper-following", {
            slidesPerView: "auto",
            spaceBetween: 2
        });
    };

    render() {
        return (
            <div>
                <h2>Following</h2>
                <div id="swiper-following" className="swiper-container slider-main-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide slider-container">Slide 1</div>
                        <div className="swiper-slide slider-container">Slide 2</div>
                        <div className="swiper-slide slider-container">Slide 3</div>
                        <div className="swiper-slide slider-container">Slide 4</div>
                        <div className="swiper-slide slider-container">Slide 5</div>
                    </div>
                </div>
            </div>
        );
    }

}

module.exports = Following;

