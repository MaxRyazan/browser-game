import {Technology} from "../interfaces/Technology";
import {Shipbuilding} from "./Shipbuilding";


export class SpaceMining implements Technology {
    public cost: 2500
    public id: 16
    public name: 'Космическая добыча'
    public requiredTechs: [Shipbuilding]
}