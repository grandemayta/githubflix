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
                <div className="menu-container">
                    <button>
                        <Link to="/">Users</Link>
                    </button>
                </div>
                {this.props.children}
            </div>
        );
    }

}

export default Menu;

