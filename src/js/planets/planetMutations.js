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
import {AccumulationStation} from "../../buildings/resources/AccumulationStation.ts";
import {WaveStation} from "../../buildings/resources/WaveStation.ts";
import {OreCleaner} from "../../buildings/resources/OreCleaner.ts";
import {MineralSynthesizer} from "../../buildings/resources/MineralSynthesizer.ts";
import {CrudeOre} from "../../Resources/CrudeOre.ts";
import helpers from "./helpers.js";
import {MetalOre} from "../../Resources/ore/MetalOre.ts";
import {MineralOre} from "../../Resources/ore/MineralOre.ts";
import {OrganicOre} from "../../Resources/ore/OrganicOre.ts";
import variables from "../../variables.js";
import {CrudeMineralOre} from "../../Resources/CrudeMineralOre.ts";
import {Altah} from "../../Resources/mineral/Altah.ts";
import {Delitium} from "../../Resources/mineral/Delitium.ts";
import {Quantium} from "../../Resources/mineral/Quantium.ts";
import {Tellurium} from "../../Resources/mineral/Tellurium.ts";


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
                planetStore.commit('checkAccumulationStationsOfCurrentPlanet')
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
        planetStore.commit('calculateWeightOfAllOnStorage')
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
        planetStore.commit('calculateWeightOfAllOnStorage')
    },

    removeResource(_, resource){
        let index = -1
        const storage = tradeStore.state.currentPlanet.storage.resources
        for(let i = 0; i < storage.length; i++) {
            if(storage[i].id === resource.id){
                index = i
            }
        }
        storage.splice(index, 1)
        planetStore.commit('calculateWeightOfAllOnStorage')
    },

    subtractResource(_, {resource, amount, from}){
        for(let i = 0; i < from.length; i++){
            if(from[i].id === resource.id){
                from[i].amount = from[i].amount - amount
            }
        }
        planetStore.commit('calculateWeightOfAllOnStorage')
    },

    applyResource(_, {resource, amount, to}){
        for(let i = 0; i < to.length; i++){
            if(to[i].id === resource.id){
                to[i].amount = to[i].amount + amount
            }
        }
        planetStore.commit('calculateWeightOfAllOnStorage')
    },

    calculateWeightOfAllOnStorage(_){
        const modules = helpers.calculateWeightOfThisArray(tradeStore.state.currentPlanet.storage.modules)
        const resources = helpers.calculateWeightOfThisArray(tradeStore.state.currentPlanet.storage.resources)
        const materials = helpers.calculateWeightOfThisArray(tradeStore.state.currentPlanet.storage.materials)
        tradeStore.state.currentPlanet.allStorageUnitsMass = modules + resources + materials
    },

    calculateMaxCapacityOfStorage(){
        const buildings = tradeStore.state.currentPlanet.buildings
        let capacity = 2000
        for(let i = 0; i < buildings.length; i++){
            capacity += buildings[i].addStoreToPlanet * buildings[i].amount
        }
        tradeStore.state.currentPlanet.storage.maxCapacity = capacity
    },


    checkAccumulationStationsOfCurrentPlanet(){
        const accumulationStations = tradeStore.state.currentPlanet.buildings.filter(b => b.id ===  variables.accumulationStationsId)[0]
        const isResourceExist =  tradeStore.state.currentPlanet.storage.resources.filter(r => r.id === variables.crudeOreId)[0]
        if(accumulationStations && helpers.isStorageNotFull()){
        const accumulationStationsCount = accumulationStations.amount
            const sub = (Date.now() - accumulationStations.timeOfLastProduce) / 1000    //  количество прошедших секунд  TODO сделать  количество прошедших минут
            if(sub > variables.timeOfResourceProduce){ // раз в 2 секунды TODO сделать раз в минуту
                const count = Math.floor(sub / variables.timeOfResourceProduce)  // подсчет сколько раз прошло по 2 секунды (чтобы посчитать amount) TODO  / 1
                const crudeOre = new CrudeOre(5 * count * accumulationStationsCount)
                if(isResourceExist){
                    planetStore.commit('applyResource',{resource: crudeOre, amount: crudeOre.amount, to: tradeStore.state.currentPlanet.storage.resources})
                } else {
                    tradeStore.state.currentPlanet.storage.resources.push(crudeOre)
                }
                accumulationStations.timeOfLastProduce = Date.now()
            }
        }
    },

    checkWaveStationsOfCurrentPlanet(){
        const waveStations = tradeStore.state.currentPlanet.buildings.filter(b => b.id === variables.waveStationsId)[0]
        const isResourceExist =  tradeStore.state.currentPlanet.storage.resources.filter(r => r.id === variables.crudeMineralOreId)[0]
        if(waveStations && helpers.isStorageNotFull()){
            const waveStationsCount = waveStations.amount
            const sub = (Date.now() - waveStations.timeOfLastProduce) / 1000    //  количество прошедших секунд  TODO сделать  количество прошедших минут
            if(sub > variables.timeOfResourceProduce){ // раз в 2 секунды TODO сделать раз в минуту
                const count = Math.floor(sub / variables.timeOfResourceProduce)  // подсчет сколько раз прошло по 2 секунды (чтобы посчитать amount) TODO  / 1
                const crudeMineralOre = new CrudeMineralOre(5 * count * waveStationsCount)
                if(isResourceExist){
                    planetStore.commit('applyResource',{resource: crudeMineralOre, amount: crudeMineralOre.amount, to: tradeStore.state.currentPlanet.storage.resources})
                } else {
                    tradeStore.state.currentPlanet.storage.resources.push(crudeMineralOre)
                }
                waveStations.timeOfLastProduce = Date.now()
            }
        }
    },

    recycleCrudeOreToOre(){
        // TODO подумать как реализовать офлайн переработку
      const oreCleaners = tradeStore.state.currentPlanet.buildings.filter(b => b.id === variables.oreCleanersId)[0]
        if(!oreCleaners){
           return false
        }
        else {
            const sub = (Date.now() - oreCleaners.timeOfLastProduce) / 1000    //  количество прошедших секунд  TODO сделать  количество прошедших минут

            if(sub > variables.timeOfResourceProduce && helpers.checkCrudeOreAndSubtract(variables.oreCleanersId, variables.crudeOreId)){ // раз в 2 секунды TODO сделать раз в минуту
                const count = Math.floor(sub / variables.timeOfResourceProduce)  // подсчет сколько раз прошло по 2 секунды (чтобы посчитать amount) TODO  / 1
                const metalOre = new MetalOre((5/3 * oreCleaners.amount).toFixed(2) * count)
                const mineralOre = new MineralOre((5/3 * oreCleaners.amount).toFixed(2) * count)
                const organicOre = new OrganicOre((5/3 * oreCleaners.amount).toFixed(2) * count)

                const isMetalOreExistOnStorage =  tradeStore.state.currentPlanet.storage.resources.filter(r => r.id === variables.metalOreId)[0]
                const isMineralOreExistOnStorage =  tradeStore.state.currentPlanet.storage.resources.filter(r => r.id === variables.mineralOreId)[0]
                const isOrganicOreExistOnStorage =  tradeStore.state.currentPlanet.storage.resources.filter(r => r.id === variables.organicOreId)[0]
                //TODO  НЕ ЗАБЫТЬ КОММЕНТЫ !
                if(isMetalOreExistOnStorage){ // && isStorageNotFull()
                    planetStore.commit('applyResource',{resource: metalOre, amount: metalOre.amount, to: tradeStore.state.currentPlanet.storage.resources})
                } else {
                    tradeStore.state.currentPlanet.storage.resources.push(metalOre)
                }

                if(isMineralOreExistOnStorage){ // && isStorageNotFull()
                    planetStore.commit('applyResource',{resource: mineralOre, amount: mineralOre.amount, to: tradeStore.state.currentPlanet.storage.resources})
                } else {
                    tradeStore.state.currentPlanet.storage.resources.push(mineralOre)
                }

                if(isOrganicOreExistOnStorage){ // && isStorageNotFull()
                    planetStore.commit('applyResource',{resource: organicOre, amount: organicOre.amount, to: tradeStore.state.currentPlanet.storage.resources})
                } else {
                    tradeStore.state.currentPlanet.storage.resources.push(organicOre)
                }
                oreCleaners.timeOfLastProduce = Date.now()
            }
        }
    },


    recycleCrudeMineralOreToMinerals(){
        // TODO подумать как реализовать офлайн переработку
        const mineralSynthesizer = tradeStore.state.currentPlanet.buildings.filter(b => b.id === variables.mineralSynthesizerId)[0]
        if(!mineralSynthesizer){
            return false
        }
        else {
            const sub = (Date.now() - mineralSynthesizer.timeOfLastProduce) / 1000    //  количество прошедших секунд  TODO сделать  количество прошедших минут

            if(sub > variables.timeOfResourceProduce && helpers.checkCrudeOreAndSubtract(variables.mineralSynthesizerId, variables.crudeMineralOreId)){ // раз в 2 секунды TODO сделать раз в минуту
                const count = Math.floor(sub / variables.timeOfResourceProduce)  // подсчет сколько раз прошло по 2 секунды (чтобы посчитать amount) TODO  / 1
                const altahMineral = new Altah((5/4 * mineralSynthesizer.amount).toFixed(2) * count)
                const delitiumMineral = new Delitium((5/4 * mineralSynthesizer.amount).toFixed(2) * count)
                const quantiumMineral = new Quantium((5/4 * mineralSynthesizer.amount).toFixed(2) * count)
                const telluriumMineral = new Tellurium((5/4 * mineralSynthesizer.amount).toFixed(2) * count)

                const isAltahMineralOnStorage = tradeStore.state.currentPlanet.storage.resources.filter(r => r.id === variables.altahMineralId)[0]
                const delitiumMineralOnStorage = tradeStore.state.currentPlanet.storage.resources.filter(r => r.id === variables.delitiumMineralId)[0]
                const quantiumMineralOnStorage = tradeStore.state.currentPlanet.storage.resources.filter(r => r.id === variables.quantiumMineralId)[0]
                const telluriumMineralOnStorage = tradeStore.state.currentPlanet.storage.resources.filter(r => r.id === variables.telluriumMineralId)[0]

                //TODO  НЕ ЗАБЫТЬ КОММЕНТЫ !
                if(isAltahMineralOnStorage){ // && isStorageNotFull()
                    planetStore.commit('applyResource',{resource: altahMineral, amount: altahMineral.amount, to: tradeStore.state.currentPlanet.storage.resources})
                } else {
                    tradeStore.state.currentPlanet.storage.resources.push(altahMineral)
                }

                if(delitiumMineralOnStorage){ // && isStorageNotFull()
                    planetStore.commit('applyResource',{resource: delitiumMineral, amount: delitiumMineral.amount, to: tradeStore.state.currentPlanet.storage.resources})
                } else {
                    tradeStore.state.currentPlanet.storage.resources.push(delitiumMineral)
                }

                if(quantiumMineralOnStorage){ // && isStorageNotFull()
                    planetStore.commit('applyResource',{resource: quantiumMineral, amount: quantiumMineral.amount, to: tradeStore.state.currentPlanet.storage.resources})
                } else {
                    tradeStore.state.currentPlanet.storage.resources.push(quantiumMineral)
                }

                if(telluriumMineralOnStorage){ // && isStorageNotFull()
                    planetStore.commit('applyResource',{resource: telluriumMineral, amount: telluriumMineral.amount, to: tradeStore.state.currentPlanet.storage.resources})
                } else {
                    tradeStore.state.currentPlanet.storage.resources.push(telluriumMineral)
                }
                mineralSynthesizer.timeOfLastProduce = Date.now()
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
                if(materialsOnStore[i].amount >= buildingToLoad.fuelNeedToFunctionalityPerDay.required * buildingToLoad.amount){
                    if(!buildingToLoad.isFuelLoaded){
                        planetStore.commit('subtractResource',
                            {
                            resource: buildingToLoad.fuelNeedToFunctionalityPerDay.fuelType,
                            amount: buildingToLoad.fuelNeedToFunctionalityPerDay.required * buildingToLoad.amount,
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
         if(Date.now() > building.fuelLoadTime + variables.oneDayInMilliseconds){
             building.isFuelLoaded = false
             building.checkFuel()
         }
    },


    checkThatEnergyOnPlanetIsEnough(_, building){
        let requiredEnergy = 0;
        let requiredEnergyOfBuildingsInProgress = 0
        let maxEnergy = 0;
        const buildings = tradeStore.state.currentPlanet.buildings
        for(let i = 0; i < planetStore.state.buildingsInProgressNow.length; i++){
            requiredEnergyOfBuildingsInProgress+=planetStore.state.buildingsInProgressNow[i].building.energyNeedToFunctionality
        }
        for(let i = 0; i < buildings.length; i++){
            requiredEnergy += buildings[i].energyNeedToFunctionality * buildings[i].amount
            if(buildings[i].isFuelLoaded){
                maxEnergy += buildings[i].addEnergyToPlanet * buildings[i].amount
            }
        }
        if(requiredEnergy + requiredEnergyOfBuildingsInProgress + building.energyNeedToFunctionality > maxEnergy){
            tradeStore.state.currentPlanet.isEnergyEnough = false
        } else {
            tradeStore.state.currentPlanet.isEnergyEnough = true
        }
    },

    checkThatColonyExists(_){
        if(tradeStore.state.currentPlanet.buildings.find(building => building.id === variables.colonyId)) {
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
        if(helpers.subtractCRAndIGForBuild(building)){
            planetStore.commit('isMaterialsEnough', {materials: building.requiredMaterials, building: building})
        }
    },

    sendError(_, message){
        planetStore.state.error.flag = true
        planetStore.state.error.value = message
    },

    createBuilding(planetState, payload) {
        let buildingsCount = 0
        let maxInProgressNow = 1
        for(let i = 0; i < tradeStore.state.currentPlanet.buildings.length; i ++){
            buildingsCount += tradeStore.state.currentPlanet.buildings[i].amount
            if(tradeStore.state.currentPlanet.buildings[i].id === variables.buildingStationId){
                // если на планете есть стройкомбинаты, то очередь строительства ++
                maxInProgressNow += tradeStore.state.currentPlanet.buildings[i].amount
            }
        }
        if(tradeStore.state.currentPlanet.building_points > planetStore.state.buildingsInProgressNow.length + buildingsCount) {
            switch (payload) {
                case 'Колония' : {
                    const exist = planetStore.state.buildingsInProgressNow.filter(b => b.building.id === variables.colonyId)
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
                    if(maxInProgressNow > planetStore.state.buildingsInProgressNow.length){
                        helpers.checkEnergyAndAddBuildingToInProgressNow(store)
                    } else {
                        planetStore.commit('sendError', 'Нехватает строительных центров!')
                    }
                }
                break;
                case 'Строительный центр' : {
                    const buildingCenter = new BuildingCenter()
                    if(maxInProgressNow > planetStore.state.buildingsInProgressNow.length){
                        helpers.checkEnergyAndAddBuildingToInProgressNow(buildingCenter)
                    } else {
                        planetStore.commit('sendError', 'Нехватает строительных центров!')
                    }
                }
                break;
                case 'Колониальный сенат' : {
                    const colonialSenate = new ColonialSenate()
                    if(maxInProgressNow > planetStore.state.buildingsInProgressNow.length){
                        helpers.checkEnergyAndAddBuildingToInProgressNow(colonialSenate)
                    } else {
                        planetStore.commit('sendError', 'Нехватает строительных центров!')
                    }
                }
                    break;
                case 'Административный центр' : {
                    const administrativeCenter = new AdministrativeCenter()
                    if(maxInProgressNow > planetStore.state.buildingsInProgressNow.length){
                        helpers.checkEnergyAndAddBuildingToInProgressNow(administrativeCenter)
                    } else {
                        planetStore.commit('sendError', 'Нехватает строительных центров!')
                    }
                }
                    break;
                case 'Медицинский центр' : {
                    const medicalCenter = new MedicalCenter()
                    if(maxInProgressNow > planetStore.state.buildingsInProgressNow.length){
                        helpers.checkEnergyAndAddBuildingToInProgressNow(medicalCenter)
                    } else {
                        planetStore.commit('sendError', 'Нехватает строительных центров!')
                    }
                }
                    break;
                case 'Небоскрёб' : {
                    const skyscraper = new Skyscraper()
                    if(maxInProgressNow > planetStore.state.buildingsInProgressNow.length){
                        helpers.checkEnergyAndAddBuildingToInProgressNow(skyscraper)
                    } else {
                        planetStore.commit('sendError', 'Нехватает строительных центров!')
                    }
                }
                    break;
                case 'Банк' : {
                    const bank = new Bank()
                    if(maxInProgressNow > planetStore.state.buildingsInProgressNow.length){
                        helpers.checkEnergyAndAddBuildingToInProgressNow(bank)
                    } else {
                        planetStore.commit('sendError', 'Нехватает строительных центров!')
                    }
                }
                    break;
                case 'Космопорт' : {
                    const spacePort = new SpacePort()
                    if(maxInProgressNow > planetStore.state.buildingsInProgressNow.length){
                        helpers.checkEnergyAndAddBuildingToInProgressNow(spacePort)
                    } else {
                        planetStore.commit('sendError', 'Нехватает строительных центров!')
                    }
                }
                    break;
                case 'Солнечная станция' : {
                    const solarPlant = new SolarPlant()
                    if(maxInProgressNow > planetStore.state.buildingsInProgressNow.length){
                        planetStore.commit('build', solarPlant)
                    } else {
                        planetStore.commit('sendError', 'Нехватает строительных центров!')
                    }
                }
                    break;
                case 'Химическая электростанция' : {
                    const chemicalPlant = new ChemicalPlant()
                    planetStore.commit('checkThatFuelIsEnoughAfterBuildNewStation', chemicalPlant)
                    if(maxInProgressNow > planetStore.state.buildingsInProgressNow.length){
                        helpers.checkEnergyAndAddBuildingToInProgressNow(chemicalPlant)
                    } else {
                        planetStore.commit('sendError', 'Нехватает строительных центров!')
                    }
                }
                    break;
                case 'Ядерная электростанция' : {
                    const nuclearPlant = new NuclearPlant()
                    planetStore.commit('checkThatFuelIsEnoughAfterBuildNewStation', nuclearPlant)
                    if(maxInProgressNow > planetStore.state.buildingsInProgressNow.length){
                        helpers.checkEnergyAndAddBuildingToInProgressNow(nuclearPlant)
                    } else {
                        planetStore.commit('sendError', 'Нехватает строительных центров!')
                    }
                }
                    break;
                case 'Расщепитель Альтах' : {
                    const altahSplitter = new AltahSplitter()
                    planetStore.commit('checkThatFuelIsEnoughAfterBuildNewStation', altahSplitter)
                    if(maxInProgressNow > planetStore.state.buildingsInProgressNow.length){
                        helpers.checkEnergyAndAddBuildingToInProgressNow(altahSplitter)
                    } else {
                        planetStore.commit('sendError', 'Нехватает строительных центров!')
                    }
                }
                    break;
                case 'Накопительная станция' : {
                    const accumulationStation = new AccumulationStation()
                    if(maxInProgressNow > planetStore.state.buildingsInProgressNow.length){
                        helpers.checkEnergyAndAddBuildingToInProgressNow(accumulationStation)
                    } else {
                        planetStore.commit('sendError', 'Нехватает строительных центров!')
                    }
                }
                    break;
                case 'Волновая станция' : {
                    const waveStation = new WaveStation()
                    if(maxInProgressNow > planetStore.state.buildingsInProgressNow.length){
                        helpers.checkEnergyAndAddBuildingToInProgressNow(waveStation)
                    } else {
                        planetStore.commit('sendError', 'Нехватает строительных центров!')
                    }
                }
                    break;
                case 'Очиститель руды' : {
                    const oreCleaner = new OreCleaner()
                    if(maxInProgressNow > planetStore.state.buildingsInProgressNow.length){
                        helpers.checkEnergyAndAddBuildingToInProgressNow(oreCleaner)
                    } else {
                        planetStore.commit('sendError', 'Нехватает строительных центров!')
                    }
                }
                    break;
                case 'Синтезатор минералов' : {
                    const mineralSynthesizer = new MineralSynthesizer()
                    if(maxInProgressNow > planetStore.state.buildingsInProgressNow.length){
                        helpers.checkEnergyAndAddBuildingToInProgressNow(mineralSynthesizer)
                    } else {
                        planetStore.commit('sendError', 'Нехватает строительных центров!')
                    }
                }
                    break;
            }
        } else {
            planetStore.commit('sendError', 'На планете кончилось место для застройки!')
        }
    },


    checkThatFuelIsEnoughAfterBuildNewStation(_, building){
        const stations = tradeStore.state.currentPlanet.buildings.filter(b => b.id === building.id)[0]
        if(stations){
            if(stations.isFuelLoaded){
                let material = building.fuelNeedToFunctionalityPerDay.fuelType
                material.amount = building.fuelNeedToFunctionalityPerDay.required
                building.requiredMaterials.push(material)
            }
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
    },

    checkThatPeopleEnough(_){
        let percent;
        let allPlanetPeople = 0
        let neededPeople = 0
        const buildings =  tradeStore.state.currentPlanet.buildings
        for(let i = 0; i < buildings.length; i ++){
            allPlanetPeople += buildings[i].addPeopleToPlanet * buildings[i].amount
            neededPeople += buildings[i].peopleNeedToFunctionality * buildings[i].amount
        }
        if(allPlanetPeople !== 0){
            percent = neededPeople * 100 / allPlanetPeople
            if(percent > 100){
                tradeStore.state.currentPlanet.buildingsEffectiveCoefficient = (100 - (percent - 100)) / 100
            } else {
                tradeStore.state.currentPlanet.buildingsEffectiveCoefficient = 1
            }
        }
    },

}