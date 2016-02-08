/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

"use strict";

import Reflux                   from "reflux";
import Http                     from "superagent";
import Actions                  from "./repository-actions";


let Store = Reflux.createStore({

    getInitialState() {
        return {
            spinnerStatus: true,
            repositoryResponse: []
        }
    },

    init() {
        this.listenTo(Actions.LOAD_INITIAL_DATA, this.onLoadInitialData);
    },

    onLoadInitialData() {
        var self = this;

        Http
            .get("https://api.github.com/repos/gabrielmayta/angular-mobiscroll")
            .end(function (error, success) {
                if (error) self.trigger({spinnerStatus: false});
                else self.trigger({spinnerStatus: false, repositoryResponse: success.body});
            });
    }

});

export default Store;