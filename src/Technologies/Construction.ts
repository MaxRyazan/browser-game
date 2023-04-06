import {TechnologyInterface} from "../interfaces/TechnologyInterface";
import {Geometry} from "./Geometry";
import {Technology} from "../entities/Technology";


export class Construction  extends Technology {
    public cost: Number
    public id: Number
    public name: String
    public requiredTechs: {}
    constructor() {
        super();
        this.cost = 1200
        this.id = 12
        this.name = 'Строительство'
        this.requiredTechs = [new Geometry()]
    }
}