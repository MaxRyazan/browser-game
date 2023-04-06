import {Electronics} from "../../materials/Electronics";
import {Steel} from "../../materials/Steel";
import {Polymers} from "../../materials/Polymers";
import {Building} from "../../entities/Building";

export class Colony extends Building{

    constructor(amount: Number = 1, costInTime: Number = 1000) {
        super();
        this.id = 1
        this.name = 'Колония'
        this.costInCR = 0
        this.costInIG = 10000
        this.onGround = true
        this.costInTime = costInTime
        this.buildComponentsSpeed = 0
        this.buildOtherBuildingsSpeed = 0.25
        this.requiredMaterials = [new Electronics(10), new Steel(10), new Polymers(10)]
        this.amount = amount
        this.addPeopleToPlanet = 30
        this.peopleNeedToFunctionality = 7
        this.addEnergyToPlanet = 10
        this.energyNeedToFunctionality = 4
        this.addStoreToPlanet = 0
        this.buildingType = 1
        this.isFuelLoaded = true
        this.buildingEffectiveCoefficient = 1
    }
}