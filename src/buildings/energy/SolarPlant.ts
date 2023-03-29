import {Building} from "../../entities/Building";
import {Electronics} from "../../materials/Electronics";
import {Steel} from "../../materials/Steel";

export class SolarPlant extends Building{
    fuelLoadTime: Number
    constructor(amount: Number = 1, costInTime: Number = 20000) {
        super();
        this.id = 10
        this.name = 'Солнечная станция'
        this.costInCR = 50
        this.costInIG = 0
        this.onGround = true
        this.costInTime = costInTime
        this.buildComponentsSpeed = 0
        this.buildOtherBuildingsSpeed = 0
        this.requiredMaterials = [new Electronics(2), new Steel(1)]
        this.amount = amount
        this.addPeopleToPlanet = 0
        this.peopleNeedToFunctionality = 0
        this.addEnergyToPlanet = 15
        this.energyNeedToFunctionality = 0
        this.addStoreToPlanet = 0
        this.buildingType = 2
        this.isFuelLoaded = true
    }
}