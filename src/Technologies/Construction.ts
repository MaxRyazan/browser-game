import {Technology} from "../interfaces/Technology";
import {Geometry} from "./Geometry";

export class Construction implements Technology {
    public cost: 1200
    public id: 12
    public name: 'Строительство'
    public requiredTechs: [Geometry]

}