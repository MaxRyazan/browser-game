import {Building} from "../../entities/Building";
import {ConstructionMaterials} from "../../materials/ConstructionMaterials";
import {Electronics} from "../../materials/Electronics";
import {Steel} from "../../materials/Steel";
import {Vettur} from "../../materials/Vettur";
import {Altah} from "../../Resources/mineral/Altah";


export class AltahSplitter extends Building{
    // fuelLoadTime: Number
    // isFuelLoaded: Boolean
    constructor(amount: Number = 1, costInTime: Number = 1000, fuelLoadTime: Number = Date.now()) {
        super();
        this.id = 13
        this.name = 'Расщепитель Альтах'
        this.costInCR = 9850
        this.costInIG = 10
        this.onGround = true
        this.costInTime = costInTime
        this.buildComponentsSpeed = 0
        this.buildOtherBuildingsSpeed = 0
        this.requiredMaterials = [new ConstructionMaterials(60), new Electronics(60), new Steel(20), new Vettur(100)]
        this.amount = amount
        this.addPeopleToPlanet = 0
        this.peopleNeedToFunctionality = 0
        this.buildingEffectiveCoefficient = 1
        this.addEnergyToPlanet = 200 * this.buildingEffectiveCoefficient
        this.energyNeedToFunctionality = 1
        this.addStoreToPlanet = 0
        this.buildingType = 2
        this.isFuelLoaded = false
        this.fuelLoadTime = fuelLoadTime
        this.fuelNeedToFunctionalityPerDay = {fuelType: new Altah(), required: 28.8}
    }

}