/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

"use strict";

import React                          from "react";
import { Link }                       from "react-router";
import { Overlay }                    from "widgets";

let Menu = React.createClass({

    getInitialState() {
        return {
            menuStatus: false
        };
    },

    handleMenu() {
        this.setState({menuStatus: !this.state.menuStatus});
    },

    render() {
        return (
            <div>
                <aside className={this.state.menuStatus ? 'active': ''}>
                    <nav>

                    </nav>
                </aside>
                <section className={this.state.menuStatus ? 'active': ''}>
                    <Overlay status={this.state.menuStatus}/>
                    <header>
                        <i onClick={this.handleMenu} className="icon-android-menu"></i>
                        <Link to="/" className="no-a-style">Githubflix</Link>
                    </header>
                    <article>
                        {this.props.children}
                    </article>
                </section>
            </div>
        );
    }

});

module.exports = Menu;

