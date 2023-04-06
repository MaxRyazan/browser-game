import {Race} from "../races/Race";
import {Planet} from "./Planet";
import {Technology} from "./Technology";

export class Player {
    id: Number
    login: String
    password: String
    email: String
    playerData: {
        race: Race,
        playerMoney: {CR: Number, IG: Number},
        playerScience: Number,
        playerKnowledge: {learned:[], inLearnNow: {}},
        playerPlanets: {homeWorld: Planet, inhabitedPlanets: []}
        playerShips: []
    }

    constructor(id: Number, login: String, password: String, email: String, homeWorldName: String,  race: Race) {
        this.id = id
        this.login = login
        this.password = password
        this.email = email
        this.playerData = {
            race: race,
            playerMoney: {CR: 10000, IG: 25000},
            playerScience: 10,
            playerKnowledge: {learned:[], inLearnNow: {tech: {}}},
            playerPlanets: {homeWorld: new Planet(2, homeWorldName, race.id !== 2), inhabitedPlanets: []},
            playerShips: []
        }
    }
}