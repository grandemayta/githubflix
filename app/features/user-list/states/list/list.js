/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

"use strict";

import React                    from "react";
import { Link }                 from "react-router";


class List extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            listResponse: props.params.listResponse
        };
    };

    render() {

        var items = function (item) {
            return (
                <Link to="/user-info/2" key={item.id} className="card-container no-a-style">
                    <figure style={{backgroundImage: 'url(' + item.avatar_url + ')'}}></figure>
                    <h3>{item.login}</h3>
                    <i className="icon-ios-arrow-forward"></i>
                </Link>
            );
        };

        return <div>{this.state.listResponse.map(items)}</div>;
    }

}

module.exports = List;

