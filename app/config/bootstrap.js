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

var routes = (
    <Router>
        <Route path="/" component={Home}/>
    </Router>
);


render(routes, document.getElementById("start"));
