import {Technology} from "../interfaces/Technology";
import {Mathematics} from "./Mathematics";

export class Geometry implements Technology{

    constructor(
        public cost: 400,
        public id: 7,
        public name: 'Геометрия',
        public requiredTechs: [Mathematics]
    ) {}
}