import {Resource} from "../../interfaces/Resource";

export class MineralOre implements Resource{
    constructor(public baseMass: 1, public id: 3, public name: 'Минеральная руда') {}
}