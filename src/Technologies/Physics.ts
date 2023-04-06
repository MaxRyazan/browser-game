import {TechnologyInterface} from "../interfaces/TechnologyInterface";
import {Mathematics} from "./Mathematics";
import {Biology} from "./Biology";
import {Technology} from "../entities/Technology";

export class Physics extends Technology {
    public cost: Number
    public id: Number
    public name: String
    public requiredTechs: {}
    constructor() {
        super();
        this.cost = 400
        this.id = 5
        this.name = 'Физика'
        this.requiredTechs = [new Mathematics(), new Biology()]
    }
}