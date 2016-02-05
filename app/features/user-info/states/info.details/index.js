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

        require.ensure([], function (require) {
            nextState.params.repositoriesResponse = require("../../mocks/repositories.json");
            nextState.params.followersResponse = require("../../mocks/followers.json");
            nextState.params.followingResponse = require("../../mocks/following.json");
            nextState.params.starredResponse = require("../../mocks/starred.json");
            callback();
        });

        /*request
         .get("https://api.github.com/users/" + nextState.params.id + "/repos")
         .end(function (error, success) {
         nextState.params.repositoriesResponse = success.body;
         request
         .get("https://api.github.com/users/" + nextState.params.id + "/followers")
         .end(function (error, success) {
         nextState.params.followersResponse = success.body;
         request
         .get("https://api.github.com/users/" + nextState.params.id + "/following")
         .end(function (error, success) {
         nextState.params.followingResponse = success.body;
         request
         .get("https://api.github.com/users/" + nextState.params.id + "/starred")
         .end(function (error, success) {
         nextState.params.starredResponse = success.body;
         callback();
         });
         });
         });
         });*/
    }

};

module.exports = configDetails;