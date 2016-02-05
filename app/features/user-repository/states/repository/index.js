/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

import request          from "superagent";


let configRepository = {

    path: "user/:id/repository",

    getComponent(location, callback) {
        require.ensure([], function (require) {
            callback(null, require("./repository"));
        })
    },

    onEnter(nextState, replaceState, callback) {

        nextState.params.repositoryResponse = {};

        require.ensure([], function (require) {
            nextState.params.repositoryResponse = require("../../mocks/repository.json");
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

module.exports = configRepository;