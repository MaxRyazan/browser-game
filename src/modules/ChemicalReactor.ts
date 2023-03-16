import {Race} from "../interfaces/Race";
import {Chemistry} from "../Technologies/Chemistry";
import {Humans} from "../races/Humans";

export class ChemicalReactor {
    public id: Number
    public picture: String
    public requiredTech: {}
    public name: String
    public baseParams: {
        baseMass: Number
        baseSignature: Number
        requiredEnergy: Number
        requiredCargo: Number
        requiredWorkers: Number
    }
    public baseCostInMaterials: {
        metal: Number
        electronic: Number
        polymers: Number
        requiredCRForBuild: Number
        requiredIGForBuild: Number
    }
    public bonusParamsToShip: {
        energy: Number
        cargo: Number
        speedInSubspace: Number
        speedInNormalSpace: Number
    }
    public bonusActionsToShips: {
        mining: Boolean
        scanning: Boolean
        construction: Boolean
        lifeSupporting: Boolean
        autoPilot: Boolean
    }

    constructor(public belongsToRace: Race) {
        this.id = 1
        this.picture = './src/assets/images/chemical_reactor.jpg'
        this.requiredTech = [new Chemistry()]
        this.name = 'Химический реактор'
        this.baseParams = {
            baseMass: 120,
            baseSignature: 8,
            requiredEnergy: 0,
            requiredCargo: 11,
            requiredWorkers: 1
        }
        this.baseCostInMaterials = {
            metal: 1,
            electronic: 2,
            polymers: 2,
            requiredCRForBuild: 3,
            requiredIGForBuild: 0
        }
        this.bonusParamsToShip = {
            energy: 100,
            cargo: 0,
            speedInSubspace: 0,
            speedInNormalSpace: 0
        }
        this.bonusActionsToShips = {
            mining: false,
            scanning: false,
            construction: false,
            lifeSupporting: false,
            autoPilot: false
        }
        this.belongsToRace = belongsToRace
    }
}
const  reactor = new ChemicalReactor(new Humans())
console.log(reactor)
