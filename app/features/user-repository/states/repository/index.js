/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */


module.exports = {

    path: "user/:id/repository",

    getComponent(location, callback) {
        require.ensure([], function (require) {
            callback(null, require("./repository"));
        })
    }

};