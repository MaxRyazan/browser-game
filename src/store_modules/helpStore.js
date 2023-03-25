import {createStore} from "vuex";
import helpMutations from "../js/help/helpMutations.js";

export default createStore({
    state: {
        helpMenu: false,

        resourcesInfo: false
    },
    mutations: helpMutations
})