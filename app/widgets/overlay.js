/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

"use strict";

import React                    from "react";


let Overlay = React.createClass({

    render() {
        return <div className={this.props.status ? 'overlay active' : ''}></div>;
    }

});

export default Overlay;