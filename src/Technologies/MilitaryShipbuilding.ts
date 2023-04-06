import {TechnologyInterface} from "../interfaces/TechnologyInterface";
import {Shipbuilding} from "./Shipbuilding";
import {ArtificialIntelligence} from "./ArtificialIntelligence";
import {Technology} from "../entities/Technology";


export class MilitaryShipbuilding  extends Technology {
    public cost: Number
    public id: Number
    public name: String
    public requiredTechs: {}
    constructor() {
        super();
        this.cost = 2500
        this.id = 14
        this.name = 'Военное кораблестроение'
        this.requiredTechs = [new ArtificialIntelligence(), new Shipbuilding()]
    }
}