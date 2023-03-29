import {Building} from "../../entities/Building";
import {ConstructionMaterials} from "../../materials/ConstructionMaterials";
import {Electronics} from "../../materials/Electronics";
import {Steel} from "../../materials/Steel";
import {Vettur} from "../../materials/Vettur";
import {Altah} from "../../Resources/mineral/Altah";


export class AltahSplitter extends Building{
    fuelLoadTime: Number
    constructor(amount: Number = 1, costInTime: Number = 190000, fuelLoadTime: Number = Date.now()) {
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
        this.addEnergyToPlanet = 200
        this.energyNeedToFunctionality = 1
        this.addStoreToPlanet = 0
        this.fuelNeedToFunctionalityPerDay = {fuelType: new Altah(), required: 28.8}
        this.fuelLoadTime = fuelLoadTime
        this.buildingType = 2
    }

}