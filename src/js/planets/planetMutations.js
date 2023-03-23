import tradeStore from "../../store_modules/tradeStore.js";
import planetStore from "../../store_modules/planetStore.js";
import {Colony} from '../../buildings/Colony'

export default {

    toggleVision(planetState, param){
        switch (param){
            case 'planet' : planetState.visibilityPlanetMenu = !planetState.visibilityPlanetMenu;
                break;
            case 'storage' : planetState.visibilityStorage = !planetState.visibilityStorage;
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

    checkThatColonyExists(_){
        if(tradeStore.state.currentPlanet.buildings.find(building => building.id === 1)) {
            planetStore.state.isColonyCreated = true
        } else {
            planetStore.state.isColonyCreated = false
        }
    },


    createBuilding(planetState, payload){
        const dateNow = Date.now()
        switch (payload){
            case 'Колония' : {
                let buildingSpeed = 1
                for(let i = 0; i < tradeStore.state.currentPlanet.buildings.length; i++){
                    buildingSpeed = buildingSpeed+ tradeStore.state.currentPlanet.buildings[i].buildOtherBuildingsSpeed
                    console.log(tradeStore.state.currentPlanet.buildings)
                }
                const colony = new Colony(1, 6000)
                colony.costInTime = colony.costInTime - (colony.costInTime  * (buildingSpeed - 1 ))
                const existsBuilding = tradeStore.state.currentPlanet.buildings.filter(b => b.id === colony.id)[0]
                if(existsBuilding){
                    existsBuilding.amount++
                } else {
                   planetStore.state.buildingsInProgressNow.push({ building: colony, timeWhereDone: ((colony.costInTime + dateNow)) })
                }
            }
            break;

        }
    }


















}