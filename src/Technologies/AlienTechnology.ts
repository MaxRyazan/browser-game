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
import {InterstellarFlights} from "./InterstellarFlights";

export class AlienTechnology implements Technology{

    constructor(
        public cost: 7500,
        public id: 18,
        public name: 'Инопланетные технологии',
        public requiredTechs: [InterstellarFlights]
    ) {}
}