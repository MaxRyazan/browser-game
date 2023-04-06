import {TechnologyInterface} from "../interfaces/TechnologyInterface";
import {Shipbuilding} from "./Shipbuilding";
import {Technology} from "../entities/Technology";

export class SpaceMining  extends Technology {
    public cost: Number
    public id: Number
    public name: String
    public requiredTechs: {}
    constructor() {
        super();
        this.cost = 2500
        this.id = 16
        this.name = 'Космическая добыча'
        this.requiredTechs = [new Shipbuilding()]
    }
}