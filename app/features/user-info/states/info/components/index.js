/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */


module.exports = {

    getComponents(location, callback) {
        require.ensure([], function (require) {
            callback(null, {
                details: require("./details/details"),
                repositories: require("./repositories/repositories"),
                followers: require("./followers/followers"),
                following: require("./following/following"),
                starred: require("./starred/starred")
            });
        })
    }

};