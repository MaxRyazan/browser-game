import {Building} from "../../entities/Building";
import {ConstructionMaterials} from "../../materials/ConstructionMaterials";
import {Electronics} from "../../materials/Electronics";
import {SolarSale} from "../../modules/engines/SolarSale";
import {RocketEngine} from "../../modules/engines/RocketEngine";
import {NuclearEngine} from "../../modules/engines/NuclearEngine";
import {NanoEngine} from "../../modules/engines/NanoEngine";

export class EngineFactory extends Building{
    timeOfLastProduce: Number
    constructor(amount: Number = 1, costInTime: Number = 1000) {
        super();
        this.id = 27
        this.name = 'Цех сборки двигателей'
        this.costInCR = 110
        this.costInIG = 0
        this.onGround = true
        this.costInTime = costInTime
        this.buildComponentsSpeed = 0
        this.buildOtherBuildingsSpeed = 0
        this.requiredMaterials = [new ConstructionMaterials(20), new Electronics(5)]
        this.amount = amount
        this.addPeopleToPlanet = 0
        this.peopleNeedToFunctionality = 5
        this.addEnergyToPlanet = 0
        this.energyNeedToFunctionality = 20
        this.addStoreToPlanet = 100
        this.buildingType = 6
        this.canProduce= {
            type:
                [
                    new SolarSale(null, 1),
                    new RocketEngine(null, 1),
                    new NuclearEngine(null, 1),
                    new NanoEngine(null, 1)
                ],
            amount: 4}
        this.timeOfLastProduce = Date.now()
    }
}