import planetMutations from "../js/planets/planetMutations.js";
import {createStore} from "vuex";
import planetActions from "../js/planets/planetActions.js";



export default createStore({
    state: {
        error: {
            flag: false,
            value: ''
        },
        visibilityScienceMenu: false,
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
        buildingsSettingsModal: false,

        isColonyCreated: false,
        buildingsInProgressNow: [],
    },
    mutations: planetMutations,
    actions: planetActions,

})
