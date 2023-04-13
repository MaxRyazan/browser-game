import {ResourceInterface} from "../../interfaces/ResourceInterface";

export class Quantium implements ResourceInterface {
    public baseMass: Number
    public id: Number
    public name: String
    amount: Number;
    constructor(amount: Number = 1) {
        this.baseMass = 3
        this.id = 5
        this.name = 'Квантиум'
        this.amount = amount
    }

}