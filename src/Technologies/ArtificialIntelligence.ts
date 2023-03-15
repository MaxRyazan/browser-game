import {Technology} from "../interfaces/Technology";
import {Mathematics} from "./Mathematics";
import {Biology} from "./Biology";
import {Chemistry} from "./Chemistry";
import {Medicine} from "./Medicine";
import {Physics} from "./Physics";
import {Industry} from "./Industry";
import {Geometry} from "./Geometry";
import {HigherMathematics} from "./HigherMathematics";

export class ArtificialIntelligence implements Technology{

    constructor(
        public cost: 1800,
        public id: 13,
        public name: 'Искусственный интеллект',
        public requiredTechs: [HigherMathematics]
    ) {}
}