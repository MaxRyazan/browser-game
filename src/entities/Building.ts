import {BuildingInterface} from "../interfaces/BuildingInterface";
import {Resource} from "../interfaces/Resource";
import {Material} from "../interfaces/Material";
import {Detail} from "../interfaces/Detail";

export class Building implements BuildingInterface{
    amount: Number;
    buildComponentsSpeed: Number;
    buildOtherBuildingsSpeed: Number;
    canProduce: {
        type: Resource[] | Material[] | Detail[]; amount: Number };
    costInCR: Number;
    costInIG: Number;
    costInTime: Number;
    id: Number;
    name: String;
    onGround: Boolean;
    requiredMaterials: Material[];
    addPeopleToPlanet: Number;
    peopleNeedToFunctionality: Number
    addEnergyToPlanet: Number
    energyNeedToFunctionality: Number
    addStoreToPlanet: Number;
    fuelNeedToFunctionalityPerDay: { fuelType: Material | Resource; required: Number } | 0;
    buildingType: Number
    isFuelLoaded?: Boolean

    checkFuel(){
        if(this.isFuelLoaded){
            return this.addEnergyToPlanet
        }
        return 0
    }
}