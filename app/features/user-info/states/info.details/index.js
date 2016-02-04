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
                followers: require("../info.details.followers/followers"),
                following: require("../info.details.following/following"),
                starred: require("../info.details.starred/starred")
            });
        })
    },

    onEnter(nextState, replaceState, callback) {

        nextState.params.repositoriesResponse = [];
        nextState.params.followersResponse = [];
        nextState.params.followingResponse = [];
        nextState.params.starredResponse = [];

        /*require.ensure([], function (require) {
         var repositoriesResponse = require("../../mocks/repositories.json");
         var followersResponse = require("../../mocks/followers.json");
         var followingResponse = require("../../mocks/following.json");
         var subscriptionsResponse = require("../../mocks/subscriptions.json");
         nextState.params.repositoriesResponse = repositoriesResponse;
         nextState.params.followersResponse = followersResponse;
         nextState.params.followingResponse = followingResponse;
         nextState.params.subscriptionsResponse = subscriptionsResponse;
         callback();
         });*/

        request
            .get("https://api.github.com/users/gabrielmayta/repos")
            .end(function (error, success) {
                nextState.params.repositoriesResponse = success.body;
                request
                    .get("https://api.github.com/users/gabrielmayta/followers")
                    .end(function (error, success) {
                        nextState.params.followersResponse = success.body;
                        request
                            .get("https://api.github.com/users/gabrielmayta/following")
                            .end(function (error, success) {
                                nextState.params.followingResponse = success.body;
                                request
                                    .get("https://api.github.com/users/gabrielmayta/starred")
                                    .end(function (error, success) {
                                        nextState.params.starredResponse = success.body;
                                        callback();
                                    });
                            });
                    });


            });
    }

};

module.exports = configDetails;