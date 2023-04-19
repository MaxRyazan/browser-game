import {Material} from "./Material";
import {ResourceInterface} from "./ResourceInterface";
import {Resource} from "../entities/Resource";
import {Module} from "../entities/Module";

export interface BuildingInterface {
    id: Number
    name: String
    picture: String
    onGround: Boolean
    costInCR: Number
    costInIG?: Number
    amount: Number
    buildComponentsSpeed?: Number
    buildOtherBuildingsSpeed?: Number
    requiredMaterials: Material[]
    canProduce?:{
        type: ResourceInterface[] | Material[] | Module[]
        amount: Number
    }
    resourcesNeedToFunctionality?: {
        type: Resource[];
        amount: Number
    };
    addPeopleToPlanet: Number;
    peopleNeedToFunctionality: Number
    addEnergyToPlanet: Number
    energyNeedToFunctionality: Number
    addStoreToPlanet: Number
    fuelNeedToFunctionalityPerDay: {fuelType: Material | ResourceInterface, required: Number} | 0
    fuelLoadTime? : Number
    buildingType: Number
    buildingEffectiveCoefficient: Number
}