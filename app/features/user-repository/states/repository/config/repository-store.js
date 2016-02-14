/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

"use strict";

import Reflux                               from "reflux";
import Actions                              from "./repository-actions";
import { HttpWrapper }                      from "services";
import FeatureConfig                        from "features/user-repository/config";


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

    onLoadInitialData(params) {
        var self = this;
        HttpWrapper('repository', FeatureConfig(params.userId, params.productId), function (response) {
            if (response.type === 'error') self.trigger({spinnerStatus: false});
            else self.trigger({spinnerStatus: false, repositoryResponse: response.data});
        });
    }

});

export default Store;