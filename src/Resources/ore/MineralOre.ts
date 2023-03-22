import {Resource} from "../../interfaces/Resource";

export class MineralOre implements Resource {
    public baseMass: Number
    public id: Number
    public name: String
    amount: Number;
    constructor(amount: Number = 1) {
        this.baseMass = 1
        this. id = 3
        this.name = 'Минеральная руда'
        this.amount = amount
    }

}