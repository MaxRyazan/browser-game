import {PlanetarySystem} from "../entities/PlanetarySystem";
import {Planet} from "../entities/Planet";
import {Player} from "../entities/Player";
import {Humans} from "../races/Humans";
import {Mathematics} from "../Technologies/Mathematics";
import {Biology} from "../Technologies/Biology";
import {HigherMathematics} from "../Technologies/HigherMathematics";

export class FakeData{
    mathematics = new Mathematics()
    biology = new Biology()
    higherMathematics = new HigherMathematics()
    public planet_MERCURY =  new Planet(1, 'Меркурий', 1, 1, false, 190, {}, '');
    public planet_VENUS = new Planet(2, 'Венера', 1, 2, false, 280, {}, '');
    public planet_EARTH = new Planet(3, 'Земля', 1, 3, true, 310, {}, '');
    public solarSystem = new PlanetarySystem
        (
            1,
            'Солнечная система',
            {x: 10, y: 25},
            3,
            [this.planet_MERCURY, this.planet_VENUS, this.planet_EARTH]
        )

    public player = new Player(
        1, 'gecaHTHuk', 'email@email.ru', 'password',
        {
            race : Humans,
            playerMoney: {CR: 10000, IG: 5000},
            playerScience: 100,
            playerKnowledge: {
                learned: [this.mathematics, this.biology],
                inLearnNow: this.higherMathematics
            },
            playerPlanets:{
                homeWorld: this.planet_EARTH,
                inhabitedPlanets: [this.planet_VENUS]
            },
            playerShips: []
        }
    )
}