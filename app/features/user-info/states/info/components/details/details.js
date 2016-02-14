/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

"use strict";

import React                                 from "react";
import Reflux                                from "reflux";
import { Actions, Store }                    from "./config";
import { Spinner }                           from "widgets";

let Details = React.createClass({

    mixins: [Reflux.connect(Store)],

    componentDidMount() {
        Actions.LOAD_INITIAL_DATA(this.props.params);
    },

    render() {
        return (
            <div>
                <Spinner status={this.state.spinnerStatus}/>
                <div style={{backgroundImage: `url(${this.state.detailsResponse.avatar_url})`}}
                     className="image-primary-center">
                </div>
                <h1>{this.state.detailsResponse.name}</h1>
            </div>
        );
    }

});

module.exports = Details;