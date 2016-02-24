/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

"use strict";

import Reflux                               from "reflux";
import Actions                              from "./search-actions";
import { HttpWrapper }                      from "services";
import FeatureConfig                        from "features/user-search/config";


let Store = Reflux.createStore({

    getInitialState() {
        return {
            name: ''
        }
    },

    init() {
        this.listenTo(Actions.NAME_TO_SEARCH, this.onNameToSearch);
    },

    onNameToSearch(name) {
        this.trigger({name: name});
    }

});

export default Store;