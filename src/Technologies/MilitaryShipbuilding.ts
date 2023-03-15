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

export class MilitaryShipbuilding implements Technology{

    constructor(
        public cost: 2500,
        public id: 14,
        public name: 'Военное кораблестроение',
        public requiredTechs: [ArtificialIntelligence, Shipbuilding]
    ) {}
}