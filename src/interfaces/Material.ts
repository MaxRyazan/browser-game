export interface Material {
    id: Number
    name: String
    params:{
        mass: Number
        priceInCR: Number
    }
    resourcesForBuild:{
        metalOre: Number
        organicOre: Number
        mineralOre: Number
    }
}