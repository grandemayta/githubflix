/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */


module.exports = {

    path: "search/:name",

    getComponent(location, callback) {
        require.ensure([], function (require) {
            callback(null, require("./found"));
        })
    }

};