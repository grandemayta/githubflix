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
    };

    render() {
        return (
            <div>
                {this.props.repositories}
                {this.props.followers}
                {this.props.following}
                {this.props.subscriptions}
            </div>
        );
    }

}

module.exports = Info;

