import {Material} from "../interfaces/Material";
import {Tellurium} from "../Resources/mineral/Tellurium";
import {MetalOre} from "../Resources/ore/MetalOre";

export class Steel implements Material {
    public id: Number
    public mass: Number
    public name: String
    public resourcesForProduction: {}
    constructor() {
        this. id = 4
        this.mass = 4
        this.name = 'Сталь'
        this.resourcesForProduction = [new MetalOre(), new MetalOre(), new MetalOre(), new Tellurium()]
    }
}