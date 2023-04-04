import {Building} from "../../entities/Building";
import {ConstructionMaterials} from "../../materials/ConstructionMaterials";
import {Electronics} from "../../materials/Electronics";
import {Steel} from "../../materials/Steel";
import {MetalOre} from "../../Resources/ore/MetalOre";
import {MineralOre} from "../../Resources/ore/MineralOre";
import {OrganicOre} from "../../Resources/ore/OrganicOre";
import {CrudeOre} from "../../Resources/CrudeOre";

export class OreCleaner extends Building{
    timeOfLastProduce: Number
    constructor(amount: Number = 1, costInTime: Number = 1000) {
        super();
        this.id = 16
        this.name = 'Очиститель руды'
        this.costInCR = 80
        this.costInIG = 0
        this.onGround = true
        this.costInTime = costInTime
        this.buildComponentsSpeed = 0
        this.buildOtherBuildingsSpeed = 0
        this.requiredMaterials = [new ConstructionMaterials(30), new Electronics(25), new Steel(12)]
        this.amount = amount
        this.addPeopleToPlanet = 0
        this.peopleNeedToFunctionality = 15
        this.addEnergyToPlanet = 0
        this.energyNeedToFunctionality = 10
        this.addStoreToPlanet = 0
        this.buildingType = 3
        this.canProduce= {type: [MetalOre, MineralOre, OrganicOre], amount: 5}
        this.resourcesNeedToFunctionality= {type: [new CrudeOre()] , amount: 5}
        this.timeOfLastProduce = Date.now()
    }
}