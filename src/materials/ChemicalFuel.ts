import {Material} from "../interfaces/Material";
import {OrganicOre} from "../Resources/ore/OrganicOre";

export class ChemicalFuel implements Material {
    public id: Number
    public mass: Number
    public name: String
    public resourcesForProduction: {}
    amount: Number;
    constructor(amount: Number = 1) {
        this. id = 5
        this.mass = 2
        this.amount = 1
        this.name = 'Химическое топливо'
        this.resourcesForProduction = [new OrganicOre(), new OrganicOre()]
        this.amount = amount
    }

}