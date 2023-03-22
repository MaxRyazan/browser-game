import planetMutations from "../js/planets/planetMutations.js";
import {createStore} from "vuex";

export default createStore({
    state: {
        visibilityPlanetMenu: false,
        visibilityPlanetarySystem: false,
        visibilityInfrastructure: true,
        visibilityEnergy: false,
        visibilityResources: false,
        visibilityMaterials: false,
        visibilityScience: false,
        visibilityComponents: false,
        visibilityStorage: false,

        isColonyCreated: false
    },
    mutations: planetMutations
})