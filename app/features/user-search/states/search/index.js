/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */


module.exports = {

    path: "search",

    getComponent(location, callback) {
        require.ensure([], function (require) {
            callback(null, require("./search"));
        })
    }

};