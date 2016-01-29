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
                    <Link to="/users">Users</Link>
                </button>
                <button>
                    <Link to="/detail">Detail</Link>
                </button>
            </div>
        );
    }

}

export default Menu;

