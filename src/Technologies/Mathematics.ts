import {Technology} from "../entities/Technology";
import variables from '../variables.js'

export class Mathematics  extends Technology {
    constructor() {
        super();
        this.id = 1
        this.name = 'Математика'
        this.difficultCoefficient = 0.25
        this.techLevel = 0
        this.cost = variables.oneHour + variables.oneHour * this.difficultCoefficient * this.techLevel
        this.willBeLearnedAt = Date.now() + this.cost
        this.requiredTechs = []
        this.bonusToModules = []
        this.bonusToBuildings = []
        this.bonusToShips = []
    }
}