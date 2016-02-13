/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

"use strict";


let UserListInfo = function () {

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

export default UserListInfo;