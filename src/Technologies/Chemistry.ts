import {Technology} from "../interfaces/Technology";
import {Mathematics} from "./Mathematics";

export class Chemistry implements Technology {
    public cost: Number
    public id: Number
    public name: String
    public requiredTechs: {}
    constructor() {
        this.cost = 200
        this.id = 3
        this.name = 'Химия'
        this.requiredTechs = [new Mathematics()]
    }

}