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
            return <h1 key={item.id}>{item.login}</h1>
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

