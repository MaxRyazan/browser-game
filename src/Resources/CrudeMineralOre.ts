import {ResourceInterface} from "../interfaces/ResourceInterface";

export class CrudeMineralOre implements ResourceInterface{
    amount: Number;
    baseMass: Number;
    id: Number;
    name: String;
    constructor(amount: Number = 1) {
        this.baseMass = 12
        this. id = 9
        this.name = 'Неочищенная минеральная руда'
        this.amount = amount
    }
}