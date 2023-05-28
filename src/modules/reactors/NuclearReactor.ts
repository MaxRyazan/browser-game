import {RaceInterface} from "../../interfaces/RaceInterface";
import {Module} from "../../entities/Module";
import {Steel} from "../../materials/Steel";
import {Electronics} from "../../materials/Electronics";
import {Polymers} from "../../materials/Polymers";
import {Quadria} from "../../materials/Quadria";
import variables from '../../variables.js'

export class NuclearReactor extends Module{
    constructor(belongsToRace: RaceInterface, amount: Number = 1) {
        super();
        this.id = 2
        this.picture = './src/assets/images/nuclear_reactor.jpg'
        this.requiredTech = []
        this.name = 'Ядерный реактор'
        this.costInBuildPoints = 130
        this.willBeCreatedAt = Date.now() + variables.fiveMinutes
        this.costInCR = 120
        this.costInIG = 0
        this.baseParams = {
            moduleMass: 13,
            moduleSignature: 11,
            requiredEnergy: 0,
            requiredCargo: 16,
            requiredWorkers: 1
        }
        this.baseCostInMaterials = [
            new Steel(5),
            new Electronics(4),
            new Polymers(3),
            new Quadria(3),
        ]
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
        this.moduleType = 2
    }
}
