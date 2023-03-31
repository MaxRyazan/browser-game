import {Building} from "../../entities/Building";
import {ConstructionMaterials} from "../../materials/ConstructionMaterials";
import {Electronics} from "../../materials/Electronics";
import {Steel} from "../../materials/Steel";
import {CrudeMineralOre} from "../../Resources/CrudeMineralOre";

export class WaveStation extends Building{
    constructor(amount: Number = 1, costInTime: Number = 40000) {
        super();
        this.id = 15
        this.name = 'Волновая платформа'
        this.costInCR = 110
        this.costInIG = 0
        this.onGround = true
        this.costInTime = costInTime
        this.buildComponentsSpeed = 0
        this.buildOtherBuildingsSpeed = 0
        this.requiredMaterials = [new ConstructionMaterials(10), new Electronics(15), new Steel(10)]
        this.amount = amount
        this.addPeopleToPlanet = 0
        this.peopleNeedToFunctionality = 10
        this.addEnergyToPlanet = 0
        this.energyNeedToFunctionality = 12
        this.addStoreToPlanet = 0
        this.buildingType = 3
        this.canProduce= {type: [CrudeMineralOre], amount: 5}
    }
}