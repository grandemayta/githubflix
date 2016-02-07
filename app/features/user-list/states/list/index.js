/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */


module.exports = {

    getComponent(location, callback) {
        require.ensure([], function (require) {
            callback(null, require("./list"));
        })
    }

};