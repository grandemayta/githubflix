/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */


let configComponents = {

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

module.exports = configComponents;