import {Bonus, ReqTech} from "../entities/Technology";


export interface TechnologyInterface {
    id: Number
    name: String
    difficultCoefficient: number
    techLevel: number
    cost: number
    willBeLearnedAt: number
    requiredTechs: ReqTech[]
    bonusToModules?: Bonus[]
    bonusToBuildings?: Bonus[]
    bonusToShips?: Bonus[]
}