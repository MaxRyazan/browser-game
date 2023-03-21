import planetStore from "../../store_modules/planetStore.js";
import tradeStore from "../../store_modules/tradeStore.js";

export default {

    togglePlanetMenuVision(planetState){
        planetState.visibilityPlanetMenu = !planetState.visibilityPlanetMenu
    },


    toggleStorageVision(){
        planetStore.state.visibilityStorage = !planetStore.state.visibilityStorage
    },

    togglePlanetarySystemVision(planetState){
        planetState.visibilityPlanetarySystem = ! planetState.visibilityPlanetarySystem
    },


    removeModule(module){
        let index = -1
        const storage = tradeStore.state.currentPlanet.storage.modules
        for(let i = 0; i < storage.length; i++) {
            if(storage[i].id === module.id && storage[i].belongsToRace.id === module.belongsToRace.id){
                index = i
            }
        }
        storage.splice(index, 1)
    },

    toggleInfrastructureBuildingsVision(planetState){
        planetState.visibilityInfrastructure = !planetState.visibilityInfrastructure
            // planetState.visibilityInfrastructure = false
            planetState.visibilityEnergy = false
            planetState.visibilityResources = false
            planetState.visibilityMaterials = false
            planetState.visibilityScience = false
            planetState.visibilityComponents = false
    },

    toggleEnergyBuildingsVision(planetState){
        planetState.visibilityEnergy = !planetState.visibilityEnergy
        planetState.visibilityInfrastructure = false
        // planetState.visibilityEnergy = false
        planetState.visibilityResources = false
        planetState.visibilityMaterials = false
        planetState.visibilityScience = false
        planetState.visibilityComponents = false
    },

    toggleResourcesBuildingsVision(planetState){
        planetState.visibilityResources = !planetState.visibilityResources
        planetState.visibilityInfrastructure = false
        planetState.visibilityEnergy = false
        // planetState.visibilityResources = false
        planetState.visibilityMaterials = false
        planetState.visibilityScience = false
        planetState.visibilityComponents = false
    },

    toggleMaterialsBuildingsVision(planetState){
        planetState.visibilityMaterials = !planetState.visibilityMaterials
        planetState.visibilityInfrastructure = false
        planetState.visibilityEnergy = false
        planetState.visibilityResources = false
        // planetState.visibilityMaterials = false
        planetState.visibilityScience = false
        planetState.visibilityComponents = false
    },

    toggleScienceBuildingsVision(planetState){
        planetState.visibilityScience = !planetState.visibilityScience
        planetState.visibilityInfrastructure = false
        planetState.visibilityEnergy = false
        planetState.visibilityResources = false
        planetState.visibilityMaterials = false
        // planetState.visibilityScience = false
        planetState.visibilityComponents = false
    },

    toggleComponentsBuildingsVision(planetState){
        planetState.visibilityComponents = !planetState.visibilityComponents
        planetState.visibilityInfrastructure = false
        planetState.visibilityEnergy = false
        planetState.visibilityResources = false
        planetState.visibilityMaterials = false
        planetState.visibilityScience = false
        // planetState.visibilityComponents = false
    },

}