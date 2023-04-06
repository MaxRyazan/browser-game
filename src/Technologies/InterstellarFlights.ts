import {TechnologyInterface} from "../interfaces/TechnologyInterface";
import {Shipbuilding} from "./Shipbuilding";
import {Physiology} from "./Physiology";
import {Technology} from "../entities/Technology";


export class InterstellarFlights  extends Technology {
    public cost: Number
    public id: Number
    public name: String
    public requiredTechs: {}
    constructor() {
        super();
        this.cost = 5500
        this.id = 17
        this.name = 'Межзвёздные перелёты'
        this.requiredTechs = [new Physiology(), new Shipbuilding()]
    }
}