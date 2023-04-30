import {ModuleInterface} from "../interfaces/ModuleInterface";
import {RaceInterface} from "../interfaces/RaceInterface";
import {Material} from "../interfaces/Material";

export abstract class Module implements ModuleInterface{
    amount: Number;
    costInCR: Number;
    costInIG?: Number
    baseCostInMaterials: Material[];
    requiredFuel: { type: Material, amount: Number }
    willBeCreatedAt: Number
    baseParams: {
        moduleMass: Number;
        moduleSignature: Number;
        requiredEnergy: Number;
        requiredCargo: Number;
        requiredWorkers: Number
    };
    belongsToRace?: RaceInterface;
    bonusActionsToShips: {
        mining: Boolean;
        scanning: Boolean;
        construction: Boolean;
        lifeSupporting: Boolean;
        autoPilot: Boolean
    };
    bonusParamsToShip: {
        energy: Number;
        cargo: Number;
        speedInSubspace: Number;
        speedInNormalSpace: Number
    };
    costInBuildPoints: Number;
    id: Number;
    name: String;
    picture: String;
    requiredTech: {};
    moduleType: Number
}