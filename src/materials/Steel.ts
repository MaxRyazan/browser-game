import {Material} from "../interfaces/Material";
import {Tellurium} from "../Resources/mineral/Tellurium";
import {MetalOre} from "../Resources/ore/MetalOre";

export class Steel implements Material {
    public id: 4
    public mass: 4
    public name: 'Сталь'
    public resourcesForProduction: [MetalOre, MetalOre, MetalOre, Tellurium]
}