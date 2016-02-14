/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

"use strict";

import React                            from "react";
import Reflux                           from "reflux";
import { Spinner }                      from "widgets";
import { Actions, Store }               from "./config";


let Repository = React.createClass({

    mixins: [Reflux.connect(Store)],

    componentDidMount() {
        Actions.LOAD_INITIAL_DATA(this.props.params);
    },

    render() {
        return (
            <div>
                <Spinner status={this.state.spinnerStatus}/>
                <h1>My repo: {this.state.repositoryResponse.name}</h1>
            </div>

        );
    }

});

module.exports = Repository;

