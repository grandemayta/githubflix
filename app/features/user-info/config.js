/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */


let FeatureConfig = function (userId) {

    return {
        "name": "user-info",
        "states": {
            "details": {
                "url": `users/${userId}`,
                "method": "GET"
            },
            followers: {
                "url": `users/${userId}/followers`,
                "method": "GET"
            },
            following: {
                "url": `users/${userId}/following`,
                "method": "GET"
            },
            repositories: {
                "url": `users/${userId}/repos`,
                "method": "GET"
            },
            starred: {
                "url": `users/${userId}/starred`,
                "method": "GET"
            }
        }
    };

};

export default FeatureConfig;