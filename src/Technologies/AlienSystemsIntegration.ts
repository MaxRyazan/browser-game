import {Technology} from "../interfaces/Technology";
import {AlienTechnology} from "./AlienTechnology";
import {MilitaryShipbuilding} from "./MilitaryShipbuilding";

export class AlienSystemsIntegration implements Technology {
    public cost: Number
    public id: Number
    public name: String
    public requiredTechs: {}
    constructor() {
        this.cost = 15000
        this.id = 19
        this.name = 'Интеграция инопланетных систем'
        this.requiredTechs = [new AlienTechnology(), new MilitaryShipbuilding()]
    }

}