/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

"use strict";

import React            from "react";


class Repositories extends React.Component {

    constructor(props) {
        super();
        this.state = {
            repositoriesResponse: props.params.repositoriesResponse
        };
    };

    componentDidMount() {
        console.log(this.props);
    };

    render() {
        return (
            <h2>Repositories: {this.state.repositoriesResponse.length}</h2>
        );
    }

}

module.exports = Repositories;

