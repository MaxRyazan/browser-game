import {Building} from "../../entities/Building";
import {Electronics} from "../../materials/Electronics";
import {Steel} from "../../materials/Steel";
import {Polymers} from "../../materials/Polymers";

import {ConstructionMaterials} from "../../materials/ConstructionMaterials";

export class Store extends Building{
    constructor(amount: Number = 1, costInTime: Number = 12000) {
        super();
        this.id = 3
        this.name = 'Склад'
        this.costInCR = 10
        this.costInIG = 0
        this.onGround = true
        this.costInTime = costInTime
        this.buildComponentsSpeed = 0
        this.buildOtherBuildingsSpeed = 0
        this.requiredMaterials = [new ConstructionMaterials(12), new Electronics(3), new Steel(2), new Polymers(1)]
        this.amount = amount
        this.addPeopleToPlanet = 0
        this.peopleNeedToFunctionality = 3
        this.addEnergyToPlanet = 0
        this.energyNeedToFunctionality = 2
        this.addStoreToPlanet = 100
        this.fuelNeedToFunctionalityPerMinute = 0
    }
}