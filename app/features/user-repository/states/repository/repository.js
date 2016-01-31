/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

"use strict";

import React            from "react";


class Repository extends React.Component {

    constructor(props) {
        super();
        this.state = {
            repositoryResponse: props.params.repositoryResponse
        };
    };

    render() {
        return (
            <div>
                <h1>My repo: {this.state.repositoryResponse.name}</h1>
            </div>

        );
    }

}

module.exports = Repository;

