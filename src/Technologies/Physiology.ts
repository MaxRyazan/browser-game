import {Technology} from "../interfaces/Technology";
import {Biology} from "./Biology";
import {Medicine} from "./Medicine";
import {Mathematics} from "./Mathematics";

export class Physiology implements Technology {
    public cost: Number
    public id: Number
    public name: String
    public requiredTechs: {}
    constructor() {
        this.cost = 900
        this.id = 9
        this.name = 'Физиология'
        this.requiredTechs = [new Mathematics(),new Biology(),new Medicine()]
    }

}