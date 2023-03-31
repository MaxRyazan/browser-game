import {ResourceInterface} from "../../interfaces/ResourceInterface";

export class Altah implements ResourceInterface {
    public baseMass: Number
    public id: Number
    public name: String
    public amount: Number;
    constructor(amount: Number = 1) {
        this.baseMass = 10
        this. id = 7
        this.name = 'Альтах'
        this.amount = amount
    }

}