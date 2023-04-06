import {TechnologyInterface} from "../interfaces/TechnologyInterface";
import {Technology} from "../entities/Technology";

export class Mathematics  extends Technology {
    public cost: Number
    public id: Number
    public name: String
    public requiredTechs: {}
    constructor() {
        super();
        this.cost = 300
        this.id = 1
        this.name = 'Математика'
        this.requiredTechs = [null]
    }
}