import {Technology} from "../interfaces/Technology";
import {Shipbuilding} from "./Shipbuilding";
import {ArtificialIntelligence} from "./ArtificialIntelligence";


export class MilitaryShipbuilding implements Technology {
    public cost: Number
    public id: Number
    public name: String
    public requiredTechs: {}
    constructor() {
        this.cost = 2500
        this.id = 14
        this.name = 'Военное кораблестроение'
        this.requiredTechs = [new ArtificialIntelligence(), new Shipbuilding()]
    }
}