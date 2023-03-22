import {Resource} from "../../interfaces/Resource";

export class Delitium implements Resource {
    public baseMass: Number
    public id: Number
    public name: String
    amount: Number;
    constructor(amount: Number = 1) {
        this.baseMass = 3
        this. id = 4
        this.name = 'Делитий'
        this.amount = amount
    }

}