import {Building} from "../../entities/Building";
import {ConstructionMaterials} from "../../materials/ConstructionMaterials";
import {Electronics} from "../../materials/Electronics";
import {Steel} from "../../materials/Steel";
import {Quadria} from "../../materials/Quadria";
import {Vettur} from "../../materials/Vettur";

export class AdministrativeCenter extends Building{
    constructor(amount: Number = 1, costInTime: Number = 40000) {
        super();
        this.id = 4
        this.name = 'Административный центр'
        this.costInCR = 210
        this.costInIG = 5000
        this.onGround = true
        this.costInTime = costInTime
        this.buildComponentsSpeed = 0.3
        this.buildOtherBuildingsSpeed = 0.2
        this.requiredMaterials = [new ConstructionMaterials(30), new Electronics(10), new Steel(4), new Quadria(12), new Vettur(25)]
        this.amount = amount
        this.addPeopleToPlanet = 4
        this.peopleNeedToFunctionality = 3
        this.addEnergyToPlanet = 4
        this.energyNeedToFunctionality = 12
        this.addStoreToPlanet = 200
        this.fuelNeedToFunctionalityPerMinute = 0
    }
}