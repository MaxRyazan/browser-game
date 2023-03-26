import tradeStore from "../../store_modules/tradeStore.js";
import planetStore from "../../store_modules/planetStore.js";
import {Colony} from '../../buildings/Colony'
import helpStore from "../../store_modules/helpStore.js";


export default {

    toggleVision(planetState, param){
        switch (param){
            case  'helpMenu' : helpStore.state.helpMenu = !helpStore.state.helpMenu;
            break;
            case 'planet' : planetState.visibilityPlanetMenu = !planetState.visibilityPlanetMenu;
                break;
            case 'storage' : {
                planetState.visibilityStorage = !planetState.visibilityStorage
                planetStore.state.visibilityBuildingsInProgress = !planetStore.state.visibilityBuildingsInProgress
            }
                break;
            case 'planetarySystem' : planetState.visibilityPlanetarySystem = !planetState.visibilityPlanetarySystem
                break;
            case 'infrastructure' : {
                planetStore.commit('hideAllMenu')
                planetState.visibilityInfrastructure = !planetState.visibilityInfrastructure
            }
                break;
            case 'energy' : {
                planetStore.commit('hideAllMenu')
                planetState.visibilityEnergy = !planetState.visibilityEnergy
            }
                break;
            case 'resources' : {
                planetStore.commit('hideAllMenu')
                planetState.visibilityResources = !planetState.visibilityResources
            }
                break;
            case 'materials' : {
                planetStore.commit('hideAllMenu')
                planetState.visibilityMaterials = !planetState.visibilityMaterials
            }
                break;
            case 'science' : {
                planetStore.commit('hideAllMenu')
                planetState.visibilityScience = !planetState.visibilityScience
            }
                break;
            case 'components' : {
                planetStore.commit('hideAllMenu')
                planetState.visibilityComponents = !planetState.visibilityComponents
            }
                break;
        }
    },

    hideAllMenu(planetState){
        planetState.visibilityInfrastructure = false
        planetState.visibilityEnergy = false
        planetState.visibilityResources = false
        planetState.visibilityMaterials = false
        planetState.visibilityScience = false
        planetState.visibilityComponents = false
    },

    removeModule(_, module){
        let index = -1
        const storage = tradeStore.state.currentPlanet.storage.modules
        for(let i = 0; i < storage.length; i++) {
            if(storage[i].id === module.id && storage[i].belongsToRace.id === module.belongsToRace.id){
                index = i
            }
        }
        storage.splice(index, 1)
    },

    removeMaterial(_, material){
        let index = -1
        const storage = tradeStore.state.currentPlanet.storage.materials
        for(let i = 0; i < storage.length; i++) {
            if(storage[i].id === material.id){
                index = i
            }
        }
        storage.splice(index, 1)
    },

    checkThatColonyExists(_){
        if(tradeStore.state.currentPlanet.buildings.find(building => building.id === 1)) {
            planetStore.state.isColonyCreated = true
        } else {
            planetStore.state.isColonyCreated = false
        }
    },

    calculateAllPeoples(){
        let peoples = 0;
        for(let i = 0; i < tradeStore.state.currentPlanet.buildings.length; i++){
            peoples += tradeStore.state.currentPlanet.buildings[i].addPeopleToPlanet
        }
        tradeStore.state.currentPlanet.peoples = peoples
    },


    createBuilding(planetState, payload) {
        const dateNow = Date.now()
        switch (payload) {
            case 'Колония' : {
                const exist = planetStore.state.buildingsInProgressNow.filter(b => b.building.id === 1)
                if (exist.length === 0) {
                    if (!planetStore.state.isColonyCreated) {
                        let buildingSpeed = 1
                        for (let i = 0; i < tradeStore.state.currentPlanet.buildings.length; i++) {
                            buildingSpeed = buildingSpeed + tradeStore.state.currentPlanet.buildings[i].buildOtherBuildingsSpeed
                        }
                        const colony = new Colony()
                        colony.costInTime = colony.costInTime - (colony.costInTime * (buildingSpeed - 1))


                        // TODO материалы
                        for(let i = 0; i < colony.requiredMaterials.length; i ++){
                            console.log(colony.requiredMaterials[i].name + ' ' + colony.requiredMaterials[i].amount)
                        }



                        planetStore.state.buildingsInProgressNow.push({
                            building: colony,
                            timeWhereDone: ((colony.costInTime + dateNow))
                        })
                    }

                }
            }
            break;

        }
    }


}