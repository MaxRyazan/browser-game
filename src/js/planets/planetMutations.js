import tradeStore from "../../store_modules/tradeStore.js";
import planetStore from "../../store_modules/planetStore.js";
import {Colony} from '../../buildings/infrastructure/Colony.ts'
import helpStore from "../../store_modules/helpStore.js";
import {Store} from "../../buildings/infrastructure/Store.ts";
import {BuildingCenter} from "../../buildings/infrastructure/BuildingCenter.ts";
import {ColonialSenate} from "../../buildings/infrastructure/ColonialSenate.ts";
import {AdministrativeCenter} from "../../buildings/infrastructure/AdministrativeCenter.ts";
import {Skyscraper} from "../../buildings/infrastructure/Skyscraper.ts";
import {MedicalCenter} from "../../buildings/infrastructure/MedicalCenter.ts";
import {Bank} from "../../buildings/infrastructure/Bank.ts";
import {SpacePort} from "../../buildings/infrastructure/SpacePort.ts";
import {SolarPlant} from "../../buildings/energy/SolarPlant.ts";
import {ChemicalPlant} from "../../buildings/energy/ChemicalPlant.ts";
import {NuclearPlant} from "../../buildings/energy/NuclearPlant.ts";
import {AltahSplitter} from "../../buildings/energy/AltahSplitter.ts";


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

    subtractResource(_, {resource, amount, from}){
        for(let i = 0; i < from.length; i++){
            if(from[i].id === resource.id){
                from[i].amount = from[i].amount - amount
            }
        }
    },


    manageBuilding(_, building){
        let isFuelEnough = false
        const materialsOnStore = tradeStore.state.currentPlanet.storage.materials
        const buildingToLoad =  building
        planetStore.commit('checkThatFuelLoadTimePassed', buildingToLoad)
        for(let i = 0; i < materialsOnStore.length; i++){
            if(materialsOnStore[i].id === buildingToLoad.fuelNeedToFunctionalityPerDay.fuelType.id){
                isFuelEnough = true
                if(materialsOnStore[i].amount >= buildingToLoad.fuelNeedToFunctionalityPerDay.required){
                    if(!buildingToLoad.isFuelLoaded){
                        planetStore.commit('subtractResource',
                            {
                            resource: buildingToLoad.fuelNeedToFunctionalityPerDay.fuelType,
                            amount: buildingToLoad.fuelNeedToFunctionalityPerDay.required,
                            from: materialsOnStore
                            })
                            planetStore.commit('loadFuelToStation', buildingToLoad.id)
                    } else {
                        planetStore.commit('sendError', 'Топливо уже загружено!')
                    }
                }
            }
        }
        if(isFuelEnough === false){
            planetStore.commit('sendError', 'На складе нехватает топлива!')
        }
    },

    loadFuelToStation(_, id){
        const buildings = tradeStore.state.currentPlanet.buildings
        for(let i = 0; i < buildings.length; i++){
            if(buildings[i].id === id){
                buildings[i].isFuelLoaded = true
                buildings[i].addEnergyToPlanet = buildings[i].checkFuel()
                buildings[i].fuelLoadTime = Date.now()
            }
        }
    },

    // проверяем сутки с момента загрузки
    checkThatFuelLoadTimePassed(_, building){
         if(Date.now() > building.fuelLoadTime + 86400000){
             building.isFuelLoaded = false
             building.checkFuel()
         }
    },


    checkThatColonyExists(_){
        if(tradeStore.state.currentPlanet.buildings.find(building => building.id === 1)) {
            planetStore.state.isColonyCreated = true
        } else {
            planetStore.state.isColonyCreated = false
        }
    },

    build(_, building){
        let buildingSpeed = 1
        for (let i = 0; i < tradeStore.state.currentPlanet.buildings.length; i++) {
            buildingSpeed = buildingSpeed + tradeStore.state.currentPlanet.buildings[i].buildOtherBuildingsSpeed
        }
        building.costInTime = building.costInTime - (building.costInTime * (buildingSpeed - 1))
        planetStore.commit('isMaterialsEnough', {materials: building.requiredMaterials, building: building})
    },

    sendError(_, message){
        planetStore.state.error.flag = true
        planetStore.state.error.value = message
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
                            const colony = new Colony()
                            planetStore.commit('build', colony)
                        } else {
                            planetStore.commit('sendError', 'Колония уже построена!')
                        }
                    } else {
                        planetStore.commit('sendError', 'Колония уже строится!')
                    }
                }
                break;
                case 'Склад' : {
                    const store = new Store()
                    planetStore.commit('build', store)
                }
                break;
                case 'Строительный центр' : {
                    const buildingCenter = new BuildingCenter()
                    planetStore.commit('build', buildingCenter)
                }
                break;
                case 'Колониальный сенат' : {
                    const colonialSenate = new ColonialSenate()
                    planetStore.commit('build', colonialSenate)
                }
                    break;
                case 'Административный центр' : {
                    const administrativeCenter = new AdministrativeCenter()
                    planetStore.commit('build', administrativeCenter)
                }
                    break;
                case 'Медицинский центр' : {
                    const medicalCenter = new MedicalCenter()
                    planetStore.commit('build', medicalCenter)
                }
                    break;
                case 'Небоскрёб' : {
                    const skyscraper = new Skyscraper()
                    planetStore.commit('build', skyscraper)
                }
                    break;
                case 'Банк' : {
                    const bank = new Bank()
                    planetStore.commit('build', bank)
                }
                    break;
                case 'Космопорт' : {
                    const spacePort = new SpacePort()
                    planetStore.commit('build', spacePort)
                }
                    break;
                case 'Солнечная станция' : {
                    const solarPlant = new SolarPlant()
                    planetStore.commit('build', solarPlant)
                }
                    break;
                case 'Химическая электростанция' : {
                    const chemicalPlant = new ChemicalPlant()
                    planetStore.commit('build', chemicalPlant)
                }
                    break;
                case 'Ядерная электростанция' : {
                    const nuclearPlant = new NuclearPlant()
                    planetStore.commit('build', nuclearPlant)
                }
                    break;
                case 'Расщепитель Альтах' : {
                    const altahSplitter = new AltahSplitter()
                    planetStore.commit('build', altahSplitter)
                }
                    break;
            }
        } else {
            planetStore.commit('sendError', 'На планете кончилось место для застройки!')
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
            planetStore.commit('sendError', 'Нехватает материалов!')
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