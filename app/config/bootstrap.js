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
import Menu                                     from "features/menu/menu";
import Css                                      from "../css/common.scss";


let Routes = [
    {
        path: "/",
        component: Menu,
        indexRoute: require("features/user-list/states/list"),
        childRoutes: [
            require("features/user-info/states/info"),
            require("features/user-repository/states/repository")
        ]
    }
];

render(
    <Router history={browserHistory} routes={Routes}/>,
    document.getElementById("start")
);
