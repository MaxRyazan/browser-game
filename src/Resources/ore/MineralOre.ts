import {Resource} from "../../interfaces/Resource";

export class MineralOre implements Resource {
    public baseMass: Number
    public id: Number
    public name: String
    constructor() {
        this.baseMass = 1
        this. id = 3
        this.name = 'Минеральная руда'
    }
}