import {Technology} from "../interfaces/Technology";
import {Mathematics} from "./Mathematics";

export class Chemistry implements Technology{

    constructor(
        public cost: 200,
        public id: 3,
        public name: 'Химия',
        public requiredTechs: [Mathematics]
    ) {}
}