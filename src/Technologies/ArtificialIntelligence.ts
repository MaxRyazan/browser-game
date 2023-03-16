import {Technology} from "../interfaces/Technology";
import {HigherMathematics} from "./HigherMathematics";

export class ArtificialIntelligence implements Technology {
    public cost: 1800
    public id: 13
    public name: 'Искусственный интеллект'
    public requiredTechs: [HigherMathematics]
}