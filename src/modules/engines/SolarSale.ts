import {RaceInterface} from "../../interfaces/RaceInterface";
import {Steel} from "../../materials/Steel";
import {Electronics} from "../../materials/Electronics";
import {Polymers} from "../../materials/Polymers";
import {Module} from "../../entities/Module";
import variables from '../../variables.js'

export class SolarSale extends Module{
    constructor(belongsToRace: RaceInterface, amount: Number = 1) {
        super();
        this.id = 4
        this.picture = './src/assets/images/engines/solar_sail.jpg'
        this.requiredTech = []
        this.name = 'Солнечный парус'
        this.costInBuildPoints = 70
        this.costInCR = 250
        this.costInIG = 0
        this.requiredFuel = { type: null, amount: 0 }
        this.willBeCreatedAt = Date.now() + variables.fiveMinutes
        this.baseParams = {
            moduleMass: 2,
            moduleSignature: 1000,
            requiredEnergy: 0,
            requiredCargo: 1,
            requiredWorkers: 0
        }
        this.baseCostInMaterials = [
            new Steel(1),
            new Electronics(3),
            new Polymers(10),
        ]
        this.bonusParamsToShip = {
            energy: 0,
            cargo: 0,
            speedInSubspace: 0,
            speedInNormalSpace: 2,
            speedInSystem: 300,
            speedInCombat: 0.1,
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
        this.moduleType = 1
    }
}