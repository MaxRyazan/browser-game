import {Resource} from "../../interfaces/Resource";

export class Quantium implements Resource {
    public baseMass: Number
    public id: Number
    public name: String
    amount: Number;
    constructor(amount: Number = 1) {
        this.baseMass = 3
        this. id = 5
        this.name = 'Квантиум'
        this.amount = amount
    }

}