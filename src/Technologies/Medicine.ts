import {Technology} from "../interfaces/Technology";
import {Mathematics} from "./Mathematics";
import {Biology} from "./Biology";

export class Medicine implements Technology{

    constructor(
        public cost: 400,
        public id: 4,
        public name: 'Медицина',
        public requiredTechs: [Biology]
    ) {}
}