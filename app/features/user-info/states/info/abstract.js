/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */


let configBrothers = {

    getComponents(location, callback) {
        require.ensure([], function (require) {
            callback(null, {
                details: require("../info.details/details"),
                repositories: require("../info.repositories/repositories"),
                followers: require("../info.followers/followers")
                /*following: require("../info.following/following"),
                starred: require("../info.starred/starred")*/
            });
        })
    }

};

module.exports = configBrothers;