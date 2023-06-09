import {Building} from "../../entities/Building";
import {Electronics} from "../../materials/Electronics";
import {Steel} from "../../materials/Steel";
import {ConstructionMaterials} from "../../materials/ConstructionMaterials";
import {ChemicalFuel} from "../../materials/ChemicalFuel";

export class ChemicalPlant extends Building{
    constructor(amount: Number = 1, costInTime: Number = 1000) {
        super();
        this.id = 11
        this.name = 'Химическая электростанция'
        this.costInCR = 150
        this.costInIG = 0
        this.onGround = true
        this.costInTime = costInTime
        this.buildComponentsSpeed = 0
        this.buildOtherBuildingsSpeed = 0
        this.requiredMaterials = [new ConstructionMaterials(10), new Electronics(12), new Steel(5)]
        this.amount = amount
        this.addPeopleToPlanet = 0
        this.peopleNeedToFunctionality = 2
        this.buildingEffectiveCoefficient = 1
        this.addEnergyToPlanet = 25 * this.buildingEffectiveCoefficient
        this.energyNeedToFunctionality = 1
        this.addStoreToPlanet = 0
        this.buildingType = 2
        this.isFuelLoaded = false
        this.fuelLoadTime = 0
        this.fuelNeedToFunctionalityPerDay = {fuelType: new ChemicalFuel(), required: 48.8}
    }

}