import {Technology} from "../interfaces/Technology";
import {Mathematics} from "./Mathematics";

export class Geometry implements Technology {
    public cost: Number
    public id: Number
    public name: String
    public requiredTechs: {}
    constructor() {
        this.cost = 400
        this.id = 7
        this.name = 'Геометрия'
        this.requiredTechs = [new Mathematics()]
    }
}