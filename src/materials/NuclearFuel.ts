import {Material} from "../interfaces/Material";
import {Delitium} from "../Resources/mineral/Delitium";
import {MineralOre} from "../Resources/ore/MineralOre";
import {MetalOre} from "../Resources/ore/MetalOre";

export class NuclearFuel implements Material {
    public id: 6
    public mass: 4
    public name: 'Ядерное топливо'
    public resourcesForProduction: [Delitium, MineralOre, MetalOre]
}