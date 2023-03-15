import {Material} from "../interfaces/Material";
import {OrganicOre} from "../Resources/ore/OrganicOre";
import {Tellurium} from "../Resources/mineral/Tellurium";
import {Delitium} from "../Resources/mineral/Delitium";
import {Quantium} from "../Resources/mineral/Quantium";

export class NanoFuel implements Material {

    constructor(
        public id: 7, public mass: 16, public name: 'Нано топлливо',
        public resourcesForProduction: [Delitium, Quantium, Tellurium, OrganicOre]
    ) {}
}