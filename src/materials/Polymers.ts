import {Material} from "../interfaces/Material";
import {OrganicOre} from "../Resources/ore/OrganicOre";
import {Tellurium} from "../Resources/mineral/Tellurium";

export class Polymers implements Material {
    public id: 1
    public mass: 2
    public name: 'Полимеры'
    public resourcesForProduction: [OrganicOre, OrganicOre, Tellurium]
}