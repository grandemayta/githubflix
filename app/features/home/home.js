/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

"use strict";

import React            from "react";


class Home extends React.Component {

    componentDidMount() {
        console.log("Component did mount", this.props.params);
    };

    render() {
        var items = function (item) {
            return <h1 key={item.id}>{item.login}</h1>
        };
        return (
            <div>{this.props.params.homeResponse.map(items)}</div>
        );
    }

}

module.exports = Home;

