import {Race} from "../interfaces/Race";
import {Necrons} from "../races/Necrons";
import {Chemistry} from "../Technologies/Chemistry";

export class ChemicalReactor {
    public id: 1
    public picture: './src/assets/images/chemical_reactor.jpg'
    public requiredTech: Chemistry
    public name: 'Химический реактор'
    public baseParams: {
        baseMass: 120
        baseSignature: 8
        requiredEnergy: 0
        requiredCargo: 11
        requiredWorkers: 1
    }
    public baseCostInMaterials: {
        metal: 1
        electronic: 2
        polymers: 2
        requiredCRForBuild: 3
        requiredIGForBuild: 0
    }
    public bonusParamsToShip: {
        energy: 100
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

    constructor(public belongsToRace: Race) {
    }

}

const reactor = new ChemicalReactor(new Necrons())
console.log(reactor)