import {Resource} from "../../interfaces/Resource";

export class MetalOre implements Resource {
    public baseMass: Number
    public id: Number
    public name: String
    amount: Number;
    constructor(amount: Number = 1) {
        this.baseMass = 1
        this. id = 1
        this.name = 'Металлическая руда'
        this.amount = amount
    }

}