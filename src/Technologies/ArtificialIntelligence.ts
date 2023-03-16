import {Technology} from "../interfaces/Technology";
import {HigherMathematics} from "./HigherMathematics";

export class ArtificialIntelligence implements Technology {
    public cost: Number
    public id: Number
    public name: String
    public requiredTechs: {}
    constructor() {
        this.cost = 1800
        this.id = 13
        this.name = 'Искусственный интеллект'
        this.requiredTechs = [new HigherMathematics()]
    }
}