import {Material} from "../interfaces/Material";
import {MineralOre} from "../Resources/ore/MineralOre";
import {MetalOre} from "../Resources/ore/MetalOre";

export class ConstructionMaterials implements Material {
    public id: Number
    public mass: Number
    public name: String
    public resourcesForProduction: {}
    amount: Number;
    constructor(amount: Number = 1) {
        this.id = 9
        this.mass = 4
        this.name = 'Строительные материалы'
        this.resourcesForProduction = [new MineralOre(2), new MetalOre(3)]
        this.amount = amount
    }

}