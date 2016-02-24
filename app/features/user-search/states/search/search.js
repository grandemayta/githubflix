/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

"use strict";

import React                            from "react";
import Reflux                           from "reflux";
import { Actions, Store }               from "./config";


let Search = React.createClass({

    mixins: [Reflux.connect(Store)],

    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    searchUserByName(e) {
        Actions.NAME_TO_SEARCH(e.target.value);
    },

    handleSearch() {
        this.context.router.push(`search/${this.state.name}`);
    },

    render() {
        return (
            <div>
                <input type="text" onChange={this.searchUserByName}/>
                <button onClick={this.handleSearch}>Search</button>
            </div>
        );
    }

});

module.exports = Search;

