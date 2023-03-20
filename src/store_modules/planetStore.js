import planetMutations from "../js/planets/planetMutations.js";
import {createStore} from "vuex";

export default createStore({
    state: {
        visibilityPlanetMenu: false
    },
    mutations: planetMutations
})