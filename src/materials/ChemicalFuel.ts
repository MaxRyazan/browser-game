import {Material} from "../interfaces/Material";
import {OrganicOre} from "../Resources/ore/OrganicOre";
import {Tellurium} from "../Resources/mineral/Tellurium";

export class ChemicalFuel implements Material {

    constructor(
        public id: 5, public mass: 2, public name: 'Химическое топливо',
        public resourcesForProduction: [OrganicOre, OrganicOre]
    ) {}
}