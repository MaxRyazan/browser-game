import {TechnologyInterface} from "../interfaces/TechnologyInterface";
import {AlienTechnology} from "./AlienTechnology";
import {MilitaryShipbuilding} from "./MilitaryShipbuilding";
import {Technology} from "../entities/Technology";

export class AlienSystemsIntegration extends Technology{
    public cost: Number
    public id: Number
    public name: String
    public requiredTechs: {}
    constructor() {
        super();
        this.cost = 15000
        this.id = 19
        this.name = 'Интеграция инопланетных систем'
        this.requiredTechs = [new AlienTechnology(), new MilitaryShipbuilding()]
    }

}