export class Planet {
    constructor(
        public id: Number,
        public name: String,
        public planetarySystem: Number,
        public orbit: Number,
        public atmosphere: Boolean,
        public building_points: Number,
        public storage: {},
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