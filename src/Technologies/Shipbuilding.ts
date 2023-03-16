import {Technology} from "../interfaces/Technology";
import {Industry} from "./Industry";


export class Shipbuilding implements Technology {
    public cost: Number
    public id: Number
    public name: String
    public requiredTechs: {}
    constructor() {
        this.cost = 1200
        this.id = 11
        this.name = 'Кораблестроение'
        this.requiredTechs = [new Industry()]
    }
}