import {RaceInterface} from "./RaceInterface";

export interface Module{
     id?: Number
     picture?: String
     requiredTech?: {}
     belongsToRace?: RaceInterface
     name?: String
     amount?: Number
    costInBuildPoints?: Number
     baseParams?: {
        baseMass: Number
        baseSignature: Number
        requiredEnergy: Number
        requiredCargo: Number
        requiredWorkers: Number
    }
     baseCostInMaterials?: {
        metal: Number
        electronic: Number
        polymers: Number
        requiredCRForBuild: Number
        requiredIGForBuild: Number
    }
     bonusParamsToShip?: {
        energy: Number
        cargo: Number
        speedInSubspace: Number
        speedInNormalSpace: Number
    }
     bonusActionsToShips?: {
        mining: Boolean
        scanning: Boolean
        construction: Boolean
        lifeSupporting: Boolean
        autoPilot: Boolean
    }
}