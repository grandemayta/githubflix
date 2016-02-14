/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

"use strict";

import React                     from "react";
import { Link }                  from "react-router";


let Menu = React.createClass({

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

});

module.exports = Menu;

