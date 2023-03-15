import {Technology} from "../interfaces/Technology";
import {Mathematics} from "./Mathematics";
import {Biology} from "./Biology";

export class Industry implements Technology{

    constructor(
        public cost: 400,
        public id: 6,
        public name: 'Промышленность',
        public requiredTechs: [Mathematics]
    ) {}
}