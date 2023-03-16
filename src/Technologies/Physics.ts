import {Technology} from "../interfaces/Technology";
import {Mathematics} from "./Mathematics";
import {Biology} from "./Biology";

export class Physics implements Technology {
    public cost: Number
    public id: Number
    public name: String
    public requiredTechs: {}
    constructor() {
        this.cost = 400
        this.id = 5
        this.name = 'Физика'
        this.requiredTechs = [new Mathematics(), new Biology()]
    }
}