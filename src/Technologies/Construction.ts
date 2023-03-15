import {Technology} from "../interfaces/Technology";
import {Mathematics} from "./Mathematics";
import {Biology} from "./Biology";
import {Chemistry} from "./Chemistry";
import {Medicine} from "./Medicine";
import {Physics} from "./Physics";
import {Industry} from "./Industry";
import {Geometry} from "./Geometry";

export class Construction implements Technology{

    constructor(
        public cost: 1200,
        public id: 12,
        public name: 'Строительство',
        public requiredTechs: [Geometry]
    ) {}
}