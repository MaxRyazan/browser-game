import {Material} from "../interfaces/Material";
import {OrganicOre} from "../Resources/ore/OrganicOre";
import {Tellurium} from "../Resources/mineral/Tellurium";
import {Delitium} from "../Resources/mineral/Delitium";
import {MineralOre} from "../Resources/ore/MineralOre";
import {MetalOre} from "../Resources/ore/MetalOre";

export class Polymers implements Material {

    constructor(
        public id: 6, public mass: 4, public name: 'Ядерное топливо',
        public resourcesForProduction: [Delitium, MineralOre, MetalOre]
    ) {}
}