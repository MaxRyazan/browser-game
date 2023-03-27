import tradeStore from "../../store_modules/tradeStore.js";
import planetStore from "../../store_modules/planetStore.js";
import {Colony} from '../../buildings/Colony'
import helpStore from "../../store_modules/helpStore.js";
import {Store} from "../../buildings/Store.ts";
import {BuildingCenter} from "../../buildings/BuildingCenter.ts";
import {ColonialSenate} from "../../buildings/ColonialSenate.ts";
import {AdministrativeCenter} from "../../buildings/AdministrativeCenter.ts";


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



    createBuilding(planetState, payload) {
        let buildingsCount = 0
        for(let i = 0; i < tradeStore.state.currentPlanet.buildings.length; i ++){
            buildingsCount += tradeStore.state.currentPlanet.buildings[i].amount
        }
        if(tradeStore.state.currentPlanet.building_points > planetStore.state.buildingsInProgressNow.length + buildingsCount) {
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
                            planetStore.commit('isMaterialsEnough', {
                                materials: colony.requiredMaterials,
                                building: colony
                            })
                        } else {
                            planetStore.state.error.flag = true
                            planetStore.state.error.value = 'Колония уже построена!'
                        }
                    } else {
                        planetStore.state.error.flag = true
                        planetStore.state.error.value = 'Колония уже строится!'
                    }
                }
                break;
                case 'Склад' : {
                    let buildingSpeed = 1
                    for (let i = 0; i < tradeStore.state.currentPlanet.buildings.length; i++) {
                        buildingSpeed = buildingSpeed + tradeStore.state.currentPlanet.buildings[i].buildOtherBuildingsSpeed
                    }
                    const store = new Store()
                    store.costInTime = store.costInTime - (store.costInTime * (buildingSpeed - 1))
                    planetStore.commit('isMaterialsEnough', {materials: store.requiredMaterials, building: store})
                }
                break;
                case 'Строительный центр' : {
                    let buildingSpeed = 1
                    for (let i = 0; i < tradeStore.state.currentPlanet.buildings.length; i++) {
                        buildingSpeed = buildingSpeed + tradeStore.state.currentPlanet.buildings[i].buildOtherBuildingsSpeed
                    }
                    const buildingCenter = new BuildingCenter()
                    buildingCenter.costInTime = buildingCenter.costInTime - (buildingCenter.costInTime * (buildingSpeed - 1))
                    planetStore.commit('isMaterialsEnough', {materials: buildingCenter.requiredMaterials, building: buildingCenter})
                }
                break;
                case 'Колониальный сенат' : {
                    let buildingSpeed = 1
                    for (let i = 0; i < tradeStore.state.currentPlanet.buildings.length; i++) {
                        buildingSpeed = buildingSpeed + tradeStore.state.currentPlanet.buildings[i].buildOtherBuildingsSpeed
                    }
                    const colonialSenate = new ColonialSenate()
                    colonialSenate.costInTime = colonialSenate.costInTime - (colonialSenate.costInTime * (buildingSpeed - 1))
                    planetStore.commit('isMaterialsEnough', {materials: colonialSenate.requiredMaterials, building: colonialSenate})
                }
                    break;
                case 'Административный центр' : {
                    let buildingSpeed = 1
                    for (let i = 0; i < tradeStore.state.currentPlanet.buildings.length; i++) {
                        buildingSpeed = buildingSpeed + tradeStore.state.currentPlanet.buildings[i].buildOtherBuildingsSpeed
                    }
                    const administrativeCenter = new AdministrativeCenter()
                    administrativeCenter.costInTime = administrativeCenter.costInTime - (administrativeCenter.costInTime * (buildingSpeed - 1))
                    planetStore.commit('isMaterialsEnough', {materials: administrativeCenter.requiredMaterials, building: administrativeCenter})
                }
                    break;
                case 'Медицинский центр' : {
                    let buildingSpeed = 1
                    for (let i = 0; i < tradeStore.state.currentPlanet.buildings.length; i++) {
                        buildingSpeed = buildingSpeed + tradeStore.state.currentPlanet.buildings[i].buildOtherBuildingsSpeed
                    }
                    const medicalCenter = new MedicalCenter()
                    medicalCenter.costInTime = medicalCenter.costInTime - (medicalCenter.costInTime * (buildingSpeed - 1))
                    planetStore.commit('isMaterialsEnough', {materials: medicalCenter.requiredMaterials, building: medicalCenter})
                }
                    break;
                case 'Небоскрёб' : {
                    let buildingSpeed = 1
                    for (let i = 0; i < tradeStore.state.currentPlanet.buildings.length; i++) {
                        buildingSpeed = buildingSpeed + tradeStore.state.currentPlanet.buildings[i].buildOtherBuildingsSpeed
                    }
                    const skyscraper = new Skyscraper()
                    skyscraper.costInTime = skyscraper.costInTime - (skyscraper.costInTime * (buildingSpeed - 1))
                    planetStore.commit('isMaterialsEnough', {materials: skyscraper.requiredMaterials, building: skyscraper})
                }
                    break;
                case 'Банк' : {
                    let buildingSpeed = 1
                    for (let i = 0; i < tradeStore.state.currentPlanet.buildings.length; i++) {
                        buildingSpeed = buildingSpeed + tradeStore.state.currentPlanet.buildings[i].buildOtherBuildingsSpeed
                    }
                    const bank = new Bank()
                    bank.costInTime = bank.costInTime - (bank.costInTime * (buildingSpeed - 1))
                    planetStore.commit('isMaterialsEnough', {materials: bank.requiredMaterials, building: bank})
                }
                    break;
                case 'Космопорт' : {
                    let buildingSpeed = 1
                    for (let i = 0; i < tradeStore.state.currentPlanet.buildings.length; i++) {
                        buildingSpeed = buildingSpeed + tradeStore.state.currentPlanet.buildings[i].buildOtherBuildingsSpeed
                    }
                    const spacePort = new SpacePort()
                    spacePort.costInTime = spacePort.costInTime - (spacePort.costInTime * (buildingSpeed - 1))
                    planetStore.commit('isMaterialsEnough', {materials: spacePort.requiredMaterials, building: spacePort})
                }
                    break;
            }
        } else {
            planetStore.state.error.flag = true
            planetStore.state.error.value = 'На планете кончилось место для застройки!'
        }

    },

    isMaterialsEnough(_, payload){
        let count = 0
        for(let i = 0; i < payload.materials.length; i++){
            const countOfMaterial = payload.materials[i].amount
            const requiredMaterial = tradeStore.state.currentPlanet.storage.materials.filter(m => m.id === payload.materials[i].id && m.amount >= payload.materials[i].amount)[0]
            if(requiredMaterial && requiredMaterial.amount >= countOfMaterial) {
                count++
            }
        }

        if(count === payload.materials.length){
            for(let i = 0; i < payload.materials.length; i++){
                planetStore.commit('subtractMaterialFromCurrentPlanetStore', payload.materials[i])
            }
            planetStore.state.buildingsInProgressNow.push({
                building: payload.building,
                timeWhereDone: ((payload.building.costInTime +  Date.now()))
            })
        } else {
           planetStore.state.error.flag = true
           planetStore.state.error.value = 'Нехватает материалов!'
        }
    },

    subtractMaterialFromCurrentPlanetStore(_, material){
        const storeMaterials = tradeStore.state.currentPlanet.storage.materials
        for(let i = 0; i < storeMaterials.length; i++){
            if(storeMaterials[i].id === material.id){
                storeMaterials[i].amount = storeMaterials[i].amount - material.amount
            }
        }
    }
}