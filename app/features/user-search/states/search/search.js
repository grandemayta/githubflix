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


let Search = React.createClass({

    mixins: [Reflux.connect(Store)],

    componentDidMount() {
        Actions.LOAD_INITIAL_DATA();
    },

    handleSearch() {
        Actions.SEARCH_USERS({name: "gabriel mayta"});
    },

    render() {
        return (
            <div>
                <Spinner status={this.state.spinnerStatus}/>
                <input type="text"/>
                <button onClick={this.handleSearch}>Search</button>
            </div>

        );
    }

});

module.exports = Search;

