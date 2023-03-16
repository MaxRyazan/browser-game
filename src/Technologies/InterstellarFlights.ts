import {Technology} from "../interfaces/Technology";
import {Shipbuilding} from "./Shipbuilding";
import {Physiology} from "./Physiology";


export class InterstellarFlights implements Technology {
    public cost: Number
    public id: Number
    public name: String
    public requiredTechs: {}
    constructor() {
        this.cost = 5500
        this.id = 17
        this.name = 'Межзвёздные перелёты'
        this.requiredTechs = [new Physiology(), new Shipbuilding()]
    }
}