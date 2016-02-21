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


let Starred = React.createClass({

    mixins: [Reflux.connect(Store)],

    componentDidMount() {
        Actions.LOAD_INITIAL_DATA(this.props.params);
    },

    componentWillReceiveProps() {
        Actions.LOAD_INITIAL_DATA(this.props.params);
    },

    componentDidUpdate(){
        if (this.state.starredResponse.length > 0) {
            var swiper = new Swiper("#swiper-starred", {
                slidesPerView: "auto",
                spaceBetween: 5
            });
        }
    },

    render() {

        let items = function (item) {
            return (
                <Link to={`user/${item.owner.login}/repository/${item.name}`} key={item.id} className="swiper-slide slider-container">
                    <div className="text-primary-left">{item.name}</div>
                    <div className="text-bottom-right">{item.language}</div>
                </Link>
            );
        };

        return (
            <div>
                <h2>Starred</h2>
                <Spinner status={this.state.spinnerStatus}/>
                <div id="swiper-starred" className="swiper-container slider-main-container">
                    <div className="swiper-wrapper">
                        {this.state.starredResponse.map(items)}
                    </div>
                </div>
            </div>
        );
    }

});

module.exports = Starred;

