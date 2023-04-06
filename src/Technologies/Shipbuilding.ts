import {TechnologyInterface} from "../interfaces/TechnologyInterface";
import {Industry} from "./Industry";
import {Technology} from "../entities/Technology";


export class Shipbuilding  extends Technology {
    public cost: Number
    public id: Number
    public name: String
    public requiredTechs: {}
    constructor() {
        super();
        this.cost = 1200
        this.id = 11
        this.name = 'Кораблестроение'
        this.requiredTechs = [new Industry()]
    }
}