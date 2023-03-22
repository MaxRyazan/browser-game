import {Resource} from "../../interfaces/Resource";

export class OrganicOre implements Resource {
    public baseMass: Number
    public id: Number
    public name: String
    amount: Number;
    constructor(amount: Number = 1) {
        this.baseMass = 1
        this. id = 2
        this.name = 'Органическая руда'
        this.amount = amount
    }
}