import {Material} from "../interfaces/Material";
import {OrganicOre} from "../Resources/ore/OrganicOre";
import {MineralOre} from "../Resources/ore/MineralOre";
import {Delitium} from "../Resources/mineral/Delitium";
import {Quantium} from "../Resources/mineral/Quantium";

export class Quadria implements Material {
    public id: 3
    public mass: 20
    public name: 'Квадрия'
    public resourcesForProduction: [MineralOre, MineralOre, OrganicOre, Delitium, Delitium, Quantium]
}