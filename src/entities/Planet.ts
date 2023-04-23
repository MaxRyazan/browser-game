import {PlanetarySystem} from "./PlanetarySystem";
import {Building} from "./Building";
import {Module} from "./Module";

export class Planet {
    id: Number
    name: String
    planetarySystem: PlanetarySystem
    orbit: Number
    atmosphere: Boolean
    building_points: Number
    picture: String
    isEnergyEnough: Boolean
    allStorageUnitsMass: Number
    buildingsEffectiveCoefficient: Number
    storage: {
        maxCapacity: Number,
        modules: {},
        materials: {},
        resources: {}
    }
    buildings: Building[]
    peoples: Number
    buildingsInProgressNow: []
    modulesInCreationNow: []
    constructor(id: Number, name: String, atmosphere: Boolean) {
        this.id = id
        this.name = name
        this.planetarySystem = new PlanetarySystem(2, `A${Math.random()}`, {x: Math.random(), y: Math.random()}, Math.random(), [])
        this.orbit = 2
        this.atmosphere = atmosphere
        this.building_points = 310
        this.picture = ''
        this.isEnergyEnough = false
        this.allStorageUnitsMass = 0
        this.buildingsEffectiveCoefficient = 1
        this.storage = {
            maxCapacity: 2000,
            modules: [],
            materials: [],
            resources: []
        }
        this.buildings = []
        this.peoples = 0
        this.buildingsInProgressNow = []
        this.modulesInCreationNow = []
    }
}