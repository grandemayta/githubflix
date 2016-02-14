/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

"use strict";


let FeatureConfig = function () {

    return {
        "name": "user-list",
        "states": {
            "list": {
                "url": "users",
                "method": "GET"
            }
        }
    };

};

export default FeatureConfig;