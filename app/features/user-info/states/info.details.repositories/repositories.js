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
                <Link to={`user/${item.owner.login}/repository`} key={item.id} className="swiper-slide slider-container">
                    <div className="text-primary-left">{item.name}</div>
                    <div className="text-bottom-right">{item.language}</div>
                </Link>
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

