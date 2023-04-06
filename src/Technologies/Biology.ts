import {TechnologyInterface} from "../interfaces/TechnologyInterface";
import {Technology} from "../entities/Technology";

export class Biology  extends Technology {
    public cost: Number
    public id: Number
    public name: String
    public requiredTechs: {}
    constructor() {
        super();
        this.cost = 300
        this.id = 2
        this.name = 'Биология'
        this.requiredTechs = [null]
    }

}