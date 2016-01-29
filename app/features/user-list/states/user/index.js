/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */


let configUser = {
    path: 'user',
    getComponent(location, callback) {
        require.ensure([], function (require) {
            callback(null, require("./user"));
        })
    }
};

module.exports = configUser;