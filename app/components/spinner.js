/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

"use strict";

import React                    from "react";


let Spinner = React.createClass({

    render() {
        return (
            <div className={this.props.status ? 'spinner':'display-none'}>
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
            </div>
        );
    }

});

export default Spinner;