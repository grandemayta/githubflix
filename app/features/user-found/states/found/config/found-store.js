/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

"use strict";

import Reflux                               from "reflux";
import Actions                              from "./found-actions";
import { HttpWrapper }                      from "services";
import FeatureConfig                        from "features/user-found/config";


let Store = Reflux.createStore({

    getInitialState() {
        return {
            spinnerStatus: true,
            foundResponse: []
        }
    },

    init() {
        this.listenTo(Actions.LOAD_INITIAL_DATA, this.onLoadInitialData);
    },

    onLoadInitialData(name) {
        var self = this;
        self.trigger({spinnerStatus: true});
        HttpWrapper('found', FeatureConfig(name), function (response) {
            if (response.type === 'error') self.trigger({spinnerStatus: false});
            else self.trigger({spinnerStatus: false, foundResponse: response.data.items});
        });
    }

});

export default Store;