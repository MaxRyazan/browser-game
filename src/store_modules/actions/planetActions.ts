import {usePlanetStore} from "../planetStoreN";
import variables from "../../variables";
import {Colony} from "../../buildings/infrastructure/Colony";
import globalBuildings from "../../global.buildings";
import {BuildingInProgress, MY_DATABASE} from "../../dataTypes";
import {usePlayerStore} from "../playerStore";
import {Building} from "../../entities/Building";
import {ColonialSenate} from "../../buildings/infrastructure/ColonialSenate";
import {Store} from "../../buildings/infrastructure/Store";
import {AdministrativeCenter} from "../../buildings/infrastructure/AdministrativeCenter";
import {BuildingCenter} from "../../buildings/infrastructure/BuildingCenter";
import {MedicalCenter} from "../../buildings/infrastructure/MedicalCenter";
import {Skyscraper} from "../../buildings/infrastructure/Skyscraper";
import {Bank} from "../../buildings/infrastructure/Bank";
import {SpacePort} from "../../buildings/infrastructure/SpacePort";
import {SolarPlant} from "../../buildings/energy/SolarPlant";
import {ChemicalPlant} from "../../buildings/energy/ChemicalPlant";
import {NuclearPlant} from "../../buildings/energy/NuclearPlant";
import {AltahSplitter} from "../../buildings/energy/AltahSplitter";
import {AccumulationStation} from "../../buildings/resources/AccumulationStation";
import {WaveStation} from "../../buildings/resources/WaveStation";
import {OreCleaner} from "../../buildings/resources/OreCleaner";
import {MineralSynthesizer} from "../../buildings/resources/MineralSynthesizer";
import {ChemicalComplex} from "../../buildings/materials/ChemicalComplex";
import {EnrichmentComplex} from "../../buildings/materials/EnrichmentComplex";
import {OreMineralPlant} from "../../buildings/materials/Ore-mineralPlant";
import {PolymersPlant} from "../../buildings/materials/PolymersPlant";
import {ReinforcedConcretePlant} from "../../buildings/materials/ReinforcedConcretePlant";
import {DefenceFactory} from "../../buildings/modules/DefenceFactory";
import {EngineFactory} from "../../buildings/modules/EngineFactory";
import {MiningFactory} from "../../buildings/modules/MiningFactory";
import {ReactorFactory} from "../../buildings/modules/ReactorFactory";
import {WeaponFactory} from "../../buildings/modules/WeaponFactory";
import {FuelsInstitute} from "../../buildings/science/FuelsInstitute";
import {PolymersInstitute} from "../../buildings/science/PolymersInstitute";
import {MetalsInstitute} from "../../buildings/science/MetalsInstitute";
import {Laboratory} from "../../buildings/science/Laboratory";
import {Material} from "../../interfaces/Material";
import {Planet} from "../../entities/Planet";
import {Resource} from "../../entities/Resource";
import {Module} from "../../entities/Module";


export default {
    checkResourcesBuildings() {
        const playerStore = usePlayerStore()
        const allColonies = []
        allColonies.push(playerStore.player.playerPlanets.homePlanet)
        allColonies.push(...playerStore.player.playerPlanets.colonies)
        allColonies.forEach(colony => {
            colony.buildings.forEach(building => {
                if (building.buildingType === 3) {
                    this.produceResource(building, colony)
                }
            })
        })
    },

    produceResource(building: any, colony: any) {
        // в 9 утра должно юыть 144
        const canProduce = building.canProduce.type
        const produceAmount = building.canProduce.amount
        const period = building.producePeriod
        const timeOfLastProduce = building.timeOfLastProduce
        const produceTimes = (Date.now() - timeOfLastProduce) / period
        const mustBeProducedPerPeriod = produceTimes * produceAmount
        if (produceTimes >= 1) {
            canProduce.forEach(res => {
                res.amount = mustBeProducedPerPeriod * building.amount
                this.addResourceToStorage(res, colony)
                building.timeOfLastProduce = Date.now()
            })
        }
    },

    subtractMaterial(material: Material, amount: number) {
        const planetStore = usePlanetStore()
        const storageMaterials = planetStore.currentPlanet.storage.materials
        storageMaterials.forEach(m => {
            if (m.id === material.id && m.amount >= amount) {
                m.amount -= amount
            }
        })
    },

    addMaterialToStorage(m: Material, to: any) {
        const existMaterial = to.storage.materials.filter(mat => mat.id === m.id)[0]
        if (existMaterial) {
            existMaterial.amount += m.amount
        } else {
            to.storage.materials.push(m)
        }
    },

    addResourceToStorage(r: Resource, to: any) {
        const existResource = to.storage.resources.filter(res => res.id === r.id)[0]
        if (existResource) {
            existResource.amount += r.amount
        } else {
            to.storage.resources.push(r)
        }
    },

    removeResourceFromStorage(r: Resource) {
        const planetStore = usePlanetStore()
        let storageResources = planetStore.currentPlanet.storage.resources
        storageResources.forEach((res,idx) => {
            if (res.id === r.id) {
                storageResources.splice(idx, 1)
            }
        })
        this.saveToMyDb()
    },

    removeMaterialFromStorage(m: Material) {
        const planetStore = usePlanetStore()
        let storageMaterials = planetStore.currentPlanet.storage.materials
        storageMaterials.forEach(mat => {
            if (mat.id === m.id) {
                mat.amount = 0
            }
        })
        this.saveToMyDb()
    },
    removeModulesFromStorage(m: Module) {
        const planetStore = usePlanetStore()
        let storageModules = planetStore.currentPlanet.storage.modules
        planetStore.currentPlanet.storage.modules = storageModules.filter(mod => mod.id !== m.id)
        this.saveToMyDb()
    },

    showStorageMenu() {
        const planetStore = usePlanetStore()
        planetStore.showStorageDirectories = true
        planetStore.showBuildingsDirectories = false
    },

    showBuildingMenu() {
        const planetStore = usePlanetStore()
        planetStore.showBuildingsDirectories = true
        planetStore.showStorageDirectories = false
    },

    isColonyAlreadyExist() {
        const planetStore = usePlanetStore()
        const colony = planetStore.currentPlanet.buildings.filter(b => b.id === variables.colonyId)
        const colonyInBuild = planetStore.currentPlanet.buildingsInProgressNow.filter(b => b.building.id === variables.colonyId)
        if (colony.length || colonyInBuild.length) {
            return true
        }
        if (!colony.length && !colonyInBuild.length) {
            return false
        }
    },

    detectBuilding(payload: String) {
        switch (payload) {
            case globalBuildings.colony.name:
                return new Colony();
            case globalBuildings.colonialSenate.name:
                return new ColonialSenate();
            case globalBuildings.store.name:
                return new Store();
            case globalBuildings.adminCenter.name:
                return new AdministrativeCenter();
            case globalBuildings.buildingCenter.name:
                return new BuildingCenter();
            case globalBuildings.medCenter.name:
                return new MedicalCenter();
            case globalBuildings.skyscraper.name:
                return new Skyscraper();
            case globalBuildings.bank.name:
                return new Bank();
            case globalBuildings.spacePort.name:
                return new SpacePort();
            case globalBuildings.solarStation.name:
                return new SolarPlant();
            case globalBuildings.chemicalStation.name:
                return new ChemicalPlant();
            case globalBuildings.nuclearStation.name:
                return new NuclearPlant();
            case globalBuildings.altahStation.name:
                return new AltahSplitter();
            case globalBuildings.accumulationStation.name:
                return new AccumulationStation();
            case globalBuildings.waveStation.name:
                return new WaveStation();
            case globalBuildings.oreCleaner.name:
                return new OreCleaner();
            case globalBuildings.mineralSynthesizer.name:
                return new MineralSynthesizer();
            case globalBuildings.chemicalComplex.name:
                return new ChemicalComplex();
            case globalBuildings.enrichmentComplex.name:
                return new EnrichmentComplex();
            case globalBuildings.oreMineralPlant.name:
                return new OreMineralPlant();
            case globalBuildings.polymersPlant.name:
                return new PolymersPlant();
            case globalBuildings.reinforcedConcretePlant.name:
                return new ReinforcedConcretePlant();
            case globalBuildings.laboratory.name:
                return new Laboratory();
            case globalBuildings.metalsInstitute.name:
                return new MetalsInstitute();
            case globalBuildings.polymersInstitute.name:
                return new PolymersInstitute();
            case globalBuildings.fuelsInstitute.name:
                return new FuelsInstitute();
            case globalBuildings.defenceFactory.name:
                return new DefenceFactory();
            case globalBuildings.engineFactory.name:
                return new EngineFactory();
            case globalBuildings.miningFactory.name:
                return new MiningFactory();
            case globalBuildings.reactorFactory.name:
                return new ReactorFactory();
            case globalBuildings.weaponFactory.name:
                return new WeaponFactory();
        }
    },

    isEnergyEnough(building: Building) {
        const planetStore = usePlanetStore()
        const currentPlanet = planetStore.currentPlanet
        let allEnergy = 0;
        let minReqEnergy = 0
        if (planetStore.currentPlanet.isColonyCreated) {
            allEnergy += 10
        }
        currentPlanet.buildings.forEach(b => {
            allEnergy += b.amount * b.addEnergyToPlanet
        })
        currentPlanet.buildings.forEach(b => {
            minReqEnergy += b.amount * b.energyNeedToFunctionality
        })
        return building.energyNeedToFunctionality <= (allEnergy - minReqEnergy)
    },

    isPeopleEnough() {
        const planetStore = usePlanetStore()
        const buildings = planetStore.currentPlanet.buildings
        const currentPlanet = planetStore.currentPlanet
        let percent;
        let allPlanetPeople = 0
        let neededPeople = 0
        for (let i = 0; i < buildings.length; i++) {
            allPlanetPeople += Number(buildings[i].addPeopleToPlanet) * buildings[i].amount
            neededPeople += Number(buildings[i].peopleNeedToFunctionality) * buildings[i].amount
        }
        if (allPlanetPeople !== 0) {
            percent = neededPeople * 100 / allPlanetPeople
            if (percent > 100) {
                console.log('people not enough')
                currentPlanet.buildingsEffectiveCoefficient = (100 - (percent - 100)) / 100
            } else {
                console.log('people ok')
                currentPlanet.buildingsEffectiveCoefficient = 1
            }
        }
    },

    isConstructFactoriesEnough() {
        const baseQueue = 1
        const planetStore = usePlanetStore()
        const currentPlanet = planetStore.currentPlanet
        let combinates = currentPlanet.buildings.filter(b => b.id === variables.buildingStationId)[0]
        if (combinates) {
            return currentPlanet.buildingsInProgressNow.length < combinates.amount + baseQueue
        } else {
            return currentPlanet.buildingsInProgressNow.length < baseQueue
        }
    },

    isCellsOnPlanetEnough() {
        const planetStore = usePlanetStore()
        const currentPlanet = planetStore.currentPlanet
        return currentPlanet.building_points > 0
    },

    isMaterialsEnough(building: Building) {
        const planetStore = usePlanetStore()
        const storage = planetStore.currentPlanet.storage.materials
        building.requiredMaterials.forEach(b => {
            const storageMaterial = storage.filter(m => m.id === b.id)[0]
            if (storageMaterial.amount < b.amount) {
                return false
            }
        })
        building.requiredMaterials.forEach(m => {
            this.subtractMaterial(m, m.amount)
        })
        return true
    },

    putBuildingToConstructQueue(buildingInConstructNow: BuildingInProgress) {
        const planetStore = usePlanetStore()
        if (this.isEnergyEnough(buildingInConstructNow.building)
            && this.isCellsOnPlanetEnough()
            && this.isConstructFactoriesEnough()
            && this.isMaterialsEnough(buildingInConstructNow.building)) {
            planetStore.currentPlanet.buildingsInProgressNow.push(buildingInConstructNow)
            this.saveToMyDb()
        } else {
            console.error('Не хватает места или энергии или строительных центров')
        }
    },

    createBuilding(payload: String) {
        const building = this.detectBuilding(payload)
        if (payload === globalBuildings.colony.name && !this.isColonyAlreadyExist()) {
            this.putBuildingToConstructQueue({building: building, readyTime: building.costInTime + Date.now()})
        } else {
            this.putBuildingToConstructQueue({building: building, readyTime: building.costInTime + Date.now()})
        }
    },

    removeBuilding(building: Building) {
        const planetStore = usePlanetStore()
        const buildings = planetStore.currentPlanet.buildings
        if (building.amount > 1) {
            building.amount--
        } else {
            buildings.forEach((b, idx) => {
                if(b.id === building.id){
                    buildings.splice(idx, 1)
                }
            })
        }
        this.saveToMyDb()
    },

    watchBuildingQueue() {
        const planetStore = usePlanetStore()
        const inProgress = planetStore.currentPlanet.buildingsInProgressNow
        const timeNow = Date.now()
        if (inProgress) {
            for (let i = 0; i < inProgress.length; i++) {
                if (inProgress[i].readyTime <= timeNow) {
                    const existingBuilding = planetStore.currentPlanet.buildings.filter(b => b.id === inProgress[i].building.id)[0]
                    if (!existingBuilding) {
                        planetStore.currentPlanet.buildings.push(inProgress[i].building)

                    } else {
                        existingBuilding.amount++
                    }
                    if (inProgress[i].building.id === variables.colonyId) {
                        planetStore.currentPlanet.isColonyCreated = true
                    }
                    inProgress.splice(i, 1)
                    this.saveToMyDb()
                }
            }
        }
    },

    saveToMyDb() {
        const playerStore = usePlayerStore()
        const my_db: MY_DATABASE = JSON.parse(localStorage.getItem('my_fed_base'))
        if (!my_db) {
            return
        }
        const updatedBase = {
            players: [playerStore.player],
            planets: my_db.planets
        }
        localStorage.removeItem('my_fed_base')
        localStorage.setItem('my_fed_base', JSON.stringify(updatedBase))
    }
}