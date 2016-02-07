/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

"use strict";

import React                              from "react";
import Reflux                             from "reflux";
import { Link }                           from "react-router";
import { Spinner }                        from "../../../../components";
import { Actions, Store }                 from "./config";


let Repositories = React.createClass({

    mixins: [Reflux.connect(Store)],

    componentDidMount() {
        Actions.LOAD_INITIAL_DATA();
    },

    componentDidUpdate(){
        if (this.state.repositoriesResponse.length > 1) {
            var swiper = new Swiper('#swiper-repositories', {
                slidesPerView: 'auto',
                spaceBetween: 5
            });
        }
    },

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
                <Spinner status={this.state.spinnerStatus}/>
                <div id="swiper-repositories" className="swiper-container slider-main-container">
                    <div className="swiper-wrapper">
                        {this.state.repositoriesResponse.map(items)}
                    </div>
                </div>
            </div>
        );
    }

});

module.exports = Repositories;