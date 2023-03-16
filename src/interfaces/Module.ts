import {Race} from "./Race";

export interface Module{
     id?: Number
     picture?: String
     requiredTech?: {}
     belongsToRace?: Race
     name?: String
     amount?: Number
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