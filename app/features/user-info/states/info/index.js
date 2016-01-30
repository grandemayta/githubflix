/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

var request = require("superagent");


let configInfo = {

    path: 'user-info/:id',
    indexRoute: require('../info.details'),

    getComponent(location, callback) {
        require.ensure([], function (require) {
            callback(null, require("./info"));
        });
    },

    onEnter(nextState, replaceState, callback) {

        nextState.params.infoResponse = [];

        request
            .get("https://api.github.com/users/atmos")
            .end(function (error, success) {
                if (error) callback();
                else {
                    nextState.params.infoResponse = success.body;
                    callback();
                }
            });
    }

};

module.exports = configInfo;