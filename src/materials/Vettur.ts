import {Material} from "../interfaces/Material";
import {MetalOre} from "../Resources/ore/MetalOre";
import {MineralOre} from "../Resources/ore/MineralOre";
import {Quantium} from "../Resources/mineral/Quantium";
import {Delitium} from "../Resources/mineral/Delitium";


export class Vettur implements Material {
    public id: Number
    public mass: Number
    public name: String
    public resourcesForProduction: {}
    amount: Number;
    constructor(amount: Number = 1) {
        this. id = 2
        this.mass = 8
        this.name = 'Веттур'
        this.resourcesForProduction = [new MetalOre(), new MineralOre(), new Quantium(), new Delitium()]
        this.amount = amount
    }

}