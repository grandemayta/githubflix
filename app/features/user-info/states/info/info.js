/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

"use strict";

import React                         from "react";


let Info = React.createClass({

    render() {
        return (
            <div>
                {this.props.details}
                {this.props.repositories}
                {this.props.followers}
                {this.props.following}
                {this.props.starred}
            </div>
        );
    }

});

module.exports = Info;


