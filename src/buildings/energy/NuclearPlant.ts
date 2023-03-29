import {Building} from "../../entities/Building";
import {ConstructionMaterials} from "../../materials/ConstructionMaterials";
import {Electronics} from "../../materials/Electronics";
import {Steel} from "../../materials/Steel";
import {Vettur} from "../../materials/Vettur";
import {Altah} from "../../Resources/mineral/Altah";
import {NuclearFuel} from "../../materials/NuclearFuel";

export class NuclearPlant extends Building{
    fuelLoadTime: Number
    isFuelLoaded: Boolean
    constructor(amount: Number = 1, costInTime: Number = 90000, fuelLoadTime?: Number) {
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
        this.buildingType = 2
        this.isFuelLoaded = false
        this.fuelLoadTime = fuelLoadTime
        this.fuelNeedToFunctionalityPerDay = {fuelType: new NuclearFuel(), required: 20}
    }
}