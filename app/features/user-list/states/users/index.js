/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

var request = require("superagent");


let configUsers = {
    path: 'users',
    
    getComponent(location, callback) {
        require.ensure([], function (require) {
            callback(null, require("./users"));
        })
    },

    onEnter(nextState, replaceState, callback) {
        request
            .get("https://api.github.com/users")
            .end(function (error, success) {
                if (error) return false;
                else {
                    nextState.params.usersResponse = success.body;
                    callback();
                }
            });
    },

    getChildRoutes(location, callback) {
        require.ensure([], function (require) {
            callback(null, [require('../user/index')])
        })
    }
};

module.exports = configUsers;