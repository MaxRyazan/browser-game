import {RaceInterface} from "../../interfaces/RaceInterface";
import {Module} from "../../entities/Module";
import {Steel} from "../../materials/Steel";
import {Electronics} from "../../materials/Electronics";
import {Polymers} from "../../materials/Polymers";
import {Vettur} from "../../materials/Vettur";
import variables from '../../variables.js'

export class PlasmaReactor extends Module{
    constructor(belongsToRace: RaceInterface, amount: Number = 1) {
        super();
        this.id = 3
        this.picture = './src/assets/images/reactors/plasmaReactor.png'
        this.requiredTech = []
        this.name = 'Плазменный реактор'
        this.costInBuildPoints = 200
        this.costInCR = 120
        this.costInIG = 0
        this.willBeCreatedAt = Date.now() + variables.fiveMinutes
        this.baseParams = {
            moduleMass: 10,
            moduleSignature: 10,
            requiredEnergy: 0,
            requiredCargo: 26,
            requiredWorkers: 5
        }
        this.baseCostInMaterials = [
            new Steel(12),
            new Electronics(10),
            new Polymers(12),
            new Vettur(15),
        ]
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
        this.belongsToRace = belongsToRace;
        this.amount = amount;
        this.moduleType = 2
    }
}
