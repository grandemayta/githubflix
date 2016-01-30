/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

"use strict";

import React            from "react";
import { Link }         from "react-router";


class Menu extends React.Component {

    render() {
        return (
            <div>
                <button>
                    <Link to="/">Users</Link>
                </button>
                {this.props.children}
            </div>
        );
    }

}

export default Menu;

