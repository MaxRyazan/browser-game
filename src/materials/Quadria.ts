import {Material} from "../interfaces/Material";
import {OrganicOre} from "../Resources/ore/OrganicOre";
import {MineralOre} from "../Resources/ore/MineralOre";
import {Delitium} from "../Resources/mineral/Delitium";
import {Quantium} from "../Resources/mineral/Quantium";


export class Quadria implements Material {
    public id: Number
    public mass: Number
    public name: String
    public resourcesForProduction: {}
    constructor() {
        this. id = 3
        this.mass = 20
        this.name = 'Квадрия'
        this.resourcesForProduction = [new MineralOre(), new MineralOre(), new OrganicOre(), new Delitium(), new Delitium(), new Quantium()]
    }
}