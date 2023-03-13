export interface Module{
    id: Number
    name: String
    lvl: Number
    costInNP: Number
    requiredTech: []
    picture: String
    belongsToRace: {}
    type: {military: Boolean, civilian: Boolean, neutral: Boolean}
    baseParams: {
        baseMass: Number
        baseSignature: Number
        requiredEnergy: Number
        requiredCargo: Number
        requiredWorkers: Number
        baseCostInMaterials:{
            metal: Number
            electronic: Number
            polymers: Number
        }
        requiredCRForBuild: Number
        requiredIGForBuild: Number
    }
    bonusesToShip:{
        energy: Number
        cargo: Number
        speedInSubspace: Number
        speedInNormalSpace: Number
        mining: Boolean
        scanning: Boolean
        construction: Boolean
        lifeSupporting: Boolean
        autoPilot: Boolean
    }
    commands: {
        flyInNormalSpace: Boolean
        flyInSubSpace: Boolean
        mine: Boolean
        attack: Boolean
        build: Boolean
        scan: Boolean
    }
}