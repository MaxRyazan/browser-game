import {Material} from "../interfaces/Material";
import {OrganicOre} from "../Resources/ore/OrganicOre";

export class ChemicalFuel implements Material {
    public id: 5
    public mass: 2
    public name: 'Химическое топливо'
    public resourcesForProduction: [OrganicOre, OrganicOre]
}