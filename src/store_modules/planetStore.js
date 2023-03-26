import planetMutations from "../js/planets/planetMutations.js";
import {createStore} from "vuex";
import planetActions from "../js/planets/planetActions.js";

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
        visibilityBuildingsInProgress: true,

        isColonyCreated: false,
        buildingsInProgressNow: [],
        currentPlanetBuildingSpeed: 1,
        currentPlanetPeoples: 0
    },
    mutations: planetMutations,
    actions: planetActions
})