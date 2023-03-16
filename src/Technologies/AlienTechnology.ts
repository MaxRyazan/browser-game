import {Technology} from "../interfaces/Technology";
import {InterstellarFlights} from "./InterstellarFlights";

export class AlienTechnology implements Technology {
    public cost: 7500
    public id: 18
    public name: 'Инопланетные технологии'
    public requiredTechs: [InterstellarFlights]

}