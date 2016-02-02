/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

"use strict";

import React                     from "react";
import { Link }                  from "react-router";


class Menu extends React.Component {

    render() {
        return (
            <div>
                <header>
                    <i className="icon-android-menu"></i>
                    <Link to="/" className="no-a-style">Githubflix</Link>
                </header>
                <section>
                    {this.props.children}
                </section>
            </div>
        );
    }

}

export default Menu;

