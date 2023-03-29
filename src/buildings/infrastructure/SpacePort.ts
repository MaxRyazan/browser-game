import {Building} from "../../entities/Building";
import {ConstructionMaterials} from "../../materials/ConstructionMaterials";
import {Electronics} from "../../materials/Electronics";
import {Steel} from "../../materials/Steel";
import {Quadria} from "../../materials/Quadria";

export class SpacePort extends Building{
    constructor(amount: Number = 1, costInTime: Number = 80000) {
        super();
        this.id = 9
        this.name = 'Космопорт'
        this.costInCR = 102
        this.costInIG = 0
        this.onGround = true
        this.costInTime = costInTime
        this.buildComponentsSpeed = 0
        this.buildOtherBuildingsSpeed = 0
        this.requiredMaterials = [new ConstructionMaterials(22), new Electronics(20), new Steel(12), new Quadria(15)]
        this.amount = amount
        this.addPeopleToPlanet = 0
        this.peopleNeedToFunctionality = 10
        this.addEnergyToPlanet = 0
        this.energyNeedToFunctionality = 10
        this.addStoreToPlanet = 0
        this.fuelNeedToFunctionalityPerMinute = 0
    }
}