import {Material} from "../interfaces/Material";
import {MineralOre} from "../Resources/ore/MineralOre";
import {MetalOre} from "../Resources/ore/MetalOre";

export class ConstructionMaterials implements Material {
    public id: 9
    public mass: 4
    public name: 'Строительные материалы'
    public resourcesForProduction: [MineralOre, MineralOre, MetalOre, MetalOre]
}