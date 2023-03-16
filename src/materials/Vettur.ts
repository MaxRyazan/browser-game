import {Material} from "../interfaces/Material";
import {MetalOre} from "../Resources/ore/MetalOre";
import {MineralOre} from "../Resources/ore/MineralOre";
import {Quantium} from "../Resources/mineral/Quantium";
import {Delitium} from "../Resources/mineral/Delitium";

export class Vettur implements Material {
    public id: 2
    public mass: 8
    public name: 'Веттур'
    public resourcesForProduction: [MetalOre, MineralOre, Quantium, Delitium]
}