import {TechnologyInterface} from "../interfaces/TechnologyInterface";
import {Chemistry} from "./Chemistry";
import {Physics} from "./Physics";
import {Technology} from "../entities/Technology";

export class NuclearPhysics  extends Technology {
    public cost: Number
    public id: Number
    public name: String
    public requiredTechs: {}
    constructor() {
        super();
        this.cost = 1200
        this.id = 10
        this.name = 'Ядерная физика'
        this.requiredTechs = [new Chemistry(), new Physics()]
    }
}