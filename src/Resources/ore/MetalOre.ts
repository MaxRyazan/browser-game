import {Resource} from "../../interfaces/Resource";

export class MetalOre implements Resource{
    constructor(public baseMass: 1, public id: 1, public name: 'Металлическая руда') {}
}