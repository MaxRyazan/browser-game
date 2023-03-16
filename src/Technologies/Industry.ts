import {Technology} from "../interfaces/Technology";
import {Mathematics} from "./Mathematics";

export class Industry implements Technology {
    public cost: 400
    public id: 6
    public name: 'Промышленность'
    public requiredTechs: [Mathematics]
}