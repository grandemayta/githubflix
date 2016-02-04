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

        let items = function (item) {
            return (
                <div key={item.id} className="swiper-slide slider-container"></div>
            );
        };

        return (
            <div>
                <h2>Following</h2>
                <div id="swiper-following" className="swiper-container slider-main-container">
                    <div className="swiper-wrapper">
                        {this.state.followingResponse.map(items)}
                    </div>
                </div>
            </div>
        );

    }

}

module.exports = Following;

