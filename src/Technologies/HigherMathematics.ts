import {Technology} from "../interfaces/Technology";
import {Mathematics} from "./Mathematics";

export class HigherMathematics implements Technology {
    public cost: 700
    public id: 8
    public name: 'Высшая математика'
    public requiredTechs: [Mathematics]
}