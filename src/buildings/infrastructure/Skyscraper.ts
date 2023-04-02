import {Building} from "../../entities/Building";
import {ConstructionMaterials} from "../../materials/ConstructionMaterials";
import {Electronics} from "../../materials/Electronics";
import {Steel} from "../../materials/Steel";


export class Skyscraper extends Building{
    constructor(amount: Number = 1, costInTime: Number = 70000) {
        super();
        this.id = 7
        this.name = 'Небоскрёб'
        this.costInCR = 200
        this.costInIG = 0
        this.onGround = true
        this.costInTime = costInTime
        this.buildComponentsSpeed = 0
        this.buildOtherBuildingsSpeed = 0
        this.requiredMaterials = [new ConstructionMaterials(100), new Electronics(10), new Steel(10)]
        this.amount = amount
        this.buildingEffectiveCoefficient = 1
        this.addPeopleToPlanet = 50 * this.buildingEffectiveCoefficient
        this.peopleNeedToFunctionality = 1
        this.addEnergyToPlanet = 0
        this.energyNeedToFunctionality = 5
        this.addStoreToPlanet = 0
        this.buildingType = 1
    }
}