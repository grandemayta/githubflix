/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

import request          from "superagent";


let configUsers = {

    getComponent(location, callback) {
        require.ensure([], function (require) {
            callback(null, require("./list"));
        })
    },

    onEnter(nextState, replaceState, callback) {

        nextState.params.listResponse = [];

        require.ensure([], function (require) {
            nextState.params.listResponse = require("../../mocks/list.json");
            callback();
        });

        /*request
         .get("https://api.github.com/users")
         .end(function (error, success) {
         if (error) callback();
         else {
         nextState.params.listResponse = success.body;
         callback();
         }
         });*/
    }

};

module.exports = configUsers;