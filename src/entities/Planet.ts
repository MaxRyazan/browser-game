import {PlanetarySystem} from "./PlanetarySystem";

export class Planet {
    constructor(
        public id: Number,
        public name: String,
        public planetarySystem: PlanetarySystem,
        public orbit: Number,
        public atmosphere: Boolean,
        public building_points: Number,
        public storage: {
            maxCapacity: Number,
            modules: {}
        },
        public picture: String
    ) {
        this.id = id
        this.name = name
        this.planetarySystem = planetarySystem
        this.orbit = orbit
        this.atmosphere = atmosphere
        this.building_points = building_points
        this.storage = storage
        this.picture = picture
    }
}