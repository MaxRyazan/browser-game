
import {Race} from "../interfaces/Race";
import {Necrons} from "../races/Necrons";
import {AlienTechnology} from "../Technologies/AlienTechnology";

export class AltahReactor {
                public id: 3
                public picture: './src/assets/images/altah_reactor.jpg'
                public requiredTech: AlienTechnology
                public name: 'Альтах реактор'
                public baseParams: {
                        baseMass: 80
                        baseSignature: 10
                        requiredEnergy: 0
                        requiredCargo: 26
                        requiredWorkers: 5
                    }
                public baseCostInMaterials:{
                        metal: 12
                        electronic: 10
                        polymers: 12
                        requiredCRForBuild: 55
                        requiredIGForBuild: 0
                    }
                public bonusParamsToShip:{
                        energy: 350
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

const reactor = new AltahReactor(new Necrons())
console.log(reactor)