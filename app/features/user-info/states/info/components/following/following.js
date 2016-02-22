/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

"use strict";

import React                                 from "react";
import Reflux                                from "reflux";
import { Link }                              from "react-router";
import { Actions, Store }                    from "./config";
import { Spinner }                           from "widgets";


let Following = React.createClass({

    mixins: [Reflux.connect(Store)],

    componentDidMount() {
        Actions.LOAD_INITIAL_DATA(this.props.params);
    },

    componentWillReceiveProps() {
        Actions.LOAD_INITIAL_DATA(this.props.params);
    },
    
    componentDidUpdate() {
        if (this.state.followingResponse.length > 0) {
            var swiper = new Swiper("#swiper-following", {
                slidesPerView: "auto",
                spaceBetween: 5
            });
        }
    },

    render() {

        let items = function (item) {
            return (
                <Link to={`/user/${item.login}`} key={item.id} className="swiper-slide slider-container">
                    <div style={{backgroundImage: `url(${item.avatar_url})`}} className="image-secondary-center"></div>
                    <div className="text-botton-center">{item.login}</div>
                </Link>
            );
        };

        return (
            <div>
                <h2>Following</h2>
                <Spinner status={this.state.spinnerStatus}/>
                <div id="swiper-following" className="swiper-container slider-main-container" data-snap-ignore="true">
                    <div className="swiper-wrapper">
                        {this.state.followingResponse.map(items)}
                    </div>
                </div>
            </div>
        );

    }

});

module.exports = Following;

