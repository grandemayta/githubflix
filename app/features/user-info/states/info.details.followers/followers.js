/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

"use strict";

import React                 from "react";


class Followers extends React.Component {

    constructor(props) {
        super();
        this.state = {
            followersResponse: props.params.followersResponse
        };
    };

    componentDidMount() {
        var swiper = new Swiper("#swiper-followers", {
            slidesPerView: "auto",
            spaceBetween: 2
        });
    };

    render() {
        return (
            <div>
                <h2>Followers</h2>
                <div id="swiper-followers" className="swiper-container slider-main-container">
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

module.exports = Followers;

