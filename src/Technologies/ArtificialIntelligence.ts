import {TechnologyInterface} from "../interfaces/TechnologyInterface";
import {HigherMathematics} from "./HigherMathematics";
import {Technology} from "../entities/Technology";

export class ArtificialIntelligence  extends Technology {
    public cost: Number
    public id: Number
    public name: String
    public requiredTechs: {}
    constructor() {
        super();
        this.cost = 1800
        this.id = 13
        this.name = 'Искусственный интеллект'
        this.requiredTechs = [new HigherMathematics()]
    }
}