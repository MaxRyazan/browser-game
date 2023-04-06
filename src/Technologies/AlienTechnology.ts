import {TechnologyInterface} from "../interfaces/TechnologyInterface";
import {InterstellarFlights} from "./InterstellarFlights";
import {Technology} from "../entities/Technology";


export class AlienTechnology extends Technology {
    public cost: Number
    public id: Number
    public name: String
    public requiredTechs: {}
    constructor() {
        super();
        this.cost = 700
        this.id = 8
        this.name = 'Высшая математика'
        this.requiredTechs = [new InterstellarFlights()]
    }

}