import {Technology} from "../interfaces/Technology";
import {Mathematics} from "./Mathematics";

export class Biology implements Technology{

    constructor(
        public cost: 300,
        public id: 2,
        public name: 'Биология',
        public requiredTechs: {null}
    ) {}
}