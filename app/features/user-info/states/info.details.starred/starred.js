/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

"use strict";

import React                 from "react";


class Starred extends React.Component {

    constructor(props) {
        super();
        this.state = {
            starredResponse: props.params.starredResponse
        };
    };

    componentDidMount() {
        var swiper = new Swiper("#swiper-starred", {
            slidesPerView: "auto",
            spaceBetween: 5
        });
    };

    render() {

        let items = function (item) {
            return (
                <div key={item.id} className="swiper-slide slider-container">
                    <div className="text-primary-left">{item.name}</div>
                    <div className="text-bottom-right">{item.language}</div>
                </div>
            );
        };

        return (
            <div>
                <h2>Starred</h2>
                <div id="swiper-starred" className="swiper-container slider-main-container">
                    <div className="swiper-wrapper">
                        {this.state.starredResponse.map(items)}
                    </div>
                </div>
            </div>
        );
    }

}

module.exports = Starred;

