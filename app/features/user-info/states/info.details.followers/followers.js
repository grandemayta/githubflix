/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

"use strict";

import React            from "react";


class Followers extends React.Component {

    constructor(props) {
        super();
        this.state = {
            followersResponse: props.params.followersResponse
        };
    };

    render() {
        return (
            <h2>Followers: {this.state.followersResponse.length}</h2>
        );
    }

}

module.exports = Followers;

