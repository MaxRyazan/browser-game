import {TechnologyInterface} from "../interfaces/TechnologyInterface";
import {Mathematics} from "./Mathematics";
import {Technology} from "../entities/Technology";

export class Chemistry  extends Technology {
    public cost: Number
    public id: Number
    public name: String
    public requiredTechs: {}
    constructor() {
        super();
        this.cost = 200
        this.id = 3
        this.name = 'Химия'
        this.requiredTechs = [new Mathematics()]
    }

}