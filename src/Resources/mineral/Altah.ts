import {Resource} from "../../interfaces/Resource";

export class Altah implements Resource {
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