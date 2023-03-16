import {Technology} from "../interfaces/Technology";
import {Chemistry} from "./Chemistry";
import {Physics} from "./Physics";

export class NuclearPhysics implements Technology {
    public cost: 1200
    public id: 10
    public name: 'Ядерная физика'
    public requiredTechs: [Chemistry, Physics]
}