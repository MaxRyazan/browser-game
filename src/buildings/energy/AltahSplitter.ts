import {Building} from "../../entities/Building";
import {ConstructionMaterials} from "../../materials/ConstructionMaterials";
import {Electronics} from "../../materials/Electronics";
import {Steel} from "../../materials/Steel";
import {Vettur} from "../../materials/Vettur";
import tradeStore from '../../store_modules/tradeStore.js'
import {Altah} from "../../Resources/mineral/Altah";


export class AltahSplitter extends Building{
    constructor(amount: Number = 1, costInTime: Number = 190000) {
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
        this.addEnergyToPlanet = this.calculateEffective()
        this.energyNeedToFunctionality = 1
        this.fuelNeedToFunctionalityPerMinute = {fuelType: new Altah(), required: 0.02}
        this.addStoreToPlanet = 0
    }

    calculateEffective(){
        const fuelForStation = tradeStore.state.currentPlanet.storage.materials.filter(m => m.id === 7)
        if(fuelForStation){
            if(fuelForStation.amount >= 0.02){
                return 200
            }
        }
        return 0
    }
}