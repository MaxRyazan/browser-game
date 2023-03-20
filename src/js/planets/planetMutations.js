
export default {

    togglePlanetMenuVision(planetState){
        planetState.visibilityPlanetMenu = !planetState.visibilityPlanetMenu
    },

    togglePlanetarySystemVision(planetState){
        planetState.visibilityPlanetarySystem = ! planetState.visibilityPlanetarySystem
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