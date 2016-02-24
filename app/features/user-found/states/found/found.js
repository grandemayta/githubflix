/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

"use strict";

import React                            from "react";
import Reflux                           from "reflux";
import { Link }                         from "react-router";
import { Spinner }                      from "widgets";
import { Actions, Store }               from "./config";


let Found = React.createClass({

    mixins: [Reflux.connect(Store)],

    componentDidMount() {
        Actions.LOAD_INITIAL_DATA(this.props.params.name);
    },

    render() {
        var self = this;
        var items = function (item) {
            return (
                <Link to={`user/${item.login}`} key={item.id} className="card-container">
                    <figure style={{backgroundImage: 'url(' + item.avatar_url + ')'}}></figure>
                    <h3>{item.login}</h3>
                    <i className="icon-ios-arrow-forward"></i>
                </Link>
            );
        };
        return (
            <div>
                <Spinner status={this.state.spinnerStatus}/>
                {this.state.foundResponse.map(items)}
            </div>
        );
    }

});

module.exports = Found;

