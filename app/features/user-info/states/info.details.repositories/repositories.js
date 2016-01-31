/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

"use strict";

import React            from "react";
import { Link }         from "react-router";


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
            <div>
                <h2>Repositories: {this.state.repositoriesResponse.length}</h2>
                <button>
                    <Link to="repository">Repository</Link>
                </button>
            </div>
        );
    }

}

module.exports = Repositories;

