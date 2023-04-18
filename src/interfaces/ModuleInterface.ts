import {RaceInterface} from "./RaceInterface";
import {Material} from "./Material";

export interface ModuleInterface {
     id: Number
     picture: String
     requiredTech: {}
     belongsToRace?: RaceInterface
     name: String
     amount: Number
     costInCR: Number
     costInIG?: Number
     costInBuildPoints: Number
     requiredFuel: { type: Material, amount: Number }
     baseParams: {
         moduleMass: Number
         moduleSignature: Number
         requiredEnergy: Number
         requiredCargo: Number
         requiredWorkers: Number
    }
     baseCostInMaterials: Material[];

     bonusParamsToShip: {
        energy: Number
        cargo: Number
        speedInSubspace: Number
        speedInNormalSpace: Number
    }
     bonusActionsToShips: {
        mining: Boolean
        scanning: Boolean
        construction: Boolean
        lifeSupporting: Boolean
        autoPilot: Boolean
    }
}