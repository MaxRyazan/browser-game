import {Material} from "../interfaces/Material";
import {MetalOre} from "../Resources/ore/MetalOre";
import {MineralOre} from "../Resources/ore/MineralOre";
import {Quantium} from "../Resources/mineral/Quantium";

export class Electronics implements Material {
    public id: 8
    public mass: 2
    public name: 'Электроника'
    public resourcesForProduction: [MineralOre, MetalOre, Quantium]
}