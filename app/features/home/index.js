/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

var request = require("superagent");


let configHome = {
    path: 'home',
    getComponent(location, cb) {
        require.ensure([], function (require) {
            cb(null, require("./home"));
        })
    },
    onEnter(nextState, replaceState, resolve) {

        request
            .get("https://api.github.com/users")
            .end(function (error, success) {
                if (error) return false;
                else {
                    nextState.params.homeResponse = success.body;
                    resolve();
                }
            });

    }
};

module.exports = configHome;