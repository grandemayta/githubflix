/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

"use strict";

import Reflux                               from "reflux";
import Actions                              from "./list-actions";
import { HttpWrapper }                      from "services";
import UserListInfo                         from "../../../config";


let Store = Reflux.createStore({

    getInitialState() {
        return {
            spinnerStatus: true,
            listResponse: []
        }
    },

    init() {
        this.listenTo(Actions.LOAD_INITIAL_DATA, this.onLoadInitialData);
    },

    onLoadInitialData() {
        var self = this;

        HttpWrapper.resolve(
            'list', UserListInfo(),
            function (response) {
                if (response.type === 'error') self.trigger({spinnerStatus: false});
                else self.trigger({spinnerStatus: false, listResponse: response.data});
            });

    }

});

export default Store;