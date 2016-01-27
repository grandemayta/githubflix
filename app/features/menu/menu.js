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
                    <Link to="/home">Home</Link>
                </button>
                <button>
                    <Link to="/detail">Detail</Link>
                </button>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }

}

export default Menu;

