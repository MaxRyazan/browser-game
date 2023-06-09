import {Building} from "../../entities/Building";
import {ConstructionMaterials} from "../../materials/ConstructionMaterials";
import {Electronics} from "../../materials/Electronics";
import {ChemicalReactor} from "../../modules/reactors/ChemicalReactor";
import {NuclearReactor} from "../../modules/reactors/NuclearReactor";
import {PlasmaReactor} from "../../modules/reactors/PlasmaReactor";

export class ReactorFactory extends Building{
    timeOfLastProduce: Number
    constructor(amount: Number = 1, costInTime: Number = 1000) {
        super();
        this.id = 28
        this.name = 'Цех сборки реакторов'
        this.costInCR = 110
        this.costInIG = 0
        this.onGround = true
        this.costInTime = costInTime
        this.buildComponentsSpeed = 5
        this.buildOtherBuildingsSpeed = 0
        this.requiredMaterials = [new ConstructionMaterials(20), new Electronics(5)]
        this.amount = amount
        this.addPeopleToPlanet = 0
        this.peopleNeedToFunctionality = 5
        this.addEnergyToPlanet = 0
        this.energyNeedToFunctionality = 20
        this.addStoreToPlanet = 100
        this.buildingType = 6
        this.canProduce = {
            type:
                [
                    new ChemicalReactor(null, 1),
                    new NuclearReactor(null, 1),
                    new PlasmaReactor(null, 1),
                ],
            amount: 3}
        this.timeOfLastProduce = Date.now()
    }
}