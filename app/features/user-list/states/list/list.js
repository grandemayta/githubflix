/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

"use strict";

import React            from "react";
import { Link }         from "react-router";


class List extends React.Component {

    constructor(props) {
        super();
        this.state = {
            listResponse: props.params.listResponse
        };
    };

    render() {
        var items = function (item) {
            return (
                <div key={item.id} className="card-container">
                    <figure style={{backgroundImage: 'url(' + item.avatar_url + ')'}}></figure>
                    <h3>{item.login}</h3>
                    <i className="icon-ios-arrow-forward"></i>
                </div>
            );
        };
        return (
            <div>
                {this.state.listResponse.map(items)}
                <button>
                    <Link to="/user-info/2">Pagina user</Link>
                </button>
            </div>

        );
    }

}

module.exports = List;

