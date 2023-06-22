import {RaceInterface} from "../../interfaces/RaceInterface";
import {Steel} from "../../materials/Steel";
import {Electronics} from "../../materials/Electronics";
import {Polymers} from "../../materials/Polymers";
import {Module} from "../../entities/Module";
import {Quadria} from "../../materials/Quadria";
import variables from '../../variables.js'
import {ChemicalFuel} from "../../materials/ChemicalFuel";

export class PlasmaEngine extends Module{
    constructor(belongsToRace: RaceInterface, amount: Number = 1) {
        super();
        this.id = 7
        this.picture = './src/assets/images/engines/plasmaEngine.png'
        this.requiredTech = []
        this.name = 'Плазменный двигатель'
        this.costInBuildPoints = 200
        this.costInCR = 120
        this.costInIG = 0
        this.requiredFuel = { type: new ChemicalFuel(), amount: 0 }
        this.willBeCreatedAt = Date.now() + variables.fiveMinutes
        this.baseParams = {
            moduleMass: 10,
            moduleSignature: 3,
            requiredEnergy: 25,
            requiredCargo: 26,
            requiredWorkers: 5
        }
        this.baseCostInMaterials = [
            new Steel(12),
            new Electronics(10),
            new Polymers(12),
            new Quadria(20),
        ]
        this.bonusParamsToShip = {
            energy: 0,
            cargo: 0,
            speedInSubspace: 1,
            speedInNormalSpace: 12,
            speedInSystem: 8000,
            speedInCombat: 1,
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