import {ConstructionMaterials} from "../../materials/ConstructionMaterials";
import {Electronics} from "../../materials/Electronics";
import {Steel} from "../../materials/Steel";
import {Polymers} from "../../materials/Polymers";
import {Building} from "../../entities/Building";

export class BuildingCenter extends Building{
    addStoreToPlanet: Number
    constructor(amount: Number = 1, costInTime: Number = 10000) {
        super();
        this.id = 5
        this.name = 'СтройЦентр'
        this.costInCR = 40
        this.costInIG = 0
        this.onGround = true
        this.costInTime = costInTime
        this.buildComponentsSpeed = 0
        this.buildOtherBuildingsSpeed = 0.5
        this.requiredMaterials = [new ConstructionMaterials(7), new Electronics(7), new Steel(9), new Polymers(2)]
        this.amount = amount
        this.addPeopleToPlanet = 0
        this.peopleNeedToFunctionality = 13
        this.addEnergyToPlanet = 0
        this.energyNeedToFunctionality = 6
        this.addStoreToPlanet = 0
        this.fuelNeedToFunctionalityPerMinute = 0
    }
}