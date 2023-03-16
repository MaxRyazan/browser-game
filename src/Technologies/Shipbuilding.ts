import {Technology} from "../interfaces/Technology";
import {Industry} from "./Industry";

export class Shipbuilding implements Technology {
    public cost: 1200
    public id: 11
    public name: 'Кораблестроение'
    public requiredTechs: [Industry]
}