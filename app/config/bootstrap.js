/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

"use strict";

import React                    from "react";
import { render }               from "react-dom";
import { Router, Route }        from "react-router";
import Home                     from "../features/home/home";
import Detail                   from "../features/detail/detail";
import Css                      from "../css/common.css";


let Routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "detail",
        component: Detail
    }
];

render(<Router routes={Routes}/>, document.getElementById("start"));
