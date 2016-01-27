/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

"use strict";

import React                                    from "react";
import { render }                               from "react-dom";
import { Router, Route, browserHistory }        from "react-router";
import Menu                                     from "../features/menu/menu";
import Css                                      from "../css/common.css";


const Routes = [
    {
        component: 'div',
        childRoutes: [{
            path: "/",
            component: Menu,
            childRoutes: [
                require("../features/home"),
                require("../features/detail")
            ]
        }]
    }
];

render(
    <Router history={browserHistory} routes={Routes}/>,
    document.getElementById("start")
);
