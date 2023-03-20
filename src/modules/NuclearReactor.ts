import {Race} from "../interfaces/Race";
import {NuclearPhysics} from "../Technologies/NuclearPhysics";
import {Module} from "../interfaces/Module";

export class NuclearReactor implements Module{
    public id: Number
    public picture: String
    public requiredTech: {}
    public belongsToRace: Race
    public name: String
    public amount?: Number
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

    constructor(belongsToRace: Race, amount: Number = 1) {
        this.id = 2
        this.picture = './src/assets/images/nuclear_reactor.jpg'
        this.requiredTech = [new NuclearPhysics()]
        this.name = 'Ядерный реактор'
        this.baseParams = {
            baseMass: 13,
            baseSignature: 11,
            requiredEnergy: 0,
            requiredCargo: 16,
            requiredWorkers: 1
        }
        this.baseCostInMaterials = {
            metal: 2,
            electronic: 4,
            polymers: 1,
            requiredCRForBuild: 5,
            requiredIGForBuild: 0
        }
        this.bonusParamsToShip = {
            energy: 150,
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
