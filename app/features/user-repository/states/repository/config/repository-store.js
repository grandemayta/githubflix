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
import UserRepositoryInfo                   from "../../../config";


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

        HttpWrapper.resolve(
            'repository', UserRepositoryInfo('gabrielmayta', 'angular-mobiscroll'),
            function (response) {
                if (response.type === 'error') self.trigger({spinnerStatus: false});
                else self.trigger({spinnerStatus: false, repositoryResponse: response.data});
            });

    }

});

export default Store;