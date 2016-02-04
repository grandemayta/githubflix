/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

"use strict";

import React                    from "react";
import { Link }                 from "react-router";


class Repositories extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            repositoriesResponse: props.params.repositoriesResponse
        };
    }

    componentDidMount() {
        var swiper = new Swiper('#swiper-repositories', {
            slidesPerView: 'auto',
            spaceBetween: 5
        });
    };

    render() {
        let items = function (item) {
            return (
                <div key={item.id} className="swiper-slide slider-container">
                    <div className="repo-name">{item.name}</div>
                    <div className="repo-language">{item.language}</div>
                </div>
            );
        };
        return (
            <div>
                <h2>Repositories</h2>
                <div id="swiper-repositories" className="swiper-container slider-main-container">
                    <div className="swiper-wrapper">
                        {this.state.repositoriesResponse.map(items)}
                    </div>
                </div>
            </div>
        );
    }

}

module.exports = Repositories;

