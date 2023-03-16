import {Material} from "../interfaces/Material";
import {OrganicOre} from "../Resources/ore/OrganicOre";
import {Tellurium} from "../Resources/mineral/Tellurium";
import {Delitium} from "../Resources/mineral/Delitium";
import {Quantium} from "../Resources/mineral/Quantium";

export class NanoFuel implements Material {
    public id: Number
    public mass: Number
    public name: String
    public resourcesForProduction: {}
    constructor() {
        this. id = 7
        this.mass = 16
        this.name = 'Нано топлливо'
        this.resourcesForProduction = [new Delitium(), new Quantium(), new Tellurium(), new OrganicOre()]
    }
}