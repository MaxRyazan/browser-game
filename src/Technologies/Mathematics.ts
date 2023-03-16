import {Technology} from "../interfaces/Technology";

export class Mathematics implements Technology {
    public cost: Number
    public id: Number
    public name: String
    public requiredTechs: {}
    constructor() {
        this.cost = 300
        this.id = 1
        this.name = 'Математика'
        this.requiredTechs = [null]
    }
}