import {Technology} from "../interfaces/Technology";
import {Shipbuilding} from "./Shipbuilding";
import {ArtificialIntelligence} from "./ArtificialIntelligence";

export class MilitaryShipbuilding implements Technology {
    public cost: 2500
    public id: 14
    public name: 'Военное кораблестроение'
    public requiredTechs: [ArtificialIntelligence, Shipbuilding]
}