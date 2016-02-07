/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

"use strict";

import Reflux                   from "reflux";
import Http                     from "superagent";
import Actions                  from "./repositories-actions";


let Store = Reflux.createStore({

    getInitialState(){
        return {
            spinnerStatus: true,
            repositoriesResponse: []
        }
    },

    init() {
        this.listenTo(Actions.LOAD_INITIAL_DATA, this.onLoadInitialData);
    },

    onLoadInitialData() {
        var self = this;

        Http
            .get("https://api.github.com/users/gabrielmayta/repos")
            .end(function (error, success) {
                if (error) self.trigger({spinnerStatus: false});
                else self.trigger({spinnerStatus: false, repositoriesResponse: success.body});
            });
    }

});


export default Store;