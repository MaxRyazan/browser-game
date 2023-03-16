import {ConstructionMaterials} from "../materials/ConstructionMaterials";
import {Electronics} from "../materials/Electronics";
import {NuclearFuel} from "../materials/NuclearFuel";
import {ChemicalFuel} from "../materials/ChemicalFuel";
import {NanoFuel} from "../materials/NanoFuel";
import {Polymers} from "../materials/Polymers";
import {Quadria} from "../materials/Quadria";
import {Steel} from "../materials/Steel";
import {Vettur} from "../materials/Vettur";

export interface Building{
    id: Number
    name: String
    onGround: Boolean
    constInCR: Number
    constInIG?: Number
    requiredMaterials: {
        type: [ConstructionMaterials?, Electronics?, NuclearFuel?],
        amount: Number
    }
    canProduce:{
        resourcesPerHour?:{
            type: [ChemicalFuel?, ConstructionMaterials?, Electronics?, NanoFuel?, NuclearFuel?, Polymers?, Quadria?, Steel?, Vettur?]
            amount: Number
        },
        sciencePerHour?: Number
        CRPerHour?: Number
    }
}