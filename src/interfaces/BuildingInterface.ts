import {Material} from "./Material";
import {Resource} from "./Resource";
import {Detail} from "./Detail";

export interface BuildingInterface {
    id: Number
    name: String
    onGround: Boolean
    costInCR: Number
    costInIG?: Number
    amount: Number
    buildComponentsSpeed?: Number
    buildOtherBuildingsSpeed?: Number
    requiredMaterials: Material[]
    canProduce?:{
        type: Resource[] | Material[] | Detail[]
        amount: Number
    }
}