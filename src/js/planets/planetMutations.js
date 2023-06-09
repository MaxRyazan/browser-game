import tradeStore from "../../store_modules/tradeStore";
import planetStore from "../../store_modules/planetStore";
import {Colony} from '@/buildings/infrastructure/Colony'
import helpStore from "../../store_modules/helpStore";
import {Store} from "@/buildings/infrastructure/Store";
import {BuildingCenter} from "@/buildings/infrastructure/BuildingCenter";
import {ColonialSenate} from "@/buildings/infrastructure/ColonialSenate";
import {AdministrativeCenter} from "@/buildings/infrastructure/AdministrativeCenter";
import {Skyscraper} from "@/buildings/infrastructure/Skyscraper";
import {MedicalCenter} from "@/buildings/infrastructure/MedicalCenter";
import {Bank} from "@/buildings/infrastructure/Bank";
import {SpacePort} from "@/buildings/infrastructure/SpacePort";
import {SolarPlant} from "@/buildings/energy/SolarPlant";
import {NuclearPlant} from "@/buildings/energy/NuclearPlant";
import {AltahSplitter} from "@/buildings/energy/AltahSplitter";
import {AccumulationStation} from "@/buildings/resources/AccumulationStation";
import {WaveStation} from "@/buildings/resources/WaveStation";
import {OreCleaner} from "@/buildings/resources/OreCleaner";
import {MineralSynthesizer} from "@/buildings/resources/MineralSynthesizer";
import {CrudeOre} from "@/Resources/CrudeOre";
import helpers from "./helpers";
import {MetalOre} from "@/Resources/ore/MetalOre";
import {MineralOre} from "@/Resources/ore/MineralOre";
import {OrganicOre} from "@/Resources/ore/OrganicOre";
import variables from "../../variables";
import {CrudeMineralOre} from "@/Resources/CrudeMineralOre";
import {Delitium} from "@/Resources/mineral/Delitium";
import {Quantium} from "@/Resources/mineral/Quantium";
import {Tellurium} from "@/Resources/mineral/Tellurium";
import {ConstructionMaterials} from "@/materials/ConstructionMaterials";
import {Electronics} from "@/materials/Electronics";
import {ChemicalFuel} from "@/materials/ChemicalFuel";
import {Polymers} from "@/materials/Polymers";
import {Quadria} from "@/materials/Quadria";
import {Steel} from "@/materials/Steel";
import {Vettur} from "@/materials/Vettur";
import {ReinforcedConcretePlant} from "@/buildings/materials/ReinforcedConcretePlant";
import {OreMineralPlant} from "@/buildings/materials/Ore-mineralPlant";
import {PolymersPlant} from "@/buildings/materials/PolymersPlant";
import {ChemicalComplex} from "@/buildings/materials/ChemicalComplex";
import {EnrichmentComplex} from "@/buildings/materials/EnrichmentComplex";
import {NanoFuel} from "@/materials/NanoFuel";
import {NuclearFuel} from "@/materials/NuclearFuel";
import {EngineFactory} from "@/buildings/modules/EngineFactory";
import {ChemicalPlant} from "@/buildings/energy/ChemicalPlant";
import {SolarSale} from "@/modules/engines/SolarSale";
import {RocketEngine} from "@/modules/engines/RocketEngine";
import {NuclearEngine} from "@/modules/engines/NuclearEngine";
import {PlasmaEngine} from "@/modules/engines/PlasmaEngine";
import {ReactorFactory} from "@/buildings/modules/ReactorFactory";
import {ChemicalReactor} from "@/modules/reactors/ChemicalReactor";
import {NuclearReactor} from "@/modules/reactors/NuclearReactor";
import {PlasmaReactor} from "@/modules/reactors/PlasmaReactor";
import {WeaponFactory} from "@/buildings/modules/WeaponFactory";
import {DefenceFactory} from "@/buildings/modules/DefenceFactory";
import {MiningFactory} from "@/buildings/modules/MiningFactory";


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
        planetStore.commit('savePlayerToLocalStorage')
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
        planetStore.commit('savePlayerToLocalStorage')
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
        planetStore.commit('savePlayerToLocalStorage')
    },

    subtractResource(_, {resource, amount, from}){
        for(let i = 0; i < from.length; i++){
            if(from[i].id === resource.id){
                from[i].amount = from[i].amount - amount
            }
        }
        planetStore.commit('calculateWeightOfAllOnStorage')
        planetStore.commit('savePlayerToLocalStorage')
    },

    applyResource(_, {resource, amount, to}){
        for(let i = 0; i < to.length; i++){
            if(to[i].id === resource.id){
                to[i].amount = to[i].amount + amount
            }
        }
        planetStore.commit('calculateWeightOfAllOnStorage')
        planetStore.commit('savePlayerToLocalStorage')
    },

    calculateWeightOfAllOnStorage(_){
        const modules = helpers.calculateWeightOfModules(tradeStore.state.currentPlanet.storage.modules)
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
        if(!accumulationStations){
            return false
        }
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
        if(!waveStations){
            return false
        }
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
            let maxProduce = 0
            const sub = (Date.now() - oreCleaners.timeOfLastProduce) / variables.fiveMinutes
            const count = Math.floor(sub / variables.timeOfResourceProduce)
            if(sub > variables.timeOfResourceProduce && helpers.checkThatCrudeOreEnough(variables.oreCleanersId, variables.crudeOreId, count)){

                const mayProducePerPastTime = oreCleaners.canProduce.amount * oreCleaners.amount * count
                const storage = tradeStore.state.currentPlanet.storage.resources
                const crudeOre = storage.filter( r => r.id === variables.crudeOreId)[0]

                if(crudeOre.amount < mayProducePerPastTime){
                    maxProduce = crudeOre.amount
                    crudeOre.amount = 0
                } else {
                    maxProduce = mayProducePerPastTime
                    crudeOre.amount = crudeOre.amount - variables.productionPower * oreCleaners.amount * count
                }

                const produce = Number((maxProduce / 3).toFixed(2))

                const metalOre = new MetalOre(produce)
                const mineralOre = new MineralOre(produce)
                const organicOre = new OrganicOre(produce)


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
            let maxProduce = 0
            const sub = (Date.now() - mineralSynthesizer.timeOfLastProduce) / variables.fiveMinutes
            const count = Math.floor(sub / variables.timeOfResourceProduce)
            if(sub > variables.timeOfResourceProduce && helpers.checkThatCrudeOreEnough(variables.mineralSynthesizerId, variables.crudeMineralOreId, count)){

                const mayProducePerPastTime = mineralSynthesizer.canProduce.amount * mineralSynthesizer.amount * count
                const storage = tradeStore.state.currentPlanet.storage.resources
                const crudeMineralOreId = storage.filter( r => r.id === variables.crudeMineralOreId)[0]

                if(crudeMineralOreId.amount < mayProducePerPastTime){
                    maxProduce = crudeMineralOreId.amount
                    crudeMineralOreId.amount = 0
                } else {
                    maxProduce = mayProducePerPastTime
                    crudeMineralOreId.amount = crudeMineralOreId.amount - variables.productionPower * mineralSynthesizer.amount * count
                }

                const produce = Number((maxProduce / 3).toFixed(2))

                const delitiumMineral = new Delitium(produce)
                const quantiumMineral = new Quantium(produce)
                const telluriumMineral = new Tellurium(produce)

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

    checkReinforcedConcretePlants() {
        const reinforcedConcretePlants = tradeStore.state.currentPlanet.buildings.filter(b => b.id === variables.reinforcedConcretePlantId)[0]
        if (!reinforcedConcretePlants) {
            return false
        }
        if (helpers.isStorageNotFull()) {
            helpers.produceMaterial(new ConstructionMaterials(), reinforcedConcretePlants)
        }
    },

    checkOreMineralPlants() {
        const oreMineralPlants = tradeStore.state.currentPlanet.buildings.filter(b => b.id === variables.oreMineralPlantId)[0]
        if (!oreMineralPlants) {
            return false
        }
        if (helpers.isStorageNotFull()) {
            helpers.produceMaterial(new Steel(), oreMineralPlants)
            helpers.produceMaterial(new Vettur(), oreMineralPlants)
        }
    },

    checkPolymerPlants() {
        const polymersPlant = tradeStore.state.currentPlanet.buildings.filter(b => b.id === variables.polymersPlantId)[0]
        if (!polymersPlant) {
            return false
        }
        if (helpers.isStorageNotFull()) {
            helpers.produceMaterial(new Polymers(), polymersPlant)
            helpers.produceMaterial(new Electronics(), polymersPlant)
        }
    },

    checkChemicalComplex() {
        const chemicalComplex = tradeStore.state.currentPlanet.buildings.filter(b => b.id === variables.chemicalComplexId)[0]
        if (!chemicalComplex) {
            return false
        }
        if (helpers.isStorageNotFull()) {
            helpers.produceMaterial(new ChemicalFuel(), chemicalComplex)
            helpers.produceMaterial(new NanoFuel(), chemicalComplex)
        }
    },

    checkEnrichmentComplex() {
        const enrichmentComplex = tradeStore.state.currentPlanet.buildings.filter(b => b.id === variables.enrichmentComplexId)[0]
        if (!enrichmentComplex) {
            return false
        }
        if (helpers.isStorageNotFull()) {
            helpers.produceMaterial(new NuclearFuel(), enrichmentComplex)
            helpers.produceMaterial(new Quadria(), enrichmentComplex)
        }
    },


    checkModulesQueue(){
        let factoryCount;
        console.log('checkModulesQueue')
        const inProgress = tradeStore.state.currentPlanet.modulesInCreationNow
        if(helpers.isStorageNotFull()){
            for(let i = 0; i < inProgress.length; i++){
                if(inProgress[i].module.moduleType === variables.moduleTypeEngine){
                    factoryCount = tradeStore.state.currentPlanet.buildings.filter(b => b.id === variables.engineFactoryId)[0].amount
                }
                if(inProgress[i].module.moduleType === variables.moduleTypeReactor){
                    factoryCount = tradeStore.state.currentPlanet.buildings.filter(b => b.id === variables.reactorFactoryId)[0].amount
                }
                //TODO ЗДЕСЬ ПЕРЕБРАТЬ ВСЕ ВИДЫ ЗДАНИЙ ПРОИЗВОДЯЩИХ МОДУЛИ
                if(inProgress[i].amount >= factoryCount){
                    helpers.addModuleToStorage(inProgress[i].module, factoryCount)
                } else {
                    helpers.addModuleToStorage(inProgress[i].module, inProgress[i].amount)
                }
                inProgress[i].amount -= factoryCount
                if(inProgress[i].amount <= 0) {
                    inProgress.splice(i, 1)
                }
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
        planetStore.commit('savePlayerToLocalStorage')
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
                case 'Цех сборки двигателей' : {
                    const engineFactory = new EngineFactory()
                    if(maxInProgressNow > planetStore.state.buildingsInProgressNow.length){
                        helpers.checkEnergyAndAddBuildingToInProgressNow(engineFactory)
                    } else {
                        planetStore.commit('sendError', 'Нехватает строительных центров!')
                    }
                }
                    break;
                case 'Цех сборки реакторов' : {
                    const reactorFactory = new ReactorFactory()
                    if(maxInProgressNow > planetStore.state.buildingsInProgressNow.length){
                        helpers.checkEnergyAndAddBuildingToInProgressNow(reactorFactory)
                    } else {
                        planetStore.commit('sendError', 'Нехватает строительных центров!')
                    }
                }
                    break;
                case 'Цех сборки орудийных систем' : {
                    const weaponFactory = new WeaponFactory()
                    if(maxInProgressNow > planetStore.state.buildingsInProgressNow.length){
                        helpers.checkEnergyAndAddBuildingToInProgressNow(weaponFactory)
                    } else {
                        planetStore.commit('sendError', 'Нехватает строительных центров!')
                    }
                }
                    break;
                case 'Цех сборки защитных компонентов' : {
                    const defenceFactory = new DefenceFactory()
                    if(maxInProgressNow > planetStore.state.buildingsInProgressNow.length){
                        helpers.checkEnergyAndAddBuildingToInProgressNow(defenceFactory)
                    } else {
                        planetStore.commit('sendError', 'Нехватает строительных центров!')
                    }
                }
                    break;
                case 'Цех сборки добывающих модулей' : {
                    const miningFactory = new MiningFactory()
                    if(maxInProgressNow > planetStore.state.buildingsInProgressNow.length){
                        helpers.checkEnergyAndAddBuildingToInProgressNow(miningFactory)
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
        const electronics = new Electronics(600)
        const chemicalFuel = new ChemicalFuel(100)
        const polymers = new Polymers(600)
        const quadria = new Quadria(60)
        const steel = new Steel(600)
        const vettur = new Vettur(60)
        const metalOre = new MetalOre(150)
        const mineralOre = new MineralOre(15)
        const organicOre = new OrganicOre(30)
        const delitium = new Delitium(500)
        const quantium = new Quantium(50)
        const tellurium = new Tellurium(50)


        tradeStore.state.player.playerData.playerPlanets.homeWorld.storage.materials = []
        tradeStore.state.player.playerData.playerPlanets.homeWorld.storage.resources = []
        tradeStore.state.player.playerData.playerMoney.IG = 50000
        tradeStore.state.player.playerData.playerMoney.CR = 50000

        tradeStore.state.player.playerData.playerPlanets.homeWorld.storage.materials.push(construct)
        tradeStore.state.player.playerData.playerPlanets.homeWorld.storage.resources.push(metalOre)
        tradeStore.state.player.playerData.playerPlanets.homeWorld.storage.resources.push(mineralOre)
        tradeStore.state.player.playerData.playerPlanets.homeWorld.storage.resources.push(organicOre)
        tradeStore.state.player.playerData.playerPlanets.homeWorld.storage.resources.push(delitium)
        tradeStore.state.player.playerData.playerPlanets.homeWorld.storage.resources.push(quantium)
        tradeStore.state.player.playerData.playerPlanets.homeWorld.storage.resources.push(tellurium)
        tradeStore.state.player.playerData.playerPlanets.homeWorld.storage.materials.push(electronics)
        tradeStore.state.player.playerData.playerPlanets.homeWorld.storage.materials.push(chemicalFuel)
        tradeStore.state.player.playerData.playerPlanets.homeWorld.storage.materials.push(polymers)
        tradeStore.state.player.playerData.playerPlanets.homeWorld.storage.materials.push(quadria)
        tradeStore.state.player.playerData.playerPlanets.homeWorld.storage.materials.push(steel)
        tradeStore.state.player.playerData.playerPlanets.homeWorld.storage.materials.push(vettur)
        // tradeStore.state.player.playerData.playerPlanets.homeWorld.storage.materials = []
        // tradeStore.state.currentPlanet.modulesInCreationNow = []
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


    createModule(_, {moduleId, amount}){
        console.log(moduleId)
        console.log(amount)
        switch (moduleId){
            case variables.solarSailModuleId : {
                const solarSale = new SolarSale(tradeStore.state.player.playerData.race)
                if(helpers.isMaterialsForModulesEnough(solarSale, amount)){
                    for(let i = 0; i < solarSale.baseCostInMaterials.length; i++){
                        helpers.subtractMaterials(solarSale.baseCostInMaterials[i], amount)
                    }
                    helpers.addModuleToQueue(solarSale, amount)
                    planetStore.commit('savePlayerToLocalStorage')
                } else {
                    planetStore.commit('sendError', 'Нехватает материалов!')
                }
            }
            break;
            case variables.rocketEngineId : {
                const rocketEngine = new RocketEngine(tradeStore.state.player.playerData.race)
                if(helpers.isMaterialsForModulesEnough(rocketEngine, amount)){
                    for(let i = 0; i < rocketEngine.baseCostInMaterials.length; i++){
                        helpers.subtractMaterials(rocketEngine.baseCostInMaterials[i], amount)
                    }
                    helpers.addModuleToQueue(rocketEngine, amount)
                    planetStore.commit('savePlayerToLocalStorage')
                } else {
                    planetStore.commit('sendError', 'Нехватает материалов!')
                }
            }
            break;
            case variables.nuclearEngineId : {
                const nuclearEngine = new NuclearEngine(tradeStore.state.player.playerData.race)
                if(helpers.isMaterialsForModulesEnough(nuclearEngine, amount)){
                    for(let i = 0; i < nuclearEngine.baseCostInMaterials.length; i++){
                        helpers.subtractMaterials(nuclearEngine.baseCostInMaterials[i], amount)
                    }
                    helpers.addModuleToQueue(nuclearEngine, amount)
                    planetStore.commit('savePlayerToLocalStorage')
                } else {
                    planetStore.commit('sendError', 'Нехватает материалов!')
                }
            }
            break;
            case variables.plasmaEngineId : {
                const plasmaEngine = new PlasmaEngine(tradeStore.state.player.playerData.race)
                if(helpers.isMaterialsForModulesEnough(plasmaEngine, amount)){
                    for(let i = 0; i < plasmaEngine.baseCostInMaterials.length; i++){
                        helpers.subtractMaterials(plasmaEngine.baseCostInMaterials[i], amount)
                    }
                    helpers.addModuleToQueue(plasmaEngine, amount)
                    planetStore.commit('savePlayerToLocalStorage')
                } else {
                    planetStore.commit('sendError', 'Нехватает материалов!')
                }
            }
            break;
            case variables.chemicalReactorId : {
                const chemicalReactor = new ChemicalReactor(tradeStore.state.player.playerData.race)
                if(helpers.isMaterialsForModulesEnough(chemicalReactor, amount)){
                    for(let i = 0; i < chemicalReactor.baseCostInMaterials.length; i++){
                        helpers.subtractMaterials(chemicalReactor.baseCostInMaterials[i], amount)
                    }
                    helpers.addModuleToQueue(chemicalReactor, amount)
                    planetStore.commit('savePlayerToLocalStorage')
                } else {
                    planetStore.commit('sendError', 'Нехватает материалов!')
                }
            }
            break;
            case variables.nuclearReactorId : {
                const nuclearReactor = new NuclearReactor(tradeStore.state.player.playerData.race)
                if(helpers.isMaterialsForModulesEnough(nuclearReactor, amount)){
                    for(let i = 0; i < nuclearReactor.baseCostInMaterials.length; i++){
                        helpers.subtractMaterials(nuclearReactor.baseCostInMaterials[i], amount)
                    }
                    helpers.addModuleToQueue(nuclearReactor, amount)
                    planetStore.commit('savePlayerToLocalStorage')
                } else {
                    planetStore.commit('sendError', 'Нехватает материалов!')
                }
            }
            break;
            case variables.plasmaReactorId : {
                const plasmaReactor = new PlasmaReactor(tradeStore.state.player.playerData.race)
                if(helpers.isMaterialsForModulesEnough(plasmaReactor, amount)){
                    for(let i = 0; i < plasmaReactor.baseCostInMaterials.length; i++){
                        helpers.subtractMaterials(plasmaReactor.baseCostInMaterials[i], amount)
                    }
                    helpers.addModuleToQueue(plasmaReactor, amount)
                    planetStore.commit('savePlayerToLocalStorage')
                } else {
                    planetStore.commit('sendError', 'Нехватает материалов!')
                }
            }
            break;
        }
    }

}