export class PlanetarySystem{
    constructor(public id: Number, public name: String, public coordinates: {x: Number, y: Number}, public orbits: Number, public planets: {}) {
        this.id = id
        this.name = name
        this.coordinates = coordinates
        this.orbits = orbits
        this.planets = planets
    }
}