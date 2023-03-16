import {Material} from "../interfaces/Material";
import {OrganicOre} from "../Resources/ore/OrganicOre";
import {Tellurium} from "../Resources/mineral/Tellurium";

export class Polymers implements Material {
    public id: Number
    public mass: Number
    public name: String
    public resourcesForProduction: {}
    constructor() {
        this. id = 1
        this.mass = 2
        this.name = 'Полимеры'
        this.resourcesForProduction = [new OrganicOre(), new OrganicOre(), new Tellurium()]
    }
}