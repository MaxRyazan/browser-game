import {Material} from "../interfaces/Material";
import {OrganicOre} from "../Resources/ore/OrganicOre";

export class ChemicalFuel implements Material {
    public id: Number
    public mass: Number
    public name: String
    public resourcesForProduction: {}
    constructor() {
        this. id = 5
        this.mass = 2
        this.name = 'Химическое топливо'
        this.resourcesForProduction = [new OrganicOre(), new OrganicOre()]
    }
}