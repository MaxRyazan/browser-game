import {Technology} from "../interfaces/Technology";
import {Biology} from "./Biology";

export class Medicine implements Technology {
    public cost: 400
    public id: 4
    public name: 'Медицина'
    public requiredTechs: [Biology]
}