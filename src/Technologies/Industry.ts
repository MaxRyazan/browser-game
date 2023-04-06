import {TechnologyInterface} from "../interfaces/TechnologyInterface";
import {Mathematics} from "./Mathematics";
import {Technology} from "../entities/Technology";

export class Industry  extends Technology {
    public cost: Number
    public id: Number
    public name: String
    public requiredTechs: [Mathematics]
    constructor() {
        super();
        this.cost = 400
        this.id = 6
        this.name = 'Промышленность'
        this.requiredTechs = [new Mathematics()]
    }
}