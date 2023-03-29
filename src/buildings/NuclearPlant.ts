import {Building} from "../entities/Building";
import {ConstructionMaterials} from "../materials/ConstructionMaterials";
import {Electronics} from "../materials/Electronics";
import {Steel} from "../materials/Steel";
import {Vettur} from "../materials/Vettur";

export class NuclearPlant extends Building{
    constructor(amount: Number = 1, costInTime: Number = 90000) {
        super();
        this.id = 12
        this.name = 'Ядерная электростанция'
        this.costInCR = 1150
        this.costInIG = 0
        this.onGround = true
        this.costInTime = costInTime
        this.buildComponentsSpeed = 0
        this.buildOtherBuildingsSpeed = 0
        this.requiredMaterials = [new ConstructionMaterials(90), new Electronics(90), new Steel(50), new Vettur(50)]
        this.amount = amount
        this.addPeopleToPlanet = 0
        this.peopleNeedToFunctionality = 20
        this.addEnergyToPlanet = 110
        this.energyNeedToFunctionality = 1
        this.addStoreToPlanet = 0
    }
}