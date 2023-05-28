import {Technology} from "../entities/Technology";

export class Machinery  extends Technology {
    constructor() {
        super();
        this.id = 2
        this.name = 'Машиностроение'
        this.difficultCoefficient = 0.15
        this.techLevel = 0
        this.cost = 75 + 75 * this.difficultCoefficient * this.techLevel
        this.willBeLearnedAt = Date.now() + this.cost
        this.requiredTechs = []
        this.bonusToModules = []
        this.bonusToBuildings = []
        this.bonusToShips = []
    }
}