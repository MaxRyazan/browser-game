import {RaceInterface} from "../../interfaces/RaceInterface";
import {NuclearPhysics} from "../../Technologies/NuclearPhysics";
import {Module} from "../../entities/Module";
import {Steel} from "../../materials/Steel";
import variables from '../../variables.js'
import {Electronics} from "../../materials/Electronics";
import {CrudeOre} from "../../Resources/CrudeOre";
import {CrudeMineralOre} from "../../Resources/CrudeMineralOre";

export class MechanicalDrill extends Module{
    constructor(belongsToRace: RaceInterface, amount: Number = 1) {
        super();
        this.id = 10
        this.picture = './src/assets/images/nuclear_reactor.jpg'
        this.requiredTech = [new NuclearPhysics()]
        this.name = 'Механический бур'
        this.costInBuildPoints = 130
        this.willBeCreatedAt = Date.now() + variables.fiveMinutes
        this.costInCR = 120
        this.costInIG = 0
        this.baseParams = {
            moduleMass: 15,
            moduleSignature: 1,
            requiredEnergy: 5,
            requiredCargo: 5,
            requiredWorkers: 3
        }
        this.baseCostInMaterials = [
            new Steel(15),
            new Electronics(15),
        ]
        this.bonusParamsToShip = {
            energy: 0,
            cargo: 0,
            speedInSubspace: 0,
            speedInNormalSpace: 0,
        }
        this.bonusActionsToShips = {
            mining: true,
            scanning: false,
            construction: false,
            lifeSupporting: false,
            autoPilot: false,
            canAttack: false
        }
        this.belongsToRace = belongsToRace
        this.amount = amount
        this.moduleType = 5
        this.attackParams = {
            radius: 0,
            baseDamage: 0,
            notEffectiveAgainst: null,
            bonusEffectiveAgainst: null
        }
        this.defenceParams = {
            bonusHp: 0
        }
        this.miningParams = {
            canMining: { type: [new CrudeOre(2.5), new CrudeMineralOre(2.5)], amount : 5},
            miningSpeed: variables.fiveMinutes
        }
    }
}
