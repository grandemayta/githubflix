/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

"use strict";

import Reflux                           from "reflux";
import Actions                          from "./followers.actions";
import { HttpWrapper }                  from "services";
import FeatureConfig                    from "features/user-info/config";


let Store = Reflux.createStore({

    getInitialState() {
        return {
            spinnerStatus: true,
            followersResponse: []
        }
    },

    init() {
        this.listenTo(Actions.LOAD_INITIAL_DATA, this.onLoadInitialData);
    },

    onLoadInitialData() {
        var self = this;
        HttpWrapper.resolve('followers', FeatureConfig("gabrielmayta"), function (response) {
            if (response.type === 'error') self.trigger({spinnerStatus: false});
            else self.trigger({spinnerStatus: false, followersResponse: response.data});
        });
    }

});

export default Store;