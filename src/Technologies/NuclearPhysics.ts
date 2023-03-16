import {Technology} from "../interfaces/Technology";
import {Chemistry} from "./Chemistry";
import {Physics} from "./Physics";

export class NuclearPhysics implements Technology {
    public cost: Number
    public id: Number
    public name: String
    public requiredTechs: {}
    constructor() {
        this.cost = 1200
        this.id = 10
        this.name = 'Ядерная физика'
        this.requiredTechs = [new Chemistry(), new Physics()]
    }
}