import {Building} from "../../entities/Building";
import {ConstructionMaterials} from "../../materials/ConstructionMaterials";
import {Electronics} from "../../materials/Electronics";
import {Steel} from "../../materials/Steel";
import {CrudeOre} from "../../Resources/CrudeOre";


export class AccumulationStation extends Building{
    timeOfLastProduce: Number
    constructor(amount: Number = 1, costInTime: Number = 1000) {
        super();
        this.id = 14
        this.name = 'Накопительная станция'
        this.costInCR = 110
        this.costInIG = 0
        this.onGround = true
        this.costInTime = costInTime
        this.buildComponentsSpeed = 0
        this.buildOtherBuildingsSpeed = 0
        this.requiredMaterials = [new ConstructionMaterials(20), new Electronics(5), new Steel(14)]
        this.amount = amount
        this.addPeopleToPlanet = 0
        this.peopleNeedToFunctionality = 12
        this.addEnergyToPlanet = 0
        this.energyNeedToFunctionality = 14
        this.addStoreToPlanet = 0
        this.buildingType = 3
        this.canProduce= {type: [CrudeOre], amount: 5}
        this.timeOfLastProduce = Date.now()
    }
}