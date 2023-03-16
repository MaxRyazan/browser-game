import {Technology} from "../interfaces/Technology";

export class Biology implements Technology {
    public cost: Number
    public id: Number
    public name: String
    public requiredTechs: {}
    constructor() {
        this.cost = 300
        this.id = 2
        this.name = 'Биология'
        this.requiredTechs = [null]
    }

}