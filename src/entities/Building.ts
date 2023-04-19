import {BuildingInterface} from "../interfaces/BuildingInterface";
import {ResourceInterface} from "../interfaces/ResourceInterface";
import {Material} from "../interfaces/Material";
import {Resource} from "./Resource";
import {Module} from "./Module";

export class Building implements BuildingInterface{
    amount: Number;
    buildComponentsSpeed: Number;
    buildOtherBuildingsSpeed: Number;
    picture: String;
    canProduce: {
        type: Resource[] | Material[] | Module[]; amount: Number };
    resourcesNeedToFunctionality: {
        type: Resource[]; amount: Number};
    costInCR: Number;
    costInIG: Number;
    costInTime: Number;
    id: Number;
    name: String;
    onGround: Boolean;
    requiredMaterials: Material[];
    addPeopleToPlanet: Number;
    peopleNeedToFunctionality: Number
    addEnergyToPlanet: number
    energyNeedToFunctionality: Number
    addStoreToPlanet: Number;
    fuelNeedToFunctionalityPerDay: { fuelType: Material | ResourceInterface; required: Number } | 0;
    buildingType: Number
    isFuelLoaded?: Boolean
    buildingEffectiveCoefficient: number;
    fuelLoadTime: Number

}