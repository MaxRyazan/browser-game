import {Technology} from "../interfaces/Technology";
import {Mathematics} from "./Mathematics";
import {Biology} from "./Biology";
import {Chemistry} from "./Chemistry";
import {Medicine} from "./Medicine";
import {Physics} from "./Physics";

export class NuclearPhysics implements Technology{

    constructor(
        public cost: 1200,
        public id: 10,
        public name: 'Ядерная физика',
        public requiredTechs: [Chemistry, Physics]
    ) {}
}