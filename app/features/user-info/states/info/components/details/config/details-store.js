/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

"use strict";

import Reflux                   from "reflux";
import Http                     from "superagent";
import Actions                  from "./details-actions";


let Store = Reflux.createStore({

    getInitialState() {
        return {
            spinnerStatus: true,
            detailsResponse: []
        }
    },

    init() {
        this.listenTo(Actions.LOAD_INITIAL_DATA, this.onLoadInitialData);
    },

    onLoadInitialData() {
        var self = this;

        Http
            .get("https://api.github.com/users/gabrielmayta")
            .end(function (error, success) {
                if (error) self.trigger({spinnerStatus: false});
                else self.trigger({spinnerStatus: false, detailsResponse: success.body});
            });
    }

});

export default Store;