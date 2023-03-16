import {Race} from "../interfaces/Race";
import {Necrons} from "../races/Necrons";
import {AlienTechnology} from "../Technologies/AlienTechnology";

export class AltahReactor {
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
        this.id = 3
        this.picture = './src/assets/images/altah_reactor.jpg'
        this.requiredTech = [new AlienTechnology()]
        this.name = 'Альтах реактор'
        this.baseParams = {
            baseMass: 80,
            baseSignature: 10,
            requiredEnergy: 0,
            requiredCargo: 26,
            requiredWorkers: 5
        }
        this.baseCostInMaterials = {
            metal: 12,
            electronic: 10,
            polymers: 12,
            requiredCRForBuild: 55,
            requiredIGForBuild: 0
        }
        this.bonusParamsToShip = {
            energy: 350,
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

const reactor = new AltahReactor(new Necrons())
console.log(reactor)