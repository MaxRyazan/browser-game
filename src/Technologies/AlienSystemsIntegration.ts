import {Technology} from "../interfaces/Technology";
import {AlienTechnology} from "./AlienTechnology";
import {MilitaryShipbuilding} from "./MilitaryShipbuilding";

export class AlienSystemsIntegration implements Technology {
    public cost: 15000
    public id: 19
    public name: 'Интеграция инопланетных систем'
    public requiredTechs: [AlienTechnology, MilitaryShipbuilding]

}