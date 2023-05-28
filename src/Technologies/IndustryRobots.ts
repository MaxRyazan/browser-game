import {Technology} from "../entities/Technology";
import {Machinery} from "./Machinery";
import {PolymersPlant} from "../buildings/materials/PolymersPlant";

export class IndustryRobots  extends Technology {
    constructor() {
        super();
        this.id = 3
        this.name = 'Промышленные роботы'
        this.difficultCoefficient = 0.29
        this.techLevel = 0
        this.cost = 100 + 100 * this.difficultCoefficient * this.techLevel
        this.willBeLearnedAt = Date.now() + this.cost
        this.requiredTechs = [{technology: new Machinery(), techLevel: 10}]
        this.bonusToModules = []
        this.bonusToBuildings = [{
                bonusTo: [
                    new PolymersPlant()
                ],
                bonusSize: this.techLevel * 0.07
            }]
        this.bonusToShips = []
    }
}