import {Technology} from "../interfaces/Technology";
import {Biology} from "./Biology";
import {Chemistry} from "./Chemistry";
import {Medicine} from "./Medicine";

export class Physiology implements Technology {
    public cost: 900
    public id: 9
    public name: 'Физиология'
    public requiredTechs: [Chemistry, Biology, Medicine]

}