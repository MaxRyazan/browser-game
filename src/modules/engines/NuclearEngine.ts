import {RaceInterface} from "../../interfaces/RaceInterface";
import {AlienTechnology} from "../../Technologies/AlienTechnology";
import {Steel} from "../../materials/Steel";
import {Electronics} from "../../materials/Electronics";
import {Polymers} from "../../materials/Polymers";
import {Module} from "../../entities/Module";
import {Quadria} from "../../materials/Quadria";

export class NuclearEngine extends Module{
    constructor(belongsToRace: RaceInterface, amount: Number = 1) {
        super();
        this.id = 6
        this.picture = './src/assets/images/altah_reactor.jpg'
        this.requiredTech = [new AlienTechnology()]
        this.name = 'Ядерный двигатель'
        this.costInBuildPoints = 200
        this.costInCR = 120
        this.costInIG = 0
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
            new Quadria(10),
        ]
        this.bonusParamsToShip = {
            energy: 0,
            cargo: 0,
            speedInSubspace: 0,
            speedInNormalSpace: 60
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