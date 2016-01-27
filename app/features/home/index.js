/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

let configHome = {
    path: 'home',
    getComponent(location, cb) {
        require.ensure([], function (require) {
            cb(null, require("./home"));
        })
    }
};

module.exports = configHome;