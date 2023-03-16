import {Technology} from "../interfaces/Technology";
import {Shipbuilding} from "./Shipbuilding";
import {Physiology} from "./Physiology";

export class InterstellarFlights implements Technology {
    public cost: 5500
    public id: 17
    public name: 'Межзвёздные перелёты'
    public requiredTechs: [Physiology, Shipbuilding]
}