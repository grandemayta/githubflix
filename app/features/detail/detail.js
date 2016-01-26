/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

"use strict";

import React            from "react";
import { Link }         from "react-router";


class Detail extends React.Component {

    render() {
        return (
            <div>
                <h1>Detail page</h1>
                <Link to="/">Home</Link>
            </div>
        );
    }

}

export default Detail;

