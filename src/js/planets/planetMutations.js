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
import {Delitium} from "../../Resources/mineral/Delitium.ts";
import {Quantium} from "../../Resources/mineral/Quantium.ts";
import {Tellurium} from "../../Resources/mineral/Tellurium.ts";
import {ConstructionMaterials} from "../../materials/ConstructionMaterials.ts";
import {Electronics} from "../../materials/Electronics.ts";
import {ChemicalFuel} from "../../materials/ChemicalFuel.ts";
import {Polymers} from "../../materials/Polymers.ts";
import {Quadria} from "../../materials/Quadria.ts";
import {Steel} from "../../materials/Steel.ts";
import {Vettur} from "../../materials/Vettur.ts";
import {ReinforcedConcretePlant} from "../../buildings/materials/ReinforcedConcretePlant.ts";
import {OreMineralPlant} from "../../buildings/materials/Ore-mineralPlant.ts";
import {PolymersPlant} from "../../buildings/materials/PolymersPlant.ts";
import {ChemicalComplex} from "../../buildings/materials/ChemicalComplex.ts";
import {EnrichmentComplex} from "../../buildings/materials/EnrichmentComplex.ts";


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
            const sub = (Date.now() - accumulationStations.timeOfLastProduce) / variables.fiveMinutes  //раз в 5 минут производство реса
            if(sub > variables.timeOfResourceProduce){ // если прошло больше одного раз по пять минут
                const count = Math.floor(sub / variables.timeOfResourceProduce)  // подсчет сколько раз должен был произвестись рес за прошедшее время
                const crudeOre = new CrudeOre(variables.productionPower * count * accumulationStationsCount)
                if(isResourceExist){
                    planetStore.commit('applyResource',{resource: crudeOre, amount: crudeOre.amount, to: tradeStore.state.currentPlanet.storage.resources})
                } else {
                    tradeStore.state.currentPlanet.storage.resources.push(crudeOre)
                }
                accumulationStations.timeOfLastProduce = Date.now()
            }
        }
        if(!helpers.isStorageNotFull()){
            accumulationStations.timeOfLastProduce = Date.now()
        }
        planetStore.commit('savePlayerToLocalStorage')
    },

    checkWaveStationsOfCurrentPlanet(){
        const waveStations = tradeStore.state.currentPlanet.buildings.filter(b => b.id === variables.waveStationsId)[0]
        const isResourceExist =  tradeStore.state.currentPlanet.storage.resources.filter(r => r.id === variables.crudeMineralOreId)[0]
        if(waveStations && helpers.isStorageNotFull()){
            const waveStationsCount = waveStations.amount
            const sub = (Date.now() - waveStations.timeOfLastProduce) / variables.fiveMinutes
            if(sub > variables.timeOfResourceProduce){
                const count = Math.floor(sub / variables.timeOfResourceProduce)
                const crudeMineralOre = new CrudeMineralOre(variables.productionPower * count * waveStationsCount)
                if(isResourceExist){
                    planetStore.commit('applyResource',{resource: crudeMineralOre, amount: crudeMineralOre.amount, to: tradeStore.state.currentPlanet.storage.resources})
                } else {
                    tradeStore.state.currentPlanet.storage.resources.push(crudeMineralOre)
                }
                waveStations.timeOfLastProduce = Date.now()
            }
        }
        if(!helpers.isStorageNotFull()){
            waveStations.timeOfLastProduce = Date.now()
        }
        planetStore.commit('savePlayerToLocalStorage')
    },

    recycleCrudeOreToOre(){
      const oreCleaners = tradeStore.state.currentPlanet.buildings.filter(b => b.id === variables.oreCleanersId)[0]
        if(!oreCleaners){
           return false
        }
        else {
            const sub = (Date.now() - oreCleaners.timeOfLastProduce) / variables.fiveMinutes
            const count = Math.floor(sub / variables.timeOfResourceProduce)
            if(sub > variables.timeOfResourceProduce && helpers.checkCrudeOreAndSubtract(variables.oreCleanersId, variables.crudeOreId, count)){
                const metalOre = new MetalOre((variables.productionPower/3 * oreCleaners.amount).toFixed(2) * count)
                const mineralOre = new MineralOre((variables.productionPower/3 * oreCleaners.amount).toFixed(2) * count)
                const organicOre = new OrganicOre((variables.productionPower/3 * oreCleaners.amount).toFixed(2) * count)

                const isMetalOreExistOnStorage =  tradeStore.state.currentPlanet.storage.resources.filter(r => r.id === variables.metalOreId)[0]
                const isMineralOreExistOnStorage =  tradeStore.state.currentPlanet.storage.resources.filter(r => r.id === variables.mineralOreId)[0]
                const isOrganicOreExistOnStorage =  tradeStore.state.currentPlanet.storage.resources.filter(r => r.id === variables.organicOreId)[0]

                if(isMetalOreExistOnStorage && helpers.isStorageNotFull()){
                    planetStore.commit('applyResource',{resource: metalOre, amount: metalOre.amount, to: tradeStore.state.currentPlanet.storage.resources})
                } else {
                    tradeStore.state.currentPlanet.storage.resources.push(metalOre)
                }

                if(isMineralOreExistOnStorage && helpers.isStorageNotFull()){
                    planetStore.commit('applyResource',{resource: mineralOre, amount: mineralOre.amount, to: tradeStore.state.currentPlanet.storage.resources})
                } else {
                    tradeStore.state.currentPlanet.storage.resources.push(mineralOre)
                }

                if(isOrganicOreExistOnStorage && helpers.isStorageNotFull()){
                    planetStore.commit('applyResource',{resource: organicOre, amount: organicOre.amount, to: tradeStore.state.currentPlanet.storage.resources})
                } else {
                    tradeStore.state.currentPlanet.storage.resources.push(organicOre)
                }
                oreCleaners.timeOfLastProduce = Date.now()
            }
        }
    },


    recycleCrudeMineralOreToMinerals(){
        const mineralSynthesizer = tradeStore.state.currentPlanet.buildings.filter(b => b.id === variables.mineralSynthesizerId)[0]
        if(!mineralSynthesizer){
            return false
        }
        else {
            const sub = (Date.now() - mineralSynthesizer.timeOfLastProduce) / variables.fiveMinutes

            const count = Math.floor(sub / variables.timeOfResourceProduce)
            if(sub > variables.timeOfResourceProduce && helpers.checkCrudeOreAndSubtract(variables.mineralSynthesizerId, variables.crudeMineralOreId, count)){
                const delitiumMineral = new Delitium((5/3 * mineralSynthesizer.amount).toFixed(2) * count)
                const quantiumMineral = new Quantium((5/3 * mineralSynthesizer.amount).toFixed(2) * count)
                const telluriumMineral = new Tellurium((5/3 * mineralSynthesizer.amount).toFixed(2) * count)


                const delitiumMineralOnStorage = tradeStore.state.currentPlanet.storage.resources.filter(r => r.id === variables.delitiumMineralId)[0]
                const quantiumMineralOnStorage = tradeStore.state.currentPlanet.storage.resources.filter(r => r.id === variables.quantiumMineralId)[0]
                const telluriumMineralOnStorage = tradeStore.state.currentPlanet.storage.resources.filter(r => r.id === variables.telluriumMineralId)[0]

                if(delitiumMineralOnStorage && helpers.isStorageNotFull()){
                    planetStore.commit('applyResource',{resource: delitiumMineral, amount: delitiumMineral.amount, to: tradeStore.state.currentPlanet.storage.resources})
                } else {
                    tradeStore.state.currentPlanet.storage.resources.push(delitiumMineral)
                }

                if(quantiumMineralOnStorage && helpers.isStorageNotFull()){
                    planetStore.commit('applyResource',{resource: quantiumMineral, amount: quantiumMineral.amount, to: tradeStore.state.currentPlanet.storage.resources})
                } else {
                    tradeStore.state.currentPlanet.storage.resources.push(quantiumMineral)
                }

                if(telluriumMineralOnStorage && helpers.isStorageNotFull()){
                    planetStore.commit('applyResource',{resource: telluriumMineral, amount: telluriumMineral.amount, to: tradeStore.state.currentPlanet.storage.resources})
                } else {
                    tradeStore.state.currentPlanet.storage.resources.push(telluriumMineral)
                }
                mineralSynthesizer.timeOfLastProduce = Date.now()
            }
        }
    },

    checkReinforcedConcretePlants(){
        const reinforcedConcretePlants = tradeStore.state.currentPlanet.buildings.filter(b => b.id === variables.reinforcedConcretePlantId)[0]
        if(!reinforcedConcretePlants){
            return false
        }
        else {
            const sub = (Date.now() - reinforcedConcretePlants.timeOfLastProduce) / variables.fiveMinutes
            const count = Math.floor(sub / variables.timeOfResourceProduce)
            if(sub > variables.timeOfResourceProduce && helpers.checkResourcesForProductAndSubtract([{resourcesId: variables.metalOreId, amount: 3}, {resourcesId: variables.mineralOreId, amount: 2}], count)){
                const constructionMaterials = new ConstructionMaterials((5 * reinforcedConcretePlants.amount).toFixed(2) * count)
                const constructionMaterialsOnStorage = tradeStore.state.currentPlanet.storage.resources.filter(r => r.id === variables.constructionMaterialsId)[0]

                if(constructionMaterialsOnStorage && helpers.isStorageNotFull()){
                    planetStore.commit('applyResource',{resource: constructionMaterials, amount: constructionMaterials.amount, to: tradeStore.state.currentPlanet.storage.materials})
                } else {
                    tradeStore.state.currentPlanet.storage.resources.push(constructionMaterials)
                }
                reinforcedConcretePlants.timeOfLastProduce = Date.now()
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
                            planetStore.commit('loadFuelToStation', buildingToLoad)
                    } else {
                        planetStore.commit('sendError', 'Топливо уже загружено!')
                    }
                } else {
                    planetStore.commit('sendError', 'На складе нехватает топлива!!!')
                }
            }
        }
        if(isFuelEnough === false){
            planetStore.commit('sendError', 'На складе нехватает топлива!')
        }
    },



    loadFuelToStation(_, building){
        building.isFuelLoaded = true
        building.fuelLoadTime = Date.now()
        planetStore.commit('savePlayerToLocalStorage')
    },

    // проверяем сутки с момента загрузки
    checkThatFuelLoadTimePassed(_, payload){
         if(Date.now() > payload.fuelLoadTime + variables.oneDayInMilliseconds){
             payload.isFuelLoaded = false
         }
    },

    removeBuilding(_, building){
        const existBuildingIndex = tradeStore.state.player.playerData.playerPlanets.homeWorld.buildings.indexOf(building)
        if(building.id === 1){
            if(tradeStore.state.currentPlanet.buildings.length){
                planetStore.commit('sendError', 'Колонию нельзя разрушить, пока есть другие здания на планете!')
            } else {
                building.amount -= 1
            }
        } else {
            if(building.amount > 1){
                building.amount -= 1
            } else {
                tradeStore.state.player.playerData.playerPlanets.homeWorld.buildings.splice(existBuildingIndex, 1)
            }
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
                    const chemicalPlant = new ChemicalComplex()
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
                case 'Железобетонный завод' : {
                    const reinforcedConcretePlant = new ReinforcedConcretePlant()
                    if(maxInProgressNow > planetStore.state.buildingsInProgressNow.length){
                        helpers.checkEnergyAndAddBuildingToInProgressNow(reinforcedConcretePlant)
                    } else {
                        planetStore.commit('sendError', 'Нехватает строительных центров!')
                    }
                }
                    break;
                case 'Рудо-минеральный завод' : {
                    const oreMineralPlant = new OreMineralPlant()
                    if(maxInProgressNow > planetStore.state.buildingsInProgressNow.length){
                        helpers.checkEnergyAndAddBuildingToInProgressNow(oreMineralPlant)
                    } else {
                        planetStore.commit('sendError', 'Нехватает строительных центров!')
                    }
                }
                    break;
                case 'Полимерный завод' : {
                    const polymersPlant = new PolymersPlant()
                    if(maxInProgressNow > planetStore.state.buildingsInProgressNow.length){
                        helpers.checkEnergyAndAddBuildingToInProgressNow(polymersPlant)
                    } else {
                        planetStore.commit('sendError', 'Нехватает строительных центров!')
                    }
                }
                    break;
                case 'Химический комплекс' : {
                    const chemicalPlant = new ChemicalComplex()
                    if(maxInProgressNow > planetStore.state.buildingsInProgressNow.length){
                        helpers.checkEnergyAndAddBuildingToInProgressNow(chemicalPlant)
                    } else {
                        planetStore.commit('sendError', 'Нехватает строительных центров!')
                    }
                }
                    break;
                case 'Обогатительный комплекс' : {
                    const enrichmentComplex = new EnrichmentComplex()
                    if(maxInProgressNow > planetStore.state.buildingsInProgressNow.length){
                        helpers.checkEnergyAndAddBuildingToInProgressNow(enrichmentComplex)
                    } else {
                        planetStore.commit('sendError', 'Нехватает строительных центров!')
                    }
                }
                    break;
            }
        } else {
            planetStore.commit('sendError', 'На планете кончилось место для застройки!')
        }
        planetStore.commit('savePlayerToLocalStorage')
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

    savePlayerToLocalStorage(){
        const playerName = tradeStore.state.player.login
        localStorage.setItem(playerName, JSON.stringify(tradeStore.state.player))
    },

    addTestMaterials(){
        const construct = new ConstructionMaterials(140)
        const electronics = new Electronics(60)
        const chemicalFuel = new ChemicalFuel(100)
        const polymers = new Polymers(60)
        const quadria = new Quadria(60)
        const steel = new Steel(60)
        const vettur = new Vettur(60)


        tradeStore.state.player.playerData.playerPlanets.homeWorld.storage.materials = []
        tradeStore.state.player.playerData.playerMoney.IG = 50000

        tradeStore.state.player.playerData.playerPlanets.homeWorld.storage.materials.push(construct)
        tradeStore.state.player.playerData.playerPlanets.homeWorld.storage.materials.push(electronics)
        tradeStore.state.player.playerData.playerPlanets.homeWorld.storage.materials.push(chemicalFuel)
        tradeStore.state.player.playerData.playerPlanets.homeWorld.storage.materials.push(polymers)
        tradeStore.state.player.playerData.playerPlanets.homeWorld.storage.materials.push(quadria)
        tradeStore.state.player.playerData.playerPlanets.homeWorld.storage.materials.push(steel)
        tradeStore.state.player.playerData.playerPlanets.homeWorld.storage.materials.push(vettur)
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