import {TechnologyInterface} from "../interfaces/TechnologyInterface";
import {Biology} from "./Biology";
import {Technology} from "../entities/Technology";


export class Medicine  extends Technology {
    public cost: Number
    public id: Number
    public name: String
    public requiredTechs: {}
    constructor() {
        super();
        this.cost = 400
        this.id = 4
        this.name = 'Медицина'
        this.requiredTechs = [new Biology()]
    }
}