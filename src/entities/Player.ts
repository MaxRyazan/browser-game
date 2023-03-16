export class Player{
    id: Number
    login: String
    email: String
    password: String
    playerData: {
        race: {},
        playerMoney: {CR: Number, IG: Number},
        playerScience: Number,
        playerKnowledge: {learned: [], inLearnNow: {}},
        playerPlanets: {homeWorld: {}, inhabitedPlanets: []},
        playerShips: [],
    }
}