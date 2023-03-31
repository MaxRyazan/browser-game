import {ResourceInterface} from "../../interfaces/ResourceInterface";

export class Delitium implements ResourceInterface {
    public baseMass: Number
    public id: Number
    public name: String
    public amount: Number;
    constructor(amount: Number = 1) {
        this.baseMass = 3
        this. id = 4
        this.name = 'Делитий'
        this.amount = amount
    }

}