import {Material} from "./Material";
import {Resource} from "./Resource";
import {Detail} from "./Detail";

export interface Building{
    id: Number
    name: String
    onGround: Boolean
    constInCR: Number
    constInIG?: Number
    basePower: Number
    requiredMaterials: {
        type: Material[] | Resource[],
        amount: Number
    }
    canProduce:{
        type: Resource[] | Material[] | Detail[]
        amount: Number
    }
}