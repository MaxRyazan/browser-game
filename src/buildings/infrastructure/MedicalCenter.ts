import {Building} from "../../entities/Building";
import {ConstructionMaterials} from "../../materials/ConstructionMaterials";
import {Electronics} from "../../materials/Electronics";
import {Polymers} from "../../materials/Polymers";
import {Quadria} from "../../materials/Quadria";
import {Vettur} from "../../materials/Vettur";

export class MedicalCenter extends Building{
    addHealthToPlanet: Number
    constructor(amount: Number = 1, costInTime: Number = 40000) {
        super();
        this.id = 6
        this.name = 'Медицинский центр'
        this.costInCR = 400
        this.costInIG = 10
        this.onGround = true
        this.costInTime = costInTime
        this.buildComponentsSpeed = 0
        this.buildOtherBuildingsSpeed = 0
        this.requiredMaterials = [new ConstructionMaterials(30), new Electronics(27), new Polymers(12), new Quadria(5), new Vettur(5)]
        this.amount = amount
        this.addPeopleToPlanet = 0
        this.peopleNeedToFunctionality = 10
        this.addEnergyToPlanet = 0
        this.energyNeedToFunctionality = 10
        this.addStoreToPlanet = 0
        this.buildingEffectiveCoefficient = 1
        this.addHealthToPlanet = 0.5 * this.buildingEffectiveCoefficient
        this.buildingType = 1
    }
}