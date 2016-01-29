/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

"use strict";

import React            from "react";
import { Link }         from "react-router";


class Users extends React.Component {

    componentDidMount() {
        //console.log("Component did mount", this);
    };

    render() {
        let { children } = this.props;
        var items = function (item) {
            return <h1 key={item.id}>{item.login}</h1>
        };
        return (
            <div>
                {this.props.params.usersResponse.map(items)}
                <button>
                    <Link to="/users/user">Pagina user</Link>
                </button>
                {children}
            </div>

        );
    }

}

module.exports = Users;

