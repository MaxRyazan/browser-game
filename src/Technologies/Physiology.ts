import {Technology} from "../interfaces/Technology";
import {Mathematics} from "./Mathematics";
import {Biology} from "./Biology";
import {Chemistry} from "./Chemistry";
import {Medicine} from "./Medicine";

export class Physiology implements Technology{

    constructor(
        public cost: 900,
        public id: 9,
        public name: 'Физиология',
        public requiredTechs: [Chemistry, Biology, Medicine]
    ) {}
}