import {TechnologyInterface} from "../interfaces/TechnologyInterface";

export abstract class Technology implements TechnologyInterface{
    cost: Number;
    id: Number;
    name: String;
    requiredTechs: {};

}