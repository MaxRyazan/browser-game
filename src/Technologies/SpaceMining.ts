import {Technology} from "../interfaces/Technology";
import {Shipbuilding} from "./Shipbuilding";

export class SpaceMining implements Technology {
    public cost: Number
    public id: Number
    public name: String
    public requiredTechs: {}
    constructor() {
        this.cost = 2500
        this.id = 16
        this.name = 'Космическая добыча'
        this.requiredTechs = [new Shipbuilding()]
    }
}