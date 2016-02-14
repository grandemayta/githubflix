/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

"use strict";

import Reflux                               from "reflux";
import Actions                              from "./details-actions";
import { HttpWrapper }                      from "services";
import FeatureConfig                        from "features/user-info/config";


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

    onLoadInitialData(params) {
        var self = this;
        HttpWrapper('details', FeatureConfig(params.userId), function (response) {
            if (response.type === 'error') self.trigger({spinnerStatus: false});
            else self.trigger({spinnerStatus: false, detailsResponse: response.data});
        });
    }

});

export default Store;