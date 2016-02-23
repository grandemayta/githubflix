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
import FeatureConfig                        from "features/user-search/config";


let Store = Reflux.createStore({

    getInitialState() {
        return {
            spinnerStatus: true,
            searchResponse: []
        }
    },

    init() {
        this.listenTo(Actions.LOAD_INITIAL_DATA, this.onLoadInitialData);
        this.listenTo(Actions.SEARCH_USERS, this.onSearchUsers);
    },

    onLoadInitialData() {
        this.trigger({spinnerStatus: false});
    },

    onSearchUsers(params) {
        var self = this;
        self.trigger({spinnerStatus: true});
        HttpWrapper('search', FeatureConfig(params.name), function (response) {
            if (response.type === 'error') self.trigger({spinnerStatus: false});
            else {
                console.log(response.data);
                self.trigger({spinnerStatus: false, searchResponse: response.data});
            }
        });
    }

});

export default Store;