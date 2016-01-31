/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

import request          from "superagent";


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

        require.ensure([], function (require) {
            var response = require("../../mocks/info.json");
            nextState.params.infoResponse = response;
            callback();
        });

        /*request
         .get("https://api.github.com/users/atmos")
         .end(function (error, success) {
         if (error) callback();
         else {
         nextState.params.infoResponse = success.body;
         callback();
         }
         });*/
    }

};

module.exports = configInfo;