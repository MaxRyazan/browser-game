import {PlanetarySystem} from "./PlanetarySystem";
import {Building} from "./Building";

export class Planet {
    constructor(
        public id: Number,
        public name: String,
        public planetarySystem: PlanetarySystem,
        public orbit: Number,
        public atmosphere: Boolean,
        public building_points: Number,
        public picture: String,
        public storage: {
            maxCapacity: Number,
            modules: {}
        },
        public buildings: Building[]
    ) {
        this.id = id
        this.name = name
        this.planetarySystem = planetarySystem
        this.orbit = orbit
        this.atmosphere = atmosphere
        this.building_points = building_points
        this.picture = picture
        this.storage = storage
        this.buildings = buildings
    }
}