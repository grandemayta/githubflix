/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

"use strict";

import React                                        from "react";
import { render }                                   from "react-dom";
import { Router, Route, hashHistory }               from "react-router";
import Menu                                         from "features/menu/menu";
import Css                                          from "../css/common.scss";


let Routes = [
    {
        path: "/",
        component: Menu,
        indexRoute: require("features/user-list/states/list"),
        childRoutes: [
            require("features/user-info/states/info"),
            require("features/user-repository/states/repository"),
            require("features/user-search/states/search")
        ]
    }
];

render(
    <Router history={hashHistory} routes={Routes}/>,
    document.getElementById("start")
);
