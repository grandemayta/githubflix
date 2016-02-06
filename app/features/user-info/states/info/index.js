/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

import request          from "superagent";


let configInfo = {

    path: 'user/:id',
    /*indexRoute: require('../info.details'),*/

    getComponent(location, callback) {
        require.ensure([], function (require) {
            callback(null, require("./info"));
        });
    },

    getChildRoutes(location, callback){
        require.ensure([], function (require) {
            callback(null, [
                require("../info.details")
            ]);
        });
    },

    onEnter(nextState, replaceState, callback) {

        nextState.params.infoResponse = [];

        require.ensure([], function (require) {
            nextState.params.infoResponse = require("../../mocks/info.json");
            callback();
        });

        /*request
         .get("https://api.github.com/users/" + nextState.params.id)
         .end(function (error, success) {
         if (error) callback();
         else {
         nextState.params.infoResponse = success.body;
         callback();
         }
         });*/
    }

};

module.exports = configInfo;