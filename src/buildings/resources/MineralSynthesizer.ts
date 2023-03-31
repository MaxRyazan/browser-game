import {Building} from "../../entities/Building";
import {ConstructionMaterials} from "../../materials/ConstructionMaterials";
import {Electronics} from "../../materials/Electronics";
import {Vettur} from "../../materials/Vettur";
import {Delitium} from "../../Resources/mineral/Delitium";
import {Quantium} from "../../Resources/mineral/Quantium";
import {Tellurium} from "../../Resources/mineral/Tellurium";
import {CrudeMineralOre} from "../../Resources/CrudeMineralOre";

export class MineralSynthesizer extends Building{
    isResourceLoaded: Boolean
    constructor(amount: Number = 1, costInTime: Number = 40000) {
        super();
        this.id = 17
        this.name = 'Синтезатор минералов'
        this.costInCR = 80
        this.costInIG = 0
        this.onGround = true
        this.costInTime = costInTime
        this.buildComponentsSpeed = 0
        this.buildOtherBuildingsSpeed = 0
        this.requiredMaterials = [new ConstructionMaterials(30), new Electronics(25), new Vettur(10)]
        this.amount = amount
        this.addPeopleToPlanet = 0
        this.peopleNeedToFunctionality = 8
        this.addEnergyToPlanet = 0
        this.energyNeedToFunctionality = 20
        this.addStoreToPlanet = 0
        this.buildingType = 3
        this.canProduce= {type: [Delitium, Quantium, Tellurium], amount: 5}
        this.resourcesNeedToFunctionality= {type: [new CrudeMineralOre()], amount: 5}
        this.isResourceLoaded = false
    }
}