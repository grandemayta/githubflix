/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

"use strict";

import React                 from "react";


class Subscriptions extends React.Component {

    constructor(props) {
        super();
        this.state = {
            subscriptionsResponse: props.params.subscriptionsResponse
        };
    };

    componentDidMount() {
        var swiper = new Swiper("#swiper-subscriptions", {
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
                <h2>Subscriptions</h2>
                <div id="swiper-subscriptions" className="swiper-container slider-main-container">
                    <div className="swiper-wrapper">
                        {this.state.subscriptionsResponse.map(items)}
                    </div>
                </div>
            </div>
        );
    }

}

module.exports = Subscriptions;

