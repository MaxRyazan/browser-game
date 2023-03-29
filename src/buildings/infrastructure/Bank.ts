import {Building} from "../../entities/Building";
import {ConstructionMaterials} from "../../materials/ConstructionMaterials";
import {Electronics} from "../../materials/Electronics";
import {Quadria} from "../../materials/Quadria";
import {Steel} from "../../materials/Steel";

export class Bank extends Building{
    addCRToPlanet: Number
    constructor(amount: Number = 1, costInTime: Number = 20000) {
        super();
        this.id = 8
        this.name = 'Банк'
        this.costInCR = 100
        this.costInIG = 0
        this.onGround = true
        this.costInTime = costInTime
        this.buildComponentsSpeed = 0
        this.buildOtherBuildingsSpeed = 0
        this.requiredMaterials = [new ConstructionMaterials(20), new Electronics(20), new Steel(12), new Quadria(15)]
        this.amount = amount
        this.addPeopleToPlanet = 0
        this.peopleNeedToFunctionality = 5
        this.addEnergyToPlanet = 0
        this.energyNeedToFunctionality = 12
        this.addCRToPlanet = 50
        this.addStoreToPlanet = 0
        this.buildingType = 1
    }
}