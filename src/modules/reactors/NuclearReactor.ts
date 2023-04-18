import {RaceInterface} from "../../interfaces/RaceInterface";
import {NuclearPhysics} from "../../Technologies/NuclearPhysics";
import {Module} from "../../entities/Module";
import {Steel} from "../../materials/Steel";
import {Electronics} from "../../materials/Electronics";
import {Polymers} from "../../materials/Polymers";

export class NuclearReactor extends Module{
    constructor(belongsToRace: RaceInterface, amount: Number = 1) {
        super();
        this.id = 2
        this.picture = './src/assets/images/nuclear_reactor.jpg'
        this.requiredTech = [new NuclearPhysics()]
        this.name = 'Ядерный реактор'
        this.costInBuildPoints = 130
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
            new Steel(2),
            new Electronics(4),
            new Polymers(1),
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
    }
}
