/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

"use strict";


let FeatureConfig = function (userId, repoId) {

    return {
        "name": "user-repository",
        "states": {
            "repository": {
                "url": `repos/${userId}/${repoId}`,
                "method": "GET"
            }
        }
    };

};

export default FeatureConfig;