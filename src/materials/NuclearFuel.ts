import {Material} from "../interfaces/Material";
import {Delitium} from "../Resources/mineral/Delitium";
import {MineralOre} from "../Resources/ore/MineralOre";
import {MetalOre} from "../Resources/ore/MetalOre";


export class NuclearFuel implements Material {
    public id: Number
    public mass: Number
    public name: String
    public resourcesForProduction: {}
    amount: Number;
    constructor(amount: Number = 1) {
        this. id = 6
        this.mass = 4
        this.name = 'Ядерное топлливо'
        this.resourcesForProduction = [new Delitium(), new MineralOre(), new MetalOre()]
        this.amount = amount
    }

}