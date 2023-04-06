import {TechnologyInterface} from "../interfaces/TechnologyInterface";
import {Mathematics} from "./Mathematics";
import {Technology} from "../entities/Technology";

export class Geometry  extends Technology {
    public cost: Number
    public id: Number
    public name: String
    public requiredTechs: {}
    constructor() {
        super();
        this.cost = 400
        this.id = 7
        this.name = 'Геометрия'
        this.requiredTechs = [new Mathematics()]
    }
}