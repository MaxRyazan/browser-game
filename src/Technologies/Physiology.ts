import {TechnologyInterface} from "../interfaces/TechnologyInterface";
import {Biology} from "./Biology";
import {Medicine} from "./Medicine";
import {Mathematics} from "./Mathematics";
import {Technology} from "../entities/Technology";

export class Physiology  extends Technology{
    public cost: Number
    public id: Number
    public name: String
    public requiredTechs: {}
    constructor() {
        super();
        this.cost = 900
        this.id = 9
        this.name = 'Физиология'
        this.requiredTechs = [new Mathematics(),new Biology(),new Medicine()]
    }

}