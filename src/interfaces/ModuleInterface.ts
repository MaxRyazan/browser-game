import {RaceInterface} from "./RaceInterface";
import {Material} from "./Material";
import {CrudeOre} from "../Resources/CrudeOre";
import {CrudeMineralOre} from "../Resources/CrudeMineralOre";

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
    willBeCreatedAt: Number
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
        canAttack?: Boolean;
    }
    bonusActionsToShips: {
        mining: Boolean
        scanning: Boolean
        construction: Boolean
        lifeSupporting: Boolean
        autoPilot: Boolean
    }
    moduleType: Number
    attackParams?: {
        radius: Number,
        baseDamage: Number,
    }
    defenceParams?: {
        bonusHp: Number
    }
    miningParams?: {
        canMining: { type: [CrudeOre, CrudeMineralOre], amount: Number }
        miningSpeed: Number
    }
}