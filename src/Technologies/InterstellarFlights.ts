import {Technology} from "../interfaces/Technology";
import {Mathematics} from "./Mathematics";
import {Biology} from "./Biology";
import {Chemistry} from "./Chemistry";
import {Medicine} from "./Medicine";
import {Physics} from "./Physics";
import {Industry} from "./Industry";
import {Geometry} from "./Geometry";
import {HigherMathematics} from "./HigherMathematics";
import {Shipbuilding} from "./Shipbuilding";
import {ArtificialIntelligence} from "./ArtificialIntelligence";
import {Physiology} from "./Physiology";

export class InterstellarFlights implements Technology{

    constructor(
        public cost: 5500,
        public id: 17,
        public name: 'Межзвёздные перелёты',
        public requiredTechs: [Physiology, Shipbuilding]
    ) {}
}