import {ConstructionMaterials} from "../../materials/ConstructionMaterials";
import {Electronics} from "../../materials/Electronics";
import {Steel} from "../../materials/Steel";
import {Building} from "../../entities/Building";
import {Quadria} from "../../materials/Quadria";

export class ColonialSenate extends Building{
    constructor(amount: Number = 1, costInTime: Number = 20000) {
        super();
        this.id = 2
        this.name = 'Колониальный сенат'
        this.costInCR = 110
        this.costInIG = 100
        this.onGround = true
        this.costInTime = costInTime
        this.buildComponentsSpeed = 0
        this.buildOtherBuildingsSpeed = 0
        this.requiredMaterials = [new ConstructionMaterials(14), new Electronics(17), new Steel(2), new Quadria(1)]
        this.amount = amount
        this.addPeopleToPlanet = 0
        this.peopleNeedToFunctionality = 8
        this.addEnergyToPlanet = 0
        this.energyNeedToFunctionality = 8
        this.addStoreToPlanet = 0
        this.buildingType = 1
    }
}