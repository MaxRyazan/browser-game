import {RaceInterface} from "../../interfaces/RaceInterface";
import {NuclearPhysics} from "../../Technologies/NuclearPhysics";
import {Module} from "../../entities/Module";
import {Steel} from "../../materials/Steel";
import variables from '../../variables.js'

export class SteelPlate extends Module{
    constructor(belongsToRace: RaceInterface, amount: Number = 1) {
        super();
        this.id = 9
        this.picture = './src/assets/images/nuclear_reactor.jpg'
        this.requiredTech = [new NuclearPhysics()]
        this.name = 'Стальная пластина'
        this.costInBuildPoints = 130
        this.willBeCreatedAt = Date.now() + variables.fiveMinutes
        this.costInCR = 120
        this.costInIG = 0
        this.baseParams = {
            moduleMass: 15,
            moduleSignature: 3,
            requiredEnergy: 0,
            requiredCargo: 1,
            requiredWorkers: 0
        }
        this.baseCostInMaterials = [
            new Steel(15),
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
            canAttack: false
        }
        this.belongsToRace = belongsToRace
        this.amount = amount
        this.moduleType = 4
        this.attackParams = {
            radius: 0,
            baseDamage: 0,
            notEffectiveAgainst: null,
            bonusEffectiveAgainst: null
        }
        this.defenceParams = {
            bonusHp: 10
        }
    }
}
