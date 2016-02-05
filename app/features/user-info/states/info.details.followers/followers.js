/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

"use strict";

import React                    from "react";
import { Link }                 from "react-router";


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
            spaceBetween: 5
        });
    };

    render() {

        let items = function (item) {
            return (
                <Link to={`/user/${item.login}`} key={item.id} className="swiper-slide slider-container">
                    <div style={{backgroundImage: 'url(' + item.avatar_url + ')'}} className="image-secondary-center"></div>
                    <div className="text-botton-center">{item.login}</div>
                </Link>
            );
        };

        return (
            <div>
                <h2>Followers</h2>
                <div id="swiper-followers" className="swiper-container slider-main-container">
                    <div className="swiper-wrapper">
                        {this.state.followersResponse.map(items)}
                    </div>
                </div>
            </div>
        );

    }

}

module.exports = Followers;

