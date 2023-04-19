import {RaceInterface} from "../../interfaces/RaceInterface";
import {Steel} from "../../materials/Steel";
import {Electronics} from "../../materials/Electronics";
import {Polymers} from "../../materials/Polymers";
import {Module} from "../../entities/Module";
import {Vettur} from "../../materials/Vettur";
import {ChemicalFuel} from "../../materials/ChemicalFuel";

export class RocketEngine extends Module{
    constructor(belongsToRace: RaceInterface, amount: Number = 1) {
        super();
        this.id = 5
        this.picture = './src/assets/images/altah_reactor.jpg'
        this.requiredTech = []
        this.name = 'Ракетный двигатель'
        this.costInBuildPoints = 200
        this.costInCR = 120
        this.costInIG = 0
        this.requiredFuel = { type: new ChemicalFuel(), amount: 0 }
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
            new Vettur(7),
        ]
        this.bonusParamsToShip = {
            energy: 0,
            cargo: 0,
            speedInSubspace: 0,
            speedInNormalSpace: 40
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
    }
}