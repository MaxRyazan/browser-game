import {ResourceInterface} from "../../interfaces/ResourceInterface";

export class MineralOre implements ResourceInterface {
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