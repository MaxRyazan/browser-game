import {RaceInterface} from "../../interfaces/RaceInterface";
import {Module} from "../../entities/Module";
import {Steel} from "../../materials/Steel";
import {Electronics} from "../../materials/Electronics";
import {Polymers} from "../../materials/Polymers";
import variables from '../../variables.js'

export class Vulcan extends Module{
    constructor(belongsToRace: RaceInterface, amount: Number = 1) {
        super();
        this.id = 8
        this.picture = './src/assets/images/nuclear_reactor.jpg'
        this.requiredTech = []
        this.name = 'Установка Вулкан'
        this.costInBuildPoints = 130
        this.willBeCreatedAt = Date.now() + variables.fiveMinutes
        this.costInCR = 120
        this.costInIG = 0
        this.baseParams = {
            moduleMass: 5,
            moduleSignature: 1,
            requiredEnergy: 1,
            requiredCargo: 2,
            requiredWorkers: 1
        }
        this.baseCostInMaterials = [
            new Steel(5),
            new Electronics(4),
            new Polymers(3),
        ]
        this.bonusParamsToShip = {
            energy: 0,
            cargo: 0,
            speedInSubspace: 0,
            speedInNormalSpace: 0,
        }
        this.bonusActionsToShips = {
            mining: false,
            scanning: false,
            construction: false,
            lifeSupporting: false,
            autoPilot: false,
            canAttack: true
        }
        this.belongsToRace = belongsToRace
        this.amount = amount
        this.moduleType = 3
        this.attackParams = {
            radius: 2,
            baseDamage: 5,
            notEffectiveAgainst: null,
            bonusEffectiveAgainst: null
        }
    }
}
