/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

let detailConfig = {
    path: 'detail',
    getComponent(location, cb) {
        require.ensure([], function (require) {
            cb(null, require("./detail"));
        })
    }
};

module.exports = detailConfig;