import {Technology} from "../interfaces/Technology";
import {Mathematics} from "./Mathematics";

export class HigherMathematics implements Technology {
    public cost: Number
    public id: Number
    public name: String
    public requiredTechs: {}
    constructor() {
        this.cost = 700
        this.id = 8
        this.name = 'Высшая математика'
        this.requiredTechs = [new Mathematics()]
    }
}