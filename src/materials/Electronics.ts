import {Material} from "../interfaces/Material";
import {MetalOre} from "../Resources/ore/MetalOre";
import {MineralOre} from "../Resources/ore/MineralOre";
import {Quantium} from "../Resources/mineral/Quantium";

export class Electronics implements Material {
    public id: Number
    public mass: Number
    public amount: Number
    public name: String
    public resourcesForProduction: {}
    constructor(amount: Number = 1) {
        this. id = 8
        this.mass = 2
        this.name = 'Электроника'
        this.resourcesForProduction = [new MineralOre(), new MetalOre(), new Quantium()]
        this.amount = amount
    }
}