import {Technology} from "../interfaces/Technology";
import {Geometry} from "./Geometry";


export class Construction implements Technology {
    public cost: Number
    public id: Number
    public name: String
    public requiredTechs: {}
    constructor() {
        this.cost = 1200
        this.id = 12
        this.name = 'Строительство'
        this.requiredTechs = [new Geometry()]
    }
}