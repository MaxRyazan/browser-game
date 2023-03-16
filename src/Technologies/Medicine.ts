import {Technology} from "../interfaces/Technology";
import {Biology} from "./Biology";


export class Medicine implements Technology {
    public cost: Number
    public id: Number
    public name: String
    public requiredTechs: {}
    constructor() {
        this.cost = 400
        this.id = 4
        this.name = 'Медицина'
        this.requiredTechs = [new Biology()]
    }
}