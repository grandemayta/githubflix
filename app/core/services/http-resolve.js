/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

"use strict";

import Http                     from "superagent";


let HttpResolve = function (state, feature, cb) {

    return (
        Http.get(`https://api.github.com/${feature.states[state].url}`).end(function (error, success) {

            if (error)
                return cb({type: 'error', message: 'Oppss, We have some problems!'});
            else
                return cb({type: 'success', data: success.body});

        })
    );

};

export default HttpResolve;