import {Technology} from "../interfaces/Technology";
import {Mathematics} from "./Mathematics";
import {Biology} from "./Biology";
import {Chemistry} from "./Chemistry";
import {Medicine} from "./Medicine";
import {Physics} from "./Physics";
import {Industry} from "./Industry";

export class Shipbuilding implements Technology{

    constructor(
        public cost: 1200,
        public id: 11,
        public name: 'Кораблестроение',
        public requiredTechs: [Industry]
    ) {}
}