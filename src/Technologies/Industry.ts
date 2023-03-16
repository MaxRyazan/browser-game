import {Technology} from "../interfaces/Technology";
import {Mathematics} from "./Mathematics";

export class Industry implements Technology {
    public cost: Number
    public id: Number
    public name: String
    public requiredTechs: [Mathematics]
    constructor() {
        this.cost = 400
        this.id = 6
        this.name = 'Промышленность'
        this.requiredTechs = [new Mathematics()]
    }
}