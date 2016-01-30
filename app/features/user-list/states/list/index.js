/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

var request = require("superagent");


let configUsers = {

    getComponent(location, callback) {
        require.ensure([], function (require) {
            callback(null, require("./list"));
        })
    },

    onEnter(nextState, replaceState, callback) {

        nextState.params.listResponse = [];

        request
            .get("https://api.github.com/users")
            .end(function (error, success) {
                if (error) callback();
                else {
                    nextState.params.listResponse = success.body;
                    callback();
                }
            });
    }

};

module.exports = configUsers;