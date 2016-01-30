/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

"use strict";

import React            from "react";


class Info extends React.Component {

    constructor(props) {
        super();
        this.state = {
            infoResponse: props.params.infoResponse
        };
    };

    render() {
        return (
            <div>
                <h1>{this.state.infoResponse.name}</h1>
                <h2>{this.state.infoResponse.email}</h2>
                <br/>
                <br/>
                {this.props.repositories}
                <br/>
                <br/>
                {this.props.followers}
            </div>
        );
    }

}

module.exports = Info;

