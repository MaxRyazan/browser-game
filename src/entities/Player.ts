import {Planet} from "./Planet";
import {Ship} from "../ARCHIVE/Ship";

export class Player {
    constructor(
        public id: Number,
        public login: String,
        public email: String,
        public password: String,
        public playerData: {
            race: {},
            playerMoney: { CR: Number, IG: Number },
            playerScience: Number,
            playerKnowledge: { learned: {}, inLearnNow: {} },
            playerPlanets: { homeWorld: Planet, inhabitedPlanets: Planet[] },
            playerShips: Ship[],
        }
    ) {
        this.id = id
        this.login = login
        this.email = email
        this.password = password
        this.playerData = playerData
    }
}