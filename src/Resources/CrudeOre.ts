import {ResourceInterface} from "../interfaces/ResourceInterface";

export class CrudeOre implements ResourceInterface{
    amount: Number;
    baseMass: Number;
    id: Number;
    name: String;
    constructor(amount: Number = 1) {
        this.baseMass = 2
        this. id = 8
        this.name = 'Неочищенная руда'
        this.amount = amount
    }
}