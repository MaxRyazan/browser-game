import {Race} from "../interfaces/Race";
import {Necrons} from "../races/Necrons";
import {NuclearPhysics} from "../Technologies/NuclearPhysics";

export class NuclearReactor {
    public id: 2
    public picture: './src/assets/images/nuclear_reactor.jpg'
    public requiredTech: NuclearPhysics
    public name: 'Ядерный реактор'
    public baseParams: {
        baseMass: 190
        baseSignature: 11
        requiredEnergy: 0
        requiredCargo: 16
        requiredWorkers: 1
    }
    public baseCostInMaterials: {
        metal: 2
        electronic: 4
        polymers: 1
        requiredCRForBuild: 5
        requiredIGForBuild: 0
    }
    public bonusParamsToShip: {
        energy: 150
        cargo: 0
        speedInSubspace: 0
        speedInNormalSpace: 0
    }
    public bonusActionsToShips: {
        mining: false
        scanning: false
        construction: false
        lifeSupporting: false
        autoPilot: false
    }

    constructor(public belongsToRace: Race) {}
}


const reactor = new NuclearReactor(new Necrons())
console.log(reactor)
