import {Material} from "../interfaces/Material";
import {Tellurium} from "../Resources/mineral/Tellurium";
import {MetalOre} from "../Resources/ore/MetalOre";

export class Steel implements Material {
    public id: Number
    public mass: Number
    public name: String
    public resourcesForProduction: {}
    amount: Number;
    constructor(amount: Number = 1) {
        this.id = 4
        this.mass = 4
        this.name = 'Сталь'
        this.resourcesForProduction = [new MetalOre(3), new Tellurium()]
        this.amount = amount
    }

}