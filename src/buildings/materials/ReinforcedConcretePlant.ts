import {Building} from "../../entities/Building";
import {ConstructionMaterials} from "../../materials/ConstructionMaterials";
import {Electronics} from "../../materials/Electronics";
import {Steel} from "../../materials/Steel";
import {Polymers} from "../../materials/Polymers";


export class ReinforcedConcretePlant extends Building{
    timeOfLastProduce: Number
    constructor(amount: Number = 1, costInTime: Number = 1000) {
        super();
        this.id = 18
        this.name = 'Железобетонный завод'
        this.costInCR = 80
        this.costInIG = 0
        this.onGround = true
        this.costInTime = costInTime
        this.buildComponentsSpeed = 0
        this.buildOtherBuildingsSpeed = 0
        this.requiredMaterials = [new ConstructionMaterials(40), new Electronics(7), new Steel(7), new Polymers(10)]
        this.amount = amount
        this.addPeopleToPlanet = 0
        this.peopleNeedToFunctionality = 11
        this.addEnergyToPlanet = 0
        this.energyNeedToFunctionality = 15
        this.addStoreToPlanet = 0
        this.buildingType = 4
        this.canProduce= {type: [ConstructionMaterials], amount: 5}
        this.timeOfLastProduce = Date.now()
    }
}