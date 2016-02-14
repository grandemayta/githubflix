/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

"use strict";

import { HttpMock, HttpResolve }                  from "./index";


let HttpWrapper = function (state, feature, cb) {

    switch (ENV) {

        case 'DEV':
            HttpMock(state, feature, cb);
            break;

        default:
            HttpResolve(state, feature, cb);
    }

};

export default HttpWrapper;