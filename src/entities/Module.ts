import {ModuleInterface} from "../interfaces/ModuleInterface";
import {RaceInterface} from "../interfaces/RaceInterface";

export abstract class Module implements ModuleInterface{
    amount: Number;
    baseCostInMaterials: { metal: Number; electronic: Number; polymers: Number; requiredCRForBuild: Number; requiredIGForBuild: Number };
    baseParams: { baseMass: Number; baseSignature: Number; requiredEnergy: Number; requiredCargo: Number; requiredWorkers: Number };
    belongsToRace?: RaceInterface;
    bonusActionsToShips: { mining: Boolean; scanning: Boolean; construction: Boolean; lifeSupporting: Boolean; autoPilot: Boolean };
    bonusParamsToShip: { energy: Number; cargo: Number; speedInSubspace: Number; speedInNormalSpace: Number };
    costInBuildPoints: Number;
    id: Number;
    name: String;
    picture: String;
    requiredTech: {};

}