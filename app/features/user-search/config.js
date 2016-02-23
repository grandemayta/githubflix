/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

"use strict";


let FeatureConfig = function (name) {

    return {
        "name": "user-search",
        "states": {
            "search": {
                "url": `search/users?q=${name}`,
                "method": "GET"
            }
        }
    };

};

export default FeatureConfig;