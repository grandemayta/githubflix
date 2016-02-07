/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

import request          from "superagent";
import async            from "async";


let configDetails = {

    path: "details",

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

    onEnter(nextState, replaceState) {

        nextState.params.repositoriesResponse = [];
        nextState.params.followersResponse = [];
        nextState.params.followingResponse = [];
        nextState.params.starredResponse = [];

        console.log(nextState);

        /*async.parallel({
            repositoriesResponse: function (callback) {
                request
                    .get("https://api.github.com/users/" + nextState.params.id + "/repos")
                    .end(function (error, success) {
                        if (error) callback(null, []);
                        else callback(null, success.body);
                    });
            },
            followersResponse: function (callback) {
                request
                    .get("https://api.github.com/users/" + nextState.params.id + "/followers")
                    .end(function (error, success) {
                        if (error) callback(null, []);
                        else callback(null, success.body);
                    });
            },
            followingResponse: function (callback) {
                request
                    .get("https://api.github.com/users/" + nextState.params.id + "/following")
                    .end(function (error, success) {
                        if (error) callback(null, []);
                        else callback(null, success.body);
                    });
            },
            starredResponse: function (callback) {
                request
                    .get("https://api.github.com/users/" + nextState.params.id + "/starred")
                    .end(function (error, success) {
                        if (error) callback(null, []);
                        else callback(null, success.body);
                    });
            }
        }, function (error, response) {
            nextState.params.repositoriesResponse = response.repositoriesResponse;
            nextState.params.followersResponse = response.followersResponse;
            nextState.params.followingResponse = response.followingResponse;
            nextState.params.starredResponse = response.starredResponse;
            callback();
        });*/

        /*require.ensure([], function (require) {

         async.parallel({
         repositoriesResponse: function (callback) {
         callback(null, require("../../mocks/repositories.json"));
         },
         followersResponse: function (callback) {
         callback(null, require("../../mocks/followers.json"));
         },
         followingResponse: function (callback) {
         callback(null, require("../../mocks/following.json"));
         },
         starredResponse: function (callback) {
         callback(null, require("../../mocks/starred.json"));
         }
         }, function (error, response) {
         nextState.params.repositoriesResponse = response.repositoriesResponse;
         nextState.params.followersResponse = response.followersResponse;
         nextState.params.followingResponse = response.followingResponse;
         nextState.params.starredResponse = response.starredResponse;
         callback();
         });

         });*/

    }

};

module.exports = configDetails;