import {RaceInterface} from "../interfaces/RaceInterface";
import {Chemistry} from "../Technologies/Chemistry";
import {Module} from "../interfaces/Module";


export class ChemicalReactor implements Module{
    public id: Number
    public picture: String
    public requiredTech: {}
    public belongsToRace: RaceInterface
    public name: String
    public amount?: Number
    public costInBuildPoints: Number
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

    constructor(belongsToRace: RaceInterface, amount: Number = 1) {
        this.id = 1
        this.picture = './src/assets/images/chemical_reactor.jpg'
        this.requiredTech = [new Chemistry()]
        this.name = 'Химический реактор'
        this.costInBuildPoints = 50
        this.baseParams = {
            baseMass: 16,
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
        this.amount = amount
    }
}
