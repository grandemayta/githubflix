/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

import request          from "superagent";


let configDetails = {

    getComponents(location, callback) {
        require.ensure([], function (require) {
            callback(null, {
                repositories: require("../info.details.repositories/repositories"),
                followers: require("../info.details.followers/followers")
            });
        })
    },

    onEnter(nextState, replaceState, callback) {

        nextState.params.repositoriesResponse = [];
        nextState.params.followersResponse = [];

        require.ensure([], function (require) {
            var repositoriesResponse = require("../../mocks/repositories.json");
            var followersResponse = require("../../mocks/followers.json");
            nextState.params.repositoriesResponse = repositoriesResponse;
            nextState.params.followersResponse = followersResponse;
            callback();
        });

        /*request
         .get("https://api.github.com/users/atmos/repos")
         .end(function (error, success) {
         if (error) {
         request
         .get("https://api.github.com/users/atmos/followers")
         .end(function (error, success) {
         if (error) callback();
         nextState.params.followersResponse = success.body;
         callback();
         });
         }
         else {
         nextState.params.repositoriesResponse = success.body;
         request
         .get("https://api.github.com/users/atmos/followers")
         .end(function (error, success) {
         nextState.params.followersResponse = success.body;
         callback();
         });

         }
         });*/
    }

};

module.exports = configDetails;