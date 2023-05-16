import {RaceInterface} from "../../interfaces/RaceInterface";
import {Chemistry} from "../../Technologies/Chemistry";
import {Module} from "../../entities/Module";
import {Steel} from "../../materials/Steel";
import {Electronics} from "../../materials/Electronics";
import {Polymers} from "../../materials/Polymers";
import variables from '../../variables.js'

export class ChemicalReactor extends  Module{
    constructor(belongsToRace: RaceInterface, amount: Number = 1) {
        super();
        this.id = 1
        this.picture = './src/assets/images/chemical_reactor.jpg'
        this.requiredTech = [new Chemistry()]
        this.name = 'Химический реактор'
        this.costInBuildPoints = 50
        this.willBeCreatedAt = Date.now() + variables.fiveMinutes
        this.costInCR = 120
        this.costInIG = 0
        this.baseParams = {
            moduleMass: 16,
            moduleSignature: 8,
            requiredEnergy: 0,
            requiredCargo: 11,
            requiredWorkers: 1
        }
        this.baseCostInMaterials = [
            new Steel(3),
            new Electronics(3),
            new Polymers(2),
        ]
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
        this.moduleType = 2
    }
}
