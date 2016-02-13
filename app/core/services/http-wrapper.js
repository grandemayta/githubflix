/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

"use strict";

import Http                     from "superagent";


let HttpWrapper = {

    resolve(state, feature, cb) {
        switch (ENV) {

            case 'DEV':
                this.callMock(state, feature, cb);
                break;

            default:
                this.callUrl(state, feature, cb);
        }
    },

    callMock(state, feature, cb) {
        require.ensure([], function (require) {
            cb({type: 'success', data: require(`features/${feature.name}/mocks/${state}.json`)});
        });
    },

    callUrl(state, feature, cb) {
        return (
            Http
                .get(`https://api.github.com/${feature.states[state].url}`)
                .end(function (error, success) {
                    if (error) {
                        return cb({
                            type: 'error',
                            message: 'Oppss, We have some problems!'
                        });
                    }
                    else {
                        return cb({
                            type: 'success',
                            data: success.body
                        });
                    }
                })
        );
    }

};

export default HttpWrapper;