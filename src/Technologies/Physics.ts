import {Technology} from "../interfaces/Technology";
import {Mathematics} from "./Mathematics";
import {Biology} from "./Biology";

export class Physics implements Technology{

    constructor(
        public cost: 400,
        public id: 5,
        public name: 'Физика',
        public requiredTechs: [Mathematics, Biology]
    ) {}
}