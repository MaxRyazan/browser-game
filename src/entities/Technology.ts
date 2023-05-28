import {TechnologyInterface} from "../interfaces/TechnologyInterface";
import {Module} from "./Module";
import {Building} from "./Building";
import {Ship} from "../ARCHIVE/Ship";

export interface ReqTech{
    technology: Technology,
    techLevel: Number
}

export interface Bonus{
    bonusTo: Module[] | Building[] | Ship[],
    bonusSize: Number
}

export abstract class Technology implements TechnologyInterface{
    id: Number;
    name: String;
    difficultCoefficient: number
    cost: number;
    techLevel: number;
    willBeLearnedAt: number
    requiredTechs: ReqTech[]
    bonusToModules: Bonus[]
    bonusToBuildings: Bonus[]
    bonusToShips: Bonus[]
}