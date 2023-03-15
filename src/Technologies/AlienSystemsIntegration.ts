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
import {AlienTechnology} from "./AlienTechnology";
import {MilitaryShipbuilding} from "./MilitaryShipbuilding";

export class AlienSystemsIntegration implements Technology{

    constructor(
        public cost: 15000,
        public id: 19,
        public name: 'Интеграция инопланетных систем',
        public requiredTechs: [AlienTechnology, MilitaryShipbuilding]
    ) {}
}