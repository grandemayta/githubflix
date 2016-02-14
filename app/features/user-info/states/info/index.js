/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */


module.exports = {

    path: 'user/:userId',
    indexRoute: require("./components"),

    getComponent(location, callback) {
        require.ensure([], function (require) {
            callback(null, require("./info"));
        });
    }

};