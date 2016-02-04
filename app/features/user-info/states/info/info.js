/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

"use strict";

import React                   from "react";


class Info extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            infoResponse: props.params.infoResponse
        };
        console.log(this.state.infoResponse);
    };

    render() {
        return (
            <div>
                <div style={{backgroundImage: 'url(' + this.state.infoResponse.avatar_url + ')'}}
                     className="image-primary-center">
                </div>
                <h1>{this.state.infoResponse.name}</h1>
                {this.props.repositories}
                {this.props.followers}
                {this.props.following}
                {this.props.starred}
            </div>
        );
    }

}

module.exports = Info;

